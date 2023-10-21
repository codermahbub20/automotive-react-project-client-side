import { Link } from "react-router-dom";


const SubProduct = ({ item }) => {
    const { name, photo, brand, type, price, rating, _id } = item;
    return (
        <div className="mb-4 mt-5">
            <div className="card text-xl  lg:w-[350px] font-neon font-medium text-center  bg-base-300 shadow-xl">
                <figure><img className="h-36" src={photo} alt="Car Photo" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-medium font-neon text-center">Name: {name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <div className="rating justify-center">
                        <input type="radio" name="rating-2" className="mask  mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions justify-center">

                        <Link to={`/productDetails/${_id}`}><button className="btn btn-accent">Details</button></Link>

                        <Link to={`/updateproduct/${_id}`}><button className="btn btn-accent">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
// /productDetails/:id

export default SubProduct;