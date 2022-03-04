import "../styles/globals.css";
import { Nav } from "../components/Nav";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
