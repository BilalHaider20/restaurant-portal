import React from 'react';
import { Layer, Line } from 'react-konva';

const Grid = ({ width, height, gridSize }) => {
    const lines = [];

    // Vertical lines
    for (let i = 0; i <= width; i += gridSize) {
        // console.log("i: ", i, "height: ", height, "width: ", width)
        lines.push(
            <Line
                key={`v${i}`}
                points={[i, 0, i, height]}
                stroke="#ddd"
                strokeWidth={1}
                opacity={0.3}   //CANVAS OPACITY DONE
                
            />
            
        );
    }

    // Horizontal lines
    for (let i = 0; i <= height; i += gridSize) {
        // console.log("i: ", i, "height: ", height, "width: ", width)
        lines.push(
            <Line
                key={`h${i}`}
                points={[0, i, width, i]}
                stroke="#ddd"
                strokeWidth={1}
                opacity={0.3}   //CANVAS OPACITY DONE
            />
        );
    }

    return <Layer>{lines}</Layer>;
};

export default Grid;
