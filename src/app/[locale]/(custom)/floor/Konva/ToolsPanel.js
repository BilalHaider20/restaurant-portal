import React from 'react';
import useImage from 'use-image';
import lineImage from '../images/line.png';
import stairsImage from '../images/stairs.png';
import grassImage from '../images/grass.png';
import doorImage from '../images/door.png';
import curvedLineImage from '../images/curved-line.png';

const ToolIcon = ({ icon, onClick }) => (
    <div style={{ margin: '10px', cursor: 'pointer' }} onClick={onClick}>
        <img src={icon} alt="tool" width="50" />
    </div>
);

const ToolsPanel = ({ onSelectTool }) => {
    const [lineIcon] = useImage(lineImage);
    const [stairsIcon] = useImage(stairsImage);
    const [doorIcon] = useImage(doorImage);
    const [grassIcon] = useImage(grassImage);
    const [curvedLineIcon] = useImage(curvedLineImage);

    return (
        <div style={{ width: '80px', borderRight: '1px solid #ccc', padding: '10px' }}>
            <ToolIcon icon={lineIcon?.src} onClick={() => onSelectTool('line')} />
            <ToolIcon icon={stairsIcon?.src} onClick={() => onSelectTool('stairs')} />
            <ToolIcon icon={doorIcon?.src} onClick={() => onSelectTool('door')} />
            <ToolIcon icon={grassIcon?.src} onClick={() => onSelectTool('grass')} />
            <ToolIcon icon={curvedLineIcon?.src} onClick={() => onSelectTool('arc')} />
        </div>
    );
};

export default ToolsPanel;