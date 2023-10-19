import { Link } from "react-router-dom";



const Brand = ({ brands }) => {
    const { photo, brand } = brands;
    return (
        <div>
            <Link to={`/details/${brand}`}>
                <div className="card hover:text-white hover:bg-red-400  bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Cars" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-xl font-neon lg:font-medium ">
                            <h1>{brand}</h1>
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brand;