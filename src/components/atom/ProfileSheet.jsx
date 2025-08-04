"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ExternalLinkIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navigationItems } from "../section/Header";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api, ENDPOINT } from "@/lib/api";
import { userLoggedOutDetails } from "@/redux/userSlice";
import { toast } from "sonner";

const ProfileSheet = () => {
  const [open, setOpen] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await api.get(ENDPOINT.logout);
      if (res.data.status === "success") {
        dispatch(userLoggedOutDetails());
        router.push("/");
        toast("User successfully logged out");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="h-8 w-8 cursor-pointer text-blue-500" />
      </SheetTrigger>

      <SheetContent side="right" className="px-6 bg-[#f9f9f9] text-gray-800">
        <SheetTitle className="sr-only">User Profile Sheet</SheetTitle>

        {/* Profile Card */}
        <div className="p-6 flex flex-col items-center gap-2 mt-[100px] bg-white rounded-3xl shadow-xl">
          {!userData.isLoggedIn ? (
            <Image
              src="/user.png"
              alt="Profile Icon"
              className="h-[100px] w-[100px] rounded-full border-4 border-blue-300 shadow"
              width={100}
              height={100}
            />
          ) : (
            <div className="h-[100px] w-[100px] rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-4xl font-bold text-white border-4 border-white shadow">
              {userData.user ? userData.user.name.charAt(0).toUpperCase() : ""}
            </div>
          )}

          <p className="text-xl font-semibold capitalize text-gray-900 mt-2">
            {userData.isLoggedIn ? userData.user.name : "Guest"}
          </p>

          <Link
            href={userData.isLoggedIn ? "/" : "/login"}
            className="bg-blue-600 text-white font-medium py-2 px-5 rounded-full hover:bg-blue-700 transition mt-4 text-base"
            onClick={() => {
              setOpen(false);
              if (userData.isLoggedIn) handleLogout();
            }}
          >
            {userData.isLoggedIn ? "Logout" : "Login"}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="divide-y bg-white rounded-3xl shadow-xl mt-6">
          <div>
            {navigationItems.map((link, index) => (
              <Link
                href={link.href}
                key={link.href || index}
                className="flex items-center justify-between px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 rounded-xl transition-all"
                onClick={() => setOpen(false)}
              >
                {link.name}
                <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSheet;
