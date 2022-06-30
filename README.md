# Study Helper!

This page is meant to look as clean as possible with a minimalistic design. The purpose of this project was to create a tool for myself to help me stay on track with my studies and implement brakes without having to use a timer on my phone. The idea I wanted to build on was to have a single page where I have all the links I'd want. This is the first draft of that project and my first step to create my own "Study Hub". Later in development I'd want to add more functionality and links to different dev-resources to make it even more helpful for myself.

![Responsive Mockup](https://github.com/telljacob/project-two/blob/main/assets/images/amiresponsive.png)

## Features

### Navigation

This is a one page site with as little to clutter the page as possible. Media links lower in the page.

### Media Links
The pages purpose was to be an actual tool a user like myself can use while studying. Putting in links to motivational videos, GitHub and Music to save time and using this page I can pace my studying and keep to my brakes better.

### Sound
Sound effect to indicate when the study session is over.


## Validator Testing

I have tried the website on Chrome, Firefox and all possible screen sizes using Devtools.

### HTML - W3C Validator: No errors, 3 warnings
![HTML Validation](https://github.com/telljacob/project-two/blob/main/assets/images/htmlvalidation.png?raw=true)

### CSS - Jigsaw Validator: No errors
![CSS Validation](https://github.com/telljacob/project-two/blob/main/assets/images/cssvalidation.png?raw=true)

## Lighthouse scores

### Desktop
![Lighthouse Score](https://github.com/telljacob/project-two/blob/main/assets/images/lhscoredesktop.png?raw=true)

### Mobile
![Lighthouse Score](https://github.com/telljacob/project-two/blob/main/assets/images/lhscoremobile.png?raw=true)

## Challanges

### Technical difficulties in development
- Problems getting reset button to work. I made a temporary fix, making the reset button refresh the page instead of doing anything in Javascript. Problem: the button can't be wrapped in an attribute without causing an error when running it through the validator. Working with the javascript file more lead to me figuring out the actual problem with the reset button. I could then remove the refresh functionality completely and simply have the reset button working as I initially intended.

## Credits
- https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range was used for out of range implementation
- https://www.youtube.com/watch?v=0R6rZngcHGg&ab_channel=ProgrammingTT for help implement sound effect

## Deployment
The site was deployed from Github pages:
- You get to Github pages by going to settings in the repository.
- From there you scroll down until you see "Github Pages" and press the hyperlink saying "Check it out here!"
- In the dropdown menu for "Branch:" choose main, in the next box choose "main" and save.

The live site can be found [here](https://telljacob.github.io/project-two/index.html).
