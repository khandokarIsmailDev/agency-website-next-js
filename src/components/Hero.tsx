import React from 'react';
import axios from 'axios';

async function getData(){
    const res = await axios(process.env.BASE_URL+`api/HeroList`)
    if(!res.data){
        throw new Error('Not Calling Hero Api')
    }
    return res.data
}

const Hero:React.FC =async () => {
    let data =await getData()
    return (
        <header>
            <div className="hero pt-40 pb-20 bg-[#D7F5DC] mt-[-7rem]">
                <div className="container lg:w-3/4 w-5/6 mx-auto">
                    <div className="hero-grid grid grid-cols-1 lg:grid-cols-2">
                        <div className="hero-grid-content lg:flex lg:items-center">
                            <div className="hero-grid-content-flex text-center  lg:text-left">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-[3.5rem] lg:leading-[4rem] pb-5 ">
                                    Increase Your <br /> Customers Loyalty <br /> and Satisfaction
                                </h1>
                                <p className="text-black leading-7 pb-16 lg:text-xl">
                                    We help businesses like yours earn more customers, <br /> standout
                                    from competitors, make more money
                                </p>
                                <a
                                    href="#"
                                    className="font-bold lg:text-xl lg:px-5 lg:font-medium bg-[#20B15A] block lg:inline-block rounded-lg transition-all duration-500 hover:text-[#20B15A] hover:bg-white border-2 border-[#20B15A] text-white p-3"
                                >
                                    Get Stared
                                </a>
                            </div>
                        </div>
                        <div className="hero-grid-img hidden lg:block">
                            <div className="hero-grid-img-grid flex flex-wrap justify-end ">
                                <img
                                    src={data['image1']}
                                    className="w-[60%] mr-5 rounded-lg h-72 mb-5 object-cover box-border"
                                    alt="img"
                                />
                                <img
                                    src={data['image2']}
                                    className="w-[30%] h-72 rounded-lg mb-5 object-cover box-border"
                                    alt="image"
                                />
                                <img
                                    src={data['image3']}
                                    className="w-[30%] h-72 rounded-lg object-cover box-border"
                                    alt="image"
                                />
                                <img
                                    src={data['image4']}
                                    className="w-[60%] ml-5 rounded-lg h-72 object-cover box-border"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Hero