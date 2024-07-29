import React, { /*useState*/ } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add , remove} from '../redux/Slices/cartSlice'
const Product = ({post}) => {
  
  //const [selected , setselected] = useState(true);
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addTocart = () => {
    dispatch(add(post));
    toast.success("item added SuccessFully");
  }
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("item removed from cart");
  }
  
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div>
        <img src={post.image} alt="" />
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      {
        cart.some((p) => p.id == post.id) ? 
        (
          <button onClick={removeFromCart}>
            Remove Item
          </button>
        ):(
          <button onClick={addTocart}>
            Add to Cart
          </button>
        )
      }

    </div>
  )
}

export default Product