import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import myImage from '../images/coffee.png'

export default function MediaCard({ course }) {
  return (
    <Card key={course.id} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={myImage} title={course.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.subject}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/courses/${course._id}`}>
          <Button size="small">Learn More</Button>
        </Link>       
      </CardActions>
    </Card>
  );
}
 