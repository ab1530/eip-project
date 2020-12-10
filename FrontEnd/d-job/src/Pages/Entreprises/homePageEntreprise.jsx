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

import C from '../../assets/logo/logo_c.png';


import '../../assets/css/black-dashboard-react.css'

var tab = [1, C]

var candidat1 = [1, 'Compétences Principales:\n-JavaScript\n-React JS\n-Node JS\nVue JS\nAngular JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-Python\n-C++\n-C\n-Haskell']
var candidat2 = [2, 'Compétences Principales:\n-JavaScript\n-React JS\n-Node JS\nAngular JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-C++\n-C\n-Haskell']
var candidat3 = [3, 'Compétences Principales:\n-JavaScript\n-Ember JS\n-Vue JS\n-Node JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-Python\n-C\n-Haskell']
var candidat4 = [4, 'Compétences Principales:\n-JavaScript\n-React JS\n-Node JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\n-F#\n-Haskell']
var candidat5 = [5, 'Compétences Principales:\n-JavaScript\n-Angular JS\n-Node JS\n-HTML 5 \n-CSS 3\nCompétences Secondaires:\nSwift']
var candidat6 = [6, 'Compétences Principales:\n-JavaScript\n-Vue JS\n-Node JS\n-HTML 5 \n-CSS 3']


class HomePageEntreprise extends React.Component {
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



              
          {/* <div className="content">
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("../assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    -------------------------------------------------------
                    -------------------------------------------------------
                    -------------------------------------------------------
                    -------------------------------------------------------
                    -------------------------------------------------------
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col> 
            </div> */}
            
          <Row>
            <Col lg="4">
             {/*
                             Boutons avec les candidats                          */ }
              <Card className="card-rachid">
                <CardHeader>
                  <h5 className="card-category">Offre n°4: Dévelloppeur FullStack Javascript</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    6 Candidats
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Row>  
                    <button onClick={() => this.setBgChartData(candidat1[1])} class="btn btn-primary btn-rachid">Candidat 1</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(candidat2[1])} class="btn btn-primary btn-rachid">Candidat 2</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(candidat3[1])} class="btn btn-primary btn-rachid">Candidat 3</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(candidat4[1])} class="btn btn-primary btn-rachid">Candidat 4</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(candidat5[1])} class="btn btn-primary btn-rachid">Candidat 5</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(candidat6[1])} class="btn btn-primary btn-rachid">Candidat 6</button>
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
                    Compétences
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <h3>{this.state.competences.split('\n').map(str => <p>{str}</p>)}</h3>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg="4">
             {/*
                             Boutons d'interactions avec le candidat                          */ }
              <Card className="card-rachid">
                <CardHeader>
                  <h5 className="card-category"></h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    Communication avec le Candidat
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Proposer un test technique / mise en situation</button>
                  </Row>
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Envoyer un Message </button>
                  </Row>
                  <Row>  
                    <button class="btn btn-primary btn-rachid">Refuser La Candidature + Raison</button>
                  </Row>
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

export default HomePageEntreprise;
