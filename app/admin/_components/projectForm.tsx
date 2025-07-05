"use client";

import { addProject } from "../_actions/product";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import z from "zod";

const ProjectForm = () => {
  return (
    <div className="p-2 m-1 ">
      <h1>Project Form</h1>
      <form
        action={async (formData) => {
          await addProject(formData);
        }}
        className="p-2 space-y-8"
      >
        <div className="space-y-2">
          <Label htmlFor="title">Name</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Project Title"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            id="description"
            name="description"
            placeholder="Project Description"
            required
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default ProjectForm;
