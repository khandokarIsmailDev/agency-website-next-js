"use client"

import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

interface BreadCrumb {
    heading:string;
}

const BreadCrumb:React.FC<BreadCrumb> = ({heading}) => {
    let path =  usePathname()
    let pathName = path.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    return (
        <section className="mb-24">
            <div className="breadcrumb pt-56 pb-20 bg-[#F8F9FC] mt-[-7rem]">
                <div className="container w-3/4 mx-auto">
                    <h1 className="font-semibold text-5xl mb-4">{heading}</h1>
                    <div className="breadcrumb-nav flex items-center font-semibold ">
                        <span className="mr-2">Home</span>
                        <span className="text-2xl mr-2">&gt;</span>
                        <Link href={path} className="text-[#20B15A]">{pathName}</Link>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default BreadCrumb;