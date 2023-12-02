import React from 'react';

const Subscribe:React.FC = () => {
    return (
        <section>
            <div className="subscribe my-40">
                <div className="container w-5/6 mx-auto">
                    <div className="subscribe-content text-center mb-5">
                        <h4 className="text-[#20B15A] text-lg font-medium">SUBSCRIBE</h4>
                        <h1 className="py-4 font-bold text-2xl leading-10">
                            Subscribe to get the latest <br /> news about us
                        </h1>
                        <p className="text-gray-400">
                            Please drop your email below to get daily update about what we do
                        </p>
                    </div>
                    <div className="subscribe-form mt-10 text-center border-[1px] rounded-lg p-1 border-black max-w-xl mx-auto">
                        <form action="" className="flex justify-between">
                            <input
                                type="email"
                                name="email"
                                className="pl-3 w-3/4  focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                                placeholder="Enter Your Email Address"
                            />
                            <button
                                type="submit"
                                className="font-medium text-white px-5 py-4 bg-[#F55F1D] rounded-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Subscribe;