import React from "react";
import './404.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            url: 'http://img.pandawhale.com/post-42510-IT-Crowd-Maurice-Moss-fire-gif-6zWo.gif',
            textStyle: {
                color: 'white',
                fontSize: '4vw'
            }
        }
    }
    render() {
        let bgStyle = {
            background: `url( ${this.state.url} ) no-repeat center center fixed`,
            backgroundSize: 'cover'
        }
        return <div className='container' style={bgStyle}>
            <div className='overlay'></div>
            <div className='text' style={this.state.textStyle}>
                <span>404.</span>
                <br />
                <span>Congratulations !</span>
                <br />
                <span>You broke the thing.</span>
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));