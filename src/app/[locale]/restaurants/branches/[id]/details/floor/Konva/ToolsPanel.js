import React from 'react';
import Image from 'next/image';
import lineImage from '../images/line.png';
import stairsImage from '../images/stairs.png';
import grassImage from '../images/grass.png';
import doorImage from '../images/door.png';
import curvedLineImage from '../images/curved-line.png';

const ToolIcon = ({ icon, onClick }) => (
    <div style={{ margin: '10px', cursor: 'pointer' }} onClick={onClick}>
        <Image src={icon} alt="tool" width="50" />
    </div>
);

const ToolsPanel = ({ onSelectTool }) => {
    return (
        <div className='w-[200px] border border-r-divider-clr p-3'
        >
            <h2>Select Tools</h2>
            <ToolIcon icon={lineImage} onClick={() => onSelectTool('line')} className="border border-divider-clr rounded-md bg-white"/>
            <ToolIcon icon={stairsImage} onClick={() => onSelectTool('stairs')} />
            <ToolIcon icon={doorImage} onClick={() => onSelectTool('door')} />
            <ToolIcon icon={grassImage} onClick={() => onSelectTool('grass')} />
            <ToolIcon icon={curvedLineImage} onClick={() => onSelectTool('arc')} />
        </div>
    );
};

export default ToolsPanel;