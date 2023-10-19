import About from "../About/About";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Choose from "../Choose/Choose";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <Brands></Brands>
            <About></About>
            <Choose></Choose>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;