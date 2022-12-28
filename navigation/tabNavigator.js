import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/feed";
import CreatePost from "../screens/createPost";
import React from "react";


const BottomTab = createBottomTabNavigator()

const BottomTabNavigator=()=>{
  return(
    <BottomTab.Navigator>
        <BottomTab.Screen name="feed" component={Feed}/>
        <BottomTab.Screen name = "createpost" component={CreatePost}/>
    </BottomTab.Navigator>
  )
   
  
}
export default BottomTabNavigator