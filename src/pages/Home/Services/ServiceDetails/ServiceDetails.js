import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Navbar from "../../../Shared/Navbar/Navbar";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/allServices/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const orderData = {
      ...data,
    };
    console.log(orderData);
  };

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="details">
              <div className="details-img">
                <img
                  className="img-fluid"
                  src={service?.imgBack}
                  alt="details-img"
                />
              </div>
              <h3 className="py-3">{service?.name}</h3>
              <strong>Price: ${service?.price}</strong>
              <p className="py-3">{service?.description}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-from text-center py-3 ms-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  defaultValue=""
                  placeholder="email"
                  className="p-1 m-2 w-100"
                />
                <input
                  {...register("text")}
                  defaultValue=""
                  placeholder="name"
                  className="p-1 m-2 w-100"
                />
                <input
                  {...register("product")}
                  placeholder="Product Name"
                  defaultValue=""
                  className="p-1 m-2 w-100"
                />
                <br />
                <input
                  {...register("address")}
                  placeholder="address"
                  type="address"
                  className="p-1 m-2 w-100"
                />
                <br />
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  type="number"
                  className="p-1 m-2 w-100"
                />
                <input
                  {...register("price")}
                  defaultValue=""
                  placeholder="price"
                  className="p-1 m-2 w-100"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Book Now" className="booking-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
