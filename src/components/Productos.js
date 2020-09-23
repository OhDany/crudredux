import React from 'react';
import { Header, Icon, Table, Label } from 'semantic-ui-react';

const Productos = () => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon color="blue" name="paw" circular />
        <Header.Content>Producto</Header.Content>
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
          <Table.Row>
            <Table.Cell>
              <Label ribbon>First</Label>
            </Table.Cell>
            <Table.Cell>Second</Table.Cell>
            <Table.Cell>Third</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Productos;
