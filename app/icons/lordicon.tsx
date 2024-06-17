"use client";
import { Player } from "@lordicon/react";
import { useRef } from "react";

const Lordicon = ({ icon }: { icon: any }) => {
  const playerRef = useRef<Player>(null);

  const handleMouseEnter = () => {
    playerRef.current?.playFromBeginning();
  };

  const handleMouseLeave = () => {
    playerRef.current?.pause();
  };

  const handleAnimationComplete = () => {
    // Restart the animation
    playerRef.current?.playFromBeginning();
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Player
        icon={icon}
        ref={playerRef}
        size={120}
        renderMode="SOFTWARE"
        onComplete={handleAnimationComplete} // Call handleAnimationComplete when animation completes
        onReady={() => playerRef.current?.playFromBeginning()}
      />
    </div>
  );
};

export default Lordicon;
