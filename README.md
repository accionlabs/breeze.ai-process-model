# Breeze.ai Process Model

Interactive process diagram for McCain Breeze.ai development phases showing collaboration between Agent Developers, Semantic Engineers, and Development Engineers.

## Live Demo

Once deployed, the app will be available at: `https://accionlabs.github.io/breeze.ai-process-model`

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Manual GitHub Pages Deployment

1. **Repository setup**: The repository is configured for the `accionlabs` organization
2. **Push to GitHub**: Create a repository under `accionlabs` organization and push your code
3. **Build the project**: Run `npm run build` 
4. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select the branch containing your build files
   - Select the folder (either root `/` or `/docs`)
5. **Deploy**: Either:
   - Copy the `build` folder contents to your chosen deployment branch/folder, or
   - Use `npm run deploy` (requires gh-pages package) to automatically deploy to gh-pages branch

## Features

- Interactive 3-phase development process visualization
- Team-based workflow arrows and activities
- Expandable sections with detailed process information
- Responsive design with Tailwind CSS
- Phase navigation and progress tracking

## Project Structure

- `src/InteractiveProcessDiagram.js` - Main component with all process logic
- `src/App.js` - React app wrapper
- `src/index.js` - React app entry point
- `public/index.html` - HTML template