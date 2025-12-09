# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kommuna.se is a static website for sharing digital and AI services between Swedish municipalities (Sundsvall, Nordanstig, Hudiksvall, Ljusdal, Ånge). The site is built with vanilla HTML, CSS, and JavaScript - no build tools or frameworks.

## Development

**Local preview:** Open any HTML file directly in a browser, or use a local server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

**Deployment:** Static files hosted on GitHub Pages. Pretty URLs work via directory structure with index.html files.

## Architecture

### URL Structure (Pretty URLs)
```
/                    → index.html
/om-kommuna          → om-kommuna/index.html
/dokumentation       → dokumentation/index.html
/tjanster/eneo       → tjanster/eneo/index.html
```

All internal links use **relative paths** (e.g., `../om-kommuna/`, `./tjanster/eneo/`) to support GitHub Pages deployment under a repository subpath. New service pages go under `tjanster/[service-name]/`.

### CSS Architecture
- **Mobile First** with breakpoints at 640px and 1024px
- CSS custom properties (design tokens) in `:root` for colors, spacing, typography
- WCAG 2.1 AA compliant color combinations
- Minimum 44px touch targets for interactive elements

### JavaScript Modules (js/main.js)
- Mobile navigation toggle with focus trapping
- Modal dialogs with ARIA attributes and keyboard navigation
- Tab component for documentation page (arrow keys, Home/End support)
- Screen reader announcements via live region
- Respects `prefers-reduced-motion`

### Service Data (js/services-data.js)
Service metadata stored in `window.servicesData` object. Used to populate modals on the homepage. Structure:
```javascript
window.servicesData = {
    'service-id': {
        title: 'Service Name',
        description: 'Multi-paragraph description...',
        targets: ['Medarbetare', 'Invånare'],
        sectors: ['Sector names'],
        techRequirements: ['Requirement list']
    }
}
```

## Adding New Services

1. Add card to `index.html` services grid
2. For modal-only services: add `data-service="service-id"` to button and add entry to `js/services-data.js`
3. For dedicated page services: create `tjanster/[name]/index.html` and link directly (see Eneo as template)
4. Asset paths from service pages use `../../css/style.css` and `../../js/main.js`

## Language

All content is in Swedish. UI labels, ARIA attributes, and screen reader announcements use Swedish text.
