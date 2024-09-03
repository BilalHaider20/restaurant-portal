import React from 'react'
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";



function valuetext(value) {
    return `${value}K`;
  }
const PriceRangeSlider = () => {
    
    const [value, setValue] = React.useState([96, 350]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => "Price range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    valueLabelFormat={valuetext}
                    min={96}
                    max={365}
                    sx={{
                        '& .MuiSlider-thumb': {
                            bgcolor: 'white',
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', 
                        },
                        '& .MuiSlider-track': {
                            bgcolor: 'primary.main', 
                        },
                        '& .MuiSlider-rail': {
                            bgcolor: 'lightgray',
                        },
                        '& .MuiSlider-valueLabel': {
                            bgcolor: 'white', 
                            color: 'black',   
                            borderRadius: '4px', 
                            padding: '4px', 
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', 
                        },
                    }}
                />
            </Box>
        </div>
    )
}

export default PriceRangeSlider