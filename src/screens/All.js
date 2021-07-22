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
    navigation.navigate("AddInput");
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
          <SubmitButton2 onPress={() => handleIngresarButton()}>
            <TextButton>Add a Task</TextButton>
          </SubmitButton2>
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
const SubmitButton = styled.TouchableOpacity`
  width: 150px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: grey;
  margin-bottom: 20px;
  border-radius: 20px;
`;
const SubmitButton2 = styled.Pressable`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
const ButtonContainer = styled.View`
  color: white;
  height: 40px;
  background-color: #00bb2d;
  border-radius: 4px;
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
`;
