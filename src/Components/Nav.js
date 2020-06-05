import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navs extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    const myEx = "/" + localStorage.getItem("userId") + "/exercises";
    return (
      <div>
        <Navbar id="navbar" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <b><h3 style={{ color: '#ffffff', fontSize: '20px', marginRight: '30px' }} className="nav-link"  >{"Welcome " + localStorage.getItem("userName")}</h3></b>
                </NavItem>
                <br/>
                <NavItem>
                  <b><NavLink style={{ color: '#ffffff', fontSize: '20px', marginRight: '30px' }} className="nav-link" to={myEx}>My Tasks</NavLink></b>
                </NavItem>
                <NavItem>
                  <b><NavLink style={{ color: '#ffffff', fontSize: '20px', marginRight: '40px' }} className="nav-link" to={"/" + localStorage.getItem("userId") + "/exercises/new"}>New Task</NavLink></b>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: '#ffffff', fontSize: '20px', marginLeft: '599px', }} className="nav-link" to={"/"}><i class="fa fa-sign-out" style={{ fontSize: '20px', marginRight: '15px' }}></i>Log Out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
	render(){
    const myEx = "/" + localStorage.getItem("userId")+ "/exercises";
		return( 
			<div>
		      <Navbar id="navbar" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link disabled"  to={myEx}><i class="fa fa-user-circle" aria-hidden="true" style={{fontSize:'23px', color:'primary', marginRight: '7px', marginTop: '3px'}} ></i></NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link"  to={myEx}><i class="fa fa-home" aria-hidden="true" style={{fontSize:'20px', color:'primary', marginRight: '7px'}} ></i>My Tasks</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link" to={"/" + localStorage.getItem("userId")+ "/exercises/new"}><i class="fas fa-tasks" aria-hidden="true" style={{fontSize:'19px', color:'primary', marginRight: '7px'}}></i>New Task</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', float: 'right'}} className="nav-link" to={"/"}><i class="fa fa-sign-out" style={{fontSize: '20px', marginRight: '15px'}}></i>Log Out</NavLink></b>
                        </NavItem>
                        </Nav>                            
                    </Collapse>
                </div>
              </Navbar>			    
            </div>
		)
	}
}

export default Navs;