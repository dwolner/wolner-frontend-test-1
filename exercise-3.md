### Exercise 3

We build embeddable tools via the Web Components standard to deliver financial and credit services to our clients.

In Exercise 1, you built a Web Component using Vanilla Javascript. Now we will try and recreate this component, using the framework we have developed at Array for building web components.

##### To get setup:

- Fork https://gitlab.systemadmin.com/array/monorepo into a private repository called `<lastname>-frontend-3`.
- You can ignore Docker for now - we will only be using `js/website-webcom-cms`
- Read the documentation - README.md, FRAMEWORK.md and ATTRIBUTES.md
- In the `server/cms` folder, created a new component called `array-credit-lock`. 
- We have provided you some pre-processed HTML (`exercise-3_page.html`) for the Credit Lock component for one of our clients - Brigit. 
- Copy this HTML as `1.html` into a `661B99CE-7301-4AD7-8EBC-91D08116A877` folder in the `array-credit-lock` folder - see other components for an example.
- Add a demo page called `array-credit-lock-brigit.html` in the `server/demo` folder which references your new component. Add the `usertoken="AB1074EE-04E5-40A8-9525-DE058B17A247"` attribute to the component.


##### The objectives are:
- Build out the array-credit-lock.js web component. This component should have 2 states - `locked` and `unlocked`
  - Locked: https://html.dev.credmo.com/brigit/brigit-creditlock-1b/creditlock-locked-history-page.html
  - Unlocked: https://html.dev.credmo.com/brigit/brigit-creditlock-1b/creditlock-unlocked-history-page.html
- Use the Monitoring API at `https://sandbox.array.io/api/monitoring/v2` with enrollmentCode `tui1bCreditLock` to:
  - Fetch the status from the API when the component loads
  - Make the lock/unlock button work with the sandbox API
- Use the Monitoring API at `https://sandbox.array.io/api/monitoring/v2/history` to 
  - Make the "lock history" table functional with real data from the sandbox API
- In addition, make sure the collapsible elements still work

##### When complete:

Provide a link to your private repository to your recruiter or company representative. Make sure your `README` includes how to start your application and anything we should know. Additionally, please include notes on any design choices you made throughout the exercise (dependencies, libraries, assumptions, etc.).

Lastly, in your `README`, please note how many hours you spent on the exercise.