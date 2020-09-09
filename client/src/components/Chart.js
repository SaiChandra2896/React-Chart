import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';

const Chart = ({title,data}) => {
    return (
        <div className='Graph'>
            <h4 className="display-5 text-center mb-4">{title}</h4>
            <Bar
            data={data}
            width={100}
            height={50} 
            />
        </div>
    )
}

export default Chart;
