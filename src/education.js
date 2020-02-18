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
                                <p>
                                    The University of North Carolina at Chapel Hill <br></br>
                                    August 2016-Present <br></br>
                                    Expected Graduation May 2020 <br></br>
                                    Bachelor of Science in Computer Science  <br></br>
                                    Minor in Cognitive Science
                                </p>
                 </div>
                 <div id="d-tile-ed">
                         <p>
                         Western Guilford High School <br></br>
                         August 2012-June 2016 <br></br>
                         Greensboro, North Carolina
                         </p>
                 </div>
        </div>
        </React.Fragment>


        );
    }
}