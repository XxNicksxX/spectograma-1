import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./tabNavigator";
import Profile from "../screens/profile";
import React from "react";

const Drawer = createDrawerNavigator()

const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
        <Drawer.Screen name="bottomtabnavigator" component={BottomTabNavigator}/>
        <Drawer.Screen name = "profile" component={Profile}/>
    </Drawer.Navigator>
  )
   
  
}
export default DrawerNavigator