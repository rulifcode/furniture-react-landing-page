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
