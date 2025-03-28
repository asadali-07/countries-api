# Country API Data Project

A React-based web application that fetches and displays country data using an API. The project includes features like search functionality, filtering by region, and dark/light mode toggling using pure CSS and JavaScript. The project is bundled using Parcel.

## Features
- 🌍 Fetch and display country data from an API.
- 🔍 Search for countries by name.
- 🌎 Filter countries by region.
- 🌗 Toggle between dark mode and light mode.
- ⚡ Fast and optimized using Parcel.

## Tech Stack
- React.js
- Parcel.js (for bundling)
- Pure CSS & JavaScript (for styling and dark/light mode)
- Fetch API for fetching country data

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/countries-api.git
   cd country-api-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Type in the search bar to find a country.
- Use the region filter dropdown to filter countries by continent.
- Click the dark/light mode toggle to switch themes.

## Folder Structure
```
📦 country-api
📂 components
📂 contexts
📜 App.js
📜 index.js
🎨 styles.css
📜 package.json
📜 .gitignore
📜 README.md
```

## API Used
The project fetches data from the [REST Countries API](https://restcountries.com/).

Example API Call:
```js
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Deployment
To build and deploy the project:
```sh
npm run build
```
Then host the `dist` folder on any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing
Feel free to fork this project and submit pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE).

