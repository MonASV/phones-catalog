import axios from "axios";
import { useState, useEffect } from "react";
import PhoneDetails from "../components/PhoneDetails";

function PhonesCatalog() {
  const [phones, setPhones] = useState(null);
  const [phoneDetails, setPhoneDetails] = useState(false);

  const getPhonesCatalog = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhonesCatalog();
  }, []);

  return phones === null ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div>
      <h1>Our Phone Catalog</h1>

      {phones.map((phone) => {

        return <h2 key={phone._id}>{phone.name}</h2>;

      })}
    </div>
  );
}

export default PhonesCatalog;
