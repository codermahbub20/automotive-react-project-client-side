import Swal from "sweetalert2";


const AddProduct = () => {


    const handleAddProduct = e => {
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
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'YAY...!! Product Added Successfully Done !!',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
    }

    return (
        <div>
            <div>
                <div className='min-h-screen' style={{ backgroundImage: `url(https://carspot.scriptsbundle.com/transparent-sidbar/wp-content/uploads/sites/29/2018/04/foo-1.png)` }}>
                    <div className='w-3/4 mx-auto'>

                        <div className='bg-[#F4F3F0] p-10 space-y-4'>
                            <h1 className='text-4xl pt-6   flex justify-center '>Add New Product</h1>
                            <p className='text-center lg:mx-auto md:w-[600px] lg:w-[700px]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                            <form onSubmit={handleAddProduct}>
                                <div className='md:flex md:px-24'>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text   text-xl">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Product name" className="input input-bordered" name='name' required />

                                    </div>
                                    <div className="form-control  md:ml-4 md:w-1/2">
                                        <label className="label">
                                            <span className="label-text   text-xl">Brand Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Brand Name" className="input input-bordered" name='brand' required 
                                            
                                        />

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
                                        <input type="number" placeholder="Enter Rating" className="input input-bordered" min="1" max="5" name='rating' required />
                                    </div>
                                </div>
                                <div className="form-control md:px-24  w-full">
                                    <label className="label">
                                        <span className="label-text   text-xl">Product Photo</span>
                                    </label>
                                    <input type="text" placeholder="Enter coffee Photo Url" className="input input-bordered" name='photo' required />
                                </div>
                                <div className="form-control md:px-24  w-full">
                                    <input className='btn mt-3 w-full mx-auto  hover:bg-[#56c5bb] bg-[#56c5bb]' type="submit" value="Add Product" />
                                </div>

                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;