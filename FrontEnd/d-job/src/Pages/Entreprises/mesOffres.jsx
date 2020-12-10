/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardFooter,
  CardText,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../../variables/charts.js";

import '../../assets/css/black-dashboard-react.css'

var tab = ["C", "C++", "JS"]

var candidat1 = [1, 'Compétences Principales:\n-JavaScript\n-React JS\n-Node JS\nVue JS\nAngular JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-Python\n-C++\n-C\n-Haskell']
var candidat2 = [2, 'Compétences Principales:\n-JavaScript\n-React JS\n-Node JS\nAngular JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-C++\n-C\n-Haskell']
var candidat3 = [3, 'Compétences Principales:\n-JavaScript\n-Ember JS\n-Vue JS\n-Node JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-Python\n-C\n-Haskell']
var candidat4 = [4, 'Compétences Principales:\n-JavaScript\n-React JS\n-Node JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-F#\n-Haskell']
var candidat5 = [5, 'Compétences Principales:\n-JavaScript\n-Angular JS\n-Node JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\nSwift']
var candidat6 = [6, 'Compétences Principales:\n-JavaScript\n-Vue JS\n-Node JS\n-HTML 5 \n-CSS 3']

var Offre4 = "Offre n°4: Dévelloppeur FullStack Javascript\n Le candidat aura pour tache de créer une page de\nformulaire pour l'ajout de groupe et de compte RH\n sur la plateforme.\nIl aura aussi pour tâche de retravailler l'API\n de sorte qu'elle soit adaptée à ces \nformulaires.\nDurée de la mission 1 semaine\nGratification: 300€/jour"

class MesOffres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      competences: "",
      wichCandidat:0
    };
    this.setBgChartData.bind(this)
  }
  setBgChartData = (name) => {
    this.setState({
      competences: name,
    });
  };

//   changeCompetences = e => {
//       this.setState({
//           competences: e
//       });
//   };

  render() {
    return (
      <>

      <div className="content">


      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/sign-in-candidat">Boite de réception <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Poster une offre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Entretien</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mon compte</a>
                        </li>
                    </ul>
                </div>
            </nav>



              
            
          <Row>
            <Col lg="4">
             {/*
                             Boutons avec les candidats                          */ }
              <Card className="card-rachid">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    6 Offres
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Offre 1</button>
                  </Row>
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Offre 2</button>
                  </Row>
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Offre 3</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(Offre4)}class="btn btn-primary btn-rachid">Offre 4</button>
                  </Row>
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Offre 5</button>
                  </Row>
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Offre 6</button>
                  </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
                         {/*
                             Boutons avec les competences                          */ }
            <Col lg="4">
              <Card className="card-rachid2">
                <CardHeader>
                  <h5 className="card-category">Me</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    Description
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <h3>{this.state.competences.split('\n').map(str => <p>{str}</p>)}</h3>
                  </div>
                   <div display='none'>
                  <button id="singlebutton" name="singlebutton" class="btn btn-primary btn-rachid" onClick={(e) => {
      e.preventDefault();
      window.location.href='/home-page-entreprise';
      }}>Voir les Candidats</button>
      </div> 
                </CardBody>
              </Card>
            </Col>


          </Row>
          
        </div>
      </>
    );
  }
}

export default MesOffres;
