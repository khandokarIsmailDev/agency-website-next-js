import React from 'react';
import axios from "axios";

async function getData(){
    let res = await axios(process.env.BASE_URL+`api/TestimonialList`)
    if(!res.data){
        throw new Error('Testimonial api not calling')
    }
    return res.data
}

interface Testimonial {
    id:number;
    name:string;
    image:string;
    designation:string;
    msg:string;
}

const Testimonial:React.FC =async () => {
    let data = await getData()
    return (
        <section>
            <div className="testimonial my-40">
                <div className="container w-5/6 mx-auto">
                    <div className="testimonial-content  text-center lg:text-left mb-10">
                        <h4 className="text-[#20B15A] text-lg  font-medium">
                            TESTIMONIAL LIST
                        </h4>
                        <h1 className="py-4 font-bold text-2xl xl:text-3xl leading-10">
                            Better Agency/SEO Solution At <br /> Your Fingertips
                        </h1>
                    </div>
                    <div className="testimonail-grid grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:grid-cols-4">

                        {
                            data.map((testimonial:Testimonial) =>{
                                return(
                                    <div key={testimonial['id']} className="testimonial-grid-box border-[1px] shadow-lg shadow-gray-300/50 px-5 py-8 rounded-lg">
                                        <div className="flex justify-center items-center my-5 ">
                                            <img
                                                src={testimonial['image']}
                                                className="w-24 rounded-lg h-20 object-cover"
                                                alt="image"
                                            />
                                        </div>
                                        <div className="testimonial-grid-box-content text-center">
                                            <p className="text-gray-400 leading-7 text-base mb-5">
                                                {testimonial['msg']}
                                            </p>
                                            <h2 className="font-bold text-2xl mb-2">{testimonial['name']}</h2>
                                            <h5 className="font-medium text-base">{testimonial['designation']}</h5>
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

export default Testimonial;