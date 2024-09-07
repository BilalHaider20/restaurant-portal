import React from 'react';
import LineLengthInput from './LineLengthInput';
import CustomArcEditor from './CustomArcEditor';
import { GrRotateLeft } from "react-icons/gr";

const InspectorPanel = ({ selectedShape, shapes, onLineLengthChange, onArcUpdate, coordinates, onCoordinateChange, onRotateRight, onScaleChange }) => {
    const shape = shapes.find(s => s.id === selectedShape);
    const scaleFactor = shape?.scaleFactor || 1;

    // Default coordinates when no shape is selected
    const defaultCoordinates = { x: 0, y: 0 };
    const currentCoordinates = selectedShape ? coordinates : defaultCoordinates;

    const handleScaleFactorChange = (e) => {
        const newScale = parseFloat(e.target.value);
        if (!isNaN(newScale)) {
            onScaleChange(newScale);
        }
    };

    return (
        <div className="w-[300px] text-gray-700 flex flex-col gap-1">
            <div className="p-4 mt-2 flex flex-col gap-1">
                <h3 className="text-2xl font-medium">Properties</h3>
                <h4 className="text-md font-semibold border-b border-divider-clr">Coordinates</h4>
                <div className="flex items-center gap-1">
                    <div className='flex flex-col justify-start'>
                        <label className="mr-2" htmlFor="xfield">
                            X
                        </label>
                        <input
                            type="number"
                            name="x"
                            value={currentCoordinates.x}
                            onChange={onCoordinateChange}
                            className=" w-full border border-gray-300 rounded p-1"
                            id="xfield"
                        />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <label className="" htmlFor="yfield">
                            Y
                        </label>
                        <input
                            type="number"
                            name="y"
                            value={currentCoordinates.y}
                            onChange={onCoordinateChange}
                            className="w-full border border-gray-300 rounded p-1"
                            id="yfield"
                        />
                    </div>
                </div>

                <h4 className="text-md font-semibold">Rotation</h4>
                <button
                    onClick={() => onRotateRight(selectedShape)}
                    className="flex flex-row items-center gap-2 justify-center mt-2 px-2 py-1 border border-divider-clr text-dark-text hover:bg-blue-600 hover:text-white rounded-md "
                >
                    <GrRotateLeft />
                    Rotate 90°
                </button>

                <h4 className="text-md font-semibold">Scale</h4>
                <label>
                    <input
                        type="number"
                        value={scaleFactor}
                        onChange={handleScaleFactorChange}
                        className="w-full border border-gray-300 rounded p-1 ml-2"
                        step="0.1"
                        min="0.1"
                    />
                </label>

                {shape && shape.type === 'line' && (
                    <div className="mt-4">
                        <h4 className="text-md font-semibold border-b border-divider-clr">Line Properties</h4>
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
                                className="ml-2 w-1/2 border border-gray-300 rounded p-1"
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
        </div>
    );
};

export default InspectorPanel;