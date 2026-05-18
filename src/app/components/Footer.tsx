import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#212529]/10 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C757D] hover:text-[#007A87] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6C757D] hover:text-[#007A87] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-[#6C757D] hover:text-[#007A87] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-[#6C757D]">
            © 2026 Data Analyst Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
