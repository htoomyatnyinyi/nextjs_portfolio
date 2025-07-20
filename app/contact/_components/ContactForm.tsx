"use client";

import { motion } from "framer-motion"; // Import motion for animations
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Assuming you have a toast library like sonner
import { useState } from "react"; // Import useState for managing form state

import { contact } from "../_actions/contact";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
  const [formData, setFormData] = useState({
    // State to manage form input values
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    const data = new FormData(e.currentTarget); // Create FormData from the current form

    try {
      const result = await contact(data);
      // console.log(result);
      // toast.success("Your message has been sent successfully!"); // Show success toast
      if (result && result.success) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      } else {
        toast.error(
          result?.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <motion.form // Use motion.form for animations
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation to
          transition={{ duration: 0.5 }} // Animation duration
          onSubmit={handleSubmit} // Use client-side handleSubmit
          className="py-4 space-y-4"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              rows={4}
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
// "use client";

// import { motion } from "framer-motion";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { contact } from "../_actions/contact";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Toaster } from "@/components/ui/sonner";

// const ContactForm = () => {
//   return (
//     <div className="h-full">
//       <div className="container mx-auto h-full">
//         <form
//           action={async (formData: FormData) => {
//             const result = await contact(formData);
//             // Optionally handle the result here, e.g., show a message
//             console.log(result, "action");
//           }}
//           // action={contact}
//           className="py-4"
//         >
//           <div>
//             <Label htmlFor="name">Name</Label>
//             <Input type="text" id="name" name="name" placeholder="Your Name" />
//           </div>
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Your Email"
//             />
//           </div>
//           <div>
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               // type="text"
//               rows={4}
//               id="message"
//               name="message"
//               placeholder="Your Message"
//             />
//           </div>
//           <Button type="submit">Save</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
