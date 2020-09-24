import React, { useState } from 'react';
import {
  Grid,
  Header,
  Form,
  Button,
  Icon,
  Divider,
  Segment,
  Input,
  Dimmer,
  Loader,
  Message,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = ({ history }) => {
  // State del componente
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState(0);

  // Utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  console.log(cargando);

  // Manda llamr el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  // Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar formulario
    if (nombre.trim() === '' || precio <= 0) {
      return;
    }

    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    // Redireccionar
    history.push('/');
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
                <Input
                  icon="tags"
                  iconPosition="left"
                  placeholder="Nombre del producto"
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Precio del producto</label>
                <Input
                  icon="dollar sign"
                  iconPosition="left"
                  placeholder="Precio del producto"
                  type="number"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(e.target.value)}
                />
              </Form.Field>
              {error ? (
                <Message negative>
                  <Message.Header>Error</Message.Header>
                  <p>Falla en la conexión de la base de datos</p>
                </Message>
              ) : null}
              <Button primary fluid type="submit">
                Agregar
              </Button>
            </Form>
            {cargando ? (
              <Dimmer active inverted>
                <Loader>Cargando...</Loader>
              </Dimmer>
            ) : null}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NuevoProducto;
