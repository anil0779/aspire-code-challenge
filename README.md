# ASPIRE-CODE-CHALLENGE - Anil Kumar

Dear Aspire team,

Thanks for giving me this opportunity to take up the challenge and be a part of this process.

Please find some information below to help you understand the features that I have developed, my thought process behind designing the project and why I have made certain choices.

For easy walkthrough, I will divide the points in these major categories.

- Functional specifications
- Non Functional specifications
- Code Structure
- Tech choices
- Further Improvements which could be done later

Apart from developing the features, I have also paid attention to :-

- Best practices and clean code (used ESlint, Prettier)
- Standard files and folder structure
- Using Typescript
- Code readability and maintainability
- Decent UI/UX and styling
- Performance improvements
- Error handling

# Functional details (that I have implemented)

- Created a simple single-page application as shown in the screenshot image
- Created a navigation sidebar which has different options like Dashboard logo and links like Home, Cards etc.
- Add new card using a modal form - generate random card number and details
- Freeze/Unfreeze card - disable other actions on cards if the card is freezed
- Made Cards as the default route
- Created placeholder pages for other routes and a 404 page

# Non Functional specifications (that I have implemented)

- Tested on different browsers(Chrome, Firefox, Edge) and OS (Mac, Windows) to ensure it is working fine
- Use of React Hooks: Used React hooks like useEffect, useState etc.
- Clean code: Tried to write a clean and indented code (which follows Prettier code formatting)
- Add required validation for form
- Mock data usage wherever possible and use local storage for initial rendering of cards

# Code Structure

The project has the following directory structure:

- `ASPIRE-CODE-CHALLENGE/`
  - `node_modules/`: Contains all the dependencies of the project.
  - `public/`: Contains static files and assets.
  - `src/`: Contains all the source code for the project.
    - `components/`: Contains reusable components like Accordion, AppLayout, Modal, SideBar, and Tabs.
    - `icons/`: Contains all the icon files used in the project. Icons not uploaded to cdn goes here.
    - `modules/`: Contains different modules like Cards, Credit, Home, Payments, and Settings.
    - `api.js`: Contains all the API calls.
    - `App.css`: Contains global styles.
    - `App.tsx`: The main App component. Contains routes.
    - `AspireMainLogo.svg`: The main logo of the project.
    - `constants.tsx`: Contains all the constants used in the project.
    - `index.css`: Contains styles for the index file.
    - `index.tsx`: The entry point of the project.
  - `.gitignore`: Tells git which files it should not track nor maintain a version history for.
  - `package.json`: Lists the packages your project depends on, specifies versions of a package that your project can use using semantic versioning rules.
  - `README.md`: The file you are currently reading.
  - `tsconfig.json`: Specifies the root files and the compiler options required to compile the project.

The current folder structure of your project has several advantages:

- Modularity: The codebase is divided into modules, components, and icons, which makes it easier to manage and understand the code. Each module or component has its own directory, which can contain its own scripts, styles, tests, and even sub-components.

- Separation of Concerns: By separating the application into different folders based on their functionality, it’s easier to navigate through the project and locate specific files or code snippets.

- Scalability: This structure is scalable for large projects. As your application grows, you can add more files and directories into the existing structure easily.

# Tech choices

- Used React.js functional components
- Used react-router v6 for routing for navigating through different pages.
- Used styled-components for styling needs
- Used Typescript for static typing, better IDE support, ESNext features, interfaces
- Used github pages for deployment

# Performance improvements

- Used React hooks like useState and useEffect wherever applicable for all state updates and re renders
- Used mock data and error handling
- Used styled component for scoped styles, dynamic properties

# Unit testing

- Not included due to time constraints.

# Further Improvements/Changes which could be done later

- Add more robust validation for forms.
- Add unit test cases
- Move inline styles to styled component
- Improve device responsiveness for mobile phones and tablet devices
- Add authentication/authorization

# Getting Started

- open a terminal & move to the root directory of the project
- run `npm install`to install the deps
- run `npm start` to start the server
- visit [http://localhost:3000](http://localhost:3000/) to see the app running

# Deployment

- run `npm run deploy` from the root folder to update the app in github pages server
- visit [https://anil0779.github.io/aspire-code-challenge](https://anil0779.github.io/aspire-code-challenge) to see the app in action.
