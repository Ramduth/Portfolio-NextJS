import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target);
    formData.append("access_key", "ba09d6d7-412d-4af0-9a8d-5ad040ad41ee"); // Replace with your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        e.target.reset();
        toast.success("Message Sent Successfully!", {
          variant: "destructive",
          description:
            "Your message was sent successfully! I'll get back to you soon.",
        });
      } else {
        console.error("Error:", data);
        setFormStatus("error");
        toast.error("Submission Failed", {
          description:
            data.message ||
            "There was an error sending your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setFormStatus("error");
      toast.error("Network Error", {
        description:
          "There was an error connecting to the server. Please try again later.",
      });
    }

    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ramduthrajesh1@gmail.com",
      href: "mailto:ramduthrajesh1@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8547277570",
      href: "tel:+918547277570",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ramduth-rajesh-50412324b",
      href: "https://linkedin.com/in/ramduth-rajesh-50412324b",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/Ramduth",
      href: "https://github.com/Ramduth",
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 py-25 pb-6 md:px-16 max-w-screen-2xl mx-auto"
    >
      <div className="text-center mb-10 animate-on-scroll fade-in-bottom">
        <h2 className="text-3xl md:text-4xl text-black font-bold">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-base mb-12 max-w-3xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll fade-in-left">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="text-sm md:text-base mb-8">
            Feel free to reach out through any of these channels. I'm always
            open to discussing new projects, opportunities, or partnerships.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center hover:text-blue-500 transition-colors"
                >
                  <div className="mr-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-blue-500 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll fade-in-right">
          <h3 className="text-2xl font-bold mb-3">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="access_key"
              value="ba09d6d7-412d-4af0-9a8d-5ad040ad41ee"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg  border border-gray-300 focus:border-primary  focus:ring-primary/50 outline-none transition-all"
                  disabled={formStatus === "submitting"}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary  focus:ring-primary/50 outline-none transition-all"
                  disabled={formStatus === "submitting"}
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
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary  focus:ring-primary/50 outline-none transition-all"
                disabled={formStatus === "submitting"}
              />
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
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary  focus:ring-primary/50 outline-none transition-all resize-none"
                disabled={formStatus === "submitting"}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`w-full flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  formStatus === "submitting"
                    ? "bg-blue-500 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                {formStatus === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
