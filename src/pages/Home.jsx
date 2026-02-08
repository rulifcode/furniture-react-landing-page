import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Products from "../components/sections/Products";
import Testimonials from "../components/sections/Testimonials";
import Newsletter from "../components/sections/Newsletter";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Furniture Store</title>
        <meta name="description" content="Modern furniture for your home" />

        {/* Open Graph */}
        <meta property="og:title" content="Furniture Store" />
        <meta property="og:description" content="Modern furniture for your home" />
        <meta
          property="og:image"
          content="https://furniture-react-landing-page-rulif.vercel.app/preview.jpg"
        />
        <meta
          property="og:url"
          content="https://furniture-react-landing-page-rulif.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Products />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default Home;
