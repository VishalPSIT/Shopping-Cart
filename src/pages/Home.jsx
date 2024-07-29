
import React, { useEffect, useState } from "react";

import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const  [loading , setLoading] = useState(false);
  const [posts , setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try{

      const res = await fetch(API_URL);
      const data= await res.json();
      
      setPosts(data);

    }catch(e){
      console.log("errooooorrrrr");
      // setPosts
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect (() => {
    fetchProductData();
  } , []);
  return (
  <div>
     
        {
          loading ? <Spinner/> : 
          posts.length > 0 ?
          (
            <div className="grid grid-cols-4 max-w-6xl mx-auto p-2 space-y-10 space-x-5">
              {
                posts.map((post) => {
                  
                  return <Product key={post.id} post= {post}/>
                })
              }
            </div>
          ) :
          <div className="flex justify-center items-center">
            <p>No data Found</p>
          </div>
        }
      
    

  </div>
);
};

export default Home;
