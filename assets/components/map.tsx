import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, 
KeyboardAvoidingView, Platform
,TouchableOpacity} from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE ,MapMarker} from 'react-native-maps';
import * as Location from 'expo-location';
import { searchNearbyPlaces, getPlaceDetails } from './aws-utils/aws-config'; // Adjust the path as needed
import Carddetails from './map components/card';

interface NearbyPlace {
    name: string;
    latitude: number;
    longitude: number;
  }

const MapScreen= () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [places, setPlaces] = useState<NearbyPlace[]>([]);
    const [isCardVisible, setIsCardVisible] = useState(false);
  
    
  
   const onMarkerPress = () => {
    setIsCardVisible(true); // Show the card
   };

   const handleMapPress = () => {
    setIsCardVisible(false); // Hide the card when tapping elsewhere
   };
    
   useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied.');
        return;
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude: coords.latitude, longitude: coords.longitude });
      console.log(location)
    })();
  }, []);
  const handleSearch = async () => {
    if (!location) return;
    const results = await searchNearbyPlaces(location.latitude, location.longitude, searchQuery);
    setPlaces(results);
    console.log(results);
  };

  const handleMarkerPress = async (placeID: string) => {
    const placeDetails = await getPlaceDetails(placeID);
    console.log('Place Details:', placeDetails);
    
  };
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.mapContainer}>
          {location ? (
            <MapView
              onPress={handleMapPress}
              provider={PROVIDER_GOOGLE}
              customMapStyle={require('@/assets/darkmodemap.json')}
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker icon={require('@/assets/images/user_100x100.png')} coordinate={location} title="You Are Here"/>
              {places.map((place, index) => (
                <Marker
                  key={index}
                  icon={require('@/assets/images/spicy_160x188.png')}
                  coordinate={{ longitude: place.longitude,latitude: place.latitude }}
                  title={place.name}
                  
                  onPress={() => handleMarkerPress(place.name)}
                />
              ))}
              <MapMarker onPress={(e) => {
            e.stopPropagation(); // Prevent map press event from triggering
            onMarkerPress();
          }} icon={require('@/assets/images/spicy_160x188.png')} coordinate={{ latitude: 18.489283340562, longitude:  74.02471972541468 }}>
               
              </MapMarker>
            </MapView>
            
          ) : (
            <Text>Loading your location...</Text>
          )}
          
          <View style={styles.overlay}>
          
          <TextInput
            style={styles.input}
            placeholder="Search here..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        {isCardVisible && (
          <View style={{borderWidth:0,position:"absolute",bottom:"60%",width:"100%"}}>
          <Carddetails/>
        </View>
      )}
        </View>
        
      </KeyboardAvoidingView>
    );
  };
  
    
  
  const styles = StyleSheet.create({
    closeButton: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 30,
      height: 30,
      backgroundColor: "#f00", // Red close button (customizable)
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    closeButtonContent: {
      width: 15,
      height: 15,
      backgroundColor: "#fff",
    },
    rectangleView: {
      position:"absolute",
      backgroundColor: "rgba(39, 39, 39, 0.5)",
      flex: 1,
      width: "90%",
      height: 163,
      top:"20%",
      left:"5%",
      borderRadius: 30,
      },
      marker: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: '#007bff',
      borderColor: '#eee',
      borderRadius: 10,
      elevation: 10,
    },
    cardText: {
      fontSize: 18,
      color: '#333',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 20,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      alignItems: 'center',
    },
    card2: {
      backgroundColor: 'rgba(39, 39, 39, 0.9)',
      width:"90%",
      left:"5%",
      height:200,
      borderRadius: 24,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
    button: {
      marginLeft: 10,
      backgroundColor: '#007AFF',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    overlay: {
      position: 'absolute',
      top: 50, // Adjust to move down from the top of the screen
      left: 20, // Adjust to align horizontally
      right: 20, // Maintain equal spacing on the right
      backgroundColor: 'rgba(51, 51, 51, 0.9)',
      borderRadius: 10,
      padding: 10,
      elevation: 5, // Shadow for Android
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: { flex: 1 },
    mapContainer: { flex: 1 },
    map: { flex: 1 },
    searchContainer: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      color:'white',
      backgroundColor:'rgba(112, 112, 112, 0.69)',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
  });

  export default MapScreen;