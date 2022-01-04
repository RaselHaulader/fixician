import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  // load data
  useEffect(() => {
    fetch("https://desolate-hamlet-19197.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`https://desolate-hamlet-19197.herokuapp.com/allServices/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsDelete(!isDelete);
            alert("Good job!", "deleted successfull", "success");
          } else {
            setIsDelete(false);
          }
        });
    }
  };
  return (
    <div>
      <div className="explore-container">
        {services.map((service) => (
          <div className="service">
            <Card
              border="light"
              className="card-body mx-3 mt-5 shadow mb-3 bg-body rounded-3"
            >
              <Card.Img
                className="pt-3 img-fluid w-100"
                variant="top"
                src={service?.img}
              />
              <Card.Body>
                <h3 className="my-3 text-center">{service?.name}</h3>
                <p>{service?.description}</p>
                <div className="d-flex justify-content-between">
                  <Button className="mt-2 fw-normal" variant="warning">
                    Update
                  </Button>
                  <Button
                    onClick={handleDelete}
                    className="mt-2 fw-normal"
                    variant="warning"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
