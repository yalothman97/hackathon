import { createStackNavigator } from "react-navigation-stack";

// Components
import Home from "../Components/Home";
import Welcome from "../Components/Welcome";
import BankList from "../Components/Bank/BankList";
import IDsList from "../Components/IDs/IDsList";

const MyStackNav = createStackNavigator(
  {
    WelcomeScreen: Welcome,
    HomeScreen: Home,
    BankListScreen: BankList,
    IDsListScreen: IDsList
  },
  {
    initialRouteName: "WelcomeScreen"
  }
);

export default MyStackNav;
