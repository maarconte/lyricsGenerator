import React from 'react';
import lyrics from '../lyrics';
import logoParamore from '../logoParamore.png';

class App extends React.Component {
    state ={};

componentWillMount() {
    this.generateLyrics();
}

    generateLyrics = event => {
        // Transform the lyrics into an Array
        const keyArray = Object.keys(lyrics);
        // A random lyric
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];

        if (this.state.lyrics === lyrics[randomKey]) {
            this.generateLyrics();
            return;
        }
        this.setState(lyrics[randomKey]);
    };

    render() {
        return (
            <div>
                 <img src={logoParamore} alt={"logoParamore"}/> 
                <p>
                    {this.state.lyric}
                    <span>- {this.state.song}</span>
                </p> 
                <button onClick={e => this.generateLyrics(e)} >Another lyric</button>
            </div>
        )
    } 
}

export default App;