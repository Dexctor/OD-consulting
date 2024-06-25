// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-base-100 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">Odile Dewas</a>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/#about" legacyBehavior>
            <a className="btn btn-ghost">À propos</a>
          </Link>
          <Link href="/#contact" legacyBehavior>
            <a className="btn btn-ghost">Contact</a>
          </Link>
          <Link href="/#quote" legacyBehavior>
            <a className="btn btn-primary">Devis Gratuit</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
