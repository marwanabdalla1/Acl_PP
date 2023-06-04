
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { CircularProgress } from "@mui/material";
import useFetch from '../functions/useFetch';
import { Trash } from 'tabler-icons-react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useDispatch,useSelector } from 'react-redux'
import { removeCourse } from '../redux/Slices/Slices/cartCount';



const CartElements = (props) => {
    const dispatch = useDispatch()

  if (!props.courses) return <h2>YourCart is empty</h2>


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const cartElements = props.courses.map((cartCourse, index) => (
        <div key={cartCourse._id} class=' w-2/3 ml-5'>
          <Item>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image
        src="https://thumbs.dreamstime.com/b/magnetic-compass-world-map-travel-geography-navigation-tou-magnetic-compass-world-map-travel-geography-navigation-tourism-123256998.jpg"
        height={160}
        alt="Norway"
      />
    </Card.Section>

    <Group position="apart" mt="md" mb="xs">
      <Text weight={500}>{cartCourse.title}</Text>

      <div class=' flex flex-col gap-3'>
      <Badge color="black" variant="light">
      {cartCourse.price}
      </Badge>

       <Trash className=" ml-3 cursor-pointer"
          size={24}
          strokeWidth={2}
          color={'black'}
          onClick={()=>{
            dispatch(removeCourse(cartCourse._id))
            props.deleteItem(cartCourse._id)
          }
        }
        />
      </div>
   

    </Group>

    {/* <Text size="sm" color="dimmed">
      With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway
      {course.description}
    </Text> */}

    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
      Book classic tour now
    </Button>
  </Card>

    
        </Item>
      </div>
      ));

    return ( <div>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
           
          {cartElements}
          </Stack>
        </Box>
    </div> );
}
 
export default CartElements;