import React from 'react';
import squareTableImage from '../images/square-table.png';
import roundTableImage from '../images/round-table.png';
import Image from 'next/image';


const ToolIcon = ({ icon, onClick, label }) => (
    <div 
        style={{ 
            margin: '10px', 
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} 
        onClick={onClick}
    >
        <Image src={icon} alt={label} width="50" height="50" />
        <span style={{ fontSize: '12px', marginTop: '5px' }}>{label}</span>
    </div>
);

const ToolsPanelPage2 = ({ onSelectTool }) => {
    return (
        <div style={{ 
            width: '100px', 
            borderRight: '1px solid #ccc', 
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h3 style={{ marginBottom: '20px' }}>Tables</h3>
            <ToolIcon 
                icon={squareTableImage} 
                onClick={() => onSelectTool('square-table')} 
                label="Square Table"
            />
            <ToolIcon 
                icon={roundTableImage} 
                onClick={() => onSelectTool('round-table')} 
                label="Round Table"
            />
        </div>
    );
};

export default ToolsPanelPage2;