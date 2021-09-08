### Hiring - Frontend Test 1

I built a embeddable tool via the Web Components standard!

This web component uses the shadowDOM to encapsulate and isolate its funtionality, template and styling. 

No outside dependancies are used to power the component and the `<script>` tags have all also been removed (no use of jQuery). The only dependency is `http-server` for testing the component with a local web server. Also I injected the link tags because there were a couple duplicates and if I am going to refactor anyway, I want to make it as data driven as possible. Same could be done for the collapsible sections but was not necessary to complete the task.

Another note: because of the shadowDOM, the main font had to be included in the root file, not within the component.

To start the project, you must have `node.js` and `npm` installed: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Then run:
``` npm i && npm run test```
and open your browser to the shown address.

Enjoy!