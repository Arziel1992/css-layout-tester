# CSS Layout Tester

> Interactive tools for learning and mastering CSS Grid and Flexbox layouts with real-time visual feedback.

![CSS Layout Tester](assets/logo.svg)

## Project Identity

CSS Layout Tester is a browser-based, interactive learning tool designed to help developers understand and experiment with modern CSS layout systems. The application provides real-time visual feedback as users adjust properties, generating clean, copy-ready code.

### Architecture

```
css-layout-tester/
├── index.html              # Landing page with feature overview
├── flexbox/
│   ├── flex.html           # Flexbox tester interface
│   ├── flex.js             # Flexbox logic and controls
│   └── flex.css            # Flexbox-specific styles
├── grid/
│   ├── grid.html           # Grid tester interface  
│   ├── grid.js             # Grid logic and controls
│   └── grid.css            # Grid-specific styles
├── assets/
│   ├── css/
│   │   ├── main.css        # Compiled Tailwind + Flowbite styles
│   │   └── variables.css   # CSS custom properties
│   ├── logo.svg            # Application logo
│   └── favicon.svg         # Browser favicon
├── locales/
│   ├── en.json             # English translations
│   └── es.json             # Spanish translations
└── package.json            # Project manifest
```

## Objectives

1. **Educational**: Make CSS layout concepts accessible through hands-on experimentation
2. **Practical**: Generate production-ready code snippets for real projects
3. **Modern**: Support cutting-edge CSS features including Subgrid and Masonry layouts

## Features

### Flexbox Tester

- ✅ All parent container properties (display, flex-direction, flex-wrap, justify-content, align-items, align-content, gap)
- ✅ All child item properties (order, flex-grow, flex-shrink, flex-basis, align-self)
- ✅ Independent row-gap and column-gap controls
- ✅ Axis visualization toggles (main/cross axis indicators)
- ✅ Preset layout gallery (Holy Grail, Navbar, Sidebar, Cards)
- ✅ Drag-and-drop item reordering
- ✅ Raw HTML + CSS code export

### Grid Tester

- ✅ All parent container properties (grid-template-columns/rows, grid-template-areas, gap, justify/align-items/content, grid-auto-flow)
- ✅ All child item properties (grid-column, grid-row, justify/align-self, grid-area, order)
- ✅ Named grid lines support
- ✅ Visual grid line overlay toggle
- ✅ Subgrid support ([browser support](https://caniuse.com/css-subgrid))
- ✅ Masonry layout (experimental) ([browser support](https://caniuse.com/mdn-css_properties_grid-template-rows_masonry))
- ✅ Preset layout gallery (12-column, Dashboard, Gallery)
- ✅ Raw HTML + CSS code export

### General

- 🌐 Internationalization (English, Spanish)
- 🎨 Flowbite design system with Tailwind CSS
- ♿ WCAG accessibility compliance
- 📱 Fully responsive design
- 🔍 SEO optimized

## Usage

### Development Server

```bash
# Install dependencies
npm install

# Start development server
npx serve .
```

Navigate to `http://localhost:3000` in your browser.

### Building Styles

```bash
npm run build
```

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Flexbox | ✅ 29+ | ✅ 28+ | ✅ 9+ | ✅ 12+ |
| Grid | ✅ 57+ | ✅ 52+ | ✅ 10.1+ | ✅ 16+ |
| Subgrid | ✅ 117+ | ✅ 71+ | ✅ 16+ | ✅ 117+ |
| Masonry | 🧪 Canary | 🧪 77+ (flag) | ❌ | 🧪 Canary |

## License

MIT License - See [LICENSE](LICENSE) for details.

---

**Version:** v2026-02-07-2308
