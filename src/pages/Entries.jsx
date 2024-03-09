import React, { useState } from "react";
import { AmountCard } from "../components/AmountCard";
import Input from "../components/Input";
import Button from "../components/Button";
import Box from "../assets/chbox.png";
import axios from "axios";

const Entries = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Amount: "",
  });

  const handleInputChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // alert(formData.name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
   

    axios
      .post(
        "https://offering.pockethost.io/api/collections/offering/records",
        formData
      )
      .then((response) => {
        console.log(response);
        window.location.reload()
        // console.log(response.data.items)
      })
      .catch((error) => console.error("Error posting data:", error));
  };
  // console.log(formData)
  const handleCardClick = (amount) => {
    // Update the amount field in the form data
    handleInputChange("Amount", amount.toString());
  };
  return (
    <div className="entries">
      <div className="left">
        <img src={Box} alt="charity_box" />
      </div>
      <div className="right">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2> Deliverance Church Ndagani</h2>
            {/* <h2>Donations</h2> */}
            <div className="cards">
              {AmountCard.map((val, key) => (
                <div
                  key={key}
                  className="amt"
                  onClick={() => handleCardClick(val)}
                >
                  {val}
                </div>
              ))}
            </div>

            <div className="details">
              <Input
                name="Name"
                type="text"
                id="Name"
                onInputChange={handleInputChange}
              />
              <Input
                name="Phone"
                type="phone"
                id="Phone"
                onInputChange={handleInputChange}
              />
              <Input
                name="Amount"
                type="number"
                id="Amount"
                value={formData.Amount}
                onInputChange={handleInputChange}
              />
              <Button type="submit" />
            </div>
            <div className="more"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Entries;
