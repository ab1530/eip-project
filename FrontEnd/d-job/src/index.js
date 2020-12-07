import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import SignInEntreprise from './Pages/Entreprises/signInEntreprise'
import SignUpEntreprise from './Pages/Entreprises/signUpEntreprise';
import SignInCandidat from './Pages/Candidats/signInCandidat'
import SignupCandidat from './Pages/Candidats/signUpCandidat'
import Dashboard from './Pages/Candidats/srcDashBoard/views/Dashboard'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <React.StrictMode>
    <Route path='/' exact render={props => <App {...props} />}/>
    <Route path='/sign-in-entreprise' exact render={props => <SignInEntreprise {...props} />} />
    <Route path='/sign-up-entreprise' exact render={props => <SignUpEntreprise {...props} />} />
    <Route path='/sign-in-candidat' exact render={props => <SignInCandidat {...props} />} />
    <Route path='/sign-up-candidat' exact render={props => <SignupCandidat {...props} />} />
    <Route path='/dashboard' exact render={props => <Dashboard {...props} />} />
  </React.StrictMode>,
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
