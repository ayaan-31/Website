# personal-website-2.0

Rebirth of [personal-website](https://github.com/tahaafzal5/personal-website), which was written only in HTML and CSS. The code was also very messy and not very scalable. Was just a weekend project. personal-website-2.0 addresses all these issues.

## Project Structure
- `src/`
    - `index.js` entry point of the app.
    - `App/` root component of the app.
    - `Assets/` all the files, images, etc used by the app.
    - `Components/` all the reusable, small-sized components.
    - `Pages/` all the pages reachable within the website.
    - `Tests/` all the tests for the website.
    - `WebVitals/` modular library for measuring all the Web Vitals metrics on real users.

## Usage

### Build
- Clone the repo: `git clone git@github.com:tahaafzal5/personal-website-2.0.git`
- Navigate to the project: `cd personal-website.2.0`
- `npm install react-scripts --save`
- Build: `npm run build`

### Run
- Run locally on port 3000: `npm run start`
- Visit [localhost:3000](localhost:3000)

### Deploy
- Make sure you are on the `main` branch
- Pre-deploy: `rm -rf node_modules/.cache/ && npm run build`
- Deploy to GitHub pages: `gh-pages -d build`
- Visit [tahaafzal.com](tahaafzal.com)

### Extra
* To see the app on a mobile phone:
  * Find your computer's IP address by `ifconfig` (or similar)
  * Visit `<ip-address>:3000` on your favorite mobile browser