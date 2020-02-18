import React from 'react';
import '../styles/App.css';
import '../styles/experience.css';
import ReactDOM from 'react-dom';
import {SAS} from './sas.js';
import {TownOf} from './toch.js';

export class Experience extends React.Component {

    renderSAS() {
             ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
             ReactDOM.render(<SAS/>, document.getElementById('d-section'));
    }

    renderTownOf() {
         ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
         ReactDOM.render(<TownOf/>, document.getElementById('d-section'));
    }
    render() {
        return (
        <React.Fragment>
         <h2 id="h-experience">Select a tile to learn more about my experience </h2>
        <div id="tile-holder">
        <div id="d-tile-ex" onClick={this.renderSAS}>
                        <p id="ex-tile">Software Development Intern</p>
                        <p>SAS Institute </p>
                        <p>Cary, NC</p>
                        <p> Summer 2019-Present</p>
                    </div>
                    <div id="d-tile-ex-toch" onClick={this.renderTownOf}>
                        <p id="ex-tile">Technology Solutions Intern</p>
                        <p>Town of Chapel Hill</p>
                        <p >Chapel Hill, NC</p>
                        <p> Summer 2018</p>
                    </div>
        </div>
        </React.Fragment>
        );
    }
}