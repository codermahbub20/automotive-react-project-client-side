
import Swal from "sweetalert2";



const MyCart = ({ cart , myCart,setMycart}) => {



    const {_id, photo, name, brand, price, user } = cart;



    const handleDelete = _id =>{
        console.log(_id)


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-shop-server-side-bgtjvybrl-mahbub1.vercel.app/cart/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                              )
                        const remaining = myCart.filter(prod => prod._id !== _id)
                        setMycart(remaining)
                    }
                })
            }
          })
    }

    return (
        <div>

            
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[100px]" src={photo} alt="Movie" /></figure>
                <div className="card-body ">
                    <h3 className="text-xl font-neon">Name: <span className="text-lg font-neon">{name}</span></h3>
                    <h2 className="card-title font-neon">Brand: <span>{brand}</span></h2>
                    <p className="text-xl font-neon">Price: <span>{price}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;