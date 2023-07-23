# Northcoders News Front-End App

Link to deployed app: https://nc-news-matt-sheehan.netlify.app/

This project is an interactive news web application built with React and styled in the vein of voting and discussion based websites such as Reddit.

Fetching data from a purpose-built API, NC News provides a feed of articles that can be filtered and sorted by various search terms. Users can login, post comments and provide upvotes and downvotes to existing articles and comments.

Link to back-end database: https://nc-news-api-45fk.onrender.com/api

# Use Guide:
- Download project from https://github.com/mattc0d3/nc-news-fe
- Clone in terminal with following command: ‘git clone https://github.com/mattc0d3/nc-news-fe.git’
- Open in code editor
- Install dependencies using `npm install`
- To run the app locally, enter command `npm run dev`

# Database Environment Variables:
- Script requires two databases - test and development - in order to be run. 
- These should be set as environment variables in separate .env files and referenced dynamically in the config path for the dotenv package within db/connection.js

# Minimum Requirements:
- Visual Studio Code or alternative source-code editor
- JavaScript
- React version 18.2.0
- Node.js version 20.0.0
- Axios version 1.4.0
- npm

# Features
Browse Articles: Users can view a list of articles and sort them by different criteria, such as the most recent, the most popular, or specific topics.

Read Article: By clicking on an article, users can view the article's details, including its title, body, author, and number of votes.

Comment on Articles: Logged-in users can leave comments on articles to share their thoughts and engage in discussions.

Vote on Articles and Comments: Users can vote on articles and comments to express their agreement or disagreement.

User Authentication: Users can sign up or log in to their existing accounts to gain access to additional features, such as posting comments and voting.

Error Handling: The front-end handles various error scenarios gracefully, providing users with meaningful error messages.

# Authors
- Matt Sheehan

# Acknowledgements
- Northcoders