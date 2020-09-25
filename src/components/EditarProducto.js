import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

import {
  Grid,
  Header,
  Form,
  Button,
  Icon,
  Divider,
  Segment,
} from 'semantic-ui-react';

const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // Nuevo state de editar producto
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: '',
  });

  // Producto a editar
  const productoeditar = useSelector((state) => state.productos.editarproducto);

  // Llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));

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
              <Icon color="blue" name="edit" circular />
              <Header.Content>Editar producto</Header.Content>
            </Header>
            <Divider />
            <Form onSubmit={submitEditarProducto}>
              <Form.Field>
                <label>Nombre del producto</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre del producto"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </Form.Field>
              <Form.Field>
                <label>Precio del producto</label>
                <input
                  type="number"
                  placeholder="Precio del producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </Form.Field>
              <Button primary fluid type="submit">
                Guardar cambios
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default EditarProducto;
