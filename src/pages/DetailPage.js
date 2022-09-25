import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailPage = ({ userData, isTrue }) => {
  console.log(userData);
  return (
    <Container>
      <Body>
        {isTrue && (
          <>
            {userData.length > 0 ? (
              userData?.map((data) => (
                <Details>
                  <Input value={data.firstName} />
                  <Input value={data.lastName} />
                  <Input value={data.job} />
                </Details>
              ))
            ) : (
              <h1>No Data Found</h1>
            )}
          </>
        )}
      </Body>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 100vw;
`;

const Body = styled.div`
  margin-top: 100px;
`;

const Details = styled.div`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
`;
const Input = styled.input`
  padding: 10px;
`;
