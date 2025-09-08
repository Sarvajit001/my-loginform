import React from "react";
import { Link } from "react-router-dom";
import "./home.css";  // Import the external CSS file

const Home = () => {
  const taskList = [
    { title: "Stopwatch Task", link: "/stopwatch" },
    { title: "Login Form Task", link: "/login" },
    { title: "Accordion Task", link: "/AccordianData" },
    { title: "React-Toast" ,link:"/toast"},
  ];

  return (
    <section className="home-section d-flex flex-column align-items-center justify-content-start">
      {/* Page Title */}
      <h1 className="page-title text-center display-4 fw-bold mb-5 text-white">
        React Tasks
      </h1>

      {/* Task List */}
      <div className="task-list w-100 d-flex flex-column gap-3">
        {taskList.map((task, index) => (
          <Link
            key={index}
            to={task.link}
            className="task-link text-decoration-none w-100"
          >
            <div className="task-card text-center border-2 border-light shadow-sm p-3 rounded-3">
              <h2 className="task-title h5 m-0">{task.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
