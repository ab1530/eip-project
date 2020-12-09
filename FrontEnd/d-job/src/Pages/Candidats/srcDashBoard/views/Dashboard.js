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

import SignInCandidat from '../../signInCandidat'

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts.js";
import '../assets/css/black-dashboard-react.css'

var tab = ["C", "C++", "JS"]

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
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
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>



              
          <Row>
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
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Infos</h5>
                      <CardTitle tag="h2">Likes</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Mon Espace
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          // className="btn-simple"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2"
                          })}
                          // onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Paramètres
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3"
                          })}
                          // onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Logout
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Matchs</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    70
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Me</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    Compétences
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {/* <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    /> */}
                    {/* {tab} */}
                    {/* <div key={tab}>
                 <dt>{tab}</dt> */}
                 <dd>{tab.join("\n")}</dd>
                 <hr></hr>
                 {/* </div> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Offres acceptées</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 27
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              {/* <Card className="card-tasks">
                <SignInCandidat></SignInCandidat> 
                </CardBody> */}
              {/* </Card> */}
            </Col>
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Détails des Matchs</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Entreprise</th>
                        <th>Poste</th>
                        <th>Pays</th>
                        <th>Ville</th>
                        <th className="text-center">Salaire</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SFR</td>
                        <td>Développeur Front-End React js</td>
                        <td>France</td>
                        <td>Paris 8</td>
                        <td className="text-center">46,738€</td>
                      </tr>
                      <tr>
                        <td>Epitech Paris</td>
                        <td>Assistant Pédagogique</td>
                        <td>France</td>
                        <td>Kremlin Bicêtre</td>
                        <td className="text-center">42,000€</td>
                      </tr>
                      <tr>
                        <td>La Poste</td>
                        <td>Développeur Front-End VueJs</td>
                        <td>France</td>
                        <td>Evreux</td>
                        <td className="text-center">56,142€</td>
                      </tr>
                      <tr>
                        <td>D Job</td>
                        <td>Développeur Full Stack</td>
                        <td>France</td>
                        <td>Evry</td>
                        <td className="text-center">42,738€</td>
                      </tr>
                      <tr>
                        <td>BNP Paribas</td>
                        <td>Développeur Front-End Mobile Swift</td>
                        <td>France</td>
                        <td>Creteil</td>
                        <td className="text-center">41,738€</td>
                      </tr>
                      <tr>
                        <td>Microsoft</td>
                        <td>Développeur Back-End C#</td>
                        <td>France</td>
                        <td>Le Canal</td>
                        <td className="text-center">53,384€</td>
                      </tr>
                      <tr>
                        <td>MH Paris</td>
                        <td>Développeur Web Wordpress</td>
                        <td>France</td>
                        <td>Paris 12</td>
                        <td className="text-center">31,889€</td>
                      </tr>
                      <tr>
                        <td>BABS Industrie</td>
                        <td>Scrum Master</td>
                        <td>France</td>
                        <td>Courbevoie</td>
                        <td className="text-center">66,331€</td>
                      </tr>
                      <tr>
                        <td>SNCF</td>
                        <td>Développeur Mobile Front-End Kotlin</td>
                        <td>France</td>
                        <td>Nanterre</td>
                        <td className="text-center">36,738€</td>
                      </tr>
                      <tr>
                        <td>Gares et Connexions</td>
                        <td>Développeur Mobile React Native</td>
                        <td>France</td>
                        <td>Creil</td>
                        <td className="text-center">49,738€</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
