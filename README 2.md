# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion.

## 🚀 Features

- Responsive design that works on all devices
- Smooth animations and transitions using Framer Motion
- Interactive UI elements
- Dark/Light theme support
- Resume download functionality
- Contact form
- Skills showcase
- Project gallery
- Publications section

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [VS Code](https://code.visualstudio.com/)
- Git (optional, for version control)

## 📦 Recommended VS Code Extensions

For the best development experience, install these VS Code extensions:

1. ESLint
2. Prettier
3. Tailwind CSS IntelliSense
4. ES7+ React/Redux/React-Native snippets
5. TypeScript Extension Pack

## 🚀 Getting Started

1. Clone the repository (if using Git):
   ```bash
   git clone <repository-url>
   ```

2. Open the project in VS Code:
   ```bash
   cd portfolio-website
   code .
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static files
│   ├── img/            # Images
│   └── resume.pdf      # Resume file
├── src/
│   ├── components/     # React components
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── package.json        # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

1. Components: Add new components in the `src/components` directory
2. Styles: Add new styles in `index.css` or component-specific CSS files
3. Assets: Add new images in the `public/img` directory

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for code formatting
- Follow React best practices and hooks guidelines

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory

3. Deploy the contents of the `dist` directory to your hosting provider

## 📝 Customization

1. Colors: Update the color scheme in `tailwind.config.js`
2. Content: Modify the content in `App.tsx`
3. Resume: Replace `/public/resume.pdf` with your resume
4. Profile Image: Replace `/public/img/saiprofile.png` with your image

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, email vathsavayisai@gmail.com or open an issue in the repository.