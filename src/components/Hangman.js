import React from "react";

class Hangman extends React.Component {
    componentDidMount() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(10, 10, 55, 50);
    }
    render(){
    return (
        <div>
            <h1>Hangman</h1>
            <canvas id="canvas" height="250" width="250" style={{border: "solid black 1px"}}></canvas>
        </div>
    );
    }
}

export default Hangman;