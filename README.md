# News 🍵

A NextJS Firebase Webapp to chill and read news

## Features

- Private mode to view news without logging in
- Login and registration pages
- Liked news view
- Code with JSDOC
- Firebase authentication
- Firestore for saving liked news

## Prerequisites

- NodeJS v18.16.0 or higher

## Setup

- install yarn

```
npm install yarn --location=global
```

- install dependencies

```
yarn install
```

## Commands

- Start Webapp

```
yarn dev
```

## Pages

- /private : view news without signing in

- /auth/signin : signin to your account

- /auth/signup : signup with a new email

- /user/dashboard : view what info about you have been saved in our database

- /user/feed : view news and add news to liked list

- /user/liked : view what news have you liked

- /auth/logout : log off your account
