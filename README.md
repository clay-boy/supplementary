# Monster Tracker App

This is a simple web application that allows users to view a list of monsters and add new monsters using a form. The application fetches monster data from a local server and allows users to create new monsters via a POST request.

## Features

- Display a list of monsters with their name, age, and description.
- Add a new monster using a form.
- Pagination for fetching monsters from the server.

## Technologies Used

- HTML/CSS/JavaScript
- Fetch API for making HTTP requests
- JSON Server for mocking a RESTful API

## Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

   ```

2. **Install dependencies**

No additional dependencies are required beyond a basic web server for serving static files and JSON Server for mocking the API.

3. **Start the server**

Ensure you have JSON Server installed globally or locally within your project:

```bash
npm install -g json-server
```

_Then, start the JSON Server:_

```bash
Copy code
json-server --watch db.json
```

_This assumes you have a db.json file configured with initial data._

4. **Open the application**

Open `index.html` in a web browser to view the Monster Tracker application.

## Usage

- Upon loading the page, the application fetches and displays a list of monsters (default 50 per page).
- To add a new monster, fill out the form fields (name, age, description) and submit the form.
- The new monster will be added to the list and displayed immediately.

## Development

- Modify index.html, styles.css, and script.js to customize the application.
- Ensure the API endpoints (http://localhost:3000/monsters) match your JSON Server configuration.
- Use fetchMonsters() to fetch monsters with pagination support (\_page and \_limit query parameters).

## Notes

- This application assumes a basic setup where the JSON Server is used to mock a backend API.
- Adjust the styling and layout in styles.css as per your design preferences.

## ADMIN INFO

**Email** - [click-here](mailto:keith.mwai@gmail.com)

**Github** - [click-here](https://github.com/clay-boy/supplementary)

**_enjoy using our page_**
click here to view the website
