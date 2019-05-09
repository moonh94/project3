import React, {Component} from "react";
import source from "../images/404logo.png"
import './404.css';

class FourOhFour extends Component {
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
                <p >
                <img src={source} style={{height:"610px"}} alt="RunningMan" />
                </p>
            </div>
        </div>
    }
}

export default FourOhFour;

// ReactDOM.render(<App />, document.getElementById('app'));