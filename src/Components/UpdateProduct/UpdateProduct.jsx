

const UpdateProduct = () => {

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const product = { name, brand, type, price, description, rating, photo }

        console.log(product)

        
    }

    return (
        <div>
            <div>
                <div>
                    <div className='min-h-screen' style={{ backgroundImage: `url(https://carspot.scriptsbundle.com/transparent-sidbar/wp-content/uploads/sites/29/2019/01/services-bg.png)` }}>
                        <div className='w-3/4 mx-auto '>

                            <div className='bg-[#F4F3F0] p-10  space-y-4'>
                                <h1 className='lg:text-4xl text-3xl pt-6 font-rancho flex justify-center '>Update Existing Product Details</h1>
                                <p className='text-center lg:mx-auto md:w-[530px] lg:w-[700px]'>Certainly, we can help you update the description of a car. However, I need more specific information about the car youd like to describe. .</p>

                                <form onSubmit={handleUpdateProduct}>
                                    <div className='md:flex md:px-24'>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text   text-xl">Name</span>
                                            </label>
                                            <input type="text" placeholder="Enter Product name" className="input input-bordered" name='name' required />

                                        </div>
                                        <div className="form-control md:ml-4 md:w-1/2">
                                            <label className="label">
                                                <span className="label-text   text-xl">Brand Name</span>
                                            </label>
                                            <input type="text" placeholder="Enter Brand Name" className="input input-bordered" name='brand' required />
                                        </div>
                                    </div>


                                    <div className='md:flex md:px-24'>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text   text-xl">Product Type</span>
                                            </label>
                                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered" name='type' required />

                                        </div>
                                        <div className="form-control md:ml-4 md:w-1/2">
                                            <label className="label">
                                                <span className="label-text   text-xl">Product Price</span>
                                            </label>
                                            <input type="text" placeholder="Enter coffee taste" className="input input-bordered" name='price' required />
                                        </div>
                                    </div>
                                    <div className='md:flex md:px-24'>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text   text-xl">Description</span>
                                            </label>
                                            <input type="text" placeholder="Enter Short description" className="input input-bordered" name='description' required />

                                        </div>
                                        <div className="form-control md:ml-4 md:w-1/2">
                                            <label className="label">
                                                <span className="label-text   text-xl">Product Rating</span>
                                            </label>
                                            <input type="text" placeholder="Enter Rating" className="input input-bordered" name='rating' required />
                                        </div>
                                    </div>
                                    <div className="form-control md:px-24  w-full">
                                        <label className="label">
                                            <span className="label-text   text-xl">Product Photo</span>
                                        </label>
                                        <input type="text" placeholder="Enter coffee Photo Url" className="input input-bordered" name='photo' required />
                                    </div>
                                    <div className="form-control md:px-24  w-full">
                                        <input className='btn mt-3 w-full mx-auto  hover:bg-[#56c5bb] bg-[#56c5bb]' type="submit" value="Update Product" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;