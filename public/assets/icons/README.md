# FitWeek Icons

This folder contains Icons8 icons used throughout the FitWeek application.

## Naming Convention

All icons should follow the naming pattern: `{feature-slug}.svg` or `{feature-slug}.png`

### Required Icons

| Feature | Filename | Description |
|---------|----------|-------------|
| Smart Wardrobe | `sm-wardrobe.svg` | Wardrobe/closet icon for the smart wardrobe feature |
| Weather-Based | `weather.svg` | Sun and cloud icon for weather-based planning |
| Weekly Planning | `calendar.svg` | Calendar icon for weekly planning feature |
| AI Suggestions | `ai-suggestions.svg` | AI/sparkle icon for smart outfit recommendations |

### Additional Icons (How It Works Section)

| Feature | Filename | Description |
|---------|----------|-------------|
| Add Clothes | `add-clothes.svg` | Icon showing adding items to wardrobe |
| Check Weather | `check-weather.svg` | Weather checking/forecast icon |
| Plan Week | `plan-week.svg` | Weekly planner icon with AI suggestions |

### Logo and Favicon

| Asset | Filename | Description |
|-------|----------|-------------|
| Logo | `logo.svg` | Main FitWeek logo |
| Logo Icon | `logo-icon.svg` | Icon-only version of logo (for small sizes) |
| Favicon | `favicon.ico` | Browser favicon (place in `/public/` root) |
| Favicon SVG | `favicon.svg` | SVG version of favicon |

## Recommended Icons8 Collections

For consistency, we recommend using icons from these Icons8 collections:
- **Icons8 Fluency** - Colorful, modern 3D-style icons
- **Icons8 3D Fluency** - 3D rendered icons
- **Icons8 Color** - Flat colorful icons

## Icon Specifications

- **Size**: 48x48px recommended (will be scaled in the app)
- **Format**: SVG preferred, PNG acceptable
- **Colors**: Should complement the brand palette:
  - Primary: `#7c3aed` (violet-600)
  - Secondary: `#6366f1` (indigo-500)
  - Accent: `#fbbf24` (amber-400)

## Fallback Behavior

If an Icons8 icon file is not found, the application will display a built-in SVG fallback icon. Once you add the Icons8 icon with the correct filename, it will automatically be used instead.

## How to Add Icons

1. Download your Icons8 icon (SVG or PNG format)
2. Rename it according to the naming convention above
3. Place it in this folder (`/public/assets/icons/`)
4. The icon will automatically be used in the application
