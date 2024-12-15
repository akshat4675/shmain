import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, FlatList, Text, Dimensions,Pressable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-deck-swiper";


const { width } = Dimensions.get("window");

const Belowcard = () => {
  const cards = [
    { id: "1" }
  ];
  const [showLeftGradient, setShowLeftGradient] = useState(true);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const [places , setPlaces] = useState(false);
  
  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    console.log(scrollX)
    const totalWidth = (width * 0.8 ) * cards.length - 20;
    console.log("total width: "+totalWidth)
    const isAtStart = scrollX <= 0;
    const isAtEnd = scrollX >= totalWidth;
    setShowRightGradient(!isAtEnd);
    setShowLeftGradient(!isAtStart);

  };

  const renderItem = () => (
    <>
    <TouchableOpacity onPress={()=>{
      
    }}>
    <View style={styles.card}>
      <View style={{top:"20%",left:"10%"}}>
      <Text style={styles.popularInAreaContainer}>
      <Text style={styles.popularInAreaContainer1}>
      <Text style={styles.popular}>{`POPULAR `}</Text>
      <Text style={styles.inArea}>IN AREA</Text>
      </Text>
      </Text>
      </View>
    </View>
    </TouchableOpacity>
    <View style={[styles.card]}>
      <View style={{top:"20%",left:"10%"}}>
      <Text style={styles.popularInAreaContainer}>
      <Text style={styles.popularInAreaContainer1}>
      <Text style={styles.popular}>{`EVENTS `}</Text>
      <Text style={styles.inArea}>{`NEAR YOU`}</Text>
      </Text>
      </Text>
      </View>
    </View>
    <View style={[styles.card,]}>
      <View style={{top:"20%",left:"10%"}}>
      <Text style={styles.popularInAreaContainer}>
      <Text style={styles.popularInAreaContainer1}>
      <Text style={styles.popular}>{`INTERESTS `}</Text>
      <Text style={styles.inArea}>{`BY YOU`}</Text>
      </Text>
      </Text>
      </View>
    </View>
    </>
  );

  return (
   <>
   <View>
    {places ? <><Swipecards/></>
    :<>
    <View style={styles.container}>
      {showLeftGradient && (
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.13)", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradient, styles.leftGradient]}
          pointerEvents="none"
        />
      )}
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        snapToAlignment="center"
        snapToInterval={width * 0.8 + 10} // Card width + spacing
        decelerationRate="fast"
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16} // Ensures smooth scroll tracking
      />
      {showRightGradient && (
        <LinearGradient
          colors={["transparent", "rgba(255, 255, 255, 0.13)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradient, styles.rightGradient]}
          pointerEvents="none"
        />
      )}
    </View>
    </>}
    
      
    </View>
    </>
  );
};

const cards = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
];

export  function Swipecards() {
  // Define the correct type for the swiperRef
  const swiperRef = useRef<Swiper<any>>(null);

  return (
    <View style={swipercard.container}>
      <Swiper
        ref={swiperRef} // Assign the reference to Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={swipercard.card}>
             <Text>sdsdsd</Text>
          </View>
        )}
        onSwipedLeft={() => console.log('Swiped Left!')}
        onSwipedRight={() => console.log('Swiped Right!')}
        cardIndex={0}
        backgroundColor={'#f0f0f0'}
        stackSize={3} // Number of cards visible at a time
        showSecondCard={true} // Show second card below
        stackSeparation={10} // Spacing between stack cards
        infinite={true} // Loop through cards infinitely
      />

    </View>
  );
}

const swipercard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:200,
  },
  card: {
    paddingRight:"20%",
    borderRadius: 10,
    backgroundColor:"rgba(51, 51, 51, 0.9)",
    height:400,
    bottom:500
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  rectangleView: {

    },
  container: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 20,
    zIndex: 1,
  },
  leftGradient: {
    left: 0,
  },
  rightGradient: {
    right: 0,
  },
  flatListContent: {
     // Center the cards
  },
  card: {

    width: width * 0.7 ,
    left:10,
    height: 120,
    marginHorizontal: 10,
    backgroundColor: "rgba(51, 51, 51, 0.9)",
    borderRadius: 10,
    
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
  popular: {
    fontSize: 24
    },
    inArea: {
    fontSize: 16
    },
    popularInAreaContainer1: {
    width: "100%"
    },
    popularInAreaContainer: {
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 160,
    height: 90
    }
});

export default Belowcard;
