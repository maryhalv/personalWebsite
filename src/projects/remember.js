import React from 'react';
import '../styles/App.css';
import '../styles/projects.css';

export class Remember extends React.Component {

    render() {
        return (
            <React.Fragment>
            <div id="remember-tile">
                <p>
                I designed and constructed a google extension with two other women aimed as an aid for those living
                with memory debilitating diseases. This extension was inspired by
                existing chrome extensions that serve as landing pages to display time, date, and other information.
                We tailored our extension to include the addition of reminders, emergency contact information, and facts
                used to ground those who might find themselves panicking in a moment of memory retrieval failure.
                The setup-page was created to be used with the help of family members or caretakers to help enter in the correct information
                for the user of this extension.
                </p>
                <div id="d-setup-img">
                </div>
                <p>
                This was my first hackathon experience, and I was wary of how to coordinate and create a project form scratch
                in such a small amount of time. I learned that one of the most important first steps in a hackathon is discussing
                skills and abilities among your teammates and to delegate tasks.
                I was responsible for the JavaScript
                functionality of the extension aimed as an aid for those living with memory debilitating diseases.
                </p>
                <div id="d-snippet-img">
                </div>
                <p>
                When it came time to turn in our project and to present it to the judges, I was in low spirits because I was not
                comfortable with the fact that we had turned in our project without all of the functionality that we had originally
                planned to include. However, the judges were still impressed with the tool that we had created and we clearly
                stated future implementations of the tool that would add more functionality and accessibility.
                We ended up winning second place overall, and made the experience even more rewarding than I had hoped.
                </p>
            </div>
            </React.Fragment>
        );
    }
}