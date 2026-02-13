# Python Course React App

A React-based interactive Python programming course with 200+ slides across 15 modules.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd react-python-course
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── slides/
│   │   └── Slide.js          # Base slide component
│   ├── CodeBlock.js          # Syntax highlighting component
│   ├── Controls.js           # Navigation controls
│   ├── Navigation.js         # Side navigation
│   └── SlideContainer.js     # Slide display container
├── data/
│   └── slidesData.js         # All slide content
├── styles/
│   └── App.css              # Main styles
├── App.js                   # Main app component
└── index.js                 # Entry point
```

## Features

- **Component-based Architecture**: Each module and slide is a separate component
- **Keyboard Navigation**: Arrow keys, spacebar, Home/End, F for fullscreen
- **Progress Tracking**: Visual progress bar and slide counter
- **Responsive Design**: Works on desktop and mobile devices
- **Syntax Highlighting**: Python code with proper syntax coloring
- **Module Organization**: Collapsible navigation by module

## Adding New Slides

Add slide data to `src/data/slidesData.js`:

```javascript
{
  id: 4,
  moduleId: 1,
  moduleTitle: "Module 1: Introduction",
  title: "Your Slide Title",
  type: "two-column",
  content: {
    left: {
      title: "Left Column Title",
      code: "# Python code here",
      list: ["Item 1", "Item 2"]
    },
    right: {
      title: "Right Column Title",
      description: "Description text"
    }
  }
}
```

## Slide Types

- **intro**: Full-screen intro slides with background image
- **two-column**: Standard two-column layout with code and content

## Next Steps

1. Convert all existing slides from HTML to the data structure
2. Add more slide types as needed
3. Implement search functionality
4. Add slide transitions and animations