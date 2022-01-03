import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div>
        <div className="row w-100">
          <div className="profile d-flex justify-content-center align-items-center flex-column">
            <div className="user-img text-center pb-5">
              <img
                src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/270846171_5262551407097246_9020473520020826321_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=9267fe&_nc_eui2=AeHuvsBJ5sgh8ImssdODvjeids5IeDz2ial2zkh4PPaJqR_dzJcI3ynzGuL8-an5fwKhFaLTlQ7y5WpWns5TukH7&_nc_ohc=G3wqEks7FJUAX8GyXY4&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT8ufnuS0VatmKsMDKuYn6qwzXe-aQM5QtYuqlEUgue7rg&oe=61D79B26"
                alt="profile-pic"
                className="img-fluid"
              />
            </div>
            <div className="user-info">
              <h4>
                Name: <span className="info">MD. Raju Molla</span>
              </h4>
              <hr />
              <h4>
                Phone: <span className="info">+8801967582421</span>
              </h4>
              <hr />
              <h4>
                Email:{" "}
                <span className="info email ps-2">mraju5797@gmail.com</span>
              </h4>
              <hr />
              <h4>
                Date of birth: <span className="ms-3">N/A</span>
              </h4>
              <hr />
              <h4>
                Gender: <span className="info-last">N/A</span>
              </h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
  );
};

export default UserProfile;
