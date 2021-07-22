import React from "react";
import styled from "styled-components";
import image from "../../assets/images/empty.png";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage source={image} />
      <EmptyText>Add To-Do.</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 200px;
`;

const EmptyText = styled.Text`
  color: white;
  margin-top: 30px;
  font-size: 30px;
`;
