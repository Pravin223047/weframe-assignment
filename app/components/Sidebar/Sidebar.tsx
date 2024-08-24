"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { FileText, BarChart, Video, HelpCircle, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Rezept einlösen",
    icon: FileText,
    href: "/rezepteinlösen",
    activeColor: "text-teal-800",
    inactiveColor: "text-teal-600",
  },
  {
    label: "Live Bestand",
    icon: BarChart,
    href: "/livebestand",
    activeColor: "text-teal-800",
    inactiveColor: "text-teal-600",
  },
  {
    label: "Videosprechstunde",
    icon: Video,
    href: "/videosprechstunde",
    activeColor: "text-teal-800",
    inactiveColor: "text-teal-600",
  },
  {
    label: "FAQs",
    icon: HelpCircle,
    href: "/faqs",
    activeColor: "text-teal-800",
    inactiveColor: "text-teal-600",
  },
  {
    label: "Kontakt",
    icon: Mail,
    href: "/kontakt",
    activeColor: "text-teal-800",
    inactiveColor: "text-teal-600",
  },
];

const SideBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-100 text-teal-800">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-14"
          aria-label="Dashboard"
        >
          <div className="relative flex items-center justify-center w-16 h-16">
            <svg
              width="50"
              height="56"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0V6C20 17.0457 11.0457 26 0 26V20Z"
                fill="#28E3E9"
              />
            </svg>
          </div>

          <h1 className={cn("text-3xl font-bold", poppins.className)}>
            Blüten
          </h1>
        </Link>

        <nav className="space-y-3">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer",
                pathname === route.href
                  ? `bg-white ${route.activeColor} text-white`
                  : `bg-slate-100/80 ${route.inactiveColor} hover:bg-slate-200`
              )}
              aria-current={pathname === route.href ? "page" : undefined}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} aria-hidden="true" />
                {route.label}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
