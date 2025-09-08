import React, { useState } from "react";
import "./toaststyle.css";
import {Link} from "react-router-dom";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const toastOptions = [
    { type: "success", message: "✅ Success! Operation completed." },
    { type: "info", message: "ℹ️ FYI: Here’s some information." },
    { type: "warning", message: "⚠️ Warning! Something looks odd." },
    { type: "error", message: "❌ Error! Something went wrong." },
  ];

  const showToast = (type, message) => {
    const id = Date.now();
    console.log("Toast ID:", id);

    const newToast = { id, type, message };
    setToasts((prev) => [...prev, newToast]);

    // Auto remove after 7s
    setTimeout(() => {
      removeToast(id);
    }, 7000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
     <div className="button-box">
  <h1>React Toasts</h1>
  <div className="btn-container">
    {toastOptions.map((toastObj) => {
      const buttonType = toastObj.type === "error" ? "danger" : toastObj.type;

      return (
        <button
          key={toastObj.type}
          className={`btn btn-${buttonType}`}
          onClick={() => showToast(toastObj.type, toastObj.message)}
        >
          {toastObj.type} toast
        </button>
      );
    })}
  </div>
    <Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
</div>


        {/* Render all active toasts */}
        <div className="my-toast-container">
          {toasts.map((toast) => (
            <div key={toast.id} className={`my-toast ${toast.type}`}>
              {toast.message}
              <span onClick={() => removeToast(toast.id)}>&times;</span>
            </div>
          ))}
        </div>
    
    </>
  );
};

export default ToastContainer;
