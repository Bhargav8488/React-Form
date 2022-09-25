import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePage = ({ userData, setUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const navigate = useNavigate();

  const Onsubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || job === "") {
      alert("all information required");
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        job: job,
      };
      setUserData([...userData, data]);
      setFirstName("");
      setLastName("");
      setJob("");
      navigate("/details");
    }
  };

  return (
    <Container>
      <Form>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          required={true}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          required={true}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Job TItle"
          value={job}
          required={true}
          onChange={(e) => setJob(e.target.value)}
        />

        <Button type="submit" onClick={Onsubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
`;

const Button = styled.button`
  width: 200px;
  align-self: center;
  padding: 10px 0px;
  margin-top: 20px;
`;
