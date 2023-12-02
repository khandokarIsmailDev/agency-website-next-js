import React from 'react';
import BreadCrumb from "@/components/BreadCrumb";
import Testimonial from "@/components/Testimonial";
import Subscribe from "@/components/Subscribe";

const Page = () => {
    return (
        <div>
            <BreadCrumb heading="Testimonial List"/>
            <Testimonial/>
            <Subscribe/>
        </div>
    );
};

export default Page;