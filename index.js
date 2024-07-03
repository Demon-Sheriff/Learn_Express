const express = require('express'); // Correctly require Express
const app = express(); // Initialize the Express application

const courses = {
    course1: {
        id: 1,
        name: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript, the most popular programming language for web development.",
        duration: "4 weeks",
        instructor: "John Doe"
    },
    course2: {
        id: 2,
        name: "Advanced CSS",
        description: "Deep dive into CSS and learn how to create responsive and modern web designs.",
        duration: "6 weeks",
        instructor: "Jane Smith"
    },
    course3: {
        id: 3,
        name: "Data Structures and Algorithms",
        description: "Understand the fundamental data structures and algorithms used in computer science.",
        duration: "8 weeks",
        instructor: "Alice Johnson"
    },
    course4: {
        id: 4,
        name: "Web Development with Node.js",
        description: "Build scalable web applications using Node.js and Express framework.",
        duration: "6 weeks",
        instructor: "Bob Brown"
    },
    course5: {
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

// Start the server and make it listen on a specified port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/courses`);
});
