function About() {
    return (
        <div className="about">
            <h1>            About DoDues</h1>
            <p>I built this simple todo app so I can finally keep track of all the things my wife wants me to do.
                This project showcases the power of modern web development technologies, combining a robust React frontend with a MongoDB
                backend to create a seamless and efficient task management experience. </p>
            <h2>Frontend: React with Modern Tools</h2>
            <p>In developing this application, I leveraged the latest features and best practices in React development:
                React Hooks: I utilized hooks such as useState and useEffect to manage component state and side effects, resulting in more readable and maintainable code.
                Context API: To avoid prop drilling and efficiently manage global state, I implemented React's Context API. This allowed for seamless state management across components, enhancing the app's performance and scalability.
                These modern React tools enabled me to create a responsive and intuitive user interface, ensuring a smooth user experience when adding, editing, and completing tasks.
            </p> <h2>Backend: Express and MongoDB</h2>
            <p>The backend of this application is built with:
                Express.js: This flexible Node.js web application framework allowed me to set up a robust server to handle API requests efficiently.
                MongoDB: I chose MongoDB as the database for its flexibility with document-based storage, which aligns well with the dynamic nature of todo items.
                Connecting Frontend and Backend
                To establish a seamless connection between the frontend and backend:
                Axios: I used Axios, a popular HTTP client, to make API calls from the React frontend to the Express backend. Its promise-based structure allowed for clean, readable code when handling asynchronous operations.
                This architecture ensures efficient data flow between the user interface and the database, providing real-time updates and a responsive user experience.
                Conclusion
                By combining these modern technologies and development practices, I've created a todo application that is not only functional but also scalable and maintainable. The use of React's latest features, along with a solid Express and MongoDB backend, demonstrates a comprehensive approach to full-stack JavaScript development.</p>

            <h3><a href="https://github.com/RealTylerWalker/todoApp">Source Code Here :)</a></h3>













        </div>
    )
}

export default About;