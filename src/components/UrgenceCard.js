import man from "../assets/man.png";

function UrgenceCard() {

    return (
        <div>

            <div className="card mb-3 mt-5" style={{ maxWidth: "90%", height: "300px" }}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Urgences</h1>
                            <h4>Lorem ipsum dolor sit</h4>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
                            </p>
                            <button className="btn btn-warning">Create a domaine</button>
                            <button className="btn btn-primary m-4">Donate</button>

                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingTop: "100px" }}>
                        <ul>
                            <li>
                                Contributor : 200
                            </li>
                            <li>
                                Goals : $2000
                            </li>
                            <li>
                                Collected : $2000
                            </li>
                            <li>
                                Restant : $2000
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span class="progress mt-5">
                <span className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="80"></span>
            </span>
        </div>
    )
}

export default UrgenceCard