# TESTME

Responsiveness images

[View the live project here]()

# Table of Content

1. [Introduction](#introduction "Goto introduction")

2. [UX](#ux "Goto ux")

    - [Ideal User Demographic](#ideal-user-demographic "Goto ideal user demographic")
    - [User Stories](#user-stories "Goto user stories")
    - [Development Planes](#development-planes "Goto development planes")
    - [Design](#design "Goto design")

3. [Features](#features "Goto features")

    - [Existing and Design Features](#existing-and-design-features "Goto existing & design features")
    - [Features to Implement in the future](#features-to-implement-in-the-future "Goto features to implement in the future")
    
4. [Testing](#testing "Goto testing")

    - [Testing.md](#)

5. [Issues and bugs](#issues-and-bugs "Goto issues and bugs")

6. [Technologies used](#technologies-used "Goto technologies used")
 
    - [Main Languages Used](#main-languages-used "Goto main languages used")
    - [Libraries, Frameworks and Programs Used](#libraries-frameworks-and-programs-used "Goto libraries, frameworks and programs used")
    
7. [Deployment](#deployment "Goto deployment")

    - [Deployment on Github Pages](#deployment-on-github-pages "Goto deployment on github pages")
    - [Forking the Repository](#forking-the-repository "Goto forking the repository")
    - [Creating a Clone](#creating-a-clone "Goto creating a clone")

8. [Credits](#credits "Goto credits")

    - [Content](#content "Goto content")
    - [Media](#media "Goto media")
    - [code](#code "code")

9. [Acknowledgements](#acknowledgements "Goto acknowledgements")
---

# INTRODUCTION

TestME is a fun, interactive website that engages the user in a general knowledge quiz with questions on geography, math, history, cooking and more. It is a timed multiple choice game, with random questions and answers each time the user starts the quiz.  The user can see the quiz instructions before starting and after completing the quiz they can see their score and have the option to replay the quiz. 

This is the second of five milestone projects that the developer is required to complete as part of their full web development course at the Code Institute. The main requirements were to create a responsive and interactive website using mainly *HTML5*, *CSS3* and *JavaScript*.

# UX

## Ideal User Demographic

### The ideal user of this quiz

* People who like general knowledge quiz
* General culture lovers
* People who like to exercise their brain
* Quiz lovers
* People who want a quick, simple and elegant quiz application.

## User Stories

### As a new user:

* I would like to see where to start playing
* I would like to navigate easiliy to the website
* I would like to know the instructions before starting the quiz
* I would like to know how much time and how many questions I have left
* I would like to see how many questions that I got wrong
* I would like to leave the quiz whenever I want
* I would like to have a very clear feedback when I finish the quiz
* I would like to be able to ask for help 
* I would like to easily navigate through the TstME' social media links to be familiar with the its community

### As an returning user:

* I would like to navigate easily to the online quiz
* I would like to see new questions

### As a website creator:

* I want to make the quiz fun and interactive
* I want to provide easy access to the user to ask questions
* I want to ensure that there are enough questions
* I want to make sure that the user enjoys the quiz
* I want to provide a communication channel for new and returning customers (social links)

## Development Planes

To create an interactive and fun quiz that displays all data clearly with consistent styling across all pages, TestME creator worked with its developer to discern the required functionality of the quiz and how it would respond to the stories and expectations of users, as described above. 

### Strategy

The quiz will be focus on the following three categories of target audiences:

1. Demographic
    * All ages
    * People in any field

2. Position
    * New users
    * Returning users

3. Centre of interest
    * People who enjoy general knowledge
    * People who like to test their knowledge
    * Quiz lovers
    * People who want a quick, simple and elegant quiz application.

The online quiz needs to facilitate the user to:

1. Access informations below:
    * The instructions before starting to play  
    * The feedback after finishing to play
    * Social platforms

2. Ask for help 

The online quiz needs to facilitate the TestMe creator to:

1. Maintain an online presence
2. Get more players
3. Receive questions from users in order to improve the quiz

### Scope

There are two categories of requirements that were defined in order to clearly identify what needed to be done to align the functionality with the previously defined strategy.

1. Content Requirements

    * The user will be looking for:
        - Where to start playing
        - The instructions
        - The feedback and score
        - Where to ask for help
        - Social media links

2. Functionality Requirements

    * The user will be able to:
        - Navigate easily through the site to find information he wants
        - Find links to external sites in order to stay connected with the TestME' community
        - Contact the help centre directly through the site.

### Structure

The structure of the application has been designed to provide a simple and seamless user experience. A simple design will be implemented on all pages. The flow of the pages will be natural and will allow the user to feel comfortable after viewing a single page.

1. Header

    * The logo will serve as a link to the homepage

2. The info box

    * The info box contains the instructions and the start quiz button at the bottom
    * The start quiz button leads user directly to the quiz

3. Quiz box

    * A counter to show what question the user is on
    * A counter that shows the user how much time he has left
    * Questions
    * Three options which only one is correct
    * Next button at the bottom which will pass to another question
    * Correct and incorrect section, which show how many questions that the user got wrong and correct. 

4. Feedback box

    * A table of result that will tell the user his score, percentage, attempt
    * Two butons at the bottom:
        - Play again: will lead again the user directly to the quiz
        - Need help: will lead the user to the help section so the user can fill the contact form and ask his question to the TestMe creator.

5. Thank you message

    * After submit the contact form, the user will see a thank you message 

6. Exit icon

    * On each box except the info box, there is an exit icon that can take the user back to the principal page

7. Footer

    * Social media links
        - Facebook
        - Instagram
        - YouTube

### Skeleton

Wireframes moch-up were created in a balsamiq workspace with providing a responsiviness and positive user experience in mind.

* Desktop:

<details>
<summary>Info box, Quiz box, Feedback box, Help box and Thank you message box</summary>
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
</details>

* Tablet:

<details>
<summary>Info box, Quiz box, Feedback box, Help box and Thank you message box</summary>
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
</details>

* Phone:

<details>
<summary>Info box, Quiz box, Feedback box, Help box and Thank you message box</summary>
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
<img src="" width="100%">
</details>

## Design

1. Typography

    * A combination of [Balsamiq]() and [Montserrat](https://fonts.google.com/specimen/Montserrat?query=monts) fonts are used throughout the quiz, with Sans Sérif as a back-up font in case of import failure.
    * For elements that need to be coloured, they have just been styled with the desired colour.

2. Colour Scheme

    * The colours used throughout the site for its main styling are shown below, this mix of colours comes from [coolors](https://coolors.co/) and they have been picked to keep within the design brief of maintaining a simplified pleasure.

    * These colours are used in a specific and complementary way, maintaining a good level of contrast.
    * There is a layer of red for when the user will choose a wrong answer and and gray to draw lines .

<img src="" width="100%">

3. Icons

    * Some icons have been used in the site. [Font Awesome](https://fontawesome.com/) was the main source of icons.

# FEATURES

## Existing and Design features

### HOME PAGE

1. Header Logo & Navigation Bar

    * The header contains a conventionally placed logo at the top left of the page (redirects the user to the home page in one click)

    * The header is fixed so the user can see it if he goes to the bottom of the page.

<img src="" width="100%" height="25%">

2. Landing Page 

    * The landing page includes a colour green #69995D as a background with a info box overlaid 

<img src="" width="100%" height="50%">

3. Info Box

    * This section allows the user to view the quiz instructions before starting to play.
    * It also allows the user to start the quiz.
    * It is represented by a box of text (instructions) and the start quiz button at the bottom.

<img src="" width="100%" height="50%">    

4. Quiz Box

    * This section allows the user to view :
        - The quiz and start playing.
        - A counter that show what question user is on
        - A counter that shows the user how much time he has left
        - Questions
        - Three options of which only one is correct
        - Correct and incorrect section, which show how many questions that the user got wrong and correct.

    * It also allows the user to either move on to another question or exit the quiz by the exit icon at the top right of the box.
    * It is represented by a box of text (quiz)
    * In fact, this section is hidden and to see it, just click on the start quiz button on the bottom in the info box.

<img src="" width="100%" height="50%"> 

5. Feedback section

    * In this section, the user will have the feedback on his quiz. He will be able to see his score, his percentage and his attempt, and make the choice to eitheir restart the quiz, ask for help or exit the feedback by the exit icon at the top right of the box.. 
    * It is represented by a box of text (feedback).
    * In fact, this section is hidden and to see it, just finish the quiz.

<img src="" width="100%" height="50%">

6. Help Box

    * This box allows the user to ask for help and to submit questions to the creator.
    * It is represented by a contact form .
    * In this box, the user can either send the form by clicking on the send button at the bottom of the box or exit the help box by clicking on the exit icon at the top right of the box.
    * In fact, this section is hidden and to see it, just click on the *Need help button* to the bottom right of the feedback box.
    

<img src="" width="100%" height="50%">

7. Thank you Box 

    * A thank you message will be addressed to the user after sending his question.
    * In this box, the user can either restart the quiz by clicking on the restart quiz button at the bottom of the box or exit the the thank you box by clicking on the exit icon at the top right of the box 
    * This section is also hidden and to see it, just click on *send* to the bottom of the help box.

<img src="" width="100%" height="50%">

8. Footer

    * This section provides the links to the main TestME social pages with a light background color, just click on the icon to be redirected to the platform of the centre of your choice. 

    * This section allows customers to stay connected with the Love Gegetables community.

<img src="" width="100%" height="50%">

## Features to implement in the future

1. Pause option

    * Features: add a pause option in the quiz box to allow the user to pause the quiz whenever he wants.
    * Reason for not featuring in this release: since, there is a time counter, the developer decided better not to put the pause option, since by setting this option the time counter will not be of any importance. But in the future, the developer will put this option and each time the user will press pause, the question he paused will automatically change when he will resume the quiz.

2. Info icon

    * Features: add an info icon in the quiz, near refresh and exit icons, to allow the user to review the instructions whenever he wants.
    * Reason for not featuring in this release: following the presence of the time counter, the info icon can delay the user in his quiz when he will press this to review the instructions. But in the future, the developer will put this option and each time the user will press info icon, the question will automatically change when he will exit the info box.

3. Implement the progressive Web Application (PWA)

    * Features: implement the PWA to allow users to install the application on their own devices.
    * Reason for not featuring in this release: the web developer needs more knowledge on this subject.
