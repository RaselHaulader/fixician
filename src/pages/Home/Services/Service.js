import React from 'react';


const Service = ({service}) => {
    const {_id, name, img, imgBack, description, price } = service;
    return (
        // <div className='service-container'>
        //     <div>
        //         <h2 className='text-2xl font-semibold'>{name}</h2>
        //         <p>{description}</p>
        //         <button>Read More</button>
        //     </div>
        //     <div>
        //         <img className='' src={img} alt="" />
        //     </div>
        // </div>
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-100 rounded-lg bg-white shadow-lg">
                <img className=" w-full h-100 md:h-100 object-cover md:w-100 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt="" />
                <div className="p-6 flex flex-col justify-start w-auto">
                <h1 className="text-gray-900 text-2xl font-semibold mb-2">{name}</h1>
                <p className="text-gray-700 text-base font-normal mb-4">
                    {description}
                </p>
                <h2 className='text-xl font-medium'>Cost: {price}</h2>
                <button type="button" className="w-48 px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
                
                </div>
            </div>
        </div>
    );
};

export default Service;