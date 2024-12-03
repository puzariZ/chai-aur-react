import React, { StrictMode } from 'react'; // Import React (required for createElement)
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


// const reactElements = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

// function MyApp() {
//   return(
//     <div>hi this is custom function !</div>
//   );
// }

// const anotherElement = (
//   <a href="https://google.com" target= "_blank">visit google veere </a>
// )

// // createRoot(document.getElementById('root')).render(
// //   anotherElement
// // )

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Visit the Google'
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
