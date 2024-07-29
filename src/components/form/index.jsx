import { useState } from "react";

const Form = () => {
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [country, setCountry] = useState("");
  const [textValue, setTextValue] = useState("");

  const handeClick = (e) => {
    e.preventDefault();
    console.log("First name:", Fname);
    console.log("Last name:", Lname);
    console.log("Selected country:", country);
    console.log("text area:", textValue);
  };

  return (
    <section className="px-4 py-16 sm:px20 sm:py-24 bg-gray-200">
      <div className="flex justify-center flex-col gap-4 items-center">
        <div>
          <div>
            <label>First Name</label>
            <input
              value={Fname}
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              value={Lname}
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
        </div>
        <label>Country</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label>Subject</label>
        <textarea
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="py-4 px-8"
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        <button
          className="py-2 px-4 text-white border bg-green-500 rounded-md"
          onClick={handeClick}
        >
          Submit
        </button>
      </div>
    </section>
  );
};
export default Form;
