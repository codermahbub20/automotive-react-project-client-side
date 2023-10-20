

const SubProduct = ({ item }) => {
    const { name, photo,brand,type,price,rating } = item;
    return (
        <div className="mb-4 mt-5">
            <div className="card text-xl  lg:w-[350px] font-neon font-medium text-center  bg-base-300 shadow-xl">
                <figure><img className="h-36" src={photo} alt="Car Photo" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-medium font-neon text-center">Name: {name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Ratings: {rating}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent">Details</button>
                        <button className="btn btn-accent">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubProduct;