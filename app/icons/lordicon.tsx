"use client";
import { Player } from "@lordicon/react";
import { useRef } from "react";

const DeveloperIcon = ({ icon }: { icon: any }) => {
  const playerRef = useRef<Player>(null);

  const handleMouseEnter = () => {
    setTimeout(() => {
      playerRef.current?.playFromBeginning();
    }, 3000);
  };

  const handleMouseLeave = () => {
    playerRef.current?.pause();
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Player
        icon={icon}
        ref={playerRef}
        size={120}
        renderMode="SOFTWARE"
        onComplete={() =>
          setTimeout(() => {
            playerRef.current?.playFromBeginning();
          }, 3000)
        }
        onReady={() => playerRef.current?.playFromBeginning()}
      />
    </div>
  );
};

export default DeveloperIcon;
