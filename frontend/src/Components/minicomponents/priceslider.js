import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';

import {postmaxprice, postminprice, postmaxrating, postminrating} from '../../features/coors'

// // should this component access the course rating value?


const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },

}));



const marks = [
    { value: 0, label: '0' },
    { value: 40, label: '40' },
    { value: 80, label: '80' },
    { value: 120, label: '120' },
    { value: 160, label: '160' },
    { value: 200, label: '200' },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }

const DiscreteSlider = () => {
  const [value, setValue] = React.useState([0, 200]); // default values for minimum and maximum price
  const marks = [{ value: 0, label: '0' }, { value: 200, label: '200' }];
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    dispatch(postminprice(newValue[0]));
    dispatch(postmaxprice(newValue[1]));
  };

  return (
   
    <div>
       <Typography id="discrete-slider-custom" gutterBottom>
            Prices
          </Typography>
      <Slider
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="range-slider"
        min={0}
        max={200}

        defaultValue={1}
        step={0.1}

        marks={marks}
        valueLabelDisplay="auto"
       getAriaValueText={valuetext}

      />
    </div>
  );
};

export default DiscreteSlider;
