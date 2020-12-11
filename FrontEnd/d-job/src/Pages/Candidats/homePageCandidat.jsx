import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
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

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../../variables/charts";

var tab = ["Dévelloppeur FullStack Javascript\n Le candidat aura pour tache de créer une page de\nformulaire pour l'ajout de groupe et de compte RH\n sur la plateforme.\nIl aura aussi pour tâche de retravailler l'API\n de sorte qu'elle soit adaptée à ces \nformulaires.\nDurée de la mission 1 semaine\nGratification: 300€/jour", 
"Dévelloppeur Front-End React JS\n Le candidat aura pour mission de réparer tous \nles boutons du site suite à un bug. \nDurée de la mission: 3-5 jours\nGratification: 220€/jour", 
"Dévelloppeur Back-End NodeJS\nLe candidat devra ajouter la connexion à l'API Google et Facebook\nDurée de la mission: 2 jours\nGratification: 260€/jour"]

class HomePageCandidat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competences: tab[0],
      i: 0
    };
  }
  setBgChartData = name => {
    this.setState({
      competences: name,
      i: 1
    });
  };


  render() {
    return (
      <>
        <div className="content">
          <Row>
            
            <Col lg="4">
              <Card className="card-rachid">
              <div className="chart-area">
                    <h3>{this.state.competences.split('\n').map(str => <p>{str}</p>)}</h3>
                  </div>
              <Row>  
                    <button onClick={() => this.setBgChartData(tab[2])}class="btn btn-primary">Dislike</button>
                  </Row>
                  <Row>  
                    <button onClick={() => this.setBgChartData(tab[1])}class="btn btn-primary">Like</button>
                  </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default HomePageCandidat;
