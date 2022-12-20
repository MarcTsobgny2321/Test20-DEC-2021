import logo from "../assets/logo.png";
import CardProject from "./CardProject";
function ProjectSection() {

    return (
        <div >
            <hr></hr>
            <h1>Projets</h1>
            <h6>Recent and Ongoing project</h6>
            <p className="col-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
            </p>
            <div className="row">


           
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            </div>
            
        </div>
    )
}

export default ProjectSection