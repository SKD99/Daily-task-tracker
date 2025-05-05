// src/App.js
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import NotesSection from './components/NotesSection';
import ProgressBar from './components/ProgressBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState('');

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Daily Task Tracker 📝</h1>
      <TaskInput addTask={addTask} />
      <ProgressBar tasks={tasks} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <NotesSection notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;

