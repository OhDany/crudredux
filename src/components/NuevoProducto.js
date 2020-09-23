import React from 'react';
import {
  Grid,
  Header,
  Form,
  Button,
  Icon,
  Divider,
  Segment,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {
  // Utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  // Manda llamr el action de productoAction
  const agregarProducto = () => dispatch(crearNuevoProductoAction());

  // Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar formulario

    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto();
  };

  return (
    <Grid
      verticalAlign="middle"
      columns={3}
      centered
      // style={{ height: '100vh' }}
    >
      <Grid.Row>
        <Grid.Column>
          <Segment raised>
            <Header as="h2" icon textAlign="center">
              <Icon color="blue" name="paw" circular />
              <Header.Content>Nuevo producto</Header.Content>
            </Header>
            <Divider />
            <Form onSubmit={submitNuevoProducto}>
              <Form.Field>
                <label>Nombre del producto</label>
                <input placeholder="Nombre del producto" />
              </Form.Field>
              <Form.Field>
                <label>Precio del producto</label>
                <input placeholder="Precio del producto" />
              </Form.Field>
              <Button primary fluid type="submit">
                Agregar
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NuevoProducto;
