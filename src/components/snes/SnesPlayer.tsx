import React from 'react';

interface SnesPlayerProps {
    width: number;
    height: number;
    romUrl: string;
}

const SnesPlayer: React.FC<SnesPlayerProps> = ({ width, height, romUrl }) => {
    return (
        <iframe
            title="SNES Emulator"
            src={`${process.env.PUBLIC_URL}/snes.html?rom=${encodeURIComponent(romUrl)}`}
            width={width}
            height={height}
            style={{
                border: 'none',
                position: 'absolute',
            }}
            allow="autoplay"
        />
    );
};

export default SnesPlayer;
