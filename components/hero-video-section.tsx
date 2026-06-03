"use client"

import { memo } from "react"

const HeroVideoSection = memo(function HeroVideoSection({
  videoSrc = "/videos/Copy of WB Tech Company Profile  (6).mp4",
  mobileVideoSrc = "/videos/video for wb tech website.mp4",
  height = "h-screen",
}) {
  return (
    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:h-[585px] h-[465px] z-0">
      <section className="absolute left-0 top-[-135px] w-full lg:h-[720px] h-[600px] overflow-hidden -z-10">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={mobileVideoSrc}
            type="video/mp4"
            media="(max-width: 1023px)"
          />
          <source
            src={videoSrc}
            type="video/mp4"
            media="(min-width: 1024px)"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        {/* <div className="flex z-10 relative border-black">
          <h2></h2>
          <h2></h2>
          <h2></h2>
        </div> */}
      </section>
    </div>
  )
})

export default HeroVideoSection