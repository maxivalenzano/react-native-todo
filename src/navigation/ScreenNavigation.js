import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Alltask from "../screens/All";
import Complete from "../screens/Complete";
import Uncomplete from "../screens/Uncomplete";
import AddTask from "../components/AddItem";
import Item from "../components/Item";

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
        headerTitleStyle: { alignSelf: "flex-start" },
      }),
    },
    AddTask: {
      screen: AddTask,
      navigationOptions: () => ({
        title: `Add task`,
        headerTitleStyle: { alignSelf: "flex-start" },
      }),
    },

    Task: {
      screen: Item,
      navigationOptions: () => ({
        title: `Task`,
        headerTitleStyle: { alignSelf: "flex-start" },
      }),
    },
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(WelcomeScreen);
