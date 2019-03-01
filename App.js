import React from 'react';
import SingOut from './components/SingOut'
import reducers from './reducers/peopleReducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import PeopleList from './components/peopleList'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import AddPerson from './components/AddPerson'
import CompanyList from './components/CompanyList'
import Thunk from 'redux-thunk'
import Home from './components/Home'
import LogIn from './components/LogIn'


const store = createStore(reducers, applyMiddleware(Thunk))



const MainNavigation = createBottomTabNavigator({
  PeopleList: { screen: PeopleList },
  AddPerson: { screen: AddPerson },
  CompanyList: { screen: CompanyList },
  SingOut: { screen: SingOut },
}, {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#80cbc4',
      swipeEnabled: true,
      showLabel: false,
      style: {
        backgroundColor: '#26a69a',

      },
    },

  })

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Main: MainNavigation,
    LogIn: LogIn,

  },
  {
    defaultNavigationOptions: {
        header: null,
        headerMode: "none",
        mode: "modal"
    },
    initialRouteName: "Home"
}
)




const Navigator = createAppContainer(AppNavigator);


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

