import Link from "next/link";

type NavBarProps = {
  home: string;
  contact: string;
  about: string;
};

const Navbar = ({ home, contact, about }: NavBarProps) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-white">
            {home}
          </Link>
          <Link href="/contact" className="text-white ml-4">
            {contact}
          </Link>
          <Link href="/about" className="text-white ml-4">
            {about}
          </Link>
        </div>
        <div className="flex items-center">
          <button className="text-white">
            <img src="/icons/brazilIcon.png" alt="Brazil" className="w-6 h-6" />
          </button>
          <button className="text-white ml-4">
            <img src="/icons/euaIcon.png" alt="EUA" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
