import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (<div>
      <Menu>
        <Menu.Item header="header">Build a Roll</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name="home"/>
        </Menu.Item>
        <Menu.Item as={Link} to='/rolls' name='Rolls'></Menu.Item>
        <Menu.Item as={Link} to='/rolls/new' name='Create A Roll'></Menu.Item>
        <Menu.Item as={Link} to='/ingredients' name='Ingredients'></Menu.Item>
      </Menu>
    </div>);
  }
}

export default Navbar;
