import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/productos/nuevo" component={NuevoProducto} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
