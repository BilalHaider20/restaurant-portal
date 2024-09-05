"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line, Shape, Transformer } from 'react-konva';
import ToolsPanel from './ToolsPanel';
import ToolsPanelPage2 from './ToolsPanelPage2'; 
import InspectorPanel from './InspectorPanel';
import Grid from './Grid';
import useImage from 'use-image';
import stairs from '../images/stairs.png';
import grass from '../images/grass.png';
import door from '../images/door.png';
import curvedLine from '../images/curved-line.png';
import squareTable from '../images/square-table.png';
import roundTable from '../images/round-table.png';
import Image from 'next/image';

const FloorPlan = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTool, setSelectedTool] = useState(null);
    const [shapes, setShapes] = useState([]);
    const [selectedShape, setSelectedShape] = useState(null);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const shapeRefs = useRef({});
    const transformerRef = useRef();
    const stageRef = useRef();

    const [stairsImage] = useImage(stairs);
    const [doorImage] = useImage(door);
    const [grassImage] = useImage(grass);
    const [curvedLineImage] = useImage(curvedLine);
    const [squareTableImage] = useImage(squareTable);
    const [roundTableImage] = useImage(roundTable);

    const images = {
        stairs: stairsImage,
        door: doorImage,
        grass: grassImage,
        curvedLine: curvedLineImage,
        'square-table': squareTableImage,
        'round-table': roundTableImage,
    };

    useEffect(() => {
        if (selectedShape) {
            const shape = shapes.find(s => s.id === selectedShape);
            const node = shapeRefs.current[selectedShape];
            const transformer = transformerRef.current;

            if (shape && node && transformer) {
                transformer.nodes([node]);
                transformer.getLayer().batchDraw();

                if (shape.type === 'arc') {
                    transformer.enabledAnchors(['top-left', 'top-right', 'bottom-left', 'bottom-right']);
                } else if (shape.type === 'line') {
                    transformer.enabledAnchors(['middle-left', 'middle-right']);
                    transformer.boundBoxFunc((oldBox, newBox) => {
                        newBox.height = oldBox.height;
                        return newBox;
                    });
                } else {
                    transformer.enabledAnchors(['top-left', 'top-right', 'bottom-left', 'bottom-right']);
                    transformer.boundBoxFunc(undefined);
                }

                // Update coordinate inputs when a shape is selected
                setCoordinates({ x: node.x(), y: node.y() });
            } else {
                setSelectedShape(null);
            }
        }
    }, [selectedShape, shapes]);

    const handleSelectTool = (tool) => {
        setSelectedTool(tool);
        setSelectedShape(null);
    };

    const handleMouseDown = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        const { x, y } = e.target.getStage().getPointerPosition();

        if (selectedTool) {
            const id = shapes.length + 1;
            let newShape;

            if (selectedTool === 'line') {
                newShape = {
                    id,
                    type: 'line',
                    points: [x, y, x + 100, y],
                    stroke: 'grey',
                    strokeWidth: 5,
                };
            } else if (['stairs', 'door', 'grass', 'square-table', 'round-table'].includes(selectedTool)) {
                newShape = {
                    id,
                    type: 'image',
                    x,
                    y,
                    width: 100,
                    height: 100,
                    src: selectedTool,
                    scaleX: 1,
                    scaleY: 1,
                    opacity: selectedTool === 'grass' ? 1 : 0.6,
                };
            } else if (selectedTool === 'arc') {
                newShape = {
                    id,
                    type: 'arc',
                    x,
                    y,
                    radius: 50,
                    angle: 90,
                    rotation: 0,
                    stroke: 'grey',
                    strokeWidth: 2,
                };
            }

            setShapes([...shapes, newShape]);
            setSelectedTool(null);
            setSelectedShape(id);
        } else {
            if (clickedOnEmpty) {
                setSelectedShape(null);
            } else {
                const clickedShape = shapes.find(shape => 
                    shape.id === parseInt(e.target.id())
                );
                if (clickedShape) {
                    setSelectedShape(clickedShape.id);
                }
            }
        }
    };
    
    const handleDragMove = (e, id) => {
        const { x, y } = e.target.position();
        setShapes(
            shapes.map((shape) =>
                shape.id === id ? { ...shape, x, y } : shape
            )
        );
        if (id === selectedShape) {
            setCoordinates({ x, y });
        }
    };

    const handleTransformEnd = (e, id) => {
        const node = e.target;
        const shape = shapes.find(s => s.id === id);

        if (shape && shape.type === 'line') {
            const newPoints = node.points();
            setShapes(
                shapes.map((s) =>
                    s.id === id ? { ...s, points: newPoints } : s
                )
            );
        } else if (shape && shape.type === 'arc') {
            const { x, y, width, height, scaleX, scaleY, rotation } = node.attrs;
            const newRadius = shape.radius * Math.max(scaleX, scaleY);
            setShapes(
                shapes.map((s) =>
                    s.id === id ? { ...s, x, y, width, height, rotation, radius: newRadius, scaleX: 1, scaleY: 1 } : s
                )
            );
        } else if (shape) {
            const { x, y, width, height, scaleX, scaleY } = node.attrs;
            setShapes(
                shapes.map((s) =>
                    s.id === id ? { ...s, x, y, width, height, scaleX, scaleY } : s
                )
            );
        }
    };

    const handleArcUpdate = (updatedArc) => {
        setShapes(shapes.map(shape =>
            shape.id === selectedShape
                ? { ...shape, ...updatedArc, scaleX: 1, scaleY: 1 }
                : shape
        ));
    };

    const drawArc = (ctx, shape) => {
        ctx.beginPath();
        ctx.arc(
            shape.width / 2,
            shape.height / 2,
            shape.radius,
            0,
            (shape.angle * Math.PI) / 180
        );
        ctx.strokeStyle = shape.stroke || 'black';
        ctx.lineWidth = shape.strokeWidth || 2;
        ctx.stroke();
    };

    const handleLineLengthChange = (newLength) => {
        if (selectedShape) {
            setShapes(
                shapes.map((shape) => {
                    if (shape.id === selectedShape && shape.type === 'line') {
                        const [startX, startY, endX, endY] = shape.points;
                        const currentLength = Math.sqrt(
                            Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
                        );
                        const scale = newLength / currentLength;
                        const newEndX = startX + (endX - startX) * scale;
                        const newEndY = startY + (endY - startY) * scale;
                        return { ...shape, points: [startX, startY, newEndX, newEndY] };
                    }
                    return shape;
                })
            );
        }
    };

    const handleCoordinateChange = (e) => {
        const { name, value } = e.target;
        const newCoord = Math.round(parseInt(value));
    
        if (!isNaN(newCoord) && selectedShape) {
            const updatedCoordinates = { ...coordinates, [name]: newCoord };
            setCoordinates(updatedCoordinates);
    
            setShapes(shapes.map(shape =>
                shape.id === selectedShape
                    ? { ...shape, [name]: updatedCoordinates[name] }
                    : shape
            ));
        }
    };
    
    const handleRotateLeft = () => {
        if (selectedShape) {
            setShapes(
                shapes.map((shape) => {
                    if (shape.id === selectedShape) {
                        const newRotation = (shape.rotation || 0) - 15;
                        return { ...shape, rotation: newRotation };
                    }
                    return shape;
                })
            );
        }
    };

    const handleScaleChange = (newScale) => {
        if (selectedShape) {
            setShapes(
                shapes.map((shape) => {
                    if (shape.id === selectedShape) {
                        return { ...shape, scaleFactor: newScale };
                    }
                    return shape;
                })
            );
        }
    };

    const handleRotateRight = (id) => {
        setShapes(shapes.map(shape => {
            if (shape.id === id) {
                let newRotation = ((shape.rotation || 0) + 90) % 360;
                
                if (shape.type === 'line') {
                    // For lines, we need to rotate the points
                    const [x1, y1, x2, y2] = shape.points;
                    const centerX = (x1 + x2) / 2;
                    const centerY = (y1 + y2) / 2;
                    
                    const rotatePoint = (x, y, angle) => {
                        const radians = (angle * Math.PI) / 180;
                        const cos = Math.cos(radians);
                        const sin = Math.sin(radians);
                        const nx = (cos * (x - centerX)) + (sin * (y - centerY)) + centerX;
                        const ny = (cos * (y - centerY)) - (sin * (x - centerX)) + centerY;
                        return [nx, ny];
                    };
                    
                    const [newX1, newY1] = rotatePoint(x1, y1, 90);
                    const [newX2, newY2] = rotatePoint(x2, y2, 90);
                    
                    return { ...shape, points: [newX1, newY1, newX2, newY2] };
                } else if (shape.type === 'arc') {
                    // For arcs, we just need to update the rotation
                    return { ...shape, rotation: newRotation };
                } else {
                    // For images, update rotation and adjust position if needed
                    return { ...shape, rotation: newRotation };
                }
            }
            return shape;
        }));
    };
    const handleNextPage = () => {
        setCurrentPage(2);
    };

    const handlePrevPage = () => {
        setCurrentPage(1);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {currentPage === 1 ? (
                <ToolsPanel onSelectTool={handleSelectTool} />
            ) : (
                <ToolsPanelPage2 onSelectTool={handleSelectTool} />
            )}
            <div style={{ flex: 1, position: 'relative' }}>
                <Stage
                    width={800}
                    height={600}
                    onMouseDown={handleMouseDown}
                    ref={stageRef}
                    style={{ border: '1px solid #ccc' }}
                >
                    <Grid width={800} height={600} gridSize={20} />
                    <Layer>
                        {shapes.map((shape) => {
                            const scale = shape.scaleFactor || 1;
                            if (shape.type === 'line') {
                                return (
                                    <Line
                                        key={shape.id}
                                        id={shape.id.toString()}
                                        points={shape.points}
                                        stroke={shape.stroke}
                                        strokeWidth={shape.strokeWidth}
                                        draggable
                                        ref={(node) => shapeRefs.current[shape.id] = node}
                                        onDragMove={(e) => handleDragMove(e, shape.id)}
                                        onTransformEnd={(e) => handleTransformEnd(e, shape.id)}
                                        scaleX={scale}
                                        scaleY={scale}
                                    />
                                );
                            } else if (shape.type === 'arc') {
                                return (
                                    <Shape
                                        key={shape.id}
                                        id={shape.id.toString()}
                                        x={shape.x}
                                        y={shape.y}
                                        width={shape.width || 100}
                                        height={shape.height || 100}
                                        scaleX={scale * (shape.scaleX || 1)}
                                        scaleY={scale * (shape.scaleY || 1)}
                                        rotation={shape.rotation || 0}
                                        radius={shape.radius || 50}
                                        angle={shape.angle || 90}
                                        stroke={shape.stroke || 'black'}
                                        strokeWidth={shape.strokeWidth || 2}
                                        draggable
                                        ref={(node) => shapeRefs.current[shape.id] = node}
                                        onDragMove={(e) => handleDragMove(e, shape.id)}
                                        onTransformEnd={(e) => handleTransformEnd(e, shape.id)}
                                        sceneFunc={(context, shape) => drawArc(context, shape.attrs)}
                                    />
                                );
                            } else {
                                return (
                                    <Image
                                        key={shape.id}
                                        id={shape.id.toString()}
                                        x={shape.x}
                                        y={shape.y}
                                        width={shape.width}
                                        height={shape.height}
                                        draggable
                                        ref={(node) => shapeRefs.current[shape.id] = node}
                                        scaleX={scale * shape.scaleX}
                                        scaleY={scale * shape.scaleY}
                                        rotation={shape.rotation || 0}
                                        onDragMove={(e) => handleDragMove(e, shape.id)}
                                        onTransformEnd={(e) => handleTransformEnd(e, shape.id)}
                                        image={images[shape.src]}
                                        opacity={shape.opacity}
                                        alt=""
                                    />
                                );
                            }
                        })}
                        {selectedShape && (
                            <Transformer
                                ref={transformerRef}
                            />
                        )}
                    </Layer>
                </Stage>
                {currentPage === 1 ? (
                    <button 
                        onClick={handleNextPage}
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Next
                    </button>
                ) : (
                    <button 
                        onClick={handlePrevPage}
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '10px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Previous
                    </button>
                )}
            </div>
            <InspectorPanel
                selectedShape={selectedShape}
                shapes={shapes}
                onLineLengthChange={handleLineLengthChange}
                onArcUpdate={handleArcUpdate}
                coordinates={coordinates}
                onCoordinateChange={handleCoordinateChange}
                onRotateRight={handleRotateRight}
                onScaleChange={handleScaleChange}
            />
        </div>
    );
};

export default FloorPlan;