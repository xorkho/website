import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-gradient-to-b from-[#002c3f] to-[#00141f] text-white">
      {/* Main content grows to fill space */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
