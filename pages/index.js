import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Select from 'react-select'
import React, { useState, Fragment } from "react";
import Userpool, { Attribute } from "../utilities/userpool";
import practices from '../data/practices'
import RightPane from "../components/rightPane";
import Calendar from 'react-calendar';


import 'bootstrap/dist/css/bootstrap.css';
import 'react-calendar/dist/Calendar.css';

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const [selectedBorough, setSelectedBorough] = useState("");
  const [selectedDropdownPcnValue, setSelectedDropdownPcnValue] = useState("");
  const [selectedDropdownPracticeValue, setselectedDropdownPracticeValue] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();

    const fam = new Attribute({ Name: "family_name", Value: "soosif" })
    const gender = new Attribute({ Name: "gender", Value: "1" })
    const name = new Attribute({ Name: "given_name", Value: "malesadsads" })

    const attributes = [];

    attributes.push(fam)
    attributes.push(gender);
    attributes.push(name);

    console.log(email, password);

    Userpool.signUp(email, password, attributes, null, (err, data) => {
      console.log(err);
    });
  }

  // Extract all the boroughs
  const options = Object.keys(practices.borough).map(e => {
    return { value: e, label: e }
  });

  const handleBoroughDropdownEvent = (e) => {
    setSelectedBorough(e.value);
    setSelectedDropdownPcnValue("");
    setselectedDropdownPracticeValue("");
  }

  const handlePcnDropdownEvent = (e) => {
    setSelectedDropdownPcnValue(e);
    setselectedDropdownPracticeValue("");
  }

  const handlePracticeDropdownEvent = (e) => {
    setselectedDropdownPracticeValue(e);
  }

  const getPractices = () => {
    return practices.borough[selectedBorough][selectedDropdownPcnValue.label].map(e => {
      return { value: e.name, label: e.name }
    })
  }

  const [value, onChange] = useState(new Date());

  return (
    <Fragment>
      {/* <form onSubmit={onSubmit} >
  <label htmlFor='email' >Email</label>
  <input value={email} onChange={(event) => setEmail(event.target.value)}/>
  <label htmlFor='password' >Password</label>
  <input value={password} onChange={(event) => setPassword(event.target.value)}/>
  <button type='submit'>submit</button>
</form> */}

      <Row style={{ "margin-top": "30px" }}>
        <Col lg="3" style={{ "padding-right": "50px" }}>
          <div style={{ "min-height": "400px" }}>
            <label id="aria-label" htmlFor="aria-example-input" className='ptb-20'>
              Select a borough
            </label>
            <Select
              options={options}
              onChange={handleBoroughDropdownEvent}
            />

            {selectedBorough != "" &&
              <Fragment>
                <label id="aria-label" htmlFor="aria-example-input" className='ptb-20'>
                  Select a PCN
                </label>
                <Select
                  options={Object.keys(practices.borough[selectedBorough]).map(e => {
                    return { value: e, label: e }
                  })}
                  placeholder="Select PCN"
                  value={selectedDropdownPcnValue}
                  onChange={handlePcnDropdownEvent}
                />
              </Fragment>
            }

            {
              selectedDropdownPcnValue != "" &&
              <Fragment>
                <label id="aria-label" htmlFor="aria-example-input" className='ptb-20'>
                  Select a Practice
                </label>
                <Select
                  options={getPractices()}
                  placeholder="Select Practice"
                  value={selectedDropdownPracticeValue}
                  onChange={handlePracticeDropdownEvent}
                />
              </Fragment>
            }
          </div>

          {
            selectedDropdownPracticeValue &&
            <Calendar onChange={onChange} value={value} />
          }

        </Col>
        <Col lg="9">
          <RightPane
            borough={selectedBorough}
            pcn={selectedDropdownPcnValue.value}
            practise={selectedDropdownPracticeValue.value}>

          </RightPane>
        </Col>
      </Row>
    </Fragment>
  )
}
