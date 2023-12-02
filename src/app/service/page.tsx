import React from 'react';
import BreadCrumb from "@/components/BreadCrumb";
import AllService from "@/components/AllService";
import Subscribe from "@/components/Subscribe";

const Page= () => {
    return (
        <div>
            <BreadCrumb heading="Our Services"/>
            <AllService/>
            <Subscribe/>
        </div>
    );
};

export default Page;