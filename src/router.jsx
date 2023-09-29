import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import Cadastrar from "./pages/Cadastrar"
import Acesso from "./pages/Acesso"
import Objetivo from "./pages/Objetivo"
import Treinamento from "./pages/Treinamento"


function App() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/cadastrar" component={Cadastrar} /> 
          <Route path="/acesso" component={Acesso} /> 
          <Route path="/objetivo" component={Objetivo} />
          <Route path="/treinamento" component={Treinamento} />
        </Switch>
      </Router>
    );
  }

export default App