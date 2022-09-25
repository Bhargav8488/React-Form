import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isTrue, setIsTrue }) => {
  const location = useLocation();

  return (
    <div>
      <HeaderDiv>
        <Link to={"/"}>
          <Button>{location.pathname === "/" ? "Home" : "Go Back"}</Button>
        </Link>
        {location.pathname === "/" ? (
          <Link to={"/details"}>
            <Button>Go To Detail Page</Button>
          </Link>
        ) : (
          <Button onClick={() => setIsTrue(!isTrue)}> Render Details </Button>
        )}
      </HeaderDiv>
    </div>
  );
};

export default Header;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  padding: 20px 50px;
`;
const Button = styled.button`
  padding: 10px 20px;
`;
