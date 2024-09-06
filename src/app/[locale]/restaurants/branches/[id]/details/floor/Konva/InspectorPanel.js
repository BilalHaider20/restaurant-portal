import React from 'react';
import LineLengthInput from './LineLengthInput';
import CustomArcEditor from './CustomArcEditor';

const InspectorPanel = ({ selectedShape, shapes, onLineLengthChange, onArcUpdate, coordinates, onCoordinateChange, onRotateRight, onScaleChange }) => {
    const shape = shapes.find(s => s.id === selectedShape);
    const scaleFactor = shape?.scaleFactor || 1;

    const handleScaleFactorChange = (e) => {
        const newScale = parseFloat(e.target.value);
        if (!isNaN(newScale)) {
            onScaleChange(newScale);
        }
    };

    return (
        <div style={{ padding: '10px', color: 'grey', background: '#f7f7f7', borderLeft: '1px solid #ddd' }}>
            <h3>Inspector</h3>
            {selectedShape && (
                <div style={{ 
                    border: '1px solid #ccc', 
                    borderRadius: '5px', 
                    padding: '10px',
                    marginTop: '10px'
                }}>
                    <div>
                        <h4>Coordinates</h4>
                        <label>
                            X:
                            <input
                                type="number"
                                name="x"
                                value={coordinates.x}
                                onChange={onCoordinateChange}
                                style={{ marginLeft: '5px', width: '50px' }}
                            />
                        </label>
                        <label style={{ marginLeft: '10px' }}>
                            Y:
                            <input
                                type="number"
                                name="y"
                                value={coordinates.y}
                                onChange={onCoordinateChange}
                                style={{ marginLeft: '5px', width: '50px' }}
                            />
                        </label>
                    </div>
                    
                    <div style={{ marginTop: '20px' }}>
                        <h4>Rotation</h4>
                        <button onClick={() => onRotateRight(selectedShape)}>Rotate Right 90°</button>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <h4>Scale Factor</h4>
                        <label>
                            Scale:
                            <input
                                type="number"
                                value={scaleFactor}
                                onChange={handleScaleFactorChange}
                                style={{ width: '60px', marginLeft: '5px', marginRight: '5px' }}
                                step="0.1"
                                min="0.1"
                            />
                        </label>
                    </div>
                    
                    {shape && shape.type === 'line' && (
                        <div style={{ marginTop: '20px' }}>
                            <h4>Line Properties</h4>
                            <LineLengthInput
                                initialLength={Math.sqrt(
                                    Math.pow(shape.points[2] - shape.points[0], 2) +
                                    Math.pow(shape.points[3] - shape.points[1], 2)
                                )}
                                onLengthChange={onLineLengthChange}
                            />
                        </div>
                    )}
                    
                    {shape && shape.type === 'arc' && (
                        <div style={{ marginTop: '20px' }}>
                            <h4>Arc Properties</h4>
                            <CustomArcEditor
                                shape={shape}
                                onUpdate={onArcUpdate}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InspectorPanel;
