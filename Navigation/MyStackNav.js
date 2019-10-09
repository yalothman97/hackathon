import { createStackNavigator } from "react-navigation-stack";

// Components
import Home from "../Components/Home";
import Welcome from "../Components/Welcome";
import BankList from "../Components/Bank/BankList";
import PassportList from "../Components/Passport/PassportList";

import AddCardForm from "../Components/Bank/AddCardForm";
import AddPassportForm from "../Components/Passport/AddPassportForm";

const MyStackNav = createStackNavigator(
  {
    WelcomeScreen: Welcome,
    HomeScreen: Home,
    BankListScreen: BankList,
    PassportListScreen: PassportList,
    AddCardFormScreen: AddCardForm,
    AddPassportFormScreen: AddPassportForm
  },
  {
    initialRouteName: "WelcomeScreen"
  }
);

export default MyStackNav;
