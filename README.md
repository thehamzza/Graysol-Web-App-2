
# Graysol Website

![Graysol Website Cover Picture](src/assets/img/Graysol.png)

## Project Overview
Gray Solutions is a leading software agency that provides web app development, custom software development, cloud solutions, and IT consultation. This repository contains the frontend codebase for the Graysol website, built with React, Vite, and Tailwind CSS. The project is designed to offer seamless scalability, reusability, and maintainability for a wide range of services provided by Gray Solutions.

## Table of Contents
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Styling and Configuration](#styling-and-configuration)
- [Hooks and Context Management](#hooks-and-context-management)
- [Utilities and Animations](#utilities-and-animations)
- [Routing and Pages](#routing-and-pages)
- [Components and Props Usage](#components-and-props-usage)
- [Services Data Management](#services-data-management)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#acknowledgements)

## Installation
### Prerequisites
- Node.js (v14 or higher)
- NPM or Yarn
- Git

### Cloning the Repository
```bash
git clone https://github.com/thehamzza/Graysol-Web-App-2.git
cd Graysol-Web-App-2
```

### Installing Dependencies
```bash
npm install
# Or if using Yarn
yarn install
```

### Running the Project
```bash
npm run dev
# Or with Yarn
yarn dev
```

This will start the development server on `http://localhost:3000`.

## Folder Structure
The project structure is designed to ensure modularity and scalability.

```
Graysol-Frontend
│
├── dist/              # Production build files
├── node_modules/      # Node.js modules
├── public/            # Static files
├── src/
│   ├── assets/        # Images, icons, fonts, etc.
│   ├── Components/    # Reusable components with data passed as props
│   ├── Context/       # Context for global state management
│   ├── hooks/         # Custom hooks for specific functionalities
│   ├── Pages/         # Pages corresponding to different routes
│   ├── Sections/      # Different sections of the pages
│   ├── utils/         # Utility functions (e.g., animations)
│   ├── App.css        # Custom CSS styling
│   ├── App.jsx        # Main application component
│   ├── index.css      # Tailwind CSS imports
│   ├── main.jsx       # Main entry point and router configuration
│   └── styles.js      # this files have all the font size used in website in hierarchy. All the heading h1, h2, h3 etc have specific size if you wish to change the size of H1 heading everywhere on webiste you can d so by changing just   chaning the size of H1 heading from this file. All font size, weights & colors can be changed from style.js
│
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # NPM/Yarn dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── README.md          # This README file
├── tailwind.config.js # Tailwind CSS configuration
├── vercel.json        # Vercel deployment configuration
└── vite.config.js     # Vite configuration
```

## Styling and Configuration
- The project uses **Tailwind CSS** for styling, with some custom styles defined in `App.css`.
- Tailwind configurations such as colors are defined in `tailwind.config.js`.
- The `vercel.json` file contains configuration settings required for routing when deploying to the Vercel platform.

### Main Styling Files
- `App.css`: Contains additional custom styles.
- `index.css`: Only imports Tailwind CSS classes.
- `styles.js`: Contains any additional JS-based styling if needed.

## Hooks and Context Management
### Custom Hooks
- `useWindowSize`: Monitors the current window size and adjusts content view in responsive components.

### Context Management
- `Context/`: Contains global state management logic. Currently, it handles user authentication for the admin dashboard, ensuring that only authenticated users can access certain pages.

## Utilities and Animations
- `utils/motion.js`: Contains the logic for hover animations used on service cards on the homepage, providing a dynamic user experience.

## Routing and Pages
The main routing of the project is handled in `main.jsx`. Each page is defined in the `Pages/` folder, with `index.js` files ensuring all components/pages are imported and exported efficiently.

### Page Structure
- **Home Page:** Contains sections such as `HomeBanner`, `ChooseUs`, `Sponsers`, `Services`, and `Testimonials`.
- **Services Pages:** Each service is represented by a separate JSX file in the `Pages/Services` folder, e.g., `CloudSolution.jsx`, `DataScience.jsx`.
- **About Page:** About Page contain the details about the company stats and have a conatct form that uses  `Email.js` service.
- **Blogs:** This is taking the contents of the blogs from the backend.
-  **Cotanct:** Contain the contact form for user to reach out to company.

### Reusability
All pages are designed to be reusable with props, making it easy to add or update content without modifying the base structure.

## Components and Props Usage
- The `Components/` folder contains all reusable components, such as buttons, cards, inputs, etc.
- Data for these components is passed as props, ensuring reusability and maintainability.

## Services Data Management
The `Sections/servicesData.js` file contains all the data for the different service pages in a structured object format. This data is passed as props to maintain consistent styling across service pages while allowing for easy content updates.

### Example Data Structure for Services
```javascript
export const serviceMainPage = {
  bannerTitle: "Our Services",
  bannerDescription: "Discover a range of expert solutions...",
  developmentFeatureHeading: "Services Features",
  developmentFeature: [
    { title: "Software Development", description: "Custom software for efficiency..." },
    ...
  ],
  // Additional properties for technologies, service details, FAQs, etc.
};
```

Each page component (e.g., `CloudSolution.jsx`) imports the relevant data object from `servicesData.js` and passes it as props to the different section components.

### How Data Is Passed
```javascript
import { Banner, DevelopmentFeatures, ServiceFeatures } from '../../Sections';
import { cloudSolutionPage } from '../../Sections/servicesData';

export const CloudSolution = () => {
  return (
    <>
      <Banner page='service' pageType={cloudSolutionPage}/>
      <DevelopmentFeatures pageType={cloudSolutionPage}/>
      <ServiceFeatures pageType={cloudSolutionPage}/>
      ...
    </>
  );
};
```

Here is the revised version with corrected grammatical errors:

## Email Service
In the Graysol website, there are three contact forms, and the service used for receiving user emails is email.js. It requires three things to send an email: `public key`, `template id`, and `service id`.

## Toast
React-toast is a lightweight and open-source notification library for React. Like other React libraries, this library is designed to pop up messages that provide feedback to users for their different actions. It can display success messages, warning messages, or custom messages based on the action or event that occurred.

## Environmental Variables
While working with Vite, it's necessary that all environmental variable names start with `VITE_` (e.g., `VITE_API_KEY`); otherwise, they will not be accessible.

## Deployment
This project is deployed using **Vercel**. The `vercel.json` file defines entry point routes and ensures that routing works correctly on the deployment platform.

### Deploying the Project
1. Install the Vercel CLI: `npm i -g vercel`.
2. Run `vercel` in the project root directory.
3. Follow the on-screen instructions to complete deployment.
4. There is also a simple method to connect your github with vercel and by importing project on vercel website from github you can deploy project with just one click

## Future Improvements
- **Accessibility:** Ensure the website is fully accessible and follows WAI-ARIA guidelines.
- **Testing:** Implement unit and integration tests using a testing library like Jest or React Testing Library.
- **Performance Optimization:** Analyze the website's performance using tools like Lighthouse and optimize where necessary.

## Acknowledgements
- This project was developed using **React** and **Vite**.
- Thanks to the Graysol team for providing the design and content guidelines.

```

