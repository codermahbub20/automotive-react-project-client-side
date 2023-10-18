import { Link } from "react-router-dom";



const Brand = ({ brand }) => {
    const { photo, Name } = brand;
    return (
        <div>
            <Link>
                <div className="card hover:text-white hover:bg-red-400  bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-xl font-neon font-medium ">
                            <h1>{Name}</h1>
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brand;