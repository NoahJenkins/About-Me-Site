#!/bin/bash

# PWA Icon Generator Script
# This script helps generate the required icon sizes for your PWA

echo "🎨 PWA Icon Generator"
echo "===================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo "   Please install it using: brew install imagemagick"
    echo ""
    echo "   After installation, you can run this script to generate icons:"
    echo "   ./generate-icons.sh"
    echo ""
    echo "📝 Manual alternative:"
    echo "   You can manually create these icon sizes from images/icon.jpeg:"
    echo "   - icon-192.png (192x192)"
    echo "   - icon-512.png (512x512)"
    echo "   - apple-touch-icon.png (180x180)"
    echo ""
    exit 1
fi

# Source image
SOURCE_IMAGE="images/icon.jpeg"

if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "❌ Source image not found: $SOURCE_IMAGE"
    echo "   Please make sure the file exists and try again."
    exit 1
fi

echo "✅ Found source image: $SOURCE_IMAGE"
echo "🔄 Generating PWA icons..."

# Generate 192x192 icon
convert "$SOURCE_IMAGE" -resize 192x192 -quality 100 "images/icon-192.png"
echo "✅ Generated: images/icon-192.png"

# Generate 512x512 icon
convert "$SOURCE_IMAGE" -resize 512x512 -quality 100 "images/icon-512.png"
echo "✅ Generated: images/icon-512.png"

# Generate Apple Touch Icon
convert "$SOURCE_IMAGE" -resize 180x180 -quality 100 "images/apple-touch-icon.png"
echo "✅ Generated: images/apple-touch-icon.png"

# Generate favicon
convert "$SOURCE_IMAGE" -resize 32x32 -quality 100 "images/favicon-32.png"
echo "✅ Generated: images/favicon-32.png"

echo ""
echo "🎉 All icons generated successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Update your HTML to include the Apple Touch Icon"
echo "   2. Test your PWA using browser dev tools"
echo "   3. Deploy to a HTTPS server for full PWA functionality"
echo ""
