import React, { useState } from "react";
import { Menu, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  home: string;
  initiatives: string;
  network: string;
  contact: string;
  aboutUs: string;
};

const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navMap = [
    { label: "Home", href: props.home },
    { label: "Initiatives", href: props.initiatives },
    { label: "More", href: props.network },
    { label: "Contact", href: props.contact },
    { label: "About Us", href: props.aboutUs },
  ];

  const handleOnclick = () => {
    navigate(props.home);
  };

  return (
    <header className="bg-gray-950 border-b border-blue-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="RISE Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-white">RISE</h1>
                <p className="text-xs text-blue-300">
                  Realm of Indispensable Studies Empowerment
                </p>
              </div>
            </div>

            {/* Logo Upload */}
            <div className="hidden md:flex items-center">
              <label htmlFor="logo-upload" className="cursor-pointer"></label>
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navMap.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => navigate(item.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium bg-transparent border-none cursor-pointer"
                  style={{ background: "none" }}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navMap.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Logo Upload */}
              <div className="pt-3 border-t border-gray-700">
                <label htmlFor="logo-upload-mobile" className="cursor-pointer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-blue-500 text-blue-300 hover:bg-blue-500/10 w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </label>
                <Input
                  id="logo-upload-mobile"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
