import Accordian from "./Accordian";

export default function AccordionData() {
  const items = [
    {
      title: "Javascript Basics",
      content:
        "JavaScript is a programming language that allows you to implement complex features on web pages..."
    },
    {
      title: "React Fundamentals",
      content:
        "React is a JavaScript library for building user interfaces. It uses a component-based architecture and declarative syntax."
    },
    {
      title: "CSS Styling",
      content:
        "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation..."
    },
    {
      title: "Web Development",
      content:
        "Web development is the process of creating websites and web applications..."
    },
    {
      title: "Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine..."
    },
    {
      title: "Database Management",
      content:
        "Databases are organized collections of data that can be easily accessed, managed, and updated..."
    }
  ];

  return (
    <div>
      <Accordian items={items} />
    </div>
  );
}
