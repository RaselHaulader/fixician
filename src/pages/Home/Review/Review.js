import React from 'react';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from 'react-bootstrap';

const Review = () => {
    return (
        <div className='row mx-5'>
            <h2 className='text-center my-5 pb-3' style={{ color: "#0338AB" }}>Our Happy Customers</h2>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/4gmzkHm/1000-F-188974309-dyc-GZN5v-ISadmdu-DA4yz-SUg-PBT0bv-Wq-P.jpg"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/4gmzkHm/1000-F-188974309-dyc-GZN5v-ISadmdu-DA4yz-SUg-PBT0bv-Wq-P.jpg"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/4gmzkHm/1000-F-188974309-dyc-GZN5v-ISadmdu-DA4yz-SUg-PBT0bv-Wq-P.jpg"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/4gmzkHm/1000-F-188974309-dyc-GZN5v-ISadmdu-DA4yz-SUg-PBT0bv-Wq-P.jpg"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <br />
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Review;

