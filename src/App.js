import React from "react";

import './App.css';

import {pics, getPictures} from './share/pictures/address';
import PictureCard from "./component/picture-card.component";

class App extends React.Component{

    state = {
        timer: null,
        index: 0,
        pictures: []
    }

    componentDidMount() {
        Promise.all(getPictures(8)).then(res => this.setState({pictures: res}));
        this.handleSetLoop();
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    handleSetLoop = () => {
        if(this.state.timer) clearInterval(this.state.timer);
        let timer = setInterval(() => {
            let idx = this.state.index;
            this.setState({index: (idx + 1) % pics.length})
        },2000);
        this.setState({timer})
    }

    handleLabelClick = (e, i) => {
        this.setState({index: i});
        this.handleSetLoop();
    }

    handleButtonClick = (e, mode) => {
        switch(mode) {
            case "next": this.setState({index: (this.state.index + 1) % pics.length}); break;
            case "back": this.setState({index: (this.state.index + pics.length - 1) % pics.length}); break;
            default : break;
        }
        this.handleSetLoop();
    }

    render() {
        const pics = this.state.pictures;
        return (
            <div className="App">
                <div className="App-labels">
                    {pics.map((pic, idx) => (
                        <p key={pic} onClick={(e) => this.handleLabelClick(e, idx)}>{idx + 1}</p>
                    ))}
                </div>
                <div className='App-picture'>
                     <PictureCard key={pics[this.state.index]} pic={pics[this.state.index]} />
                </div>
                <div className="App-labels">
                    <button onClick={(e) => this.handleButtonClick(e,"back")}>back</button>
                    <button onClick={(e) => this.handleButtonClick(e,"next")}>next</button>
                </div>
            </div>
        );
    }
}

export default App;
