import './globals.css'
import React from "react";
import MenuNav from "@/components/MenuNav";
import RootProvider from "@/components/RootProvider.";
import Footer from "@/components/Footer";


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body >
      <RootProvider>
          <MenuNav/>
          {children}
          <Footer/>
      </RootProvider>
      </body>
    </html>
  )
}
