# TestME - Testing

[Main README.md file](https://github.com/Georgette-Lumbe/test_me/blob/master/README.md)

[View live project](https://georgette-lumbe.github.io/test_me/)

[View website in GitHub pages](https://github.com/Georgette-Lumbe/test_me)

---

# Table of Contents

1. [Testing User Stories](#testing-user-stories "#Goto testing user stories")
2. [Manual Testing](#manual-testing "#Goto manual testing")

3. [Automated Testing](#automated-testing "#Goto automated testing")
    * [Code Validation](#code-validation "Goto code validation")
    * [Browser Validation](#browser-validation "Goto browser validation")
    * [Lighthouse Auditing](#lighthouse-auditing "Goto lighthouse auditing")

4. [User Testing](#user-testing "Goto user testing")

---

# Testing User Stories

## As a new user

* I would like to see where to start playing

    - At the bottom of the info box, in the landing page, there  is a start quiz button which leads to the quiz

* I would like to navigate easiliy to the website

    - At the top left, there is a logo which leads user back to the landing page with one click.

    - At the bottom of each box, there are buttons as start quiz, next, play again, share, that allow the user to go anywhere he wants, there is also an exit icon at the top right of quiz and feedback boxes.

*  I would like to set the dark mode when I play at night

    - At the top right, there is a label, where the user can easily change the mode of the site to dark or light.

* I would like to know the instructions before starting the quiz

    -  Each time the user enters the site, on the home page, there is an info box so, user can read it before starting.

*  I would like to know how many questions I have left

    - At the top right of the quiz box, the user can see the number of questions remaining .

*  I would like to see how many questions that I got wrong

    - At the left bottom of the quiz box, there is a answers indicator where user can see questions that he got wrong.

* I would like to leave the quiz whenever I want

    - At the top right of the quiz and feedback boxes, there is an exit icon which allow the user to leave the quiz.

*  I would like to have a very clear feedback when I finish the quiz

    - After playing the quiz, the user will lead to the feedback box where he can see the total question, his attempt, his percentage, his score, the questions he got correct and incorrect.

* I would like to be able to share my score with my friends and TestME community on Facebook

    - At the bottom right of the feedback box, there is a share button which leads user to Facebook
    - User can share his score with his friends and TestME community in just one click.

## As a returning user

* I would like to navigate easily to the online quiz

    - The site is optimized for user to easily play the quiz, as each box is clearly defined.

* I would like to see new questions

    - Questions and answers are randomly so the user will find new questions.

 [Go to top](#testing-user-stories "#Goto testing user stories")

# Manual Testing

## Common Elements Testing

Manual testing was directed on the following elements that appear on every box and page:

* Clicking on the label button will set dark mode 

![](assets/docs/testing/test_mode.gif)

## Home Page

* Manual testing for the info box when the start quiz button is clicked:

![](assets/docs/testing/test_start.gif)

* The responsiveness of the Home Page with the info Box

![](assets/docs/testing/responsive_home.gif)

## Quiz Box

* Manual testing for the quiz box

![](assets/docs/testing/test_quiz1.gif)
![](assets/docs/testing/test_quiz2.gif)

The responsiveness of the quiz box

![](assets/docs/testing/responsive_quiz.gif)

## Feedback Box

Manual testing for the Feedback box when the user finish the quiz:

![](assets/docs/testing/test_feedback.gif)

The responsiveness of the feedback box

![](assets/docs/testing/responsive_feedback.gif)

## Share Button

Manual testing for the share button which bring to Facebook:

![](assets/docs/testing/test_share.gif)

## Play again button

* Manual testing of the play again button, when it has been clicked on the feedback box:

![](assets/docs/testing/test_restart.gif)

## Exit icon

* Manual testing of the exit icon ant the logo, when they have been clicked on all boxes:

![](assets/docs/testing/test.gif)

 [Go to top](#testing-user-stories "#Goto testing user stories")

# Automated Testing

## Code Validation

1. W3C Markup Validator service was used to validate the HTML code used.

* index.html
<img src="assets/docs/screenshots/w3c_html.PNG" width="100%">

2. W3C validator CSS service was used to validate the CSS code used.

* style.css
<img src="assets/docs/screenshots/w3c_css.PNG" width="100%">

3. JavaScript

* script.js

  - The quiz variable that is not defined according to the validator is actually defined in another file called questions.js in which there are all the questions, options, images and answers, all defined in the quiz variable.
  - The next and play again function are called from onclick = "" property in my html file as well as getFeedback function which is call by the next function (the last click on next button).

  <img src="assets/docs/screenshots/jshint.PNG" width="100%">

* questions.js
 
  - The quiz variable is called in the script.js file.

  <img src="assets/docs/screenshots/jshint_questions.PNG" width="100%">

## Browser Validation

1. Chrome

<img src="assets/docs/testing/chrome.PNG" width="100%">

2. Edge

<img src="assets/docs/testing/edge.PNG" width="100%">

3. Opera

<img src="assets/docs/testing/opera.PNG" width="100%">

4. Firefox

<img src="assets/docs/testing/firefox.PNG" width="100%">

## Lighthouse Auditing

*  Find the desktop and mobile full reports

<details>
<summary>Desktop</summary>
<img src="assets/docs/testing/lighthouse_desktop1.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_desktop2.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_desktop3.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_desktop4.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_desktop5.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_desktop6.PNG" width="100%">
</details>

<details>
<summary>Mobile</summary>
<img src="assets/docs/testing/lighthouse_mobile1.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_mobile2.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_mobile3.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_mobile4.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_mobile5.PNG" width="100%">
<img src="assets/docs/testing/lighthouse_mobile6.PNG" width="100%">
</details>

# User testing

Family members, Jimmy and Esther, were asked to review, test the the site to point out any bugs and issues.

The following changes were made after their testing:

* Change the whole color of the site
* Correct some spelling mistakes.

 [Go to top](#testing-user-stories "#Goto testing user stories")