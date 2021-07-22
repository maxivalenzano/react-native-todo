import React, { useState, useContext, useReducer, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation/ScreenNavigation";
import Header from "./src/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducer from "./src/context/reducer";
import Store from "./src/context/store";

const initData = async () => {
  const list = await AsyncStorage.getItem("state5");
  return !!list ? JSON.parse(list) : { todos: [], id: 1 };
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, { todos: [], id: 1 });

  useEffect(() => {
    const fetchData = async () => {
      //obtenemos del AsyncStorage y lo pasamos al reducer
      const result = await initData();
      setIsLoading(false);
      console.log("initData:", result);
      dispatch({ type: "INIT_REDUCER", payload: result });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (state.todos.length > 0) {
      //para que no guarde antes de que inicie
      AsyncStorage.setItem("state5", JSON.stringify(state));
    }
  }, [state]);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Store.Provider value={{ state: { todos: [], id: 1 }, dispatch }}>
          <Navigation />
          <StatusBar />
        </Store.Provider>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Store.Provider value={{ state, dispatch }}>
        <Navigation />
        <StatusBar />
      </Store.Provider>
    </SafeAreaView>
  );
};

export default App;
