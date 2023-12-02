import React from 'react';
import Team from "@/components/Team";
import Subscribe from "@/components/Subscribe";
import BreadCrumb from "@/components/BreadCrumb";

const Page= () => {
    return (
        <div>
            <BreadCrumb heading="Team"/>
            <Team/>
            <Subscribe/>
        </div>
    );
};

export default Page;