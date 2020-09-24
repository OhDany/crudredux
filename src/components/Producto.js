import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
  return (
    <Table.Row>
      <Table.Cell>{nombre}</Table.Cell>
      <Table.Cell>$ {precio}</Table.Cell>
      <Table.Cell>
        <Button as={Link} to={`/productos/editar/${id}`} primary>
          <Icon name="edit" /> Editar
        </Button>
        <Button color="youtube">
          <Icon name="trash" /> Eliminar
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Producto;
