import './globals.css'
import React from "react";
import NextTopLoader from 'nextjs-toploader';
import MenuNav from "@/components/MenuNav";


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body >
      <NextTopLoader/>
      <MenuNav/>
      {children}

      </body>
    </html>
  )
}
