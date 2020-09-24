import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
  return (
    <Table.Row>
      <Table.Cell>{nombre}</Table.Cell>
      <Table.Cell>$ {precio}</Table.Cell>
      <Table.Cell>
        <Button size="mini" as={Link} to={`/productos/editar/${id}`} primary>
          Editar
        </Button>
        <Button size="mini" color="red">
          Eliminar
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Producto;