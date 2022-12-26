import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider} from './src/context/Auth';
import {RootNavigator} from './src/navigators/Root';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </NavigationContainer>
  );
}
