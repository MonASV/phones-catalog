import { useEffect } from "react";


function PhoneDetails(props) {
    const [phoneDetails, setPhoneDetails] = useState(null);

    const phoneId = props._id
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/phones/${phoneId}`)
        .then((response) => {
          setPhoneDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    
    return (
      <div className="PhoneDetails">
        <h3>{props.name}</h3>
      </div>
    );
  }
   
  export default PhoneDetails;