import React, {Component} from 'react';
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


class App extends Component {
    constructor(props) {

        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false,
            typeOfMusic: "sleepy",
            res: "https://open.spotify.com/embed/playlist/0vkB2qLeaotZIzmjQWIAJe"
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

    productive() {
        this.setState({
            typeOfMusic: "productive"
        });
    }

    workout() {
        this.setState({
            typeOfMusic: "workout"
        });
    }

    nostalgic() {
        this.setState({
            typeOfMusic: "nostalgic"
        });
    }

    sleepy() {
        this.setState({
            typeOfMusic: "sleepy"
        });
    }

    surpriseme() {
        var items = ["workout", "sleepy", "nostalgic", "productive"];
        var rand = items[Math.floor(Math.random() * items.length)];

        this.setState({
            typeOfMusic: rand
        });
    }

    onCreate() {
        var min = "FML...";
        min = document.getElementById("MINS").value;
<<<<<<< HEAD
        min = Math.abs(min);
        if (min > 999) {
            min = 50
        }
        console.log(this.state.typeOfMusic + "||" + min);

        var url = "http://209.87.56.133:8080/" + this.state.typeOfMusic + "/" + min;
=======
        console.log(this.state.typeOfMusic + "||" + min);

        var url = "http://10.19.133.224:8080/" + this.state.typeOfMusic + "/" + min;
>>>>>>> 1fa5e034b05650464fa8614e449406312bae28d8
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then((res) => {
                console.log("!!!!!!!!!!!!!!!!");
                console.log(res);
                var input = "https://open.spotify.com/embed/playlist/" + res;
                console.log(input);

                this.setState({res: input});
                console.log(this.state.res);

            }).catch((err) => {
            console.log("error" + err)
        });

        console.log("______________");
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
                        <a href="#section1">
                            <div id="myDIV">
                                <productive class="btn" onClick={() => {
                                    this.productive()
                                }}>productive
                                </productive>
                                <workout class="btn active" onClick={() => {
                                    this.workout()
                                }}>workout
                                </workout>
                                <nostalgic class="btn" onClick={() => {
                                    this.nostalgic()
                                }}>nostalgic
                                </nostalgic>
                                <sleepy class="btn" onClick={() => {
                                    this.sleepy()
                                }}>sleepy
                                </sleepy>
                                <surpriseMe class="btn" onClick={() => {
                                    this.surpriseme()
                                }}>surprise me!
                                </surpriseMe>
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
                                        <Input type="text" id="MINS" name="minutes"
                                               placeholder="enter a number of minutes -- then press create"/>
                                        <InputGroupAddon addonType="append">

                                            <a href="#section3">
                                                <div id="myDIV">
                                                    <Button color="secondary"
                                                            onClick={() => {
                                                                this.onCreate()
                                                            }}>create</Button>
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

                                    <br/>


                                </a>
                            </div>
                        </ScrollableAnchor>
                    </header>
                </div>


                <div className="App">
                    <header className="App-header">
                        <ScrollableAnchor id={'section3'}>
                            <div>
                                <p> {' '}

                                </p>
                            </div>
                        </ScrollableAnchor>
                    </header>
                </div>


                <div>

                    <iframe src={this.state.res}
<<<<<<< HEAD
                            width={window.innerWidth} height={window.innerHeight / 2} frameBorder="0"
=======
                            width={window.innerWidth} height={window.innerHeight/2} frameBorder="0"
>>>>>>> 1fa5e034b05650464fa8614e449406312bae28d8
                            allowTransparency="true" allow="encrypted-media"></iframe>


                </div>

            </ScrollAnimation>

        );
    }

}

export default App;