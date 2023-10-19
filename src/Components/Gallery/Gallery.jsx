
const Gallery = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto text-center">
                <h1 className="text-2xl md:text-5xl font-neon font-medium py-5">Our Car Photo Gallery</h1>
            </div>
            <div>


                <div className="grid grid-cols-2 md:grid-cols-3 mb-5 gap-2 w-3/4 mx-auto">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://demo.vehica.com/wp-content/uploads/2020/08/2-4.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-full max-w-full rounded-lg" src="https://demo.vehica.com/wp-content/uploads/2020/02/1-55-1024x683.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://demo.vehica.com/wp-content/uploads/2020/09/car-red.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://demo.vehica.com/wp-content/uploads/2020/06/mrec.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://demo.vehica.com/wp-content/uploads/2020/08/5.jpg" alt=""/>
                    </div>
                   
                </div>


            </div>
        </div>
    );
};

export default Gallery;