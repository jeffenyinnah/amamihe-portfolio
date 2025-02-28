"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  MapPin,
  Phone,
  ChartAreaIcon,
} from "lucide-react";

import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data
      const submissionData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject, // Ensure this is included
        message: formData.message,
      };

      // Send form data to the Next.js API route
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        toast("Message sent!", {
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "", // Reset the subject field
          message: "",
        });
      } else {
        toast("Failed to submit form.", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast("An error occurred.", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div
            className="lg:col-span-2 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Let's talk about your project
            </h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you're looking for a data analytics
              consultant or web developer, have a question, or just want to
              connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:jeffenyinnah@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jeffenyinnah@gmail.com / info@jferson.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    Rua do Rio Raraga, Maputo - Mozambique.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +258 845 760 448 / +258 876 513 064
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-medium mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="mailto:jeffenyinnah@gmail.com"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://linkedin.comhttps://www.linkedin.com/in/amamihe-kaiser/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/jeffenyinnah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://public.tableau.com/app/profile/amamihe.kaiser/vizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Tableau"
                >
                  <ChartAreaIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-3 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Data Analytics Project">
                        Data Analytics Project
                      </option>
                      <option value="Web Development Project">
                        Web Development Project
                      </option>
                      <option value="Consulting Services">
                        Consulting Services
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Tell me about your project or inquiry"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground p-4 rounded-lg transition-all hover:bg-primary/90 hover:gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        Sending... <span className="animate-spin ml-2">⟳</span>
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
