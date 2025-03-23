import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-zinc-800 p-4 sm:p-6 mt-8 sm:mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <p className="text-sm order-2 sm:order-1">© 2025 AJNDKR.COM</p>
        <div className="flex gap-6 order-1 sm:order-2">
          <a
            href="https://github.com/ajndkr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/AjinkyaIndulkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:ajndkr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
