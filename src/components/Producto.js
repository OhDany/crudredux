import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../actions/productoActions';

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // Confirma si desea eliminarla
  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Un producto que se elimina, no se puede recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al action
        dispatch(eliminarProductoAction(id));
      }
    });
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
