import React from 'react';

const BreadCrumb:React.FC = () => {
    return (
        <section>
            <div className="breadcrumb pt-56 pb-20 bg-[#F8F9FC] mt-[-7rem]">
                <div className="container w-3/4 mx-auto">
                    <h1 className="font-semibold text-5xl mb-4">Our Services</h1>
                    <div className="breadcrumb-nav flex items-center font-semibold ">
                        <span className="mr-2">Home</span>
                        <span className="text-2xl mr-2">&gt;</span>
                        <a href="#" className="text-[#20B15A]">
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BreadCrumb;