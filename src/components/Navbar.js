import logo from "../assets/logo.png";

function Navbar(text){
    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-light">


        <img src={logo} width="10%" />
        <a class="navbar-brand p-0" href="#">

            <span className="d-flex flex-column m-0 p-0">
                FirstCrouwdFund
            </span>
            <span className="small text-muted m-0 p-0" style={{ fontSize: 12 }}>
                croudFund & Chatrity
            </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav ">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projets</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">success story</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link border border-warning text-warning" href="#">
                        My Account</a>

                </li>
            </ul>

        </div>
    </nav>


    )
}

export default Navbar;