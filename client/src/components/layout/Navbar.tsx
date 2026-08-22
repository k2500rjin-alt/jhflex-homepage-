import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { name: "회사소개", href: "#about" },
  { name: "제품소개", href: "#products" },
  { name: "방산사업", href: "#defense" },
  { name: "제조공정", href: "#process" },
  { name: "기술사양", href: "#tech" },
  { name: "사용소재", href: "#material" },
];

import { ContactDialog } from "../ContactDialog";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary-foreground text-primary shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold leading-none text-xs">JH</span>
              </div>
              <span className="font-extrabold">JHFLEX</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-primary/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <ContactDialog>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium cursor-pointer border-0">
                견적 문의
              </Button>
            </ContactDialog>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none hover:bg-white/10 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary-foreground border-b border-white/10 absolute w-full left-0">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col shadow-xl bg-primary-foreground">
            {navItems.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-primary/70 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2 mt-2">
              <ContactDialog>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium cursor-pointer border-0">
                  견적 문의
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
