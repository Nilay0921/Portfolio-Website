import React from 'react';
import "../App.css";
import { FaGithub } from "react-icons/fa";

function projects() {
    return (
        <div className="project">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project1">
                <div className="project1-title">
                    <h1>SportsCred<a href="https://github.com/Nilay0921/SportsCred"><FaGithub size="60px" className="github"/></a></h1>
                </div>
                <div className="project1-p">
                    <ul>
				        <li>Developed a mobile sports app in a team of 6, as a back-end developer, which allows users to engage with other
                        sports fans to put their sports knowledge to the test</li>
				        <li>Users are given a score based on trivia knowledge, discussions with other sports fans, and picks and predictions,
                        which ranks them amongst other users</li>
				        <li>Used git version control along with Jira to manage work flow, while following Agile development processes to easily
                        implement new features</li>
                        <li>Used Flask to create a REST API to create profiles, update user scores, add posts etc. and used Flutter to create
                        the front-end user interface</li>
			        </ul>
                </div>
            </div>

            <div className="project2">
                <div className="project2-title">
                    <h1>Javmos<a href="https://github.com/Nilay0921/JavmosGUI"><FaGithub size="60px" className="github"/></a></h1>
                </div>
                <div className="project2-p">
                    <ul>
                        <li>Developed a graphing calculator using Java, which is capable of graphing polynomial and trigonometric functions</li>
				        <li>Used inheritance and polymorphism along with software design patterns to produce cleaner and more well-designed
                        code</li>
                        <li>Collaborated with a group of 3 on all stages of scrum software development processes and used git version control
                        effectively to manage tasks</li>
			        </ul>
                </div>
            </div>

            <div className="project3">
                <div className="project3-title">
                    <h1>Spotify API Clone<a href="https://github.com/Nilay0921/Spotify-API-Clone"><FaGithub size="60px" className="github"/></a></h1>
                </div>
                <div className="project3-p">
                    <ul>
                        <li>Developed a REST API for a music player like Spotify to create profiles, follow/friend users, like songs, create
                        playlists etc.</li>
				        <li>Used the Spring Boot framework and microservices supported by MongoDB and Neo4j</li>
			        </ul>
                </div>
            </div>

            <div className="project4">
                <div className="project4-title">
                    <h1>Connect4-AI<a href="https://github.com/Nilay0921/Connect-4-AI"><FaGithub size="60px" className="github"/></a></h1>
                </div>
                <div className="project4-p">
                    <ul>
                        <li>Developed a game of connect-4 with an integrated AI which never loses!</li>
				        <li>Developed game using pygame with AI implemented using the recursive miniMax algorithm in python</li>
			        </ul>
                </div>
            </div>

            <div className="project5">
                <div className="project5-title">
                    <h1>Sudoku Solver<a href="https://github.com/Nilay0921/Sudoku-Solver-C"><FaGithub size="60px" className="github"/></a></h1>
                </div>
                <div className="project5-p">
                    <ul>
                        <li>Developed a program that solves every solvable Sudoku puzzle</li>
				        <li>Implemented a recursive backtracking algorithm that solves any solvable Sudoku puzzle in a short amount of time</li>
			        </ul>
                </div>
            </div>
        </div>
    );
}

export default projects;