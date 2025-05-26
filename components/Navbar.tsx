"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-primary py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white font-oswald tracking-wider">
              M1 <span className="text-secondary">ARMY</span> SHOP
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/catalog" className="text-white hover:text-secondary transition-colors">
              Katalog
            </Link>
            <Link href="/novinky" className="text-white hover:text-secondary transition-colors">
              Novinky
            </Link>
            <Link href="/o-nas" className="text-white hover:text-secondary transition-colors">
              O nás
            </Link>
            <Link href="/kontakt" className="text-white hover:text-secondary transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Search, Cart, and User */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-primary/80">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-primary/80">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:text-secondary hover:bg-primary/80"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-primary-foreground/10 mt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/catalog" className="text-white hover:text-secondary transition-colors">
                Katalog
              </Link>
              <Link href="/novinky" className="text-white hover:text-secondary transition-colors">
                Novinky
              </Link>
              <Link href="/o-nas" className="text-white hover:text-secondary transition-colors">
                O nás
              </Link>
              <Link href="/kontakt" className="text-white hover:text-secondary transition-colors">
                Kontakt
              </Link>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-primary-foreground/10">
              <Link href="/search">
                <Button variant="ghost" size="sm" className="text-white hover:text-secondary hover:bg-primary/80">
                  <Search className="h-4 w-4 mr-2" />
                  Hledat
                </Button>
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="sm" className="text-white hover:text-secondary hover:bg-primary/80">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Košík
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-white hover:text-secondary hover:bg-primary/80">
                  <User className="h-4 w-4 mr-2" />
                  Účet
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
