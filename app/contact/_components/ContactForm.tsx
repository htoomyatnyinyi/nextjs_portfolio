"use client";

import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { contact } from "../_actions/contact";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <form
          action={async (formData: FormData) => {
            const result = await contact(formData);
            // Optionally handle the result here, e.g., show a message
            console.log(result, "action");
          }}
          // action={contact}
          className="py-4"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              // type="text"
              rows={4}
              id="message"
              name="message"
              placeholder="Your Message"
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
