import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])


    return (
        <div className="w-full bg-base-100">
            <div>
                <div className="w-3/4 p-5 bg-base-100 mx-auto">
                    <h1 className="text-center text-2xl md:text-4xl font-neon font-medium">Search By <span className="text-red-600">Car Brands</span> </h1>
                    <p className="md:text-center md:text-xl text-gray-700 mt-2">Eu delicata rationibus usu. Vix te putant utroque, ludus fabellas duo eu, his dico ut debet consectetuer</p>
                </div>
                <div className="grid bg-base-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-3/4 mx-auto gap-4 p-3">
                    {
                        brands.map(brand => <Brand key={brands.brand} brands={brand}></Brand>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Brands;