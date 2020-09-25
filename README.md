### About
Cafe Infinite is the working title I have for a project I've been thinking about for a long time. It's a simple platform I'd like to build to help connect people with their local businesses. With COVID, I don't see that being useful anytime soon, but hopefully I'll have it done by the time things return to normal, or to a new-normal.

### FireBase
After seeing [this introduction](https://www.youtube.com/watch?v=9kRgVxULbag), I wanted to make a project using firebase.

### Stripe
I will handle payments using stripe.

### Google Maps
I will be using the Google maps API

### Hey Oliver!
To run this, you can check out the package.json commands, but I will also tell you here. `npm test` will run the app locally at [localhost:5000](http://localhost:5000/). You can check out the database at [localhost:4000](http://localhost:5000/) if you want. It is bundled with browserify and it is using watchify to watch for file changes, so don't worry about that -- while using `npm test`, all your changes should be represented at localhost:5000 as long as you refresh the page.

It will probably not do much for you right out of the box; the app requires that the google maps api loads, and I have saved the API key in my own firebase configuration, so you won't have access to it. 

Because I am using browserify, the entry-level file is app.js in the `public` folder. `public` is where all of the app's files are.
