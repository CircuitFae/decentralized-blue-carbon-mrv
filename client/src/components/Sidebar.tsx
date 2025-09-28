// This is the updated content for client/src/components/Sidebar.tsx
"use client";
import React, { Fragment } from 'react'; // Import Fragment
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react'; // Import Headless UI for the dropdown

// A simple placeholder component for the user's avatar
const UserAvatar = () => (
  <div className="w-9 h-9 rounded-full bg-cyan-500 flex-shrink-0 border-2 border-gray-600"></div>
);

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Register Project", href: "/register-project" },
    { name: "Projects", href: "/projects" },
    { name: "MRV", href: "/mrv" },
    { name: "Verification", href: "/verification" },
    { name: "More", href: "#" },
  ];

  return (
    // MODIFICATION 1: Added 'flex' and 'flex-col' to the main container
    <aside className="w-64 h-screen bg-gray-800 p-5 border-r border-gray-700 flex-shrink-0 flex flex-col">
      {/* All of your original navigation code is here, untouched */}
      <div>
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
      </div>

      {/* MODIFICATION 2: Added the new user panel with a dropdown */}
      <div className="mt-auto"> {/* This pushes the panel to the bottom */}
        <div className="border-t border-gray-700 pt-4">
          <Menu as="div" className="relative text-left w-full">
            <div>
              <Menu.Button className="flex w-full items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <UserAvatar />
                <div className="text-left ml-3">
                  <p className="font-semibold text-sm">Admin User</p>
                  <p className="text-xs text-gray-400">View Options</p>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute bottom-full mb-2 w-full origin-bottom-left rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`${active ? 'bg-gray-600' : ''} block px-4 py-2 text-sm text-gray-200`}>
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`${active ? 'bg-gray-600' : ''} block px-4 py-2 text-sm text-gray-200`}>
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </aside>
  );
};