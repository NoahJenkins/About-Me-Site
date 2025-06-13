# PWA Setup Guide

## 🎉 Your website is now a Progressive Web App (PWA)!

### What's been added:

1. **Web App Manifest** (`manifest.json`) - Defines app metadata and appearance
2. **Service Worker** (`sw.js`) - Enables offline functionality and caching
3. **PWA JavaScript** (`assets/js/pwa.js`) - Handles install prompts and offline status
4. **Icon Generation Script** (`generate-icons.sh`) - Creates required app icons
5. **Offline Page** (`offline.html`) - Fallback page when offline

### 🚀 Getting Started

#### Step 1: Generate App Icons
Run the icon generation script to create PWA-compliant icons:
```bash
./generate-icons.sh
```

If you don't have ImageMagick installed:
```bash
brew install imagemagick
```

#### Step 2: Test Locally
1. Serve your app from a local server (required for service workers):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using Live Server extension in VS Code
   ```

2. Open http://localhost:8000 in your browser

#### Step 3: Test PWA Features
1. Open Chrome DevTools
2. Go to **Application** tab
3. Check **Service Workers** section
4. Test **Add to Home Screen** functionality
5. Use **Lighthouse** tab to audit PWA compliance

### 📱 PWA Features Implemented

- ✅ **Installable** - Users can install your app on their device
- ✅ **Offline Support** - Cached content available without internet
- ✅ **Fast Loading** - Assets cached for quick loading
- ✅ **App-like Experience** - Standalone display mode
- ✅ **Install Prompt** - Smart install button appears when appropriate
- ✅ **Connection Status** - Shows online/offline notifications

### 🌐 Deployment

For full PWA functionality, deploy to a **HTTPS** server. Popular options:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### 🔧 Customization

#### Manifest Settings
Edit `manifest.json` to customize:
- App name and description
- Theme colors
- Display mode
- Orientation

#### Caching Strategy
Edit `sw.js` to modify:
- Cache name and version
- Files to cache
- Cache strategies (Cache First, Network First, etc.)

#### Install Prompt
Edit `assets/js/pwa.js` to customize:
- Install button appearance
- Install messaging
- User interaction triggers

### 📊 Testing Checklist

- [ ] Service worker registers successfully
- [ ] Manifest loads without errors
- [ ] App icons display correctly
- [ ] Install prompt appears (on supported browsers)
- [ ] App works offline
- [ ] Lighthouse PWA score > 80

### 🐛 Troubleshooting

**Service Worker not registering?**
- Ensure serving over HTTPS (or localhost)
- Check browser console for errors
- Verify sw.js is in root directory

**Install prompt not showing?**
- Try incognito/private browsing mode
- Clear browser data and reload
- Check if PWA criteria are met in DevTools

**Offline mode not working?**
- Check if files are cached in DevTools > Application > Storage
- Verify service worker is active
- Test by disabling network in DevTools

### 📝 Next Steps

1. **Generate and add icons** using the provided script
2. **Test on mobile devices** for full experience
3. **Deploy to HTTPS server** for production use
4. **Monitor performance** with Lighthouse audits
5. **Consider push notifications** for user engagement

Your portfolio is now ready to provide a native app-like experience to your visitors! 🎊
