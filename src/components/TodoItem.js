import React, { useState } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import moment from "moment";

export default function TodoList({ item, checkItem, navigation }) {
  const handleScreen = () => {
    // console.log(navigation);
    navigation.navigate("Task", { item: item });
  };

  return (
    <ComponentContainer>
      <ItemContainer onPress={() => handleScreen()}>
        <IconContainer
          onPress={() => {
            checkItem(item, !item.isCompleted);
          }}
        >
          <MaterialIcons
            name={item.isCompleted ? "check-box" : "check-box-outline-blank"}
            size={24}
            color="grey"
          />
        </IconContainer>
        <View>
          <TextItem> {item.task}</TextItem>
          <TextDate> {moment(item.deadline).format("DD-MM-YYYY")} </TextDate>
        </View>
      </ItemContainer>
    </ComponentContainer>
  );
}

const ItemContainer = styled.Pressable`
  /* background-color: whitesmoke; */
  height: auto;
  width: 350px;
  margin-top: 15px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 280px;
  height: auto;
  font-size: 18px;
  margin-top: 10px;
  margin-right: 20px;
`;

const TextDate = styled.Text`
  color: goldenrod;
  font-size: 15px;
  margin-right: 20px;
  border-radius: 20px;
  width: auto;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding-left: 5px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
