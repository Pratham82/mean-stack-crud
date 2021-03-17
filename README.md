# MEAN Stack CRUD Application

## Installation:

Go to client & server then install packages

```
cd client && npm i
cd server && npm i
```

## Usage:

go to client's `package.json` and add the `PORT` and `MONGO_URI` in `npm run server` script. Then run `npm run server:all` this will spun up client and server simultaneously using `concurrently` npm package.

```
cd client
npm run server:all
```

## Server architecture:

```
 .
├──  app.js
├──  config
│  └──  db.js
├──  controllers
│  ├──  createNewCourse.js
│  ├──  deleteCourse.js
│  ├──  getAllCourses.js
│  ├──  getCourse.js
│  └──  updateCourse.js
├──  models
│  └──  Course.js
├──  package-lock.json
├──  package.json
├──  README.md
└──  routes
   └──  courseRoutes.js
```

## Screenshots:

[![Screenshot-from-2021-03-17-09-09-47.png](https://i.postimg.cc/zBd1wJ7t/Screenshot-from-2021-03-17-09-09-47.png)](https://postimg.cc/k6tZqPkK)
