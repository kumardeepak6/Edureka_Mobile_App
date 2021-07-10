import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import LatestMovies from "./LatestMovies";
import MovieDetail from "./MovieDetail";
import TicketBookingDetail from "./TicketBookingDetail";

const Stack = createStackNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LatestMovies} options={{ title: 'eCube Movies: Now Playing Movies', 
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}/>
        <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ title: 'Movie Detail',
    headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      } }}/>
        <Stack.Screen name="TicketBookingDetail" component={TicketBookingDetail} options={{ title: 'Ticket Booking',
    headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;