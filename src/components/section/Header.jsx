"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import ProfileSheet from "../atom/ProfileSheet";
import { useEffect, useState } from "react";
import { api, ENDPOINT } from "@/lib/api";
import { useSelector } from "react-redux";
import Image from "next/image";

export const navigationItems = [
  { name: "Posts", href: "/" },
  { name: "My Posts", href: "/myposts" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          
      <span className="text-2xl font-bold text-blue-600">Nexus</span>


          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:content-[""]'
                      : 'text-gray-700 hover:text-blue-600 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-blue-300 hover:after:content-[""]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

        
          <div className="flex items-center gap-4">
           
          
            
            
            <ProfileSheet />
          </div>
        </div>

    
      </div>
    </header>
  );
}