# MILESTONE 1 PROJECT NAME - TESTING

This is the documented testing of the site *The Flag Quiz*.

Find the deployed site [here](https://mikael-johnsson.github.io/the-flag-quiz/)

![Image of the site on different devices](assets/images/readme/flag_quiz_responsiveness.png)

---

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)
  * [WAVE](#wave)

* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

* [BUGS](#bugs)
  * [Known Bugs](#known-bugs)
  * [Solved Bugs](#solved-bugs)

---

## AUTOMATED TESTING

###  W3C Validator

#### HTML
The HTML code was validated through the W3C validator via direct input. It came out with no errors.

![Screenshot of the "no error-message" from W3C Validator](assets/images/readme/html_validation.png)

#### CSS
The CSS code was validated through the W3C validator via direct input. It came out with one error. It warned that it did not validate external stylesheets, in this case the imported Google Fonts.

![Screenshot of the "error-message" from W3C Validator](assets/images/readme/css_validation.png)
### Lighthouse
The site is also validated through Lighthouse. The validator tests: Performance, Accessibiltiy, Best Practices and SEO.
#### Desktop
On desktop version the site scored 100, 100, 100 and 92.

![Screenshot of the lighthouse score for desktop](assets/images/readme/lighthouse_desktop_start.png)

#### Mobile
On mobile version the site scored 92, 92, 100, 92.

![Screenshot of the lighthouse score for mobile](assets/images/readme/lighthouse_mobile.png)

### WAVE
For additional accessibility testing, WAVE has been used to test the site. It rendered three "alerts" indicating that a few paragraph elements could be changed into headings.

![Screenshot of the WAVE testing](assets/images/readme/wave_validation.png)


## MANUAL TESTING

### Full Testing
Full testing was was performed on a PC with 1920x1080 screen and an iPhone XR.

They tested the site on following browsers:
- Google Chrome
- Safari (iPhone only)
- Mozilla Firefox
- Edge

|Feature|Expected outcome|Testing performed|Result|
|---|---|---|---|
|*Header*||||
|Home-link|Redirect to landing page|Click|Works|
|*Landing page*||||
|Username input|Being able to input a username|Input username|Works|
|Empty username input|Error message to appear|Clicking *Start the quiz* without username submitted|Works|
|Hover over buttons (desktop only)|Buttons give visual cue when hovering with mouse|Hover with mouse|Works|
|Choosing difficulty easy|Button stay pressed, easy flags in the game|Click|Works|
|Choosing difficulty moderate|Button stay pressed, moderate flags in the game|Click|Works|
|Choosing difficulty hard|Button stay pressed, hard flags in the game|Click|Works|
|Not choosing difficulty|Error message to appear|Click *Start the quiz* without choosing difficulty|Works|
|Start quiz|Game page to appear with flags and options|Click|Works|
|*Game page*||||
|Flag|A flag appears||Works|
|Options|Options appears||Works|
|Hover over buttons (desktop only)|Buttons give visual cue when hovering with mouse|Hover with mouse|Works|
|Score text|Username is visual followed by "'s score"||Works|
|Score counter|Increment with 1 every time answer is correct|Give correct answer|Works|
|Answer message|Shows green when answer correct|Give correct answer|Works|
|Answer message|Shows red when answer wrong|Give wrong answer|Works|
|Answer message|Displays the correct answer when answer wrong|Give wrong answer|Works|
|Answer message|Disappears after 1.8 seconds|Wait|Works|
|New question|New question to appear after submitting answer|Submit answer|Works|
|*Result page*||||
|Game over|Game ends after 10 questions|Play the entire game|Works|
|End message|Displays different message depending on final score|Get final score 10, <10, <5|Works|
|End message|Displays chosen difficulty||Works|
|End message|Displays the username||Works|
|End message|Displays final score||Works|
|Try again-button|Redirects to landing page|Click|Works|
|Hover over button (desktop only)|Button give visual cue when hovering with mouse|Hover with mouse|Works|

👩🏻‍💻 View an example of a completed full testing section [here](https://github.com/kera-cudmore/TheQuizArms/blob/main/TESTING.md#Full-Testing)

Full testing can be tedious, so it is great to try and break this part up into smaller chunks and do a bit at a time. Full testing is when you go through the site and test every single thing that can be tested. So for example you would test that all links in the navbar correctly redirect the user to where there are supposed to go. A table is the perfect way to display this information.

## BUGS

### Known Bugs

List (or put in a table) all known bugs on your site here as soon as you find them. This will prevent you from forgetting any at the end. Some (if not all) of these bugs will hopefully make their way over to the next section, solved bugs, as you progress through your project.

### Solved Bugs

👩🏻‍💻View an example of a completed bugs section [here](https://github.com/kera-cudmore/BookWorm/blob/main/TESTING.md#BUGS)

This is where all solved bugs go once squashed. List what the bug was, and how you managed to fix it. You can also include images/videos here if you wanted.