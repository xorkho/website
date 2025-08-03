import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Volume2, VolumeX, X, Play, Pause } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Video imports
import video1 from "../../assets/video/reason.mp4";
import video4 from "../../assets/video/Animated Short.mp4";
import video5 from "../../assets/video/Copy Of Trial.mp4";
import video6 from "../../assets/video/Ruchira Vid 1.mp4";
import video7 from "../../assets/video/The Sls 2024.mp4";

const videos = [
  { src: video1 },
  { src: video4 },
  { src: video5 },
  { src: video6 },
  { src: video7 },
];

function Reel({ src, onClick, isActive, currentVideoRef }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current && isActive) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      if (currentVideoRef) currentVideoRef.current = videoRef.current;
    }
  }, [isActive]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-[960px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
        isActive ? "scale-105 blur-0" : "opacity-60 blur-sm"
      }`}
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="auto"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-md"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-md"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
}

function VideoModal({ isOpen, onClose, videoSrc, modalVideoRef }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
        <video
          ref={modalVideoRef}
          src={videoSrc}
          controls
          autoPlay
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover"
        />

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black/70 hover:bg-black/90 p-2 rounded-full"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}

export default function CarouselVideo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const openModal = (video) => {
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
    }
    setActiveVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-[-40px]">
      <h2 className="text-5xl font-extrabold tracking-tight uppercase text-center mb-12  text-[#f4b018] drop-shadow-md">
        Creative Video Highlights
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        navigation
        spaceBetween={30}
        onSlideChange={(swiper) => {
          if (mainVideoRef.current) {
            mainVideoRef.current.pause();
          }
          setActiveIndex(swiper.realIndex);
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[Navigation, EffectCoverflow]}
        className="rounded-3xl"
      >
        {videos.map((video, index) => (
          <SwiperSlide
            key={index}
            className="!w-[250px] sm:!w-[280px] md:!w-[320px] xl:!w-[360px]"

          >
            <Reel
              src={video.src}
              onClick={() => openModal(video.src)}
              isActive={index === activeIndex}
              currentVideoRef={mainVideoRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <VideoModal
        isOpen={modalOpen}
        onClose={closeModal}
        videoSrc={activeVideo}
        modalVideoRef={modalVideoRef}
      />
    </div>
  );
}
