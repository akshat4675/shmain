import * as React from "react";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, Pressable,  TouchableOpacity} from "react-native";

const Carddetails = () => {
  	const [rsvp, setRSVP] = useState(false);

	useEffect(()=>{
     
		setRSVP(false)

	},[])
	 
  	return (
    		<View style={styles.rectangleParent}>
      			<View style={[styles.groupChild, styles.groupShadowBox]} />
				{rsvp ? 
				<>
				<Image style={styles.groupInner2} contentFit="contain" source={require('@/assets/images/homeicon.svg')} />
				<View style={rsvpstyle.rectangleParent}>
                <View style={rsvpstyle.groupChild} />
                <Text style={[rsvpstyle.reservedYourSpot, rsvpstyle.seeYouSoonPosition]}>Reserved Your Spot</Text>
                <Text style={[rsvpstyle.seeYouSoon, rsvpstyle.seeYouSoonPosition]}>see you soon ;)</Text>
                <Image style={rsvpstyle.groupItem} resizeMode="cover"  />
                <View style={rsvpstyle.groupParent}>
                <View style={[rsvpstyle.rectangleGroup, rsvpstyle.groupLayout]}>
                <View style={[rsvpstyle.groupInner, rsvpstyle.groupInnerShadowBox]} />
                <Text style={[rsvpstyle.addToCalander, rsvpstyle.calendarFlexBox]}>Add to Calander</Text>
                </View>
                <View style={rsvpstyle.rectangleLayout}>
                <View style={[rsvpstyle.rectangleView, rsvpstyle.rectangleLayout]} >
					<Text style={[rsvpstyle.cancel, rsvpstyle.cancelFlexBox]}>Cancel</Text>
				</View>
                </View>
                <Image style={rsvpstyle.greenButtonIcon} resizeMode="cover"  />
                </View>
                </View> 
				</>
				:
				<>
				<Image style={styles.groupInner} contentFit="contain" source={require('@/assets/images/spicy.svg')} />
				<Text style={[styles.spicyContest, styles.rsvpTypo]}>Spicy Contest</Text>
				  <View style={styles.fastFoodParent}>
        			<Image style={styles.fastFoodIcon} contentFit="contain" source={require('@/assets/images/FastFood.svg')}  />
        			<Text style={[styles.fastFood, styles.spicyTypo]}>Fast Food</Text>
        			<Image style={styles.fastFoodIcon} contentFit="contain" source={require('@/assets/images/chilip.svg')}/>
        			<Text style={[styles.spicy, styles.spicyTypo]}>Spicy</Text>
      			</View>
      			<TouchableOpacity  style={[styles.groupItem, styles.groupShadowBox]} onPress={(()=>setRSVP(true))} >
      			<Text style={[styles.rsvp, styles.rsvpFlexBox]}>RSVP</Text>
				  </TouchableOpacity>
      			<Text style={[styles.venueSpiceContainer, styles.time11Layout]}>
        			<Text style={styles.venueTypo}>{`Venue  : `}</Text>
        			<Text style={styles.spiceFoodFactory}>Spice Food Factory</Text>
      			</Text>
      			<View style={[styles.time11Am3PmWrapper, styles.time11Layout]}>
        			<Text style={[styles.time11, styles.time11Layout]}>Time : 11 am - 3 pm</Text>
				  <Text style={[styles.volcanoCurry, styles.volcanoCurryFlexBox]}>Volcano Curry 🌶</Text>
      			<Image style={styles.bellIcon} resizeMode="cover"  />
				</View>
				</>
				}
    		</View>
			);
};

