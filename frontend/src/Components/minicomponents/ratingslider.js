import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


import { useDispatch } from 'react-redux';

import {postmaxrating, postminrating} from '../../redux/Slices/Slices/coors'


// should this component access the course rating value?


const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
//   margin: {
//     height: theme.spacing(3),
//   },
}));

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
  ];
function valuetext(value) {
  return `${value}`;
}

const DiscreteSlider = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 5]); // default values for minimum and maximum price
  const marks = [{ value: 0, label: '0' }, { value: 5, label: '5' }];

  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    dispatch(postminrating(newValue[0]));
    dispatch(postmaxrating(newValue[1]));
  };


  return (
    <div>
       <Typography id="discrete-slider-custom" gutterBottom>
            Course Rating
          </Typography>
      <Slider
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="range-slider"
        min={0}
        max={5}

        defaultValue={1}
        step={0.1}

        marks={marks}
        valueLabelDisplay="auto"
       getAriaValueText={valuetext}

      />
    </div>
  );
}
export default DiscreteSlider;
