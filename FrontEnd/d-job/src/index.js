import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import SignInEntreprise from './Pages/Entreprises/signInEntreprise'
import SignUpEntreprise from './Pages/Entreprises/signUpEntreprise';
import HomePageEntreprise from './Pages/Entreprises/homePageEntreprise'
import MesOffres from './Pages/Entreprises/mesOffres'
import SignInCandidat from './Pages/Candidats/signInCandidat'
import SignupCandidat from './Pages/Candidats/signUpCandidat'
import HomePageCandidat from './Pages/Candidats/homePageCandidat'
import Dashboard from './Pages/Candidats/srcDashBoard/views/Dashboard'
import WhoAreYou from './Pages/WhoAreYou'
import GenerateCv from './Pages/Candidats/generateCv'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <React.StrictMode>
    <Route path='/' exact render={props => <WhoAreYou {...props} />}/>
    <Route path='/sign-in-entreprise' exact render={props => <SignInEntreprise {...props} />} />
    <Route path='/sign-up-entreprise' exact render={props => <SignUpEntreprise {...props} />} />
    <Route path='/sign-in-candidat' exact render={props => <SignInCandidat {...props} />} />
    <Route path='/sign-up-candidat' exact render={props => <SignupCandidat {...props} />} />
    <Route path='/dashboard' exact render={props => <Dashboard {...props} />} />
    <Route path='/home-page-entreprise' exact render={props => <HomePageEntreprise {...props} />} />
    <Route path='/mes-offres' exact render={props => <MesOffres {...props} />} />
    <Route path='/generate-cv' exact render={props => <GenerateCv {...props} />} />
    <Route path='/home-page-candidat' exact render={props => <HomePageCandidat {...props} />} />
  </React.StrictMode>,
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
