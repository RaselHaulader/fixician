import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./UserServices.css";

const UserServices = () => {
  const user = useSelector((state) => state.user.userAuth);
  const [myOrder, setMyOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://desolate-hamlet-19197.herokuapp.com/usersOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setLoading(false);
      });
  }, [isDelete, user.email]);

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`https://desolate-hamlet-19197.herokuapp.com/deleteOrder/${id}`, {
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
    <div responsive="sm md">
      <h1 className="text-center py-5">Your Order: {myOrder.length}</h1>
      <Container>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Product Tile</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              {!Loading ? (
                myOrder?.map((items) => (
                  <tbody className="table-title" key={items?._id}>
                    <tr>
                      <td>{items?.displayName}</td>
                      <td>{items?.product}</td>
                      <td>{items?.address}</td>
                      <td className="">{items?.phone}</td>
                      <td className="">{items?.email}</td>
                      <td className="">
                        <button
                          onClick={() => handleDelete(items?._id)}
                          className="delete-btn ms-5"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="spiner mx-auto pt-5">
                  <Spinner className="text-center" animation="border" />
                </div>
              )}
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserServices;
