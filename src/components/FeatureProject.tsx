import React from 'react';
import axios from "axios";

async function getData(){
    const res = await axios(process.env.BASE_URL+`api/FeaturedProject`)
    if(!res.data){
        throw new Error('Not Calling Feature Api')
    }
    return res.data
}


const FeatureProject : React.FC  =async () => {
    let data = await getData()
    return (
        <section>
            <div className="feature bg-[#F0FDF4] py-24">
                <div className="container w-5/6 mx-auto">
                    <div className="feature-content text-center mb-20">
                        <h4 className="text-[#20B15A] text-lg font-medium">FEATURED PROJECT</h4>
                        <h1 className="py-4 font-bold text-2xl leading-10">
                            We provide the Perfect Solution <br /> to your business growth
                        </h1>
                    </div>
                    <div className="feature-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
                        <div className="feature-grid-left lg:h-full ">
                            <img
                                src={data[0]['image']}
                                alt="image"
                                className="rounded-2xl mb-3 lg:h-5/6 lg:object-cover"
                            />
                            <p className="mb-2">App Design - June 20, 2022</p>
                            <h5 className="font-bold text-2xl">{data[0]['title']}</h5>
                        </div>
                        <div className="feature-grid-right grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4">
                            <div className="feature-grid-right-img">
                                <img
                                    src={data[1]['image']}
                                    alt="image"
                                    className="rounded-2xl mb-3"
                                />
                                <p className="mb-2">App Design - June 20, 2022</p>
                                <h5 className="font-bold text-2xl lg:text-xl">
                                    {data[1]['title']}
                                </h5>
                            </div>
                            <div className="feature-grid-right-img">
                                <img
                                    src={data[2]['image']}
                                    alt="image"
                                    className="rounded-2xl mb-3"
                                />
                                <p className="mb-2">App Design - June 20, 2022</p>
                                <h5 className="font-bold text-2xl lg:text-xl">
                                    {data[2]['title']}
                                </h5>
                            </div>
                            <div className="feature-grid-right-img">
                                <img
                                    src={data[3]['image']}
                                    alt="image"
                                    className="rounded-2xl mb-3"
                                />
                                <p className="mb-2">App Design - June 20, 2022</p>
                                <h5 className="font-bold text-2xl lg:text-xl">
                                    {data[3]['title']}
                                </h5>
                            </div>
                            <div className="feature-grid-right-img">
                                <img
                                    src={data[4]['image']}
                                    alt="image"
                                    className="rounded-2xl mb-3"
                                />
                                <p className="mb-2">App Design - June 20, 2022</p>
                                <h5 className="font-bold text-2xl md:text-xl">
                                    {data[4]['title']}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FeatureProject ;