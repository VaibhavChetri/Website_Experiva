'use client';

export default function HeroVideo({ poster }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      className="absolute inset-0 w-full h-full object-cover object-center"
    >
      {/* Replace this URL with the client's own site video footage */}
      <source
        src="https://videos.pexels.com/video-files/3297484/3297484-hd_1920_1080_25fps.mp4"
        type="video/mp4"
      />
    </video>
  );
}
