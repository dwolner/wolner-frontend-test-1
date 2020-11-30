### Exercise 1

We build embeddable tools via the Web Components standard to deliver financial and credit services to our clients.

The first step in building a new consumer-facing Web Component is to use the HTML/CSS and other assets created by our designers and web slicing team. We use Figma to design our pages/components and then have web slicers create the HTML/CSS. From there our frontend development team creates Web Components and React/Next.js applications.

##### The objectives are:

- Create a web application in a private repository called `<lastname>-backend-1`.
- Create an index page which has a single Web Component called `array-credit-lock`.
- Use the HTML content in the `exercise-1_page.html` file in this repo to develop the Web Component.
- Your goal is to make the "lock history" table functional with real data.
- You will find the JSON data for this table inside the `exercise-1_data.json`. Use an HTTPS call to fetch the content when the Web Component loads to render it. 
- Make sure "Show lock history" and "Hide lock history" continue to function correctly.
- Don't worry about making any other elements on the page dynamic. However, no functionality like expand/collapse should be broken in the conversion process.
- Extra Points: Create a `Dockerfile` and `docker-compose.yml` that allows us to build and start your project via `docker-compose up -d`. 

##### When complete:

Provide a link to your private repository to your recruiter or company representative. Make sure your `README` includes how to start your application and anything we should know. Additionally, please include notes on any design choices you made throughout the exercise (dependencies, libraries, assumptions, etc.).

Lastly, in your `README`, please note how many hours you spent on the exercise.