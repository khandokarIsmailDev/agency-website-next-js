"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";


const RootProvider = ({ children }:{children: React.ReactNode}) => {
    return (
        <>
            {children}
            <ProgressBar color="#20B15A" />
        </>
    );
};

export default RootProvider;