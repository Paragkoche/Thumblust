import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex px-5 lg:px-[150px] justify-between items-center py-7 border-t border-t-black">
      <div className="text-sm">
        Thumblust.com &copy; 2025 - {new Date().getFullYear() + 1}
      </div>
      <div>
        <Instagram size={16} />
      </div>
    </footer>
  );
};

export default Footer;
