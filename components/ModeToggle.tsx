"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { GiPlayerTime } from 'react-icons/gi';
import Link from 'next/link';


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
    <div className="flex justify-between items-center mt-[5%] mx-auto px-2 md:mt-[2%] " >
      <GiPlayerTime size={30} className='hover:animate-spin cursor-pointer' />
      <h1 className='text-xl font-bold'> Age Calculator</h1>
      <button onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
      }} >
        {theme === 'light' ? <FaMoon size={30}/> : <FaSun size={30} />}
      </button>

    </div>

  )
}

