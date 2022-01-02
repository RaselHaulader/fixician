import React from 'react';
import './Counter.css';
import CounterItem from './CounterItem';


const Counter = () => {
    return (
        <div className='counter-container w-100 py-5'>
            <div className='counter-header text-center mb-5'>
                <h1>We are done</h1>
            </div>
            <div className='counter-items-container p-3'>
                <div className='text-center row'>
                    <CounterItem
                        end={100}
                        title={'Service completed'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />
                    <CounterItem
                        end={100}
                        title={'Service completed'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />
                    <CounterItem
                        end={100}
                        title={'Service completed'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />
                    <CounterItem
                        end={100}
                        title={'Service completed'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />

                </div>
            </div>
        </div>
    );
};

export default Counter;