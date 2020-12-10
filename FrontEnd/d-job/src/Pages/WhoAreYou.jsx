import React from 'react'
import { Row } from 'reactstrap';
import '../assets/css/black-dashboard-react.css'

export default function WhoAreYou() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/sign-in-candidat">Offres d'emploi <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Formation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Actualité</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Qui sommes nous?</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div class="form-group">
            <h1 class="text-center">D-JOB</h1>
                <Row>
                <label class="col-md-4 control-label" for="singlebutton"></label>
                <div class="col-md-4 text-center"> 
                <button id="singlebutton" name="singlebutton" class="btn btn-primary btn-rachid" onClick={(e) => {
      e.preventDefault();
      window.location.href='/sign-in-candidat';
      }}>Candidat</button> 
                    <button id="singlebutton" name="singlebutton" class="btn btn-primary btn-rachid" onClick={(e) => {
      e.preventDefault();
      window.location.href='/sign-in-entreprise';
      }}>Entreprise</button> 
                </div>
                </Row>
            </div>
        </div>
    );
}

// .btn-rachid {
//     padding: 500px 115px;
//     font-size: 0.75rem;
//     line-height: 1.35;
//     border-radius: 0.25rem; 
//   }