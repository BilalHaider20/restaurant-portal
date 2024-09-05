import React, { useState, useEffect } from 'react';

const CustomArcEditor = ({ shape, onUpdate }) => {
    const [radius, setRadius] = useState(shape.radius);
    const [angle, setAngle] = useState(shape.angle);
    const [rotation, setRotation] = useState(shape.rotation);

    useEffect(() => {
        setRadius(shape.radius);
        setAngle(shape.angle);
        setRotation(shape.rotation);
    }, [shape]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numValue = parseFloat(value);

        switch (name) {
            case 'radius':
                setRadius(numValue);
                onUpdate({ ...shape, radius: numValue });
                break;
            case 'angle':
                setAngle(numValue);
                onUpdate({ ...shape, angle: numValue });
                break;
            case 'rotation':
                setRotation(numValue);
                onUpdate({ ...shape, rotation: numValue });
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <label>
                Radius:
                <input 
                    type="number" 
                    name="radius" 
                    value={radius} 
                    onChange={handleChange}
                    style={{ width: '60px', marginLeft: '5px', marginRight: '5px' }}
                />
            </label>
            <br />
            <label>
                Angle:
                <input 
                    type="number" 
                    name="angle" 
                    value={angle} 
                    onChange={handleChange}
                    style={{ width: '60px', marginLeft: '5px', marginRight: '5px' }}
                />
            </label>
            <br />
            <label>
                Rotation:
                <input 
                    type="number" 
                    name="rotation" 
                    value={rotation} 
                    onChange={handleChange}
                    style={{ width: '60px', marginLeft: '5px', marginRight: '5px' }}
                />
            </label>
        </div>
    );
};

export default CustomArcEditor;