import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

// Redux
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../actions/productoActions';

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // Confirma si desea eliminarla
  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario

    // Pasarlo al action
    dispatch(eliminarProductoAction(id));
  };

  return (
    <Table.Row>
      <Table.Cell>{nombre}</Table.Cell>
      <Table.Cell>$ {precio}</Table.Cell>
      <Table.Cell>
        <Button as={Link} to={`/productos/editar/${id}`} primary>
          <Icon name="edit" /> Editar
        </Button>
        <Button color="youtube" onClick={() => confirmarEliminarProducto(id)}>
          <Icon name="trash" /> Eliminar
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Producto;
