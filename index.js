const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON bodies

const courses = {
    1: {
        id: 1,
        name: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript, the most popular programming language for web development.",
        duration: "4 weeks",
        instructor: "John Doe"
    },
    2: {
        id: 2,
        name: "Advanced CSS",
        description: "Deep dive into CSS and learn how to create responsive and modern web designs.",
        duration: "6 weeks",
        instructor: "Jane Smith"
    },
    3: {
        id: 3,
        name: "Data Structures and Algorithms",
        description: "Understand the fundamental data structures and algorithms used in computer science.",
        duration: "8 weeks",
        instructor: "Alice Johnson"
    },
    4: {
        id: 4,
        name: "Web Development with Node.js",
        description: "Build scalable web applications using Node.js and Express framework.",
        duration: "6 weeks",
        instructor: "Bob Brown"
    },
    5: {
        id: 5,
        name: "Machine Learning Basics",
        description: "An introductory course to machine learning concepts and techniques.",
        duration: "5 weeks",
        instructor: "Carol White"
    }
};

app.get('/courses', (req, res) => {
    res.json(courses);
});

// POST request to add a new course
app.post('/courses', (req, res) => {
    const newCourse = req.body;
    const newId = Object.keys(courses).length + 1;
    newCourse.id = newId;
    courses[newId] = newCourse;
    res.status(201).json(newCourse);
});

/* // PUT request to update an existing course
app.put('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    if (!courses[courseId]) {
        return res.status(404).json({ error: 'Course not found' });
    }
    const updatedCourse = req.body;
    updatedCourse.id = parseInt(courseId); // Ensure the ID is not changed
    courses[courseId] = updatedCourse;
    res.json(updatedCourse);
}); */

app.post('/courses', (req, res) => {
    const newCourses = req.body;
    if (!Array.isArray(newCourses)) {
        return res.status(400).json({ error: 'Expected an array of courses' });
    }

    newCourses.forEach(course => {
        const newId = Object.keys(courses).length + 1;
        course.id = newId;
        courses[newId] = course;
    });

    res.status(201).json(newCourses);
});

// Start the server

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
