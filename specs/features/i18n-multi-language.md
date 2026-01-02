# Feature: i18n Multi-Language Support (Thai/English)

## User Story

**As a** website visitor,
**I want to** view the SyncEdge website in Thai or English,
**So that** I can understand the content in my preferred language.

## Acceptance Criteria

### AC1: Language Detection

**GIVEN** a user visits the website for the first time
**WHEN** the page loads
**THEN** the language is automatically detected from browser preferences (`navigator.language`)
**AND** if browser language is Thai (`th`, `th-TH`), display Thai content
**AND** if browser language is anything else, default to English

### AC2: Language Switching

**GIVEN** a user is viewing the website in any language
**WHEN** the user clicks the language switcher in the navigation
**THEN** all UI text, SEO metadata, and structured data update to the selected language
**AND** the page does not reload (client-side switch)
**AND** the selected language is persisted to localStorage

### AC3: Language Persistence

**GIVEN** a user has previously selected a language preference
**WHEN** the user returns to the website in a new session
**THEN** the website displays in the previously selected language
**AND** the localStorage preference takes priority over browser detection

### AC4: Complete Content Translation

**GIVEN** the website is displayed in any supported language
**WHEN** viewing any section of the website
**THEN** all text content is displayed in the selected language including:

- Navigation links and CTAs
- Hero section (headline, subheadline, buttons)
- Services section (titles, descriptions)
- Industries section (titles, descriptions)
- About section (all content)
- Process section (steps, descriptions)
- Tech Stack section (descriptions)
- Contact section (form labels, placeholders, button text)
- Footer (all links, copyright, company info)

### AC5: SEO Metadata Translation

**GIVEN** the website language is changed
**WHEN** the language switch occurs
**THEN** the following are updated dynamically:

- `<html lang="...">` attribute
- `<title>` tag
- `<meta name="description">` content
- Open Graph tags (`og:title`, `og:description`, `og:locale`)
- Twitter Card tags

### AC6: Structured Data Translation

**GIVEN** the website is displayed in Thai
**WHEN** viewing the page source
**THEN** Schema.org JSON-LD includes Thai translations for:

- `name` and `description` fields
- `slogan` field
- Service names and descriptions

## API Contract

**N/A - Frontend-Only Feature**

This is a purely frontend feature with no backend API requirements:

- Translations are bundled with the application (imported JSON files)
- Language preference is stored in browser localStorage
- No server-side language detection or persistence needed

All translation loading happens client-side via i18next's static resource imports.

## Technical Specification

### Dependencies

```json
{
  "dependencies": {
    "i18next": "^24.2.2",
    "react-i18next": "^15.4.1",
    "i18next-browser-languagedetector": "^8.0.4"
  }
}
```

### File Structure

```
src/
├── i18n/
│   ├── index.ts              # i18next configuration
│   └── locales/
│       ├── en/
│       │   ├── common.json    # Shared translations (nav, footer)
│       │   ├── hero.json      # Hero section
│       │   ├── services.json  # Services section
│       │   ├── industries.json
│       │   ├── about.json
│       │   ├── process.json
│       │   ├── techstack.json
│       │   ├── contact.json
│       │   └── seo.json       # SEO metadata
│       └── th/
│           ├── common.json
│           ├── hero.json
│           ├── services.json
│           ├── industries.json
│           ├── about.json
│           ├── process.json
│           ├── techstack.json
│           ├── contact.json
│           └── seo.json
├── components/
│   └── LanguageSwitcher.tsx   # New component
└── hooks/
    └── useSEO.ts              # New hook for dynamic SEO
```

### i18n Configuration

```typescript
// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
// ... other imports

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, hero: enHero, ... },
      th: { common: thCommon, hero: thHero, ... }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'th'],
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'syncedge-lang'
    },
    interpolation: {
      escapeValue: false
    }
  });
```

### LanguageSwitcher Component

Location: `src/components/LanguageSwitcher.tsx`

