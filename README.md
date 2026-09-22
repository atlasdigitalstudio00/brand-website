# Atlas Studio

Atlas Studio is a faceless digital brand for practical resources, guides, templates, tools, and educational content for modern digital work.

## Tech Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS 4
- Lucide React
- Framer Motion (available for restrained interaction work)

## Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

- `src/app` contains the App Router pages and global styles.
- `src/components` contains reusable layout, navigation, and UI components.
- `src/config` contains site and navigation configuration.
- `src/content` contains structured demo content grouped by domain.
- `src/lib` contains shared utilities.
- `src/types` contains shared TypeScript content types.

## Content Architecture

Later phases can replace the current demo content with:

- MDX for blog content in `src/content/blog`.
- Structured data for products in `src/content/products`.
- Structured data for resources in `src/content/resources`.

## Deployment

The project is intended for deployment through GitHub and Vercel. It has not been deployed yet.