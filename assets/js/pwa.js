// PWA Install Prompt Handler
let deferredPrompt;
let installButton;

// Create install button
function createInstallButton() {
  installButton = document.createElement('button');
  installButton.innerHTML = '<i class="fas fa-download"></i> Install App';
  installButton.className = 'install-button';
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 1000;
    transition: all 0.3s ease;
    display: none;
  `;
  
  installButton.addEventListener('mouseenter', () => {
    installButton.style.transform = 'translateY(-2px)';
    installButton.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
  });
  
  installButton.addEventListener('mouseleave', () => {
    installButton.style.transform = 'translateY(0)';
    installButton.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
  });
  
  document.body.appendChild(installButton);
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA: beforeinstallprompt event fired');
  
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Create and show install button
  if (!installButton) {
    createInstallButton();
  }
  installButton.style.display = 'block';
  
  // Handle install button click
  installButton.addEventListener('click', async () => {
    // Hide the install button
    installButton.style.display = 'none';
    
    // Show the install prompt
    if (deferredPrompt) {
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA: User response to the install prompt: ${outcome}`);
      
      // Clear the deferredPrompt
      deferredPrompt = null;
    }
  });
});

// Listen for app installed event
window.addEventListener('appinstalled', (evt) => {
  console.log('PWA: App was installed successfully');
  
  // Hide install button if it exists
  if (installButton) {
    installButton.style.display = 'none';
  }
  
  // Optional: Show a thank you message
  showInstallSuccessMessage();
});

// Show success message after installation
function showInstallSuccessMessage() {
  const message = document.createElement('div');
  message.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 1001;
      font-family: inherit;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    ">
      <i class="fas fa-check-circle"></i> App installed successfully!
    </div>
  `;
  
  document.body.appendChild(message);
  
  // Remove message after 3 seconds
  setTimeout(() => {
    if (message.parentNode) {
      message.parentNode.removeChild(message);
    }
  }, 3000);
}

// Check if app is running in standalone mode
function checkIfPWA() {
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
    console.log('PWA: App is running in standalone mode');
    document.body.classList.add('pwa-mode');
    
    // Hide install button if app is already installed
    if (installButton) {
      installButton.style.display = 'none';
    }
  }
}

// Initialize PWA features
document.addEventListener('DOMContentLoaded', () => {
  checkIfPWA();
  
  // Add PWA-specific styles
  const pwaStyles = document.createElement('style');
  pwaStyles.textContent = `
    .pwa-mode {
      /* Add any PWA-specific styles here */
    }
    
    @media (display-mode: standalone) {
      /* Styles for when app is in standalone mode */
      body {
        user-select: none; /* Prevent text selection for app-like feel */
      }
    }
  `;
  document.head.appendChild(pwaStyles);
});

// Handle online/offline status
window.addEventListener('online', () => {
  console.log('PWA: App is back online');
  showConnectionStatus('online');
});

window.addEventListener('offline', () => {
  console.log('PWA: App is offline');
  showConnectionStatus('offline');
});

function showConnectionStatus(status) {
  const statusMessage = document.createElement('div');
  const isOnline = status === 'online';
  
  statusMessage.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: ${isOnline ? '#4CAF50' : '#f44336'};
      color: white;
      padding: 10px;
      text-align: center;
      z-index: 1002;
      font-family: inherit;
      font-size: 14px;
    ">
      <i class="fas fa-${isOnline ? 'wifi' : 'wifi-slash'}"></i> 
      ${isOnline ? 'Back online' : 'You are offline - cached content available'}
    </div>
  `;
  
  document.body.appendChild(statusMessage);
  
  // Remove message after 3 seconds
  setTimeout(() => {
    if (statusMessage.parentNode) {
      statusMessage.parentNode.removeChild(statusMessage);
    }
  }, 3000);
}