```typescript
interface LanguageSwitcherProps {
  className?: string
}

// Displays: "EN | TH" with active indicator
// On click: calls i18n.changeLanguage()
```

### Components to Modify

| Component      | Namespace  | Keys to Extract                                       |
| -------------- | ---------- | ----------------------------------------------------- |
| Navigation.tsx | common     | nav.services, nav.industries, nav.about, nav.getQuote |
| Hero.tsx       | hero       | title, subtitle, cta.primary, cta.secondary           |
| Services.tsx   | services   | title, subtitle, items[].title, items[].description   |
| Industries.tsx | industries | title, items[].name, items[].description              |
| About.tsx      | about      | title, description, stats, values                     |
| Process.tsx    | process    | title, steps[].title, steps[].description             |
| TechStack.tsx  | techstack  | title, categories[].name                              |
| Contact.tsx    | contact    | title, form.\*, submit, success, error                |
| Footer.tsx     | common     | footer.\*                                             |

## Translation Keys Structure

### common.json (en)

```json
{
  "nav": {
    "services": "Services",
    "industries": "Industries",
    "about": "About",
    "getQuote": "Get a Quote"
  },
  "footer": {
    "company": "SyncEdge Solution (Thailand) Co., Ltd.",
    "tagline": "Software That Solves Real Business Problems",
    "quickLinks": "Quick Links",
    "contact": "Contact",
    "copyright": "© {{year}} SyncEdge. All rights reserved."
  },
  "language": {
    "en": "EN",
    "th": "TH"
  }
}
```

### common.json (th)

```json
{
  "nav": {
    "services": "บริการ",
    "industries": "อุตสาหกรรม",
    "about": "เกี่ยวกับเรา",
    "getQuote": "ขอใบเสนอราคา"
  },
  "footer": {
    "company": "บริษัท ซิงค์เอดจ์ โซลูชั่น (ประเทศไทย) จำกัด",
    "tagline": "ซอฟต์แวร์ที่แก้ปัญหาธุรกิจจริง",
    "quickLinks": "ลิงก์ด่วน",
    "contact": "ติดต่อเรา",
    "copyright": "© {{year}} SyncEdge สงวนลิขสิทธิ์"
  },
  "language": {
    "en": "EN",
    "th": "ไทย"
  }
}
```

### seo.json (en)

```json
{
  "title": "Software Development Bangkok | Custom Business Solutions Thailand | SyncEdge",
  "description": "Bangkok-based software development for small businesses. Fixed-price custom solutions: booking systems, client portals, business automation. 6-12 week delivery. Thai team, English communication.",
  "og": {
    "title": "Software Development Bangkok | Custom Business Solutions Thailand",
    "description": "Bangkok-based software development for small businesses. Fixed-price custom solutions."
  }
}
```

### seo.json (th)

```json
{
  "title": "รับพัฒนาซอฟต์แวร์ กรุงเทพ | โซลูชั่นธุรกิจ ประเทศไทย | SyncEdge",
  "description": "บริการพัฒนาซอฟต์แวร์ในกรุงเทพฯ สำหรับธุรกิจขนาดเล็ก ราคาคงที่ ระบบจอง พอร์ทัลลูกค้า ระบบอัตโนมัติ ส่งมอบใน 6-12 สัปดาห์",
  "og": {
    "title": "รับพัฒนาซอฟต์แวร์ กรุงเทพ | โซลูชั่นธุรกิจ ประเทศไทย",
    "description": "บริการพัฒนาซอฟต์แวร์ในกรุงเทพฯ สำหรับธุรกิจขนาดเล็ก ราคาคงที่"
  }
}
```

## Edge Cases

