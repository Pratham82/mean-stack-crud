# MEAN Stack CRUD Application

### Frontend: **Angular**

### Backend: **Nodejs(Express)**

### Database: **MongoDB**

---

<br>

## Installation:

Go to client & server then install packages

```bash
cd client && npm i
cd server && npm i
```

## Usage:

go to client's `package.json` and add the `PORT` and `MONGO_URI` in `npm run server` script. Then run `npm run server:all` this will spun up client and server simultaneously using `concurrently` npm package.

```bash
cd client
npm run server:all
```

---

<br>

## Server architecture:

```
├── app.js
├── config
│  └── db.js
├── controllers
│  ├── createNewCourse.js
│  ├── deleteCourse.js
│  ├── getAllCourses.js
│  ├── getCourse.js
│  └── updateCourse.js
├── models
│  └── Course.js
├── package-lock.json
├── package.json
├── README.md
├── routes
│  └── courseRoutes.js
```

---

<br>

## Routes

<br>

**GET**

This route will give you all the courses

```
localhost:5000/api/courses
```

**GET ONE**

This route will give you the course with the provided ID

```
localhost:3000/api/courses/:id
```

**POST**

Creating new course with the given Request body in JSON

```
localhost:30000/api/courses
```

Eg. Request body

```
{
   "title": "JavaScript The Really REALLY HARD PARTS",
   "description": "Worship Will Sentence",
   "percentComplete": 50,
   "favorite": true
}
```

**DELETE**

This route will delete the train with the provided ID

```
localhost:3000/api/courses/:id
```

**UPDATE**

This route will update the course with the provided ID and given Request body in JSON

```
localhost:3000/api/courses/:id
```

---

<br>

## Course Data Model:

```javascript
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  percentComplete: {
    type: Number,
    required: false,
  },
  favorite: {
    type: Boolean,
    required: false,
  },
})
```

---

<br>

## Screenshots:

[![Screenshot-from-2021-03-17-09-09-47.png](https://i.postimg.cc/zBd1wJ7t/Screenshot-from-2021-03-17-09-09-47.png)](https://postimg.cc/k6tZqPkK)
