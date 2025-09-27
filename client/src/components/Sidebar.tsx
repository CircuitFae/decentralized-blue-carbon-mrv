// file: client/src/components/Sidebar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Register Project", href: "/register-project" },
    { name: "Projects", href: "/projects" },
    { name: "MRV", href: "/mrv" },
    { name: "Verification", href: "/verification" }, // The new link
    { name: "More", href: "#" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-800 p-5 border-r border-gray-700 flex-shrink-0">
      <h2 className="text-2xl font-bold text-cyan-400 mb-10">BlueCarbon</h2>
      <nav>
        <ul>
          {links.map(link => {
            const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
            return (
              <li
                key={link.name}
                className={`mb-2 rounded-md transition-colors ${
                  isActive ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Link href={link.href} className="block p-3 font-semibold">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};