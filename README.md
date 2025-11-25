# SiuneX - Integrated Solutions

A premium website for SiuneX, showcasing integrated excellence in Software Development, Construction Management, Interior Design, and Renewable Energy.

## Features

- Modern, elegant design with premium aesthetics
- Responsive layout optimized for all devices
- Interactive AI chat widget powered by Google Gemini
- Project portfolio showcase
- Contact form integration

## Setup

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Important for Deployment:**
When deploying to production (Vercel, Netlify, etc.), make sure to add the `GEMINI_API_KEY` environment variable in your hosting platform's settings:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment Variables
- **Other platforms**: Check their documentation for environment variable configuration

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── ChatWidget.tsx  # AI chat widget
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation
│   ├── Projects.tsx    # Projects showcase
│   └── Services.tsx    # Services section
├── services/           # API services
│   └── geminiService.ts # Gemini AI integration
├── assets/             # Static assets
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Gemini AI** - Chat functionality
- **Lucide React** - Icons

## Deployment

This project is configured for easy deployment to:

- Vercel (recommended)
- Netlify
- Any static hosting platform

**Remember to set your environment variables in your hosting platform!**

## License

© 2024 SiuneX. All rights reserved.
