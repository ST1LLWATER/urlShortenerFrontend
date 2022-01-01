import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return(
  <div className="h-screen min-h-screen max-h-screen overflow-hidden flex flex-col">
  <Component {...pageProps} />
  </div>
  );
}

export default MyApp
