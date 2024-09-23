// pages/_app.js
import '../styles/globals.css';
import 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'; // Cargar Devicon CDN

import {NextUIProvider} from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    
  )
}

export default MyApp;
