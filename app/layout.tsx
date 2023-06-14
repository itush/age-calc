import './globals.css'
import { Poppins } from 'next/font/google';
import ThemeProvider from '@/components/ModeProvider';
import ThemeToggle from '@/components/ModeToggle';

const poppins = Poppins({ subsets: ['latin'],
weight: ['400', '700', '800'],});

export const metadata = {
  title: 'Age Calculator',
  description: 'Created by Tushar Biswas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
      <ThemeToggle />
      <body className={poppins.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
