"use client"; // <-- IMPORTANT: Marks this as a Client Component

import { createProject } from "@/lib/actions"; // Import the Server Action
import { useState } from "react";

export default function Form() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget); // Get form data

    // Call the Server Action
    const result = await createProject(formData);

    if (result.success) {
      setMessage("Project added successfully!");
      event.currentTarget.reset(); // Clear the form
    } else {
      setMessage(`Error: ${result.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <div>
        <label htmlFor="title">Project Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows={4}></textarea>
      </div>
      <button type="submit">Add Project</button>
      {message && <p>{message}</p>}
    </form>
  );
}
