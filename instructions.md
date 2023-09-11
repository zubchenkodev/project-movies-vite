# Instructions

## Movie site

The goal for this week is to use themoviedb.org's API to fetch a list of movies (more on which movies further down), display them on a page, and then link to a movie detail page when you click on the movie.

This time, rather than following designs from a set of images, we'd like you to follow (or even better: improve) the design which we've created in our example app using the same API.

### Context:

 <img src="/src/assets/finished-version.png" alt="Project Example">

   <a href="https://technigo-movies-project.netlify.com/">
    Click here to view sample of this project
  </a>

In this app, we've used the API to fetch popular movies in the US. You are free to choose whatever endpoint you'd like to build up your list. You could do the same as us, or you could, for example, show movies which are currently in the cinema or find movies in a particular genre. It's up to you!

### Using the API

You will need to register an account with themoviedb.org and then register for an API key in order to use the API.

When signing up for an API key, it asks a bunch of questions about what the application is for, but don't worry - we've contacted themoviedb.org and checked that they're OK with you all using the API for this purpose and it's all good in the hood. So, this is what you need to do:

- Signup for [themoviedb.org](https://www.themoviedb.org/account/signup)
- Go to https://www.themoviedb.org/settings/api/request
- Select 'developer' & accept the terms
- Fill in the form requesting an API. You need to select 'Website' in the dropdown and say the use is for Technigo. Like this:
  <img src="/src/assets/api-form-sample.png" alt="Form Example">
- Fill in your personal details.
- Submit the form and you should be approved automatically. Copy the v3 API key from the following page.

With your freshly minted API key, you're now ready to start making API requests. The API is well documented at [developers.themoviedb.org](https://developers.themoviedb.org/3), and if you click through onto an endpoint, there's a 'try it out' tab where you can paste in your API key and run a request to see what you get in response. These are the endpoints we used in our example application:

#### Fetching popular movies for the list page

https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1
!!! Don't forget to replace {api_key} with your API key if you copy and paste this.

#### Fetching a movie's details

https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this.

### Rendering images from the API

Each movie comes with a 'poster', which looks like a cover you'd find in a DVD, and a 'backdrop' which is more like a screen capture from a scene in the film. In the API response you get for a movie or list of movies, each one has a property for these images, but it looks like this

`"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",`

<
🎬 That path to the image is incomplete - it needs a full URL.

To get the full URL, we need to decide what size of the image we'd like, and the API has a bunch of options for that. You can find the full list of sizes by loading the API endpoint https://api.themoviedb.org/3/configuration?api_key={api_key} (don't forget to put your API key in place of {api_key}). That response looks something like this:

```json
{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": ["w300", "w780", "w1280", "original"],
    "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    "profile_sizes": ["w45", "w185", "h632", "original"],
    "still_sizes": ["w92", "w185", "w300", "original"]
  }
}
```

### Requirements:

- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed your app should hide the input form and show a summary of the user's submissions.

### Your page should be responsive:

- Adapting to the different viewports

### Design

How you design your page is up to you, but take accessibility into account when you are styling your form elements - so inputs should have labels and should be easily readable and usable. We STRONGLY recommend having some kind of design or sketch before starting to code.

Feel free to use other survey tools such as Typeform, Google Forms as inspiration. Or you can check out Dribbble, Behance or Pinterest.
