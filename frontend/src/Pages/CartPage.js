//this page will make an api call with the courses

// the page will display the title, price

//it will display the total of the courses

//it will have a proceed to checkout
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartElements from "../Components/CartElements";
import { useDispatch,useSelector } from 'react-redux'

// I am thinking to add most of this in the cart 

//check the course page and gain some inspiration



const Cart = () => {
    let location = useLocation();
   const { course } = location.state
     const cr = useSelector((state)=> state.cart.favoriteCourses)

    const [coursesCart, setCoursesCart] = useState([])
    const [total, setTotal] = useState(0)

 
    
   
    


      useEffect(()=> {
       async function fetchData() {
        const response = await fetch(`http://www.localhost:3500/api/trainee/getCartCourses?ids=${course}`);
        const data = await response.json();
        const courses = data// update this line
        if (!data) return <h2>no added courses</h2>
        if (courses)     setCoursesCart(courses)
      }
      fetchData();
      },[])



      useEffect(()=> {
        let totalPrice = coursesCart.reduce((accumulator, course) => accumulator + course.price, 0);
         setTotal(totalPrice);
      },[coursesCart])

   
  
//add the delete function 
      function deleteItem (id) {
        const index = coursesCart.findIndex((obj)=> obj._id===id)  
        if (index!== -1) {
          const updatedlist = [...coursesCart]
          updatedlist.splice(index, 1)
          setCoursesCart(updatedlist)
        }
      }

       
    return ( 
    <div class='shoppingcart flex'>

       <div className="w-3/4">
          <h1 className=" ml-5 font-bold">Shopping Cart</h1>
        <br></br>
        <CartElements
         courses = {coursesCart}
         deleteItem= {deleteItem}
        />
         <h2 className=" m-4"> Subtotal: {total}</h2>

      </div>
       
        <div className=" rounded-md bg-gray-100 h-5">
          <h2>Subtotal: {total}</h2>
          <button className=" bg-cyan-600 text-white rounded"> Proceed to Checkout</button>
        </div>
         

    </div> 
    );
}
 
export default Cart;