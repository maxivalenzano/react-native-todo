import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Alltask from "../screens/All";
import Complete from "../screens/Complete";
import Uncomplete from "../screens/Uncomplete";
import AddInput from "../components/AddItem";

const TabNavigator = createMaterialTopTabNavigator({
  All: {
    screen: Alltask,
  },
  Completed: {
    screen: Complete,
  },
  Uncompleted: {
    screen: Uncomplete,
  },
});

const WelcomeScreen = createStackNavigator(
  {
    Board: {
      screen: TabNavigator,
      // navigationOptions: ({ navigation }) => {
      //   return {
      //     headerTitle: () => <Header navigation={navigation} />,
      //   };
      // },
    },
    AddInput: {
      screen: AddInput,
      // navigationOptions: ({ navigation }) => {
      //   return {
      //     headerLeft: () => {
      //       null;
      //     },
      //     headerTitle: () => <Header navigation={navigation} />,
      //   };
      // },
    },
  },
  {
    mode: "modal",
  }
);

export default createAppContainer(WelcomeScreen);
