import React from 'react';
import axios from "axios";
interface Project {
    id:number;
    title:string;
    image:string;
}

async function getData(){
    let res = await axios(process.env.BASE_URL+`api/AllProject`)
    if(!res.data){
        throw new Error("Project api not calling")
    }
    return res.data
}

const AllProject:React.FC =async () => {
    let data = await getData()
    return (
        <section>
            <div className="service py-20">
                <div className="container w-5/6 mx-auto">
                    <div className="service-content  text-center lg:text-left mb-10">
                        <h4 className="text-[#20B15A] text-lg  font-medium">ALL PROJECT</h4>
                        <h1 className="py-4 font-bold text-2xl xl:text-3xl leading-10">
                            Better Agency/SEO Solution At <br /> Your Fingertips
                        </h1>
                    </div>
                    <div className="service-grid grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {
                            data.map((project:Project) =>{
                                return (
                                    <div key={project['id']} className="service-grid-one transition-all duration-500 hover:scale-75 mx-auto border-[1px] border-gray-100 px-8 pt-10 pb-5 rounded-2xl shadow-lg shadow-500/50 ">
                                        <div className="service-grid-one-img mb-7 lg:flex lg:flex-wrap">
                                            <img
                                                src={project['image']}
                                                className=" rounded-2xl object-cover w-full"
                                                alt="image"
                                            />
                                        </div>
                                        <h1 className="font-semibold text-2xl">
                                            {project['title']}
                                        </h1>
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

export default AllProject;