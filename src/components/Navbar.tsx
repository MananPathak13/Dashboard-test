"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, Tooltip } from "@mantine/core";
import { FaSearch, FaBars, FaRegCalendarAlt } from "react-icons/fa";
import { MdGroup, MdOutlineWorkOutline } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const isActive = (path: string) => pathname === path; // Check active route

  return (
    <div className="w-full flex items-center justify-between px-4 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold text-blue-700">InPlaay</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex w-full lg:w-auto justify-between lg:space-x-6 mt-4 lg:mt-0`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
          <Link href="/dashboard/jobs" passHref>
            <button
              className={`flex items-center p-4 space-x-2 hover:bg-blue-50 rounded-md ${
                isActive("/dashboard/jobs") ? "text-blue-700 font-semibold" : "text-gray-700"
              }`}
            >
              <MdOutlineWorkOutline size={20} />
              <span className="ml-2">Jobs</span>
            </button>
          </Link>
          <Link href="/dashboard/opportunities" passHref>
            <button
              className={`flex items-center p-4 space-x-2 hover:bg-blue-50 rounded-md ${
                isActive("/dashboard/opportunities") ? "text-blue-700 font-semibold" : "text-gray-700"
              }`}
            >
              <FaSearch size={17} />
              <span className="ml-2">Opportunities</span>
            </button>
          </Link>
          <Link href="/dashboard/calendar" passHref>
            <button
              className={`flex items-center p-4 space-x-2 hover:bg-blue-50 rounded-md ${
                isActive("/dashboard/calendar") ? "text-blue-700 font-semibold" : "text-gray-700"
              }`}
            >
              <FaRegCalendarAlt size={20} />
              <span className="ml-2">Calendar</span>
            </button>
          </Link>
          <Link href="/dashboard/network" passHref>
            <button
              className={`flex items-center p-4 space-x-2 hover:bg-blue-50 rounded-md ${
                isActive("/dashboard/network") ? "text-blue-700 font-semibold" : "text-gray-700"
              }`}
            >
              <MdGroup size={20} />
              <span className="ml-2">Network</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center space-y-1">
        <Tooltip label="Active" position="bottom">
          <Avatar
            src="https://via.placeholder.com/50"
            alt="Profile Picture"
            radius="md"
            size="md"
          />
        </Tooltip>
        <span className="text-gray-700 text-sm">Active</span>
      </div>
    </div>
  );
};

export default Navbar;
