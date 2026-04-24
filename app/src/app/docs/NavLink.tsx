"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded text-sm transition-colors ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
