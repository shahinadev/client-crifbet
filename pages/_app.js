import AppBar from "../components/pages/header/AppBar";
import Footer from "../components/pages/footer/Footer";
import Header from "../components/pages/header/Header";
import "../styles/globals.css";
import { useState } from "react";
// import "ionicons/dist/ionicons/ionicons.esm";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Header /> */}
      <AppBar setOpen={setOpen} open={open} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
