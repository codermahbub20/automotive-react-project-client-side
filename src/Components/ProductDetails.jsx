import { Link, useLoaderData } from "react-router-dom";



const ProductDetails = () => {

    const details = useLoaderData()
    console.log(details)
    const { name, brand, type, price, description, photo } = details;

    return (
        <div>
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
                    <Link to={`/addCart`}><button className="btn mt-2 btn-accent">Add Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;