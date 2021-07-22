import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <Container>
      <Text>Board</Text>
    </Container>
  );
};

export default Header;
