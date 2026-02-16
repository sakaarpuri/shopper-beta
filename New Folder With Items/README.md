# ShopperAgent MVP v2

Private beta with new flow:
1. Demo cart shows on load (example)
2. "What are you looking for?" → Quick shop modal
3. Select categories, sizes, styles, budget
4. "Shop For Me" → Animation runs → Real cart generated
5. "Create your profile" → Save long-term preferences

## Features

- **Demo Cart**: Shows immediately as example
- **Quick Shop**: Fast path to get a cart
- **Categories**: Tops, Bottoms, Shoes, Outerwear, Accessories, Complete Look
- **Sizes**: Per category selection
- **Vision Matching**: AI scores products by style
- **Phase 1 Badge**: Shows on generate button

## Password

Default: `shopper2026`
Change in `app.js` line 2

## Deploy to Netlify

1. Drag all 3 files to Netlify
2. Done!

## Files

- `index.html` - Main page
- `products.js` - Product catalog with vision scores
- `app.js` - All functionality
