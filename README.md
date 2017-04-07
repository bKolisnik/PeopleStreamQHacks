# PeopleStreamQHacks
A searchable database for public figures.

# Project Planning

Project Concept: A search tool for discovering traditional media as well as new media posts about a person. 

Requirements: This is a data-intensve real time application so there needs to be a high throughput for data with minimal latency. The processing requirements are mostly low as most of the heavy workload can be offloaded to external API's. Due to the nature of a hackathon the time constraints are very high so the development must be completed quickly. 

Key Features: Searching, web scraping, connecting with APIs, analytics with Indico.

Tech Stack Implementation: The group decided on the MEAN stack as it fulfills these requirements having no IO-blocking as well as  specializing in data transfer. Node.js the principal component is only single threaded but the application is not CPU intensive. The group went with MongoDb as the database due to its native compatibility with JSON which works well in this Javascript environment. Express.js was chosen to speed up development time and abstract low level streams, sockets etc. into higher level objects to speed up development. On the frontend HTML5, bootstrap, CSS3 were used to give the site a modern look. Ajax, and JQuery were used on the frontend to interface with the backend.

Timeline: First day the backend team setup the server API and interface with the database. The frontend team developed the template layout for the site. Second day the backend team constructed the routes for the site as well as routes for connecting with twitter, google news, wikipedia etc. APIs. The frontend team added functionality with javascript. On the last day the backend team had to finish the routes as well as create the bridging code between the front and backends, the implementation of analytics was not fully completed. The frontend team  improved the search and design. 

Sources of Error: Bridging the bakend and frontend becamee a timesink for the team due to everyones inexperience with jquery which required memebers on both teams to learn HTTP more thoroughly. The Indico analytics were not completed on the frontend altough the backend methods were finished. 

Measure of Success: The project was well received by the judges and the minimum viable product was completed within the timeframe. The analytics were not completed yet testers reflected on the possible value of such an application.
