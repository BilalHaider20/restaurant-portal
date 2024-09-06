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
        <div className="p-4 text-gray-700 bg-gray-100 border-l border-gray-300">
            <h3 className="text-lg font-semibold">Properties</h3>
            {selectedShape && (
                <div className="border border-gray-300 rounded-lg p-4 mt-2">
                    <div>
                        <h4 className="text-md font-semibold">Coordinates</h4>
                        <div className="flex items-center">
                            <label className="mr-2">
                                X:
                                <input
                                    type="number"
                                    name="x"
                                    value={coordinates.x}
                                    onChange={onCoordinateChange}
                                    className="ml-2 w-16 border border-gray-300 rounded p-1"
                                />
                            </label>
                            <label className="ml-4">
                                Y:
                                <input
                                    type="number"
                                    name="y"
                                    value={coordinates.y}
                                    onChange={onCoordinateChange}
                                    className="ml-2 w-16 border border-gray-300 rounded p-1"
                                />
                            </label>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <h4 className="text-md font-semibold">Rotation</h4>
                        <button
                            onClick={() => onRotateRight(selectedShape)}
                            className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Rotate 90°
                        </button>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-md font-semibold">Scale</h4>
                        <label>
                            <input
                                type="number"
                                value={scaleFactor}
                                onChange={handleScaleFactorChange}
                                className="w-16 border border-gray-300 rounded p-1 ml-2"
                                step="0.1"
                                min="0.1"
                            />
                        </label>
                    </div>
                    
                    {shape && shape.type === 'line' && (
                        <div className="mt-4">
                            <h4 className="text-md font-semibold">Line Properties</h4>
                            <LineLengthInput
                                initialLength={Math.sqrt(
                                    Math.pow(shape.points[2] - shape.points[0], 2) +
                                    Math.pow(shape.points[3] - shape.points[1], 2)
                                )}
                                onLengthChange={onLineLengthChange}
                            />
                            <label className="mt-2">
                                Width:
                                <input
                                    type="number"
                                    name="width"
                                    className="ml-2 w-16 border border-gray-300 rounded p-1"
                                />
                            </label>
                        </div>
                    )}
                    
                    {shape && shape.type === 'arc' && (
                        <div className="mt-4">
                            <h4 className="text-md font-semibold">Arc Properties</h4>
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