

const Choose = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto text-center">
                <h1 className="text-2xl md:text-5xl font-neon">Why Chose Us ?</h1>
                <hr />
            </div>

            <div className="w-3/4 mt-10 gap-3 lg:flex mx-auto ">
                    <div className="flex-1 space-y-5">
                        <h1 className="text-2xl font-medium md:text-4xl font-neon">Best Valued deals you will ever find</h1>
                        <p className="md:w-[550px] text-xl font-neon">Discover the best deals you will ever find with our unbeatable offers.we are dedicated to providing you with the best value for your money. so you can enjoy top-quality service and products without breaking the bank. our deals are designed to give you the ultimate rearing experiance . so do not miss out on your chance to save big. </p>
                        <button className="btn mb-4 btn-accent">Find Deatils</button>
                    </div>

                    <div className="">
                        <img className="h-[300px] sm:mt-4 rounded-lg" src="https://www.hdcarwallpapers.com/download/bugatti_chiron_sport-2560x1440.jpg" alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Choose;