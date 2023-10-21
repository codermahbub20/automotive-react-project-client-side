import { useEffect, useState } from "react";

import MyCart from "./MyCart";

const AddCart = () => {

    // const myCart = useLoaderData()
    
    // console.log(myCart)

    const [myCart,setMycart] = useState([])
    
    

    useEffect(()=>{
        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(data => {
            setMycart(data)
        })
    },[])

    console.log(myCart)

    return (
        <div className="grid lg:grid-cols-2 md:w-3/4 mx-auto gap-5 md:p-5">
          {
            myCart.map(cart =><MyCart key={cart._id} myCart={myCart} setMycart={setMycart} cart={cart}></MyCart> )
          }
        </div>
    );
};

export default AddCart;