"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./stylesheet.css";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot-Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <div>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        {navLinks.map((l) => {
          const isActive = pathname.startsWith(l.href);
          return (
            <Link
              href={l.href}
              key={l.name}
              className={isActive ? "font-bold mr-4" : "text-blue-400 mr-4"}
            >
              {l.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
