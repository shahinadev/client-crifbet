import AppBar from "../components/pages/header/AppBar";
import Footer from "../components/pages/footer/Footer";
import Header from "../components/pages/header/Header";
import "../styles/globals.css";
// import "ionicons/dist/ionicons/ionicons.esm";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <AppBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
