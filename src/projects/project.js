import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import '../styles/projects.css';
import {Remember} from './remember.js';

export class Projects extends React.Component {

    renderRemember() {
          ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
          ReactDOM.render(<Remember/>, document.getElementById('d-section'));
    }
    render () {
        return (
        <React.Fragment>
        <h2 id="h-experience">Select a tile to learn more about a project</h2>
        <div id="projects-container">
        <div id="project-tile" onClick={this.renderRemember}>
                        <p id="project-title">Remember</p>
                        <p>Google Chrome Extension</p>
                        <p>Pearl Hacks Hackathon | Spring 2019</p>
                        <p>UNC-Chapel Hill</p>
                    </div>
        <div id="project-tile">
            <p id="project-title">Usability Testing Tool</p>
            <p>Web Application</p>
            <p>SAS Institute | Summer 2019</p>
         </div>
         <div id="project-tile">
                     <p id="project-title">This Website!</p>
                     <p>Web Application</p>
                  </div>
        </div>
        </React.Fragment>
        );
    }
}