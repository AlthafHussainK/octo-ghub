## Table of Contents

- Objective
- Getting Started
- Implementation
- Technical Details
- Tech Doc

## Objective:

To create a two pages the requirements of each are listed below:

- **User List page** - A default screen which fetches Users from the Github API ([https://api.github.com/users](https://api.github.com/users)) and displays them in a list. For each user you should show their Avatar, First Name, Last Name and Username. Each item in the list should link to the User Details page detailed below.
- **User Details page** - A screen which shows more detailed information for the selected user. We can show extended profile information (such as company and social handles), a summary on their followers, following and number of public repositories.

## Getting Started

First, run the development server:

`npm run dev` or `yarn dev`

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

Running unit test

`npm test` or `yarn test`

## Implementation - [Preview Build]

Build: [https://ghub-users.vercel.app/](https://ghub-users.vercel.app/)

There are two routes in the app.
**Home page (/)**: which displays User cards with Fullname, username and location.
**Profile Page (/[username])**: which displays more detailed information of the selected user like Fullname, username, bio, followers, following, location, company, twitter handle and number of public repositories.

- Loading Pages are added for both pages with react suspense.
- The metadata is generated dynamically according to the profile

- Entire app is responsive in mobile, tablet, PC and wide screen

- Major components are unit tested

## Technical Details

- **NextJS - v14.0.0** : bootstrapped with `create-next-app`

  - Using App based routing
  - React server components

- Typescript
- Tailwind CSS
- Primer-Octicons: Icon library
- React Testing Library
- Jest

## Tech Doc - [WIP]

### File Organization and Convention

- `app/`

  - `layout.tsx` - root layout is the top-most layout in the root app directory. define the <html> and <body> tags and other globally shared UI.
  - `page.tsx` - Home page which imports UserList components
  - `user-list.tsx` - Server component with data fetched on the server. Imports UserCard and map with users data
  - `loading.tsx` , `global-error.tsx` , `global.css`
  - `app/components/ `: contains reused components

    - `__tests__ /` : contains unit tests of profile-card and user-card components

  - `app/lib/` : Contains functions and types used in application,
  - `app/[username]/ `: Profile page logics here. contains page.tsx, layout.tsx, error.tsx, loading.tsx

- **Routing**

  - App router

- **Data Fetching**

  - Server side fetching

- **Caching**

  - Request memoization
  - Data cache
  - Router cache

- **Rendering**

  - Server Components
  - Client components

- **Styling**

  - Tailwind CSS
  - Module CSS:

- **Optimizations**

  - next/image
  - Metadata - dynamic metadata
  - EsLint and Prettier

- **Deployment**

  - Deployed on Vercel: [https://ghub-users.vercel.app/](https://ghub-users.vercel.app/)