const styles = StyleSheet.create({
  	groupShadowBox: {
    		left: "50%",
    		position: "absolute"
  	},
  	volcanoCurryFlexBox: {
    		textAlign: "left",
    		color: "#fff"
  	},
  	rsvpFlexBox: {
    		display: "flex",
    		alignItems: "center",
    		textAlign: "left",
    		fontWeight: "500"
  	},
  	spicyTypo: {
    		lineHeight: 8,
    		fontSize: 6,
    		height: 13,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "left",
    		color: "#fff"
  	},
  	time11Layout: {
    		height: 14,
    		position: "absolute"
  	},
  	rsvpTypo: {
    	
    		position: "absolute"
  	},
  	groupChild: {
    		marginLeft: -190,
    		top: 20,
    		borderRadius: 35,
    		backgroundColor: "rgba(51, 51, 51, 0.9)",
    		width: 380,
    		height: 193
  	},
  	volcanoCurry: {
    		top: "100%",
    		height: 11,
    		width: 91,
    		fontWeight: "500",
    		lineHeight: 11,
    		fontSize: 7,
    		textAlign: "left",
    		position: "absolute"
  	},
  	groupItem: {
    		marginLeft: 64.43,
    		top: 142,
    		borderRadius: 23,
    		backgroundColor: "#57dd78",
    		width: 93,
    		height: 35,
            
  	},
  	rsvp: {
            top:"10%",
    		left: "28%",
    		fontSize: 16,
    		lineHeight: 24,
    		color: "#2e3239",
    		width: 150,

    		position: "absolute",
    		height: 135
  	},
  	fastFoodIcon: {
    		width: 13,
    		height: 13
  	},
  	fastFood: {
    		width: 30
  	},
  	spicy: {
    		width: 30
  	},
  	fastFoodParent: {
    		top: "56%",
    		flexDirection: "row",
    		justifyContent: "center",
    		gap: 7,
    		alignItems: "center",
    		left: "30%",
    		position: "absolute",
  	},
  	venueTypo: {
    		fontWeight: "500"
  	},
  	spiceFoodFactory: {
  	},
  	venueSpiceContainer: {
    		top: "70%",
    		fontSize: 10,
    		lineHeight: 14,
    		width: 150,
    		textAlign: "left",
    		color: "#fff",
    		left: "30%"
  	},
  	time11: {
    		top: 0,
    		left: 0,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "left",
    		fontWeight: "500",
    		width: 91,
    		color: "#fff",
    		height: 14,
    		lineHeight: 11,
    		fontSize: 7
  	},
  	time11Am3PmWrapper: {
    		top: "85%",
    		width: 91,
    		left: "30%"
  	},
  	bellIcon: {
    		height: "13.92%",
    		width: "5.8%",
    		top: "11.92%",
    		right: "10.19%",
    		bottom: "74.16%",
    		left: "84.02%",
    		maxWidth: "100%",
    		overflow: "hidden",
    		maxHeight: "100%",
    		position: "absolute"
  	},
  	spicyContest: {
    		top: "28%",
    		left: "30%",
    		fontSize: 24,
    		lineHeight: 36,
    		width: 197,
    		height: 37,
    		textAlign: "left",
    		color: "#fff",
    		fontWeight: "500",
  	},
  	groupInner: {
    	    top:"40%",
			left:"8%", 
    		width: 80,
    		height: 90,
    		position: "absolute"
  	},
	  groupInner2: {
		top:"50%",
		left:"12%", 
		width: 60,
		height: 70,
		position: "absolute"
  },
  	rectangleParent: {
    		flex: 1,
    		width: "100%",
    		height: 163,
  	}
});

export default Carddetails;

const rsvpstyle = StyleSheet.create({
	seeYouSoonPosition: {
		height: 30,
		width: 200,
		textAlign: "left",
		top: "60%",
		marginLeft: -68.31,
		color: "#fff",
		position: "absolute"
		},
		groupLayout: {
		width: 102,
		height: 35
		},
		groupInnerShadowBox: {
		borderRadius: 23,
		top: 35,
		position: "absolute"
		},
		calendarFlexBox: {
		display: "flex",
		lineHeight: 17,
		fontSize: 11,
		top:"120%",
		right:"65%",
		position: "absolute"
		},
		cancelFlexBox: {
			display: "flex",
			lineHeight: 17,
			fontSize: 11,
			top: "20%",
			left:"25%",
			height: 35,
			alignItems: "center",
			position: "absolute"
			},
		rectangleLayout: {
		width: 73,
		height: 35,
		},
		groupChild: {
		marginLeft: -178.5,
		top: 163,
		borderRadius: 35,
		width: 357,
		position: "absolute",
		height: 163,
		},
		reservedYourSpot: {
		marginTop: -50.54,
		fontSize: 20,
		lineHeight: 30,
		},
		seeYouSoon: {
		marginTop: -13.81,
		fontSize: 15,
		lineHeight: 23
		},
		groupItem: {
		height: "36.24%",
		width: "14.9%",
		top: "31.9%",
		bottom: "31.87%",
		maxWidth: "100%",
		overflow: "hidden",
		maxHeight: "100%",
		position: "absolute"
		},
		groupInner: {
		backgroundColor: "#57dd78",
		height: 35,
		width: 122,
		right:"50%"
		
		},
		addToCalander: {
		color: "#2e3239",
		width: 90
		},
		rectangleGroup: {
		height: 35
		},
		rectangleView: {
		backgroundColor: "#f05f5f",
		borderRadius: 23,
		top: 35,
		right:"60%",
		position: "absolute"
		},
		cancel: {
		width: 49,
		color: "#fff",
		display: "flex",
		lineHeight: 17,
		fontSize: 11,
		top: 0
		},
		greenButtonIcon: {
		width: 35,
		height: 35
		},
		groupParent: {
		top: 107,
		flexDirection: "row",
		position: "absolute"
		},
		rectangleParent: {
		flex: 1,
		width: "100%",
		height: 163,
		left:"50%"
		}
		});