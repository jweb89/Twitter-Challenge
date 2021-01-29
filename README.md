## How To Run
- copy the contents of .env.example and create a .env or rename the file and remove example and input the keys and token you got from the twitter api
- run "npm install" on both the frontend directory(twitter-exercise-frontend) and the backend directory(twitter-exercise)
- run "npm start" on both directories
- open http://localhost:3001 in your preffered browser. Port 3001 because our backend is running on port 3000

## How To Test
- assuming you have ran npm install, cypress dev dependencies should already be installed
- make sure backned api is currently running(could have mocked axios calls but for the purpose of this project I felt it wasn't exactly neccesary especially in the effort of not overengineering the solution)
- run "npm run cypress"
- this should open up a cypress window where you can see app.test.js, menu.test.js, and tweet.test.js
- click each file to run the test cases and see the browser running through the tests. I think this neat to watch the test happening in real time
- alternatively you can simply use "npm run cypress_tests" to run the tests in the terminal
- the code for the test files can be found in cypress/component directory

## Technical Considerations
- Used bootstrap for stlying and responsiveness. Site is optimized for mobile devices
- Cypress for unit testing since jest+react-testing-library doesn't seem to support scrolling for the intersection oberserver infinite scrolling functionality
- create-react-app for project template
- Implemented own infinite scrolling using intersection observer and useEffect hook to load more tweets on scroll
- Used inline styling where needed and for sticky header, however most stying is done via bootstrap
- Eslint for linting and formatting

## Unit testing
- app.test.js test that
    - items are rendered on click of handle
    - more tweets are rendered on scroll(sometimes fails on first load of cypress for some reason, so it will retry on its own 1 time. Tried to debug couldn't really figure out why this was happening)
    - check if menu causes scroll to snap back to top
    - check if different set of tweets is rendered when new handle is clicked
- menu.test.js
    - just check that both buttons are rendered
    - snapshot test that watches for any changes
- tweet.test.js
    - snapshot test that watches for any changes

## If I had more time
- Definitely work a little more on the header buttons and some other styling touch ups
- Mock axios calls with cypress intercepter so that tests are more controlled and eliminate the chance of any false negatives based on server issues. Also probably add snapshot testing for the App or Tweetlist since the tweets wouldn't change if they were stored locally in a json file
- Implement an api call in the backend to fetch a profile so more info could be displayed in the menu buttons(followers, following, # of tweets, profile image)
