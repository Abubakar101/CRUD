# Project Overview

## Project Description

User would able to see wealth distribution throughout the NYC - Brooklyn, Bronox, Manhattan, Staten Island, and Queens.

## Installation

- npm i
- CREATE a DATABASE
- Connect with migration and seeds
- npm run dev

## Priority Matrix
![Matrix](./assests/matrix.jpg)
![BulletPoints](./assests/bulletPoints.jpg)


## MVP 
- Server
- Seeds
- Migration (DB)
- Routes and Controller
- EJS
------
- API from gov census
------
- CRUD 
- CSS

## Post-MVP
- API from gov census
- JQuery - to able to edit/change on the same page - just by clicking on the text, the input box should be activated and allows it to get changed
- GRAPH - draggable with mouse click, and able to change and save data in database

## Wireframes

Include images of the following wireframes:
![Wireframe](./assests/wireframe.jpg)


## User Stories
- The landing page outlook should be very simple and direct.
- Data should be clearly visible without any distraction.
- Able to change information just by clicking on the written text
- Able to add/delete easily without going to another page

## Project Management

ToDos - Seeds, CRUD, API from gov census, CSS
InProgress - EJS
Completed - Server, database, Routes and controller
Issues -

## Routes..Controllers..Models..Views..Oh My...

Use this section to document the routes and supporting functionality of the app. 

| Route | Controller | Model | Does | Result | View | Exits |
| --- | :---: |  :---: | :---: | :---: | :---: | :---: |
| /wealths | GET | Index | findAll | Selects *  | [{quotes}] | ShowQuotes | redirect(/quotes) 
| /quotes/

## Functional Components

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Based on the prioritized feature list completed in the `Priority Matix` and assign time estimates.  

| Feature | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| EJS | H | 4hrs | 12hrs |  |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
 - added pictures: separated ones...

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
