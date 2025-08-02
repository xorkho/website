import Hero from "../components/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Navbar from "../components/Navbar";
import TrustedClients from "../components/TrustedClients";
import FAQ from "../components/Faq";
import Contact  from "../components/Contact";
import About  from "../components/About";
// import Footer from "../components/Footer";
import Service from "../components/Service";
import WhatsAppButton from "../components/WhatsAppButton";


const Home = () => {
  return (
    <div className="pt-7">
      <Navbar/>
      <Hero />
      <Portfolio />
      <TrustedClients/>
      <Service/>
      <About />
      <FAQ/>
      <Contact/>
      <WhatsAppButton />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
