import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";



const ProductDetails = () => {

   const {user} =  useContext(AuthContext)
    console.log(user.email)
    const handleCartAdd = (photo,brand,name,price,user) =>{
        const myData = {photo,brand,name,price,user}
        fetch(`http://localhost:5000/cart`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'YAY...!! Product Added in Cart Successfully Done !!',
                    icon: 'success',
                    confirmButtonText: 'Great'
                })
            }
        })
    }


    const details = useLoaderData()
    console.log(details)
    const { name, brand, type, price, description, photo } = details;

    return (
        <div>
            <div className="w-3/4 mx-auto">
                <h1 className="text-2xl font-medium font-neon">Product Details For : {name}</h1>
            </div>
            <div className="w-3/4 p-5 gap-5 grid grid-cols-1 lg:grid-cols-2 mx-auto">

                <div>
                    <img src={photo} alt="" />
                </div>
                <div className="space-y-1">
                    <h1 className="text-2xl font-medium font-neon"><span className="font-bold text-blue-600">Name:</span> {name}</h1>
                    <h1 className="text-2xl font-medium font-neon"><span className="font-bold text-blue-600">Brand Name:</span> {brand}</h1>
                    <h1 className="text-2xl font-medium font-neon"><span className="font-bold text-blue-600">Price:</span> {price} BDT</h1>
                    <h1 className="text-2xl font-medium font-neon"><span className="font-bold text-blue-600">Type:</span> {type}</h1>
                    <p className="text-xl font-neon "><span className="font-bold text-blue-600">Details:</span>  {description}</p>

                    <button onClick={()=>handleCartAdd(photo,brand,name,price,user.email)} className="btn mt-2 btn-accent">Add Cart</button>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;