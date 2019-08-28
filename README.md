<img src="https://i.imgur.com/LqpvzOn.png">

# Module 5 Final: 🌸 Floriography Application 🌸

Floriography is an app that allows users to create boquets based on the language of flowers. Florigraphy's frontend is structured to emulate a social media platform where users can create, delete, and favorite bouquets. User's can create bouquets based 5 adjectives as well as write their own input. Requests are sent to Florigraphy's API and bouquets are picked based on a user's specific requests. This app encourages users to constantly explore the meanings of different flowers by hovering over each flower to uncover their name and meaning. Florigraphy also allows it's user's to send their bouquets to another peron's email. 

This is a JavaScript application made with Redux and React. 

## How to Install Florigraphy Application.
1. Use your terminal to navigate into the place where you want to clone Florigraphy's directory and `git clone` the url.
2. In terminal run `npm install` in order to install the necessary packages found in the `package.json` file needed to run this frontend.
3. Make sure you run `rails s` for the backend server (assuming you've installed Florigraphy API: https://github.com/daniela-sandoval/Floriography-App-Backend) and then run `npm start`.
4. This should open up your browser to Florigraphy's welcome page!

## How to Use Florigraphy
Floriography constantly talks to and makes fetch requests to Florigraphy's API and allows users to:
* Create, delete, and read bouquets based on adjectives, user input, and random options.
* Bouquets can also be created with user input by contacting the third party API Watson Tone Analyzer in the backend.
* User's can also email a bouquet to another user by using Florigraphy API's ActionMailer. 
* Experience webpages that have a floral theme and posts boxes that contain their bouquets.
* Users can also create, read, update, and delete their account through their profile.
* See what other users have made through the feed tab.
* Explore all the flowers in Florigraphy's database by hovering over each one as well as filtering through different tones.

## Developer
* Daniela Sandoval

## More About Our App
Floriography uses packages such as React, Redux, Moment.js, IBM Watson Tone Analyzer, Sass, Radium, React Animations, and Thunk. This app is also made with pure CSS!

You can find the live version at: http://floriography.herokuapp.com

### License
This project is licensed under the Learn.co Educational Content License. Please read `LICENSE.md` location in the directory or click on the following link (http://learn.co/content-license) for further details.
