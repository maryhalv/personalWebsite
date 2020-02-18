import React from 'react';
import './styles/App.css';
import './styles/education.css';

export class Education extends React.Component {


    componentDidMount() {
        document.getElementById('d-section').backgroundImage = 'url(./oldwell.jpg)';
    }

    render() {
        return (
        <React.Fragment>
        <div id="eduction-holder">
        <div id="d-tile-ed">
                                <p id="ed-title">
                                    The University of North Carolina at Chapel Hill
                                </p>
                                <p>
                                August 2016-Present
                                </p>
                                <p>
                                 Expected Graduation May 2020
                                </p>
                                <p>
                                Bachelor of Science in Computer Science
                                </p>
                                <p>
                                Minor in Cognitive Science
                                </p>
                                <p>
                                Chapel Hill, North Carolina
                                </p>
                 </div>
                 <div id="d-tile-ed">
                         <p id="ed-title">
                         Western Guilford High School
                          </p>
                          <p>
                          August 2012-June 2016
                          </p>
                         <p>
                         Greensboro, North Carolina
                         </p>
                 </div>
        </div>
        </React.Fragment>


        );
    }
}