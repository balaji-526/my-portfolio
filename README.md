# Balaji M - Portfolio Website 🚀

A modern, responsive portfolio website showcasing my skills, projects, and achievements as a Backend Developer.

## ✨ Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Components**: Engaging project cards, progress bars, and hover effects
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Language**: JavaScript

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository or navigate to the project folder**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Updating Content

All content is stored in the component files. To update:

1. **Personal Information**: Edit `src/components/Hero.jsx` and `src/components/About.jsx`
2. **Skills**: Modify the skills arrays in `src/components/Skills.jsx`
3. **Projects**: Update project data in `src/components/Projects.jsx`
4. **Achievements**: Edit achievements in `src/components/Achievements.jsx`
5. **Contact Info**: Update contact details in `src/components/Contact.jsx`

### Changing Colors

The color scheme uses Tailwind CSS. Main colors are defined in `tailwind.config.js`:
- Primary gradient: `purple-500` to `pink-500`
- You can change these in the configuration file

### Adding a Resume Download

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. The download button in the Hero section will automatically link to it

## 📱 Sections

1. **Hero**: Eye-catching introduction with CTA buttons
2. **About**: Personal background and highlights
3. **Skills**: Technical skills with progress indicators
4. **Projects**: Showcase of key projects with detailed modals
5. **Achievements**: Milestones and accomplishments
6. **Contact**: Contact form and information
7. **Footer**: Quick links and social media

## 🎯 Key Components

### Navigation
- Sticky navigation with smooth scroll
- Dark/light mode toggle
- Mobile responsive menu

### Hero Section
- Animated introduction
- Social media links
- Call-to-action buttons
- Download resume button

### Skills Section
- Categorized skills (Languages, Backend, Frontend)
- Animated progress bars
- Additional skills tag cloud

### Projects Section
- Interactive project cards
- Detailed project modals
- Technology stack display
- Feature highlights

### Contact Section
- Working contact form
- Contact information cards
- Social media links
- Availability status

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Balaji M**
- Email: balajim1256@gmail.com
- GitHub: [@balaji-526](https://github.com/balaji-526)
- LinkedIn: [balaji521](https://linkedin.com/in/balaji521)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Made with ❤️ and React by Balaji M**
