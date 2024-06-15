import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const BackgroundGradient = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const config = {
       "colors": [
        {
            "color": "#DE9F05",
            "enabled": true
        },
        {
            "color": "#FFB82C",
            "enabled": true
        },
        {
            "color": "#FFA117",
            "enabled": true
        },
        {
            "color": "#F1F1F1",
            "enabled": true
        },
        {
            "color": "#f5e1e5",
            "enabled": false
        }
    ],
    "speed": 2,
    "horizontalPressure": 1,
    "verticalPressure": 5,
    "waveFrequencyX": 4,
    "waveFrequencyY": 3,
    "waveAmplitude": 8,
    "shadows": 5,
    "highlights": 8,
    "colorBrightness": 1,
    "colorSaturation": 10,
    "wireframe": false,
    "colorBlending": 7,
    "backgroundColor": "#003FFF",
    "backgroundAlpha": 1,
    "resolution": 1
        }
    //   colors: [
    //     { color: "#FF5373", enabled: true },
    //     { color: "#FFC858", enabled: true },
    //     { color: "#17E7FF", enabled: true },
    //     { color: "#6D3BFF", enabled: true },
    //     { color: "#f5e1e5", enabled: false }
    //   ],
    //   speed: 4,
    //   horizontalPressure: 4,
    //   verticalPressure: 5,
    //   waveFrequencyX: 2,
    //   waveFrequencyY: 3,
    //   waveAmplitude: 5,
    //   shadows: 0,
    //   highlights: 2,
    //   saturation: 7,
    //   wireframe: false,
    //   colorBlending: 6,
    //   backgroundColor: "#003FFF",
    //   backgroundAlpha: 1
    // };

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...config
    });

    return () => gradientRef.current.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
};

export default BackgroundGradient;