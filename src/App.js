import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import GifPlayer from 'react-gif-player';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';


class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productive: true,
      workout: true,
      nostalgic: true,
      sleepy: true,
      surpriseMe: false,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
    }
class App extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }
  
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
      <div className="App">
        <header className="App-header">
          <header>
            how are you feeling today?
          </header>


          <br>
          </br>
          <a href = "#section1"> 
          <div id="myDIV">
          <button class="btn">productive</button>
          <button class="btn active">workout</button>
          <button class="btn">nostalgic</button>
          <button class="btn">sleepy</button>
          <button class="btn">surprise me!</button>
          </div>
          </a>
          <a>
          </a>

          <br>
          </br>
          
        
        </header>
      </div>

      <div className="App">
      <header className="App-header">
      <ScrollableAnchor id={'section1'}>
      <div>
      <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
          <p>
          how many minutes would you like to listen for?
          </p>
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input type="text" placeholder="enter a number of minutes -- then press create" />
        <InputGroupAddon addonType="append">
        <a href = "#section2"> 
          <div id="myDIV">
        <Button color="secondary">create</Button>
        <Button onClick={console.log(1)}></Button>
        </div>
          </a>
        </InputGroupAddon>
      </InputGroup>
      <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
        <a>
        <button class="btn"></button>
        </a>
        <br></br>
      
      <br />


      </a>
      </div>
      </ScrollableAnchor>
      </header>
      </div>

      <div class="App">
      <header className="App-header">
      <ScrollableAnchor id = {'section2'}>
      <div>
        <p> {' '} 

        </p>
        </div>
        </ScrollableAnchor>
        </header>
        </div>
      </ScrollAnimation>
    
    );
  }
  
}

export default App;
