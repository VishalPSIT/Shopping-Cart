import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price , 0));
  },[cart,setTotalAmount])
  return (
    <div>

      {
        cart.length > 0 ?( 
            <div>
              
              <div>
              {
                cart.map((item , index) => {
                  return <CartItem key={item.id} item = {item} itemIndex = {index} />
                })
              } 
              </div>
              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p><span>
                    Total Items : {cart.length}
                  </span></p>
              </div>

              <div>
                <p>Total Amount : {totalAmount}</p>
              </div>
              
            </div>
        ):(
          <div>
            <h1>Cart Empty</h1>
            <Link to= '/'>
              <button>
                Shop now
              </button>
            </Link>
          </div>
        )
      }

    </div>
  )
}

export default Cart;