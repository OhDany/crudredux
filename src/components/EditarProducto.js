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

const EditarProducto = () => {
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
            <Form>
              <Form.Field>
                <label>Nombre del producto</label>
                <input placeholder="Nombre del producto" />
              </Form.Field>
              <Form.Field>
                <label>Precio del producto</label>
                <input placeholder="Precio del producto" />
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
