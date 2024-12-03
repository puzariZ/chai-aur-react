import React from 'react'; // Import React (required for createElement)
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Visit the Google'
);

createRoot(document.getElementById('root')).render(reactElement);
