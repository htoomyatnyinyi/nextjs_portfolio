"use client";

import { useState } from "react";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "thsi is title",
    description: "this is descriptions",
    imageUrl: "http://localhost:3000/this_is_imag_url",
    link: "http://localhost:3000/this_is_link",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Project added successfully");
      setFormData({ title: "", description: "", imageUrl: "", link: "" });
    } else {
      alert("Error adding project");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block">Project Link</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Project
      </button>
    </form>
  );
}
