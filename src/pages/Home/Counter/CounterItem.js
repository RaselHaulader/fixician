import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.css';
const CounterItem = ({end, title, info}) => {
    return (
        <div className=' col-12 col-md-3'>
            <div className='counter-item mx-auto d-flex align-items-center justify-content-center'>
                <h2 className=''>
                    <CountUp end={end} useEasing={true} duration={3} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h2>
            </div>
            <h4 className='mt-4'>{title}</h4>
            <div className='w-75 mx-auto'>
                <small>{info}</small>
            </div>
        </div>
    );
};

export default CounterItem;