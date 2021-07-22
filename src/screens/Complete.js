import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";

import TodoList from "../components/TodoItem";
import Empty from "../components/Empty";

import Store from "../context/store";

const Complete = ({ navigation }) => {
  const { state, dispatch } = useContext(Store);

  const checkItem = (item, state) => {
    console.log("Chequeadooo...", item, state);
    dispatch({ type: "CHECK", payload: { item: item, isCompleted: state } });
  };

  return (
    <>
      <ComponentContainer>
        <View>
          <FlatList
            extraData={state}
            data={state.todos}
            ListEmptyComponent={() => <Empty />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              item.isCompleted ? (
                <TodoList item={item} checkItem={checkItem} />
              ) : null
            }
          />
        </View>
      </ComponentContainer>
    </>
  );
};

export default Complete;

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between;
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

const ComponentContainer = styled.View`
  background-color: white;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;
