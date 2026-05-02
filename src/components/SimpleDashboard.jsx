
import React from 'react'

const SimpleDashboard = ({visitors}) => {







    return (
        <div className='simpledashbboard md:w-[40%] w-full flex items-center justify-center gap-2 md:flex-col flex-row'>

            <div className="block-dev w-full h-auto p-2 bg-green-100 rounded-md flex items-center justify-center gap-2 flex-col">
                <span className='md:text-3xl text-xl  font-bold'>{visitors}</span>
                <span className='md:text-2xl md:my-3 my-1 text-lg  '>Visitors </span>
            </div>

            <div className="block-dev w-full h-auto p-2 bg-green-100 rounded-md flex items-center justify-center gap-2 flex-col">
                <span className='md:text-3xl text-xl  font-bold'>600+</span>
                <span className='md:text-2xl md:my-3 my-1 text-lg  '>Jobs</span>
            </div>
        </div>
    )
}

export default SimpleDashboard
