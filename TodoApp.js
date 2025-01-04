import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState(""); // ذخیره متن وظیفه جدید
  const [tasks, setTasks] = useState([]); // ذخیره لیستی از وظایف

  // افزودن وظیفه جدید
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]); // اضافه کردن وظیفه جدید به آرایه
      setTask(""); // پاک کردن ورودی
    } else {
      alert("Please enter a valid task!");
    }
  };

  // علامت‌گذاری وظیفه به‌عنوان انجام‌شده
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // حذف وظیفه
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // فیلتر کردن وظایف
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // ذخیره مقدار ورودی
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={handleAddTask}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <span
              onClick={() => toggleTaskCompletion(index)}
              style={{
                cursor: "pointer",
                color: t.completed ? "green" : "black",
              }}
            >
              {t.text}
            </span>
            <button
              onClick={() => handleDeleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
