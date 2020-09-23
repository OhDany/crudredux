import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu>
      <Menu.Item>
        <h1>
          <Link to={'/'}>CRUD - React, Redux, REST API & Axios</Link>
        </h1>
      </Menu.Item>
      <Menu.Item position="right">
        <Button as={Link} to="/productos/nuevo" primary>
          Agregar Producto +
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
