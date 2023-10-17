import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

   const[brands,setBrands] = useState([])
    useEffect(()=>{
    fetch('brand.json')
    .then(res => res.json())
    .then(data => setBrands(data))
   },[])


    return (
        <div>
            <h1 className="text-5xl font-neon mt-5 text-center ">Find Your Perfect Cars</h1>

            <div className="w-3/4 grid md:grid-cols-3 mx-auto gap-5 mb-5">

                {
                    brands.map(brand => <Brand  brand={brand}></Brand>)
                }

            </div>
        </div>
    );
};

export default Brands;