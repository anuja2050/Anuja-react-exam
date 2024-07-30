import { Link } from "react-router-dom";


export default function () {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#" to="">TV-Showroom</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#" to="">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#" to="register">Add TV</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#" to="show">Show TV List</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
