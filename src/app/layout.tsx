import './globals.css'
import React from "react";
import MenuNav from "@/components/MenuNav";
import RootProvider from "@/components/RootProvider.";
import Footer from "@/components/Footer";



export async function generateMetadata(){
    const res=await fetch(process.env.BASE_URL+"api/SiteMeta/home");
    const JSON=await res.json();
    return{
        title:JSON[0]['title'],
        description:JSON[0]['description'],
        keywords:JSON[0]['keywords'],
        openGraph: {
            images: JSON[0]['image'],
        },
    }
}

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
