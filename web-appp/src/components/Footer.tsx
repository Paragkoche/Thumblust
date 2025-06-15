import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex px-5 lg:px-[150px] justify-between items-center py-7 border-t border-t-black">
      <div className="text-sm">
        Thumblust.com &copy; 2025 - {new Date().getFullYear() + 1}
      </div>
      <Link
        href={"https://instagram.com/thumblust"}
        target={`_${crypto.randomUUID()}`}
        className="cursor-pointer"
      >
        <Instagram size={16} />
      </Link>
    </footer>
  );
};

export default Footer;
