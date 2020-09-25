import React, { useEffect } from 'react';
import {
  Header,
  Icon,
  Table,
  Message,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import Producto from './Producto';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
    // eslint-disable-next-line
  }, []);

  // Obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon color="blue" name="paw" circular />
        <Header.Content>Producto</Header.Content>
        {error ? (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p>Falla en la conexión de la base de datos</p>
          </Message>
        ) : null}
        {cargando ? (
          <Dimmer active inverted>
            <Loader>Cargando...</Loader>
          </Dimmer>
        ) : null}
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {productos.length === 0
            ? 'No hay productos'
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Productos;
