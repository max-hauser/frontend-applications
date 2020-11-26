# Frontend Applications

This repository contains my process of the @CMDA-TT Frontend Applications course. During this course students learn how to choose and use libraries and how to implement data and dynamically create and manipulate elements.

In an attempt to create a realistic environment, students are working with a critically acclaimed newspaper called 'De Volkskrant'. Students will do a preliminary research on datasets from the RDW. With the datasets in mind they'll create a topic which journalists could write an article about. 

The purpose of this repository is to get continue with the concept created in @CMDA-TT Frontend Programmeren, and to create the final data visualisation and make it interactive.

## Research Question

**Which garage is in the best for a getaway car in Amsterdam?**

subquestions/criteria:
- Which garages allow payment in cash?
  - dataset: [https://opendata.rdw.nl/resource/r3rs-ibz5.json](https://opendata.rdw.nl/resource/r3rs-ibz5.json)
  * In this dataset I only wanted to get the ```paymentmethod```
- Which garages allow big cars to enter?
  - dataset: [https://opendata.rdw.nl/resource/b3us-f26s.json](https://opendata.rdw.nl/resource/b3us-f26s.json)
  * In this dataset I required the information on the ```capacity```, the ```chargingpointcapacity``` and the ```maximumvehicleheight```
- Which garages are open at all times?
  - dataset: [https://opendata.rdw.nl/resource/figd-gux7.json](https://opendata.rdw.nl/resource/figd-gux7.json)
  * In this dataset I used the ```exitpossibleallday``` and ```openallyear``` data.
  
### Other datasets
* https://opendata.rdw.nl/resource/t5pc-eb34.json

This datasets is used to determine the coordinates and location of the garages.

### Link to datavisualisation

[Click here to see the data visualisation](https://maxhauser-fa.netlify.app/)

### image of project

After watching a YouTube video on the movie Baby driver and so I came up with the question above.
The tricky issue with this concept is that is way too off-topic for the newspaper. But I asked my teacher and he asked the people over at the newspaper and I got the green light afterall. What you see in the image below is the first screen of the web application. From there the user will fill in a form that uses multiple views to end up with a map containing all the possible garages.

![final-kaart](https://github.com/max-hauser/frontend-applications/blob/main/media/homepage.png)

### Inspiration

Firstly, my concept inspiration came from the movie called Baby driver, a bankheist movie. For the map and visualisation I watched video's of a guy named [Curran Kellehher](https://www.youtube.com/user/currankelleher) on youtube. specifically on world maps and the update pattern.  

### Data handling

1. First I create a couple of functions that that filter out all the relevant data specific to Amsterdam.
2. Then I remove all the data that isn't complete (for example all the undefined)
3. After that I get the filter data from the form
4. Finally I create and/or update the map

### Install guide

### Step 1: Clone this project
To clone this project, paste the following line in the terminal:
```git@github.com:max-hauser/frontend-applications.git```

### Step 2: Install all packages
Next up you can install all the packages by using this command: ```npm install i```.

### Step 3: Run project

Now that everything is installed it's time to run the project. You can run it by typing the following code:
```npm run serve```

### plagiarism and acknowledgements

* The teachers (they give very interesting lectures and adapt well with regards to the CoVid crisis/ working from home situation)
* Nino Schelcher (we give each other feedback and tips during the entire project)
* Stackoverflow (for the occational question)
* MDN Web Docs (for deepdiving and really understanding how something works)


