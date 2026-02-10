"use client";
import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link href="/">Blinkit</Link>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
        <Link href="/signup" onClick={() => setOpen(false)}>Signup</Link>
        <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
      </div>
    </nav>
  );
}
