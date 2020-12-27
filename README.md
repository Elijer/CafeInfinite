### About
Cafe Infinite is the working title I have for a social project I've been interested in a long time. The idea is to create a map-based social network in which people can share interesting features of their environment using icons on a map that, when clicked, will open the photo or video saved to them. I've actually noticed that the idea of a geographic or map-based feed is pretty popular, used by Instagram, Craiglist, Strava, Geocaching, Snapchat and a variety of other tools. It's fascinating to me that an interface can be so popular without ever being the main show. I'd like to give the idea more attention. [Check out the live (and very unfinished) version here.](https://cafe-infinite.web.app/)

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
