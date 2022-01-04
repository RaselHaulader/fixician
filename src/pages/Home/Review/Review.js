import React, { useEffect, useState } from 'react';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from 'react-bootstrap';

const Review = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch("https://desolate-hamlet-19197.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, [])
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
                    {
                        reviews.map(review => <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" />
                                <Card.Body>
                                    <Card.Title>{review?.name}</Card.Title>
                                    <Card.Text>
                                        {review?.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>)
                    }
                    <br />
                </Swiper>
            </div>
        </div>
    );
};

export default Review;

