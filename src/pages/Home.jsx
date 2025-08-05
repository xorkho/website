import Hero from "../components/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Navbar from "../components/Navbar";
import TrustedClients from "../components/TrustedClients";
import FAQ from "../components/Faq";
import Contact  from "../components/Contact";
// import Footer from "../components/Footer";
import Service from "../components/Service";
import ClientReview from "../components/ClientReview";
import WhatsAppButton from "../components/WhatsAppButton";


const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero />
      <Portfolio />
      <TrustedClients/>
      <Service/>
      <ClientReview />   
      <FAQ/>
      <Contact/>
      <WhatsAppButton />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
