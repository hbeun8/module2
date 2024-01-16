ReadMe.md

# Module 2 - Assessment

## Developer: Varun Gupta

This is the ReadMe.md for the project below. The main purpose of this document is to provide evidence of the work performed to meet the Module 2 Assessment criteria's.

## Project name: Eclectic Cycles - Journey Planner and Comparer

Purpose of the website: This project builds on the work performed in Module 1 - Eclectic Cycles. For this project we have added Journey Planner and Comparer to the website so that users can plan their journey using rented electric cycles. Furthermore, it also allows the user make comparisions with other modes of transportation such as Walking, Buses, Tube and Car. 

Over the shorter distance, shared E-Cycles has demonstrated itself to be more virtuous than mass public demonstration, by being quicker, more affordable, more flexible and with zero emissions it is also kinder to mother nature. It is the aim of the project to evidence this with live data using the Transport for London Api live data.

In order to avoid duplication, we have referred to Module 1 Readme.md so that user has a source for all vital information.

https://ui.dev/amiresponsive?url=https://hbeun8.github.io/Module-2/index.html

### Table of Contents:

1.  [Project Goals:](#1-project-goals)

    Business Goals<br>
    User Goals

2.  [UX:](#2-ux)

    Target Audience<br> 
    User Requirement and Expectation<br>
    User Stories

3.  [Design:](#3-design)

    Design Choices<br>
    Colors<br>
    Fonts<br>
    Structure<br>
    Wireframes<br>

4.  [Technology Used](#4-technology-used)

    Languages<br>
    Frameworks and Tools

5.  [Features](#5-features)
6.  [Testing](#6-testing)

    HTML Validation<br>
    CSS Validation<br>
    Accessibility<br>
    Performance<br>
    Device Testing<br>
    Browser compatibility<br>
    Testing user stories

8.  [Bugs](#8-bugs)
9.  [Deployment](#9-deployment)
10. [Special Thanks](#10-special-thanks)
11. [Acknowledgments](#11-acknowledgments)

# 1 Project Goals {#1-project-goals}
    See Module 1: "https://github.com/hbeun8/Module-1"

# 2 UX {#2-ux}
    See Module 1: "https://github.com/hbeun8/Module-1"

# 3 Design {#3-design}
    See Module 1: "https://github.com/hbeun8/Module-1"

# 4 Technology Used {#4-technology-used}

Languages: HTML/CSS/Javascript/JSON/Fetch  
Framework and Tools: Visual Studio, Github, Notepad, Postcode API, TFL API, Google maps API.

# 5. Features {#5-features}

1.  ## Landing Page

    This shows the features of the Landing Page.
<img width="800" alt="image" src="https://github.com/hbeun8/module2/assets/120073730/084978b1-2c65-4df4-ba81-b00df28af15d">
    The landing page shows the Control Section of the Journey Planner where the user can enter postcodes to start and end the journey. The button checks if the postcode entered by the user is correct.

    We have incorporated error handing should the user enter an incorrect postcode.The user will be informed if the postcode is incorrect through the Alert box.
    
<img width="800" alt="image" src="https://github.com/hbeun8/module2/assets/120073730/1441a286-4133-4bbf-88bf-02ef5663fa18">

3.  ## Dynamic Journey Planner - The Results page

    This section shows the results section of the journey planner. The user has the ability to see journey for 4 modes of transportation:
        - Bus
        - Tube
        - Cycling
        - Walking
    For each mode of transportation, the results section shows Routes, Duration, Interchange and Cost. The results are dynamically updated when the user presses the associated button. The results are obtained TFL Open API.
<img width="800" alt="image" src="https://github.com/hbeun8/module2/assets/120073730/ed37f8c2-a434-4793-a94d-bbf135117f20">
<img width="800" alt="image" src="https://github.com/hbeun8/module2/assets/120073730/ccb3adc9-2845-43ea-be5c-49b566baf3c4">

4. ## Dynamic Clock

    This is a clock that shows local time and is updated everysecond. The time starts automatically using window.onload method.
<img width="400" alt="image" src="https://github.com/hbeun8/module2/assets/120073730/043e4237-5dfd-4aa1-a723-a7eeac8e70f0">

# 6 Testing {#6-testing}

## Validator Testing

### HTML

No errors were returned when passing through the official validation for the main html.
(https://validator.w3.org/nu/#textarea)

### CSS

No errors were found when passing through the official validator.
(https://jigsaw.w3.org/css-validator/validator)
Instructions on how to validate was taken from \[Code Institute\](https://learn.codeinstitute.net/courses/)

### JavaScript
No errors were found when passing through the official validator.
JSHint and JSLint. There were warnings however, but those were more applicable to older version of JavaScript.  
https://www.jslint.com/
https://jshint.com/

## Accessibility
Colors and fonts chosen are easy to read and accessible by running it through lighthouse in dev-tools.

## Performance
No issues observed while loading page

## Device Testing
The webpage was designed to operate on different screen-sizes. The coding was defined using mobile first principles.

## Browser compatibility
Compatible with all browsers based on MDN.org Also, accessibility checked using Lighthouse built in the Chrome Dev Tool.

## Testing user stories
This project follows from Module 1 where we took feedback from two group: <br>
1. General user on the UX design and stories.<br> 
2. Student Coders in classroom on the design principles and other technical aspects. Based on the feedback provided, the website was enhanced to incorporate the suggestion.

# 7. Bugs {#7-bugs}

## Unfixed Bugs

1. API results for Tube and Walk are not working correctly. The journey are not same as those appearing on the TFL website. This will be addressed in the coming days.
2. Deployement -  the site has not yet been deployed using Github actions. This will be addressed in the coming days.

# 8. Deployment {#8-deployment}

The site has not been deployed to GitHub pages. 

# 9. Special Thanks {#9-special-thanks}

**Komal Karir/WAES/Code Institute**

# 10. Acknowledgments {#10-acknowledgments}

The design and coding choices were guided by two projects reviewed during Module 1 of Full Stack Boot Camp Operated by the WAES and Code Institute:  
1\. Love running.  
2\. Love Rosie.
3\. Love Maths.
4\. JSHINT API Project.
