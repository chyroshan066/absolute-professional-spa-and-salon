# Absolute Professional Spa & Salon Website

A modern, responsive Spa & Salon website for Absolute Professional Spa & Salon, built with Next.js and TypeScript. It features service showcases, treatment highlights, appointment booking, and customer engagement tools—delivering a premium wellness and beauty experience with a professional, elegant interface.

## 🍽️ About

Absolute Professional Spa & Salon is a premier wellness and beauty destination designed to offer clients a refined and relaxing experience. The website reflects a calm, elegant aesthetic with intuitive navigation, showcasing our complete range of spa therapies, and professional treatments. Every detail is crafted to promote relaxation, confidence, and holistic well-being.

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Online Appointments** - Easy contact us section with form validation
- **Menu Showcase** - Beautiful presentation of spa services
- **Contact Information** - Easy-to-find location, hours, and contact details
- **Performance Optimized** - Fast loading times and smooth user experience
- **SEO Friendly** - Optimized for search engines and local discovery

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS / Custom CSS
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form with validation
- **Performance**: Image optimization and lazy loading
- **Deployment**: Vercel with custom domain support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd <project_name>
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 🏗️ Project Structure

```
absolute-professional-spa-and-salon/
├── .github/
├── public/
│   ├── fonts/
│   │   ├── flaticon/
│   │   │   ├── Flaticon.eot
│   │   │   ├── ...
│   │   │   └── Flaticon.woff
│   │   ├── ...
│   │   └── prata/
│   │       └── Prata-Regular.woff2
│   ├── images/
│   │   ├── gallery/
│   │   ├── ...
│   │   └── preview.webp
│   ├── js/
│   │   ├── aos.js/
│   │   ├── ...
│   │   └── scrollax.min.js
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── .....
│   │   └── (pages)
│   ├── components/
│   │   ├── utility/
│   │   │   ├── Button/
│   │   │   ├── ....
│   │   │   └── TitleHeader.tsx
│   │   ├── Alert/
│   │   ├── ...
│   │   └── Loader.tsx
│   ├── constants/
│   │   ├── contact-links.ts
│   │   ├── ...
│   │   └── treatments.ts
│   ├── hooks/
│   │   ├── useAlert.ts
│   │   ├── useFormSubmission.ts
│   │   └── useOwlCarousel.ts
│   ├── styles/
│   │   ├── animate.css
│   │   ├── ...
│   │   └── owl.theme.default.min.css
│   ├── middlewares/
│   │   └── schema.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── jquery.d.ts
│   └── utils/
│       ├── clsx.ts
│       ├── ...
│       └── subscriptionData.ts
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── global.d.ts
├── LICENSE
└── README.md
```

## 🎨 Key Components

### Contact Form

- Form validation with error handling
- Real-time form feedback
- Mobile-optimized interface

### Service Display

- Categorized spa services

## 📱 Responsive Design

The website is fully responsive and tested on:

- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuration

### Custom Domain Setup

The website is configured for the custom domain `absoluteprofessionalspa.com.np`:

1. DNS records are configured for the domain
2. SSL certificates are automatically provisioned
3. www and non-www versions are handled

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Modular CSS styling
- **SEO**: Meta tags, structured data, robots and sitemap

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Check code quality:

```bash
npm run lint
npm run type-check
```

## 📈 SEO Features

- Meta tags
- Open Graph support
- Structured data for store information
- Local business schema markup
- Sitemap generation
- Robots

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments:

- **Production**: https://www.absoluteprofessionalspa.com.np/
- **Preview**: Automatic preview deployments for pull requests

### Manual Deployment

```bash
npm run build
npm run export  # if using static export
```

## 📞 Support & Maintenance

### Client Information

- **Spa**: Absolute Professional Spa & Salon
- **Domain**: absoluteprofessionalspa.com.np
- **Deployment**: Vercel

### Developer Contact

For technical support or website updates, contact the developer.

## 📝 License

This project is proprietary software developed specifically for Absolute Professional Spa & Salon.

---

**Built with ❤️ for Absolute Professional Spa & Salon**

_For any questions or support regarding this website, contact **[chyroshan066](https://github.com/chyroshan066)**._
