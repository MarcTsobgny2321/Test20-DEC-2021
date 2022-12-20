
import CardProject from "./CardProject"
import man from "../assets/andicape2.jpg"
import Banner from "./Banner"
function ProjectDetail() {

    return (
        <div className="mt-5">
            <hr></hr>

            <Banner />

            <header className="bg-primary text-center " style={{ height: "150px", paddingTop: "40px" }}>
                <h1 className="text-white">  Project Details</h1>
            </header>



            <div className="card mb-3 mt-5" style={{ maxWidth: "90%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                        <img src={man} height="75%" width="100%" className="rounded" />

                        <div className="d-flex justify-content-between py-1">
                            <img src={man} height="90px" width="31%" className="rounded" />
                            <img src={man} height="90px" width="31%" className="rounded" />
                            <img src={man} height="90px" width="31%" className="rounded" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="mb-4">

                                <img src={man} className="rounded-circle" alt="..." height="40px" />
                                <span className=""> Toto le grand</span>
                            </div>
                            <h4 className="card-title">Charity and innovation for peapole In Yaounde</h4>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <span class="progress mt-5">
                                <span className="progress-bar bg-warning" role="progressbar" style={{ width: "48%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="80"></span>
                            </span>
                            <div className="d-flex justify-content-between py-2">
                                <p>$25000999</p>
                                <p>45 Days to go</p>
                                <button className="btn btn-primary ">Fund this project</button>
                            </div>

                            <h5>Projet note</h5>

                            <div className="p-3" style={{ backgroundColor: "rgb(0,0,0,0.1)" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <hr className="m-4 ">
            </hr>

            <div className="row">

                <div className="col-8">


                    <div className="card" style={{}}>
                        <div className="card-body">

                            <div className="d-flex justify-content-between py-4 mx-5">

                                <a className="text-primary">About project </a>
                                <a>Updates</a>
                                <a>Black list</a>
                                <a>Reviews (845)</a>
                            </div>
                            <p className="card-text">
                                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <p className="card-text">
                                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <p className="card-text">
                                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <img src={man} className="card-img-top" style={{ width: "100%", height: "15rem" }} />
                            <p className="card-text">
                                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <p className="card-text">
                                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <p className="card-text">
                                Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                        </div>
                    </div>


                </div>
                <div className="col-4">
                    <CardProject/>
                    <CardProject/>

                </div>
            </div>
        </div>

    )
}

export default ProjectDetail