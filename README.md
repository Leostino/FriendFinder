# Match

Match is an Express and Node application meant to simulate a simple dating application. This full-stack application matches users based on personality. it gets results your users' surveys, then compare their answers with those from other users and looks for a match. This application was my first experience deploying an application to Heroku.


## Getting Started

To view the site visit https://nameless-earth-15537.herokuapp.com/


## Description

Match implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned as the match. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions


## Instructions

To run the site locally:
* Make sure you Node application installed in your computer.
* Clone this repository with `git clone https://github.com/Leostino/FriendFinder`.
* Install modules with `npm install`
* Run `node server.js`
* Go to `localhost:8080` in your web browser.


## Technologies Used

* HTML5
* Bootstrap (Front-end framework)
* Node.js (JavaScript environment)
* Express (Web framework)
* Path (Npm Package)
* Heroku (Cloud platform)


## Author

Leonard Ezeudu
[Github](https://github.com/Leostino)
