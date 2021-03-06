import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import {Education} from './education.js';
import {Landing} from './landing.js';
import {Experience} from './experience/experience.js';
import {Flowers as ReactComponent} from './images/flowers.jpg';
import {Projects} from './projects/project.js';

export class App extends React.Component {
    constructor(props) {
    super(props);
            this.state = {

            }
    }

  renderEducation() {
    ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
      ReactDOM.render(<Education/>, document.getElementById('d-section'));
  }

  renderHome() {
    ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
          ReactDOM.render(<Landing/>, document.getElementById('d-section'));
  }

  renderExperience () {
            ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
            ReactDOM.render(<Experience/>, document.getElementById('d-section'));
  }

  renderProjects() {
              ReactDOM.unmountComponentAtNode(document.getElementById('d-section'));
              ReactDOM.render(<Projects/>, document.getElementById('d-section'));
    }

  render() {
    return (
        <div id ='d-page'>
            <div id='d-banner'>
            <h1 class="h-title" onClick={this.renderHome}>Mary Halvorsen | UNC Chapel Hill class of 2020</h1>
              <div id='d-navigation' >
                <button class='b-section' onClick={this.renderEducation}>
                    EDUCATION
                </button>
                <button class='b-section' onClick={this.renderExperience}>
                    EXPERIENCE
                </button>
                <button class='b-section' onClick={this.renderProjects}>
                    PROJECTS
                </button>
              </div>
            </div>

            <div id='d-section'>
              <Landing/>
            </div>
          </div>
    )
  }
}

export default App;
