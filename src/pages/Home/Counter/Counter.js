import React from 'react';
import './Counter.css';
import CounterItem from './CounterItem';


const Counter = () => {
    return (
        <div className='counter-container w-100 py-5'>
            <div className='counter-header text-center mb-5'>
                <h1>Counter</h1>
            </div>
            <div className='counter-items-container p-3'>
                <div className='text-center row'>
                    <CounterItem
                        end={94}
                        title={'Completed Order'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />
                    <CounterItem
                        end={52}
                        title={'Masters of Repair'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />
                    <CounterItem
                        end={25}
                        title={'Our Partner'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />
                    <CounterItem
                        end={230}
                        title={'Active Users'}
                        info={'Lorem ipsum dolor sit amet consectetur adipisicing .'}
                    />

                </div>
            </div>
        </div>
    );
};

export default Counter;