import React from "react";
import { useState, useEffect } from "react";
import { Frame } from "../../components/Frame";
import "./Form1.style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

export const Form1 = () => {
  const [gender, setGender] = useState("Male");
  const [relation, setRelation] = useState("fmember");
  const [firstname, setFirstName] = useState("Lakshmanan");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [mobilephone, setMobilePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [apartmentnumber, setApartmentNumber] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [version, setVersion] = useState(0);

  const { instance } = useMsal();
  const navigate = useNavigate();
  const activeAccount = instance.getActiveAccount();

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const onOptionRelationChange = (e) => {
    setRelation(e.target.value);
  };

  useEffect(() => {
    var subjectID = activeAccount.idTokenClaims.sub;
    axios
      .get("http://localhost:9001/user/" + subjectID)
      .then((res) => {
        if (res && res.data && res.data.data) {
          var userFound = res.data.data;
          setFirstName(userFound.first_name);
          setLastName(userFound.last_name);
          setGender(userFound.gender);
          setDob(userFound.date_of_birth);
          setEmail(userFound.email);
          setMobilePhone(userFound.mobile_number);
          setPhone(userFound.land_line_phone);
          setPostalCode(userFound.postal_code);
          setCity(userFound.city);
          setState(userFound.state);
          setApartmentNumber(userFound.apartment_number);
          setVersion(userFound.version);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    if (activeAccount) {
      const userLoggedIn = {
        email: activeAccount.username,
        name: activeAccount.idTokenClaims.name,
        provider: "AzureAD",
        sub: activeAccount.idTokenClaims.sub,
        first_name: activeAccount.idTokenClaims.given_name,
        last_name: activeAccount.idTokenClaims.family_name,
        date_of_birth: dob,
        gender: gender,
        mobile_number: mobilephone,
        postal_code: postalcode,
        land_line_phone: phone,
        street_number: "Dimma Street",
        apartment_number: apartmentnumber,
        city: city,
        state: state,
        version: version + 1,
      };

      axios
        .post("http://localhost:9001/user/reg", userLoggedIn)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            navigate("/wellness-home");
          } else alert(res.data.message);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="screen-19">
      <div className="macbook-pro-5">
        <img
          className="old"
          alt="Old"
          src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/old1-1.png"
        />
        <div className="rectangle-56" />
        <div className="frame-85">
          <div className="component-39">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">First Name</div>
            <input
              className="rectangle-57"
              placeholder="First Name"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="component-40">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Last Name</div>
            <input
              className="rectangle-57"
              placeholder="Last Name"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="component-41">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Date of Birth</div>
            <input
              className="rectangle-57"
              placeholder="Date of Birth"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="component-42">
            <div className="div-10">
              <div className="text-wrapper-173">Gender</div>
            </div>
            <div className="frame-86">
              <div className="text-wrapper-174">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  id="male"
                  checked={gender === "Male"}
                  onChange={onOptionChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="text-wrapper-175">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  id="female"
                  checked={gender === "Female"}
                  onChange={onOptionChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="text-wrapper-176">
                <input
                  type="radio"
                  name="gender"
                  value="NotToSay"
                  id="nottosay"
                  checked={gender === "NotToSay"}
                  onChange={onOptionChange}
                />
                <label htmlFor="nottosay">Prefer Not to Say</label>
              </div>
            </div>
          </div>
          <div className="component-43">
            <div className="div-10">
              <div className="text-wrapper-173">Relationship with Senior</div>
            </div>
            <div className="frame-86">
              <div className="text-wrapper-174">
                <input
                  type="radio"
                  name="relation"
                  value="fmember"
                  id="fmember"
                  checked={relation === "fmember"}
                  onChange={onOptionRelationChange}
                />
                <label htmlFor="male">Family Member</label>
              </div>
              <div className="text-wrapper-175">
                <input
                  type="radio"
                  name="relation"
                  value="friend"
                  id="friend"
                  checked={relation === "friend"}
                  onChange={onOptionRelationChange}
                />
                <label htmlFor="male">Friend</label>
              </div>
              <div className="text-wrapper-176">
                <input
                  type="radio"
                  name="relation"
                  value="other"
                  id="other"
                  checked={relation === "other"}
                  onChange={onOptionRelationChange}
                />
                <label htmlFor="male">Other</label>
              </div>
            </div>
          </div>
          <div className="component-44">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Age</div>
            <input className="rectangle-57" placeholder="Age" type="text" />
          </div>
          <div className="component-45">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Mobile Number</div>
            <input
              className="rectangle-57"
              placeholder="Mobile Number"
              type="tel"
              value={mobilephone}
              onChange={(e) => setMobilePhone(e.target.value)}
            />
          </div>
          <div className="component-46">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Landline Number</div>
            <input
              className="rectangle-57"
              placeholder="Landline Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="component-47">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Apartment Number</div>
            <input
              className="rectangle-57"
              placeholder="Apartment Number"
              type="text"
              value={apartmentnumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
            />
          </div>

          <div className="component-49">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">City</div>
            <input
              className="rectangle-57"
              placeholder="City"
              type="tel"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="component-50">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">State / Province</div>
            <input
              className="rectangle-57"
              placeholder="State / Province"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="component-51">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Postal Code</div>
            <input
              className="rectangle-57"
              placeholder="Postal Code"
              type="text"
              value={postalcode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="component-52">
            <div className="rectangle-57" />
            <div className="div-10" />
            <div className="text-wrapper-172">Email</div>
            <input
              className="rectangle-57"
              placeholder="First Name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="text-wrapper-178">Senior Wellness Form</div>
        <p className="text-wrapper-179">
          Disclamer: This form pertains to personal information of the senior.
          Please provide the necessary details below. Your responses are treated
          with the utmost confidentiality and are solely for the purpose of
          Wellness.
        </p>
        <div className="frame-88">
          <div className="text-wrapper-180">
            <button id="subForm1" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="image-a-image-a-5">
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/-----image.png"
          />
          <div className="states-2" />
        </div>
        {/* <Frame
          className="frame-89"
          property1="default"
          text="Next"
          to="/wellness-form3"
        /> */}
      </div>
    </div>
  );
};
