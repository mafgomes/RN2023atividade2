import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Home from '../screens/home';
import Detail from '../screens/detail';
import About from '../screens/about';

// Objeto com as telas do Stack
type RootStackParamList = {
  Login: undefined;
  Home: undefined | {token: string};
  Detail: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator();

// Deixamos nossas rotas globais
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{token: ''}}
          options={{
            title: 'Listagem de projetos',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detalhe do projeto',
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Sobre o programa',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