| #   | Scenario                                       | Expected Behavior                                                        |
| --- | ---------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | Browser language is `th-TH` (regional variant) | Should match and display Thai                                            |
| 2   | Browser language is unsupported (e.g., `ja`)   | Default to English                                                       |
| 3   | localStorage has invalid/corrupted value       | Clear and fall back to browser detection                                 |
| 4   | User rapidly switches languages                | Debounce updates, no race conditions                                     |
| 5   | Translation key is missing                     | Display English fallback, log warning in dev                             |
| 6   | User has JavaScript disabled                   | Display English (hardcoded in HTML as base)                              |
| 7   | SEO crawler visits the page                    | Serve content based on Accept-Language header (future SSR consideration) |
| 8   | User clears localStorage                       | Revert to browser language detection on next visit                       |

## UI/UX Specification

### Language Switcher Design

```
┌─────────────────────────────────────────────┐
│ Desktop (in Navigation, right side):        │
│                                             │
│ [Services] [Industries] [About] [Get Quote] │
│                                    EN | TH  │
│                                    ──       │
│                              (underline = active)
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Mobile (in hamburger menu, bottom):         │
│                                             │
│ Services                                    │
│ Industries                                  │
│ About                                       │
│ Get a Quote                                 │
│ ─────────────────────                       │
│ 🌐 EN | TH                                  │
└─────────────────────────────────────────────┘
```

### Interaction States

- **Hover**: Underline on inactive language
- **Active**: Bold + underline on current language
- **Click**: Instant language switch with smooth text transition
- **Accessibility**: `aria-label="Switch language to Thai"`, `role="button"`

## Testing Requirements

### Unit Tests

| Test                        | Description                               |
| --------------------------- | ----------------------------------------- |
| `i18n.test.ts`              | i18next initializes with correct config   |
| `i18n.test.ts`              | Language detection from navigator works   |
| `i18n.test.ts`              | localStorage persistence works            |
| `LanguageSwitcher.test.tsx` | Renders correct active state              |
| `LanguageSwitcher.test.tsx` | Changes language on click                 |
| `useSEO.test.ts`            | Updates document title on language change |

### Integration Tests

| Test                                       | Description              |
| ------------------------------------------ | ------------------------ |
| All components render Thai translations    | Verify all text updates  |
| All components render English translations | Verify all text updates  |
| Language persists across page reload       | localStorage integration |

### E2E Tests

| Test                      | Description                                     |
| ------------------------- | ----------------------------------------------- |
| Full language switch flow | Click switcher, verify all sections update      |
| Browser detection         | Set navigator.language, verify correct language |
| Persistence               | Switch language, reload, verify persistence     |

## Related Features

| Feature          | Relationship                               |
| ---------------- | ------------------------------------------ |
| SEO Optimization | i18n affects meta tags and structured data |
| Contact Form     | Form validation messages need translation  |
| Future: Blog     | Will need i18n-compatible content system   |

## Shared Resources

- `index.html` - Will need dynamic SEO injection
- All 10 existing components - Will import `useTranslation`
- `main.tsx` - Will need i18n provider wrapper

## Out of Scope

- **URL-based routing** (`/th/`, `/en/`) - Not implementing for V1
- **Server-side rendering** for SEO - Current SPA architecture
- **Third language support** - Only Thai and English for now
- **RTL language support** - Not needed for Thai/English
- **Date/number/currency formatting** - Can be added later with i18next plugins
- **Translation management UI** - Translations managed in code
- **Machine translation** - All translations manually provided

## Implementation Order

1. Install dependencies (`i18next`, `react-i18next`, `i18next-browser-languagedetector`)
2. Create `src/i18n/index.ts` configuration
3. Create all translation JSON files (en + th)
4. Create `LanguageSwitcher` component
5. Wrap `App.tsx` with i18n provider
6. Update `Navigation.tsx` to include LanguageSwitcher
7. Update all components to use `useTranslation` hook
8. Create `useSEO` hook for dynamic metadata
9. Write unit tests
10. Write E2E tests

## Success Metrics

- All 10 components display correct translations
- Language switch completes in < 100ms
- No layout shift during language change
- localStorage correctly persists preference
- Browser detection works for `th`, `th-TH`, `en`, `en-US`, etc.
