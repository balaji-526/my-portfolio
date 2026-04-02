# 🚀 Quick Start Guide

Get your portfolio up and running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Tailwind CSS
- Framer Motion (for animations)
- React Icons
- Vite (build tool)

**Note**: This might take 1-2 minutes depending on your internet connection.

## Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open automatically at `http://localhost:3000`

## Step 3: Customize Your Content

### Update Personal Information
1. Open `src/components/Hero.jsx` - Update name, role, description
2. Open `src/components/About.jsx` - Update bio and location
3. Open `src/components/Contact.jsx` - Update contact details

### Update Projects
- Edit `src/components/Projects.jsx` - Add/modify your projects

### Update Skills
- Edit `src/components/Skills.jsx` - Add your technical skills

### Update Achievements
- Edit `src/components/Achievements.jsx` - Add your accomplishments

### Add Your Resume
1. Save your resume as `resume.pdf`
2. Place it in the `public` folder
3. The "Download Resume" button will automatically work

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  purple: { /* your colors */ },
  pink: { /* your colors */ },
}
```

### Toggle Dark Mode
Click the sun/moon icon in the navigation bar

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🌐 Deploy

You can deploy the `dist` folder to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static hosting service**

## 🐛 Common Issues

### Port 3000 is already in use
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or change the port in vite.config.js
```

### Styles not loading
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

## 📞 Need Help?

- Check the README.md for detailed documentation
- Review component files - they have inline comments
- Email: balajim1256@gmail.com

---

**Happy Coding! 🎉**
