import logo from "../assets/logo.png";
import '../styles/Banner.css'
import Navbar from "./Navbar";
function Banner() {

    return (
        <div className="d-flex flex-column">
            <div className="d-flex p-2 border-bottom border-dark">

                <span className="col-8 d-flex justify-content-start">Welcome to FirstcrowdFund charity Agency</span>
                <span class="col-4 d-flex justify-content-end"> <span> 65588779900 </span> <span>contact@Gmail.com</span> </span>
            </div>
        <Navbar/>
        </div>)
}

export default Banner