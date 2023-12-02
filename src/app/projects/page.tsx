import React from 'react';
import AllProject from "@/components/AllProject";
import BreadCrumb from "@/components/BreadCrumb";

const Page:React.FC = () => {
    return (
        <div>
            <BreadCrumb heading="All Project"/>
            <AllProject/>
        </div>
    );
};

export default Page;