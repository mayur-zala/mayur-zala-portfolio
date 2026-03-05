# Mayur Zala Portfolio

A modern, responsive portfolio website built with **Angular 19** featuring a professional design with dark/light mode support.

## Features

✨ **Modern Design** - Clean, professional aesthetics with smooth animations
🌓 **Dark/Light Mode** - Toggle between themes with theme persistence in localStorage
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
⚡ **Performance Optimized** - Built with Angular's standalone components for optimal performance
🎨 **Customizable** - Easy to modify colors, content, and layout
📊 **Portfolio Sections**:
  - Hero Section with call-to-actions
  - Services Showcase (6 service offerings)
  - Work/Portfolio Gallery (4 projects)
  - About Section with tech stack and journey timeline
  - Process Workflow (4-step process)
  - Contact Section

## Tech Stack

- **Angular 19** - Latest Angular framework with standalone components
- **TypeScript** - Strongly typed JavaScript
- **CSS3** - Advanced styling with CSS custom properties for theming
- **Responsive Design** - Mobile-first approach

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/          # Navigation with theme toggle
│   │   ├── hero/               # Hero section
│   │   ├── services/           # Services grid
│   │   ├── work/               # Portfolio/work section
│   │   ├── about/              # About section with tech stack
│   │   ├── process/            # Process workflow
│   │   └── contact/            # Contact section
│   ├── services/
│   │   ├── theme.service.ts    # Theme management (dark/light mode)
│   │   └── portfolio-data.service.ts  # Portfolio content data
│   └── app.ts                  # Root component
├── styles.css                  # Global styles and theme variables
└── index.html                  # Entry HTML file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify source files.

## Dark/Light Mode

The portfolio features a built-in theme system:

- **Theme Toggle**: Click the sun/moon icon in the navigation bar to switch themes
- **Theme Persistence**: Your theme preference is saved to localStorage and restored on next visit
- **System Preference Detection**: If no saved preference exists, the theme defaults to your system preference
- **Smooth Transitions**: Theme changes animate smoothly across all elements

### Customizing Themes

Edit the CSS variables in `src/styles.css` to customize the color scheme:

**Dark Theme** (default):
```css
:root[data-theme='dark'] {
  --bg: #080b10;
  --accent: #00e5a0;
  /* ... more variables */
}
```

**Light Theme**:
```css
:root[data-theme='light'] {
  --bg: #ffffff;
  --accent: #00c878;
  /* ... more variables */
}
```

## Customization

### Update Content

Edit `src/app/services/portfolio-data.service.ts` to update:
- Services offered
- Portfolio projects
- Tech stack
- Experience/timeline
- Process steps

### Update Styling

- Global styles: `src/styles.css`
- Component-specific styles: Each component has inline styles in its TypeScript file
- Theme colors: Update CSS variables in `src/styles.css`

### Update Navigation Links

Edit `src/app/components/navigation/navigation.component.ts` to modify:
- Navigation links
- CTA button
- Logo text

## Building

```bash
# Build for production
npm run build
```

Build artifacts are stored in the `dist/` directory.

## Adding New Sections

To add a new section:

1. Create a new component:
```bash
ng generate component components/your-section-name
```

2. Add styles using CSS variables (for theme compatibility):
```typescript
background: var(--surface);
color: var(--text);
```

3. Import and add the component to `app.ts`

## Performance

The portfolio is optimized for performance:
- Standalone Angular components (no NgModule overhead)
- CSS custom properties for efficient theme switching
- Minimal JavaScript bundle size (~65KB gzipped)
- Semantic HTML for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Fonts Used

- **Clash Display** - Headings
- **Satoshi** - Body text
- **JetBrains Mono** - Code and labels

These are loaded from Google Fonts.

## License

Open source - feel free to use and modify as needed.

## Development

For more information on development, testing, and deployment, see the original Angular CLI documentation below.

---

## Angular CLI Documentation

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

### Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

## Testing

### Running Unit Tests

```bash
ng test
```

Uses Vitest test runner.

### Running End-to-End Tests

```bash
ng e2e
```

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

