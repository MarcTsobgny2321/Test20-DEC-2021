import man from "../assets/man.png";

function CartF() {

	return (
		<div className="card mb-3 mt-5" style={{ maxWidth: "90%" , height:"400px"}}>
			<div className="row g-0">
				<div className="col-md-8">
					<div className="card-body">
						<h1 className="card-title">Help peaople and startup</h1>
						<h4>Charity and  Innovation</h4>
						<p className="card-text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ut voluptate debitis eligendi quia quo consequatur quos magni laudantium eius, nesciunt animi et odio provident maiores laboriosam itaque consectetur modi!
						</p>
						<button className="btn btn-warning">Create a domaine</button>
						<button className="btn btn-primary m-4">Donate</button>

					</div>
				</div>
				<div className="col-md-4">
					{/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
					<img src={man} height="100%"/>
				</div>
			</div>
		</div>
	)
}

export default CartF