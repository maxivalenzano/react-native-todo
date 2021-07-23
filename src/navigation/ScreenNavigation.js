import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import Alltask from "../screens/All";
import Complete from "../screens/Complete";
import Uncomplete from "../screens/Uncomplete";
import AddTask from "../components/AddItem";
import Item from "../components/Item";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const TabNavigator = createMaterialTopTabNavigator(
  {
    All: {
      screen: Alltask,
      navigationOptions: () => ({
        title: `All`,
      }),
    },
    Completed: {
      screen: Complete,
    },
    Uncompleted: {
      screen: Uncomplete,
    },
  },
  {
    tabBarOptions: {
      upperCaseLabel: false,
      labelStyle: {
        color: "black",
      },
      tabStyle: {
        // width: 100,
        activeTintColor: "black",
      },
      style: {
        backgroundColor: "white",
        borderColor: "grey",
      },
    },
  }
);

const WelcomeScreen = createStackNavigator(
  {
    Board: {
      screen: TabNavigator,
      navigationOptions: () => ({
        title: `Board`,
        headerTitleAlign: "left",
      }),
    },
    AddTask: {
      screen: AddTask,
      navigationOptions: ({ navigation }) => ({
        title: `Add task`,
        headerTitleAlign: "left",
        headerLeft: (
          <HeaderBackButton
            labelVisible={false}
            onPress={() => navigation.goBack(null)}
          />
        ),
      }),
    },

    Task: {
      screen: Item,
      navigationOptions: ({ navigation }) => ({
        title: `Task`,
        headerTitleAlign: "left",
        headerLeft: (
          <HeaderBackButton
            labelVisible={false}
            onPress={() => navigation.goBack(null)}
          />
        ),
      }),
    },
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(WelcomeScreen);
