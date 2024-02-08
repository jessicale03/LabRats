# LabRats
A web application to connect Yale research labs and student participants.

# PROJECT GOAL

As many research trials offer compensation for participation, there is student demand for research trials. Currently, many departments recruit for their labs' trials via flyers, newsletters, or websites. However, each stream of communication only advertises their respective department's labs, and students who seek opportunities from different departments must subscribe to multiple streams. Lab Rats hopes to centralize the process of seeking trial participation opportunities across Yale's vast departments in one website.

The Lab Rats workflow offers two account types which are indicated upon registration: researcher and participant.

*User 1: Researcher*
Researchers are able to:
- Post trials from their labs
- Indicate what demographics they are seeking for in their participants, such as age range, sex, usage of alcohol or smoking, etc.

*User 2: Participant*
Participants are able to:
- Browse trial listings
- Filter trial listings according to their demographics
- Favorite and save trials they are interested in

# Implementation
**Backend**:
Implemented with Python, Flask, and SQLite
Responsibilities and contribution:
Designed relational database schema and implemented the database tables
Created app.py Flask application as the backend
Created temporary mock frontend HTML files to link and test back-end Flask functionality
Functions to register new user accounts by updating the database
Functions to query database to display trial listings, including filtered results according to user specification of age range, sex, alcohol consumption and smoking use, etc
Incomplete: SupaBase Google Calendar API connection

**Frontend**: 
Implemented with React.js
Prior to implementation, created a Figma workflow with color palettes, possible website layouts, and user experience. This design was used to structure the backend in designing the database for form submissions. 
Responsibilities and contribution:
Designed user flow, interfaces, and requirements
Created temporary mock frontend HTML, javascript, and CSS files
Adapted mock files to ReactJS
Created the connection between React frontend and Flask backend

# How To Run the Program:
To run LabRats, you must run the flask backend environment and the front end react program in two different terminals. Cd into 

To run our flask, cd into the react/flask-server/venv directory and run the command source bin/activate to activate the virtual environment. Then cd in the execute flask run. 

To run the front end program, cd into the react directory and execute npm start. (Note: if node_modules are not available for some reason, please run the following in your terminal: npm install --legacy-peer-deps) 

# NEXT STEPS
The next steps of LabRats is to add more layers and features to further centralize organization and management tools for lab research and outreach. Below are a list of features we hope to implement in the future: 

**Lab managerial account:** A lab account run by the principal investigator to manage researchers and their projects. Additionally, this account will replace the traditional lab website and be viewed by researchers and participants. Researcher accounts can be “subscribed” to this account as a formality of belonging to the particular lab group. 
Search Available Labs: A second search terminal that is for interested students to join labs that are offering undergraduate research positions. A user can query via department, paid/unpaid, etc. 

**Student account:** A general account that assumes a student user experience with both capabilities to search for labs to join and studies to participate in. 

**Researcher increased usage:** A space for researchers to manage their schedules in the lab (lab meetings, trails, experiments, etc) via an embedded google calendar.  

**Aesthetics:** Improve the overall design aesthetic of the website with a universal design. Search pages should replicate the feeling of scrolling through a searchable instagram feed, where study widgets are similar to physical paper postings graphics. 





