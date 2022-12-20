import sante from "../assets/sante.jpeg";
import avatar from "../assets/avatar.jpg";

function CardProject() {

    return (
        <div className="card my-4" style={{ width: "18rem", marginRight: "15px" }}>
            <img src={sante} className="card-img-top" alt="..." />
            <p className="text-primary">Medical </p>
            <div className="card-body">
                <h5 className="card-title">Paying for the care of children with cancer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="progress my-2">
                    <span className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="80"></span>
                </span>
                <div className="row">

                    <div className="col py-2">

                        <img src={avatar} height="40px" width="30%" className="rounded-circle" />
                        Toto Le Big G
                    </div>
                </div>

                <div className="row">

                    <div className="col-4">
                        <a href="#" className="btn btn-warning">Go....</a>

                    </div>
                    <div className="col-8 ">

                        <a href="#" className="btn btn-primary" style={{ width: "100%" }}>Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProject