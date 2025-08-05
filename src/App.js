import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-[radial-gradient(circle,_#002c3f,_#00141f)] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f4b018] rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>
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
