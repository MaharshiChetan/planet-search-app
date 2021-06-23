# Planet Search App - ReactJS Project

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following

1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Tailwind and Ant Design UI libraries along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs.

### Install Json Server

Refer to https://github.com/typicode/json-server to learn more about json-server package.

```bash
npm install -g json-server
```

### Install create-react-app - Not Required

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Live Application URL

The Application is deployed in

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the dummy API with json-server

```bash
json-server data.json
```

In order to run the application Type the following command

```bash
npm start
```

The API server Runs on **localhost:3000**
The Application Runs on **localhost:3001**

## Application design

#### Components

1. **SearchBar** : This Component contain one input search box which can be used to search the planet.

2. **Filters** : This Component contains list of filters which we receive from some API endpoints.

3. **PlanetList** : This Component displays the list of planets fetched from API endpoint.

4. **PlanetItem** : This Component is used by _PlanetList_ Component for showing details of the planet.

5. **HomePage** : This Component is the root of all the above components.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has 4 main API endpoints as follows:

1. http://localhost:3000/planets
2. http://localhost:3000/shapes
3. http://localhost:3000/colors
4. http://localhost:3000/sizes

## Resources

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Tailwind CSS** : Refer to https://tailwindcss.com/ to understand how CSS utility classes works.

**Ant Design** : Refer to https://ant.design/ to understand the concepts of reusability of components. Ant Design is one of the greatest UI library.
