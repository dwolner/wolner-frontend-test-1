### Hiring - Frontend Test 1

I built a embeddable tool via the Web Components standard!

This web component uses the shadowDOM to encapsulate and isolate its funtionality, template and styling. 

No outside dependancies are used to power the component except the ones already included with the component, save for the `<script>` tags which have all also been removed (no use of jQuery). The only dependency is `http-server` for testing the component within a browser with no CORS issues. Also I injected the link tags because there were a couple duplicates and I wanted to make it as data driven as possible if I am going to refactor.

Another note, because of the shadowDOM, the font had to be included in the root file, not within the component.

To start the project, you must have `node.js` and `npm` installed: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Then run:
``` npm i && npm run test```

Enjoy!