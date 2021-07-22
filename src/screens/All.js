import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import TodoList from "../components/TodoItem";
import Empty from "../components/Empty";

import Store from "../context/store";

const AllTask = ({ navigation }) => {
  const { state, dispatch } = useContext(Store);
  console.log("Store: ", state);

  const handleIngresarButton = () => {
    navigation.navigate("AddTask");
  };

  const checkItem = (item, state) => {
    console.log("Chequeadooo...", item, state);
    dispatch({ type: "CHECK", payload: { item: item, isCompleted: state } });
  };

  return (
    <>
      <ComponentContainer>
        <FlatList
          data={state.todos}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TodoList item={item} checkItem={checkItem} />
          )}
        />
        <ButtonContainer>
          <SubmitButton onPress={() => handleIngresarButton()}>
            <TextButton>Add a Task</TextButton>
          </SubmitButton>
        </ButtonContainer>
      </ComponentContainer>
    </>
  );
};

export default AllTask;

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

const SubmitButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const ButtonContainer = styled.View`
  width: 100%;
  color: white;
  height: 40px;
  background-color: #00bb2d;
  border-radius: 20px;
`;
const TextButton = styled.Text`
  color: white;
  margin: 10px;
  margin-left: 0px;
`;

const ComponentContainer = styled.View`
  background-color: white;
  height: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
