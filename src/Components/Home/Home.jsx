import About from "../About/About";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <Brands></Brands>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;