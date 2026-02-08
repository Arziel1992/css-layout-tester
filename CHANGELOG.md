# Changelog

All notable changes to CSS Layout Tester will be documented in this file.

## [v2026-02-07-2308] 2026-02-07 - 23:08

### Changed

- **BREAKING**: Replaced Tailwind CDN with production-ready CLI build
- Enhanced i18n system to dynamically apply translations to DOM elements
- Added data-i18n attributes to navigation elements for proper Spanish translation
- Consolidated all styles into src/input.css for centralized theming
- Removed inline styles from flexbox/flex.html and grid/grid.html

### Added

- `npm run build` compiles Tailwind CSS to assets/css/main.css
- `npm run watch` for development with hot reload

## [v2026-02-07-2251] 2026-02-07 - 22:51

### Changed

- Flexbox Tester: Converted all property controls to dropdowns (except units)
- Flexbox Tester: Added info icons with modal tooltips explaining each property
- Grid Tester: Converted all property controls to dropdowns (except units)
- Grid Tester: Added info icons with modal tooltips explaining each property
- Unified navbar style across homepage and testers
- Updated footer with GitHub repository link and Swinburne attribution
- Updated i18n translations (en, es) with Swinburne attribution
- Added shared JS utilities in assets/js/main.js for separation of concerns

## [v2026-02-07-1930] 2026-02-07 - 19:30

### Added

- Complete UI/UX overhaul with Flowbite design system
- Brand identity with green (#028f00) color scheme
- Internationalization (i18n) support for English and Spanish
- Language toggle dropdown in navigation
- Flexbox Tester enhancements:
  - All properties as editable text inputs
  - Independent row-gap and column-gap controls
  - Axis visualization toggles (X/Y grid lines)
  - Preset layouts library
  - Drag-and-drop item reordering
  - Raw HTML + CSS code export
- Grid Tester enhancements:
  - All properties as editable text inputs
  - Subgrid support with browser compatibility notice
  - Masonry layout support (experimental)
  - Named grid lines input
  - Visual grid line overlay toggle
  - Preset grid layouts gallery
  - Raw HTML + CSS code export
- SEO meta tags and Open Graph support
- WCAG accessibility compliance
- Project logo and favicon assets

### Changed

- Migrated from vanilla CSS to Tailwind CSS + Flowbite
- Improved responsive design for mobile devices
- Enhanced code preview with syntax highlighting
