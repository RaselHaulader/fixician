import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((result) => {
        const allDetails = result?.find((details) => details.id == id);
        setData(allDetails);
        console.log(allDetails);
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
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="details">
              <div className="details-img">
                <img class="img-fluid" src={data?.imgBack} alt="details-img" />
              </div>
              <h3 className="py3">{data?.name}</h3>
              <strong className="py3">Price: ${data?.price}</strong>
              <p className="py3">{data?.description}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="order text-center py-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  defaultValue=""
                  placeholder="email"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("text")}
                  defaultValue=""
                  placeholder="name"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("product")}
                  placeholder="Product Name"
                  defaultValue=""
                  className="p-2 m-2 w-50"
                />
                <br />
                <input
                  {...register("address")}
                  placeholder="address"
                  type="address"
                  className="p-2 m-2 w-50"
                />
                <br />
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  type="number"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("price")}
                  defaultValue=""
                  placeholder="price"
                  className="p-2 m-2 w-50"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Book Now"
                  className="common-btn pt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
