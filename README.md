# Full Stack Open CI/CD

This repository is used for the CI/CD module of the Full Stack Open course.

![Deployment pipeline](https://github.com/SudanShahi/fs-pokedex-ci/actions/workflows/pipeline.yml/badge.svg)

## Commands

Start by running `npm install` inside the project folder.

- `npm start` to run the webpack dev server
- `npm test` to run tests
- `npm run eslint` to run eslint
- `npm run build` to make a production build
- `npm run start-prod` to run the production build

## Application

Deployed application:  
[https://fs-pokedex-ci.onrender.com/](https://fs-pokedex-ci.onrender.com/)

## Endpoints

Health check:  
[https://fs-pokedex-ci.onrender.com/health](https://fs-pokedex-ci.onrender.com/health)

Version endpoint:  
[https://fs-pokedex-ci.onrender.com/version](https://fs-pokedex-ci.onrender.com/version)

## Keeping green

This repository includes the improvements from Full Stack Open Part 11:

- Pull request workflow for changes targeting `main`
- Automatic deployment to Render when changes are merged to `main`
- Version tagging for releases
- Discord notifications for successful deployments and failures
- Periodic health check workflow
- Skip logic when the commit message contains `#skip`

## Part 11 links

- Deployed pokedex: https://fs-pokedex-ci.onrender.com/
- Exercise 21 repository: https://github.com/SudanShahi/chess-ci
- Original chess group repository: https://github.com/rajeshdangal/Chess_game-

## Notes

The main branch should always stay green:

- the project builds successfully
- tests pass
- eslint passes
- deployment runs only when allowed by the workflow conditions
- branch protection test
