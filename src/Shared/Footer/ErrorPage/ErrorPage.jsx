import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Link to="/"><button className="btn "><BsFillArrowLeftSquareFill className="w-7 h-7"></BsFillArrowLeftSquareFill>Go Back at Home</button></Link>
            <img className="w-screen h-screen" src="https://github.com/ProgrammingHero1/coffee-store-espresso-emporium/blob/main/images/404/404.gif?raw=true" alt="" />
        </div>
    );
};

export default ErrorPage;