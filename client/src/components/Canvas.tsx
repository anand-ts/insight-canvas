import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';

interface CanvasProps {
  width: number;
  height: number;
  showGrid?: boolean;
  gridSpacing?: number;
}

const Canvas: React.FC<CanvasProps> = ({ 
  width, 
  height, 
  showGrid = false, 
  gridSpacing = 20 
}) => {
  const renderGrid = () => {
    if (!showGrid) return null;
    
    const dots = [];
    const cols = Math.floor(width / gridSpacing);
    const rows = Math.floor(height / gridSpacing);
    
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        dots.push(
          <Circle
            key={`${i}-${j}`}
            x={i * gridSpacing}
            y={j * gridSpacing}
            radius={1}
            fill="#aaa"
          />
        );
      }
    }
    
    return dots;
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        {renderGrid()}
        {/* Canvas elements will go here */}
      </Layer>
    </Stage>
  );
};

export default Canvas;
