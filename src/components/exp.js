import React from 'react';
import "../App.css";

function exp() {
    return (
        <div className="expirence">
            <div className="expirence-title">
                <h1>Experience</h1>
            </div>
            <div className="expirence1" onclick="window.location=http://google.com">
                <div className="expirence1-title">
                    <a href="https://www.fispan.com/"><h1>FISPAN</h1></a>
                    <h2>Software Engineering Intern</h2>
                </div>
                <div className="expirence1-p">
                    <ul>
                        <li>Joining FISPAN as a software engineer on the banking team</li>
			        </ul>
                </div>
            </div>

            <div className="expirence2">
                <div className="expirence2-title">
                    <h1>Agincourt Robotics</h1>
                    <h2>Programmer</h2>
                </div>
                <div className="expirence2-p">
                    <ul>
                        <li>Developed and debugged features using programming language C and git to provide functionality to the robot</li>
				        <li>Communicated ideas proficiently with team members and leads</li>
				        <li>Organized and maintained an engineering journal which kept track of accomplishments for each day during build season</li>
			        </ul>
                </div>
            </div>

            <div className="expirence3">
                <div className="expirence3-title">
                    <h1>Agincourt Tutoring</h1>
                    <h2>Math Tutor</h2>
                </div>
                <div className="expirence3-p">
                    <ul>
                        <li>Tutored grade 9, 10 and 11 students and gave them useful study tips</li>
				        <li>Effectively communicated with students to complete challenging problems, and helped students gain intensive knowledge on mathematical concepts</li>
			        </ul>
                </div>
            </div>
        </div>
    );
}

export default exp;