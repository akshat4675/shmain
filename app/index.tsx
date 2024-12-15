
import MapScreen from "@/assets/components/map";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

const Indexscreen = ()=> {

    return(
   <>
    <StatusBar
        hidden={false} // Ensure the status bar is not hidden
        translucent={true} // Allow content to flow behind the status bar
        backgroundColor="transparent" // Adjust the background color if needed
        barStyle="dark-content" // Adjust the text style for visibility
    />
    <MapScreen/>
   </>
    );
}
export default Indexscreen;