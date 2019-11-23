import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const tryThis = {name:"",price: 0, rating:0, description: ""}
class Navbar extends React.Component {


  render(){
  return (
    <div>
      <Menu rollFormData= {this.tryThis}>
        <Menu.Item header>Build a Roll</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name="home"/>
        </Menu.Item>
        <Menu.Item as={Link} to='/rolls' name='Rolls'>
        </Menu.Item>
        <Menu.Item as={Link} to='/rolls/new' name='Create A Roll'>
        </Menu.Item>
      </Menu>
    </div>
  );
  }
}

export default Navbar;
