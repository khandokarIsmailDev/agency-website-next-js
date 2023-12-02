import React from 'react';
import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import WorkList from "@/components/WorkList";
import State from "@/components/State";
import FeatureProject from "@/components/FeatureProject";
import Subscribe from "@/components/Subscribe";

const Page = () => {
    return (
        <div>
          <Hero/>
            <Brand/>
            <WorkList/>
            <State/>
            <FeatureProject/>
            <Subscribe/>

        </div>
    );
};

export default Page;