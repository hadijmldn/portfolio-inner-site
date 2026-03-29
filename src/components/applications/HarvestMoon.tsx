import React, { useState } from 'react';
import SnesPlayer from '../snes/SnesPlayer';
import Window from '../os/Window';

export interface HarvestMoonAppProps extends WindowAppProps {}

const HarvestMoon: React.FC<HarvestMoonAppProps> = (props) => {
    const [width, setWidth] = useState(980);
    const [height, setHeight] = useState(670);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Harvest Moon"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Powered by EmulatorJS'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <SnesPlayer
                width={width}
                height={height}
                romUrl="roms/harvestmoon.sfc"
            />
        </Window>
    );
};

export default HarvestMoon;
