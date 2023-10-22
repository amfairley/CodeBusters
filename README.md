![CodeBusters banner](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/codeBustersBanner.png)
# Team CodeBusters: Project Ghost Hunt - The Game

Ghost hunt is an interactive game where users have to click on randomly appearing ghosts to capture them. The objective of the game is to accumulate points by clicking on as many ghosts as possible within a specified time limit.

<!--TODO: Add Am I responsive image-->
![Responsive Mockup](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/)

## User Experience

### User Stories
- As a **user** I want to **understand the game rules** so that I can **play the game correctly**
- As a **user** I want to **view the Game page** so that I can **click and start the game anytime**
- As a **user** I want to **navigate the web app** so that I can **see more information about the game**
- As a **user** I want to **view the Game page** so that I can **click and start the game anytime**
- As a **user** I want to **select the number of questions** so that I can **dedicate the time I have available**
- As a **user** I want to **see my score updating** so that I can **compete with my score**
- As a **user** I want to **see the time limit** so that I can **compete with myself**
- As a **user** I want to **hear the game audio/soundtrack** so that I can **feel the halloween spirit**
- As a **revisitng user** I want to **be able to see my previous score records** so that I can **try to beat it**

### Tasks and Planning

Tasks, sprints and planning can be seen in the [CodeBusters Team GitHub Project](https://github.com/users/diegocardenast/projects/1). A total of 5 mini sprints were planned and executed, making easier the tracking of activities and the assignation of efforts along the Hackathon.

### Colour Palette
The colour palette was generated from the background image using [Tools PicsArt](https://tools.picsart.com/color/palette-generator/?colors=D8A56C-2D244C-955637-6C4346-697986-3D5980-394D71-6B89A4).

![Colour palette](https://i.ibb.co/t47Lyp5/Screenshot-2023-10-19-at-21-18-27.png "Colour palette")

### Typeface
The following fonts were chosen from Google Fonts to fit the Halloween theme of the project:
Creeper (url: https://fonts.google.com/specimen/Creepster?query=creepster)
![image](https://github.com/AFairley90/CodeBusters/assets/104565466/1dec953f-c2e3-414a-abde-31be37496c90)
Frijole (url: https://fonts.google.com/specimen/Frijole? query=frijole)
![image](https://github.com/AFairley90/CodeBusters/assets/104565466/49c64144-046b-48f5-99cd-a7cf8f379a92)
Nosifer (url: https://fonts.google.com/specimen/Nosifer?query=nosifer)
![image](https://github.com/AFairley90/CodeBusters/assets/104565466/9e49455d-6043-410b-964f-0398cb0736e6)
Eater: (url: https://fonts.google.com/specimen/Eater?query=eater)
![image](https://github.com/AFairley90/CodeBusters/assets/104565466/dce4dde7-3ea8-4660-a7e4-41646b96940a)
Astloch (URL: https://fonts.google.com/specimen/Astloch?query=astloch)
![image](https://github.com/AFairley90/CodeBusters/assets/104565466/df366474-d35b-4600-9ab1-7feacf8b0fe8)
Modern Antiqua (URL: https://fonts.google.com/specimen/Modern+Antiqua?query=modern+antiqua)
![image](https://github.com/AFairley90/CodeBusters/assets/104565466/23e48cca-e575-43aa-b28c-70d48eb7205d)
Modern Antiqua was chosen as a typeface for use in chunks of text due to it’s easy readability compared to the others, which will predominately be reserved for titles and headings.


## Wireframes

__Game Start__  

![Game Start](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/readme/wireframeGameStart.png)

__Gameplay__ 

![Gameplay1](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/readme/wireframeGameplay1.png)

![Gameplay2](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/readme/wireframeGameplay2.png)



## Features

### Implemented Features
<!--TODO: Add implemented features with their respective screenshots-->
__Sound ON/OFF__

  - The full responsive navigation bar includes links to the Game page, Instructions and Contact page, and is identical in each page to allow for easy navigation. 

![Sound ON/OFF](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/)

__Index__

  - The full responsive navigation bar includes links to the Game page, Instructions and Contact page, and is identical in each page to allow for easy navigation. 

![Index](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/)

__Art Content__

- Some ghosts were created by the team as well as the team and game logo. 

![Game Logo](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/)

![Ghosts](https://github.com/diegocardenast/CodeBusters/blob/main/assets/images/)

### Features Left to Implement
<!--TODO: Add any nice to have feature that was not implemented-->
- NA

## Testing

### Validator Testing 
<!--TODO Confirm that our code pass without ERRORS all the validators and add lighthouse screenshot-->
- JavaScript
  - No errors were returned when passing through the official [JSHint validator](https://jshint.com/)
- HTML
  - One error related to invalid attributes for an img element was returned when passing the first time through the official [W3C validator](https://validator.w3.org/)
  - No errors were returned when passing the second time through the official [W3C validator](https://validator.w3.org/)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?)
- Lighthouse
  - The result given by the system for the lighthouse assessment is the following:
![Lighthouse results](https://github.com/diegocardenast/)

### Manual Testing
<!--TODO Add some manual tests to this table, specially responsiveness tests-->
**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
Home page | Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
Home page | Size to 1920px using Chrome Dev Tools | Elements look good 1920px | Works as expected
Contact form | Click send button without data in form fields | Cannot submit form | Works as expected
Nav bar - home page | Click nav buttons | That each nav element takes me to the correct page site page | Works as expected
Home page test | All phone sizes checked using Chrome Dev Tools | Elements look good | Works at expected
Game page test | All phone sizes checked using Chrome Dev Tools | Elements overlap and game runs faster at lower resolutions | Does not work as expected 



### Unfixed Bugs

- NA

## Deployment 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [HERE]()<!--TODO Add deployed project URL between the brackets-->


## Credits

### Content 

- Good/Best practice on the readme were shared by Lauren-Nicole Popich in her [mentoring](https://github.com/CluelessBiker/mentoring/tree/main) GitHub repositry
- User Stories and tasks creation was implemented following this [publication](https://boosthigh.com/software-requirements-specification/)
- Use of Google to import [Google fonts](https://fonts.google.com/?classification=Display) 
- Inspiration of our [game color palette](https://tools.picsart.com/color/palette-generator/?colors=D8A56C-2D244C-955637-6C4346-697986-3D5980-394D71-6B89A4) and were based on the selected game background that comes from [themeforest.net](https://themeforest.net/)
- The animation and use of canvas in JavaScript was implemented following this [tutorial](https://youtu.be/GFO_txvwK_c?si=l2RwIYNxn0n712Ew)
- The use of GitHub to collaborate and apply good practices was implemented following this [Slack post](https://code-institute-room.slack.com/archives/C05UQAPDNCT/p1697457705802579) and this [GitHub post](https://github.com/auxfuse/hackathon-git-labs/blob/main/basic.md)
- The [team availability](https://docs.google.com/spreadsheets/d/1dMP_YxtveAuA8vppXYU1i1a0LoCAVq37If_BdVpL-fg/edit?usp=sharing) was organized using [Google sheets](https://www.google.com/sheets/about/)

### Media

- The creation of the team banner and game logo was implemented using [Canva](https://www.canva.com/)
- The wireframes were created using [Balsamiq Cloud](https://balsamiq.cloud/)
- The icons along the web app were taken from [Font Awesome](https://fontawesome.com/)
- The use of the icons was provided by [Flaticon](https://www.flaticon.com/free-icon/planet-earth_1598431?related_id=1598196&origin=search)
- The ghosts own art were created with [Procreate](https://procreate.com/) and [Photoshop](https://www.adobe.com/products/photoshop.html)
- The improvement/change of sprites (sequence of images for animation) were implemented using [GIMP](https://www.gimp.org/)
- The game background music was selected from opengameart.org and created by [Alexandr Zhelanov](https://opengameart.org/content/wtf-ghost)
- The game background image was selected from [themeforest.net](https://themeforest.net/)



Thank You!

Diego Cardenas
Adam Fairley
Jamie Bradford
Matheus Cafalchio
Mimmi Stockman
Stefania Frustagli
Omar Al-mehdhar
