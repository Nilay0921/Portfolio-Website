import React from 'react';
import "../App.css";

function exp() {
    return (
        <div className="expirence">
            <div className="expirence-title">
                <h1>Experience</h1>
            </div>
            <div className="expirence2" onclick="window.location=http://google.com">
                <div className="expirence2-title">
                    <a href="https://www.fispan.com/"><h1>FISPAN</h1></a>
                    <h2>Software Developer Intern</h2>
                </div>
                <div className="expirence2-p">
                    <ul>
                        <li>Worked closely with large-scale microservices architecture to develop new invoice receivables features using Java and Spring impacting 200+ businesses and banks</li>
                        <li>Improved storage of account information by creating monthly partitions of the SQL table enhancing query processing by 30%</li>
                        <li>Used Kotlin, J-Unit, and Spring to create rigorous unit tests for production features reducing bugs by 40%</li>
                        <li>Added new transaction details to the UI using React Js allowing smoother access to transaction information</li>
			        </ul>
                </div>
            </div>

            <div className="expirence1" onclick="window.location=http://google.com">
                <div className="expirence1-title">
                <a href="https://www.meta.com/"><h1>Meta</h1></a>
                    <h2>Software Engineering Intern</h2>
                </div>
                <div className="expirence1-p">
                    <ul>
                        <li>Developed and improved infrastructure to solve and remediate privacy problems using Hack/PHP</li>
				        <li>Improved code file enumerations by providing instant updates for code file assets eliminating delays of up to 24 hours</li>
				        <li>Added 100,000+ new undiscovered code file assets by developing an advanced system for code file enumerations</li>
                        <li>Proposed and implemented new changes outside the scope of current projects improving debugging and code quality</li>
			        </ul>
                </div>
            </div>

            <div className="expirence2" onclick="window.location=http://google.com">
                <div className="expirence2-title">
                <a href="https://www.ford.com/"><h1>Ford Motor Company of Canada</h1></a>
                    <h2>Software Engineering Intern</h2>
                </div>
                <div className="expirence2-p">
                    <ul>
                        <li>Developed multiple Android app pages using Android UI, XML, and Kotlin for Fords in car infotainment system</li>
				        <li>Migrated XML components to the new JetPack Compose framework reducing errors and increasing testing speed</li>
                        <li>Actively participated in bi-weekly planning meetings with team leaders and product owners to improve team performance</li>
			        </ul>
                </div>
            </div>
        </div>
    );
}

export default exp;