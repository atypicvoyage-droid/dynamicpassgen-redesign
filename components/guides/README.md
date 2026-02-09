# Guide Components Library

Reusable components for building SEO-optimized, maintainable guide articles.

## Structure

```
components/guides/
├── templates/
│   └── StandardGuide.jsx    # Main guide layout wrapper
└── guide-blocks/
    ├── Hero.jsx             # Guide header with title, image, badges
    ├── Section.jsx          # Content section wrapper
    ├── AnswerBlock.jsx      # Featured answer box (for snippets)
    ├── CalloutBox.jsx       # Info/warning/tip boxes
    ├── CodeBlock.jsx        # Syntax-highlighted code
    ├── StatBox.jsx          # Highlighted statistics
    └── ComparisonTable.jsx  # Before/after comparison tables
```

## Usage Example

```jsx
import StandardGuide from '@/components/guides/templates/StandardGuide'
import { Hero, Section, AnswerBlock, CalloutBox } from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export default function MyGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Guide Title"
        subtitle="Comprehensive guide description"
        category="compliance"
        difficulty="Advanced"
        readTime={18}
      />

      <AnswerBlock question="What is this guide about?">
        Quick 40-60 word answer optimized for featured snippets.
      </AnswerBlock>

      <Section id="introduction">
        <h2>Introduction</h2>
        <p>Your content here...</p>
        
        <CalloutBox type="info" title="Important Note">
          <p>Helpful information for readers.</p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
```

## Component Props

### StandardGuide
- `metadata` (object): Guide metadata (title, description, category, etc.)
- `children` (ReactNode): Guide content

### Hero
- `title` (string): Guide title
- `subtitle` (string, optional): Subtitle/description
- `image` (string, optional): Hero image URL
- `category` (string, optional): Category badge
- `difficulty` (string, optional): Difficulty badge
- `readTime` (number, optional): Read time in minutes

### Section
- `id` (string): Section anchor ID for TOC
- `children` (ReactNode): Section content
- `className` (string, optional): Additional CSS classes

### AnswerBlock
- `question` (string, optional): Question heading
- `children` (ReactNode): Answer content

### CalloutBox
- `type` (string): 'info' | 'warning' | 'success' | 'error' | 'tip'
- `title` (string, optional): Box title
- `children` (ReactNode): Box content

### CodeBlock
- `code` (string): Code to display
- `language` (string): Programming language (default: 'javascript')
- `filename` (string, optional): Filename to display
- `showLineNumbers` (boolean, optional): Show line numbers

### StatBox
- `value` (string): Main statistic value
- `label` (string): Statistic description
- `source` (string, optional): Data source
- `trend` (string, optional): Trend indicator
- `icon` (string, optional): Icon/emoji

### ComparisonTable
- `title` (string, optional): Table title
- `headers` (array, optional): Column headers (default: ['Before', 'After'])
- `data` (array): Array of comparison objects with 'old' and 'new' properties

## SEO Features

- Automatic breadcrumb navigation with schema markup
- Dynamic table of contents generation
- Semantic HTML structure
- Answer blocks optimized for featured snippets
- Proper heading hierarchy (H2-H6)
- Internal linking support

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Performance

- Client-side rendering for interactive features
- Lazy loading for below-the-fold content
- Optimized CSS with scoped styles
- Minimal JavaScript bundle
