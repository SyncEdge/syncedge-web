# SyncEdge - Company Website

A professional, modern company website for SyncEdge, showcasing end-to-end solutions for solutioning, development, and deployment.

## About SyncEdge

SyncEdge provides comprehensive end-to-end solutions for modern businesses:

- **Solutioning**: Strategic planning and architecture design
- **Development**: Expert development with cutting-edge technologies
- **Deployment**: Seamless deployment and continuous delivery

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with modern features

## Features

- ✨ Modern, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🚀 Optimized performance
- ♿ Accessible navigation
- 📧 Contact form
- 🎯 SEO optimized

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Services.tsx     # Services showcase
│   ├── About.tsx        # Why choose us section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
├── App.tsx              # Main app component
├── index.css            # Global styles
└── main.tsx            # App entry point
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Tools

This project includes comprehensive development tools:

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vitest** - Unit testing
- **Husky** - Git hooks
- **lint-staged** - Pre-commit checks

See [SETUP.md](./SETUP.md) for detailed documentation on development tools and workflows.

## Available Scripts

| Command                 | Description               |
| ----------------------- | ------------------------- |
| `npm run dev`           | Start development server  |
| `npm run build`         | Build for production      |
| `npm run preview`       | Preview production build  |
| `npm run lint`          | Run ESLint                |
| `npm run lint:fix`      | Fix ESLint issues         |
| `npm run format`        | Format code with Prettier |
| `npm run type-check`    | Check TypeScript types    |
| `npm run test`          | Run tests                 |
| `npm run test:ui`       | Run tests with UI         |
| `npm run test:coverage` | Generate coverage report  |

## Sections

### Navigation

- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Gradient logo design

### Hero

- Eye-catching headline with gradient text
- Dual CTAs (primary and secondary)
- Animated floating service cards

### Services

- Three main services with detailed features
- Icon-based visual design
- Hover effects and animations

### About

- Four key value propositions
- Statistics showcase
- Gradient background design

### Contact

- Responsive contact form
- Contact information display
- Form validation

### Footer

- Company information
- Navigation links
- Social media links
- Legal links

## Customization

### Colors

The primary gradient colors can be modified in the CSS files:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content

Update content in the respective component files:

- Company name: `Navigation.tsx`, `Footer.tsx`
- Services: `Services.tsx`
- Statistics: `About.tsx`
- Contact info: `Contact.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 SyncEdge. All rights reserved.
