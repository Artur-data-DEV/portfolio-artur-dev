"use client";
import { Player } from "@lordicon/react";
import { IconData } from "@lordicon/react/dist/interfaces";
import { useRef } from "react";

interface LordiconProps {
  icon: IconData;
  delay?: number; // Optional delay for animation start and loop restart (milliseconds)
}

const Lordicon = ({ icon, delay = 0 }: LordiconProps) => {
  const playerRef = useRef<Player>(null);

  const handleMouseEnter = () => {
    playerRef.current?.pause();
  };

  const handleMouseLeave = () => {
    playerRef.current?.playFromBeginning();
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {icon && (
        <Player
          icon={icon}
          ref={playerRef}
          size={120}
          renderMode="HARDWARE"
          onReady={() => playerRef.current?.play()}
          onComplete={() =>
            setTimeout(() => playerRef.current?.playFromBeginning(), delay)
          }
        />
      )}
    </div>
  );
};

export default Lordicon;
