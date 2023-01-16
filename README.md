# personal-website-2.0

Rebirth of [personal-website](https://github.com/tahaafzal5/personal-website), which was written only in HTML and CSS. The code was also very messy and not very scalable. Was just a weekend project. personal-website-2.0 addresses all these issues.

### Build
- Clone the repo: `git clone git@github.com:tahaafzal5/personal-website-2.0.git`
- Navigate to the project: `cd personal-website.2.0`
- Build: `npm run build`

### Run
- Run locally on port 3000: `npm run start`
- Visit [localhost:3000](localhost:3000)

### Deploy
- Make sure you are on the `main` branch
- Predeploy: `rm -rf node_modules/.cache/ && npm run build`
- Deploy to GitHub pages: `gh-pages -d build`
- Visit [tahaafzal.com](tahaafzal.com)
