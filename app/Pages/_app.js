// pages/_app.js
import '../styles/globals.css';
import 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'; // Cargar Devicon CDN

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
