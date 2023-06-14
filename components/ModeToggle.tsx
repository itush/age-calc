"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';


export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mt-[5%] mx-auto px-2 ">
      <h1>Age Calculator</h1>
      <button onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
      }} >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>

    </div>

  )
}

