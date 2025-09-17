import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold">
              Business Services Technology
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="hover:text-accent transition-colors">
              Nos Services
            </Link>
            <Link href="/reparation" className="hover:text-accent transition-colors">
              Réparation
            </Link>
            <Link href="/impression" className="hover:text-accent transition-colors">
              Impression
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>+33 6 60 02 42 62</span>
            </div>
            <Button variant="secondary" size="sm">
              Devis Gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}