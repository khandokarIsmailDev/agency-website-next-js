import React from 'react';
import axios from "axios";

interface Brand {
    id:number;
    image:string;
}
async function getData(){
    const res = await axios(process.env.BASE_URL+`api/BrandList`)
    if(!res.data){
        throw new Error('BrandList api not calling')
    }
    return res.data
}
const Brand:React.FC = async () => {
    const data = await getData()
    return (
        <section>
            <div className="brand bg-white py-10 mb">
                <div className="container w-3/4 mx-auto">
                    <div className="brand-grid grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {
                            data.map((value:Brand)=>{
                                return(
                                    <div key={value.id} className="brand-grid-img flex justify-center">
                                        <img
                                            src={value.image}
                                            className="transition-all duration-500 hover:opacity-50 hover:rotate-12 hover:scale-75 cursor-pointer"
                                            alt="image"
                                        />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="h-10 w-full bg-[#D7F5DC] mb-40" />
        </section>

    );
};

export default Brand;