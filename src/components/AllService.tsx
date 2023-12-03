import React from 'react';
import axios from "axios";


interface Service {
    id:number;
    title:string;
    des:string;
    image1:string;
    image2:string;
    image3:string;
    image4:string;

}

async function getData(){
    const res = await axios(process.env.BASE_URL+`api/AllService`)
    if(!res.data){
        throw new Error('not calling Service api')
    }
    return res.data
}

const AllService:React.FC = async () => {
    const data = await getData()
    return (
        <section>
            <div className="service py-20">
                <div className="container w-5/6 mx-auto">
                    <div className="service-content  text-center lg:text-left mb-10">
                        <h4 className="text-[#20B15A] text-lg  font-medium">
                            OUR ALL SERVICES
                        </h4>
                        <h1 className="py-4 font-bold text-2xl xl:text-3xl leading-10">
                            We Provide BestWeb design <br /> services
                        </h1>
                    </div>
                    <div className="service-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            data.map((service : Service)=>{
                                return(
                                    <div key={service['id']} className="service-grid-one mx-auto border-[1px] border-gray-100 px-8 pt-10 pb-0 rounded-lg shadow-lg shadow-500/50 ">
                                        <h1 className="font-semibold text-2xl">
                                            {service['title']}
                                        </h1>
                                        <p className="text-gray-400 my-5">
                                            {service['des']}
                                        </p>
                                        <div className="service-grid-one-img my-10 lg:flex lg:flex-wrap">
                                            <img
                                                src={service['image1']}
                                                className="mb-5 rounded-lg object-cover w-full lg:w-[60%] lg:mr-5 lg:h-40"
                                                alt="image"
                                            />
                                            <img
                                                src={service['image2']}
                                                className="mb-5 rounded-lg object-cover w-full lg:w-[30%] lg:h-40"
                                                alt="image"
                                            />
                                            <img
                                                src={service['image3']}
                                                className="mb-5 rounded-lg object-cover w-full lg:w-[45%] lg:h-64 lg:mr-5"
                                                alt="image"
                                            />
                                            <img
                                                src={service['image4']}
                                                className="mb-5 rounded-lg object-cover w-full lg:w-[45%] lg:h-64"
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>

    );
};

export default AllService;