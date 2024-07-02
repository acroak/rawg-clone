# Videogame Site

Make a clone of the popular game search site [rawg.io](https://rawg.io/).

## Goals
* light mode/dark mode toggle
* filter by genre
* filter by platform availability (xbox, playstation, pc, etc.)
* search able
* when list is loading display result skeleton
* sort games by relevance, date added, name, etc.

## Running the application
`npm i`
`npm run dev`

## API
We are using the rawg.io API. documentation can be found [here](https://rawg.io/apidocs).

### Axios
This project will be using axios to create HTTP Requests to rawg API endpoints

### Chakra UI
[Chakra UI](https://v2.chakra-ui.com/)

Supplies beautifully designed reuseable react components. Design is cosely related to how the site we are cloning already looks.

We will have to follow the installtion instructions and put the chakra provider into the root of our application.

### React Icons
This project uses the react-icons library

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

