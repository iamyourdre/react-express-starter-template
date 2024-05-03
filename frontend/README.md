## Installation

```
npm install
npm run dev
```

## My Starter Cheatsheet

1. Installing Dependencies
```
npm create vite@latest
npm install
npm install react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install --save react-router-dom
npm run dev
```

2. Check for `tailwind.config.js` difference

3. Check for `src/index.css` difference

4. Check for `src/App.css` difference

5. Update `src/main.jsx` with BrowserRouter template
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

```