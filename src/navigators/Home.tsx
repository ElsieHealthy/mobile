import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home/Home';
import {Settings} from '../screens/settings/Settings';
import {FilingStationSearch} from '../screens/fillingStations/FilingStationSearch';
import {Profile} from '../screens/profile/Profile';
import {FillingStation} from '../screens/fillingStation/FillingStation';
import {UserProvider} from '../context/User';
import {VehicleProvider} from '../context/Vehicle';
import {FillingStationProvider} from '../context/FilingStations';
import {VehicleList} from '../screens/vehicles/VehicleList';
import {CreateVehicle} from '../screens/vehicles/CreateVehicle';
import {History} from '../screens/history/History';
import {Support} from '../screens/support/Support';
import {Privacy} from '../screens/Privacy/Privacy';

export type HomeStackParamList = {
  Home: undefined;
  Settings: undefined;
  FilingStationSearch: undefined;
  FilingStation: {
    id: FillingStation['id'];
  };
  Profile: undefined;
  VehicleList: undefined;
  CreateVehicle: undefined;
  History: undefined;
  Support: undefined;
  Privacy: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => (
  <UserProvider>
    <VehicleProvider>
      <FillingStationProvider>
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
          <HomeStack.Screen name="Home" component={Home} />
          <HomeStack.Screen name="Settings" component={Settings} />
          <HomeStack.Screen
            name="FilingStationSearch"
            component={FilingStationSearch}
          />
          <HomeStack.Screen name="FilingStation" component={FillingStation} />
          <HomeStack.Screen name="Profile" component={Profile} />
          <HomeStack.Screen name="VehicleList" component={VehicleList} />
          <HomeStack.Screen name="CreateVehicle" component={CreateVehicle} />
          <HomeStack.Screen name="History" component={History} />
          <HomeStack.Screen name="Support" component={Support} />
          <HomeStack.Screen name="Privacy" component={Privacy} />
        </HomeStack.Navigator>
      </FillingStationProvider>
    </VehicleProvider>
  </UserProvider>
);
