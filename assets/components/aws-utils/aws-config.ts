// aws-config.ts

import AWS from 'aws-sdk';

// AWS configuration - update with your actual credentials
AWS.config.update({
  region: "ap-south-1",
  credentials:{
    accessKeyId: "AKIAT7JJVBXBSMY5P7GP",
    secretAccessKey: "/jxWvtTgrkT+UEqUFFQ3Z21QidQ12NXZyjhZW4ve",}
  
});

const locationService = new AWS.Location();
const dynamoDb = new AWS.DynamoDB.DocumentClient();




// Fetch nearby places from AWS Location Service
export const searchNearbyPlaces = async (latitude: number, longitude: number, query: string) => {

  

  const params = {
    IndexName: 'FoodHangoutIndex', // Replace with your actual Place Index name
    Text: query,
    BiasPosition: [longitude, latitude],
    MaxResults: 2,
  };

  try {
    const response = await locationService.searchPlaceIndexForText(params).promise();
    return response.Results.map((result: any) => (console.log(result),{
      name: result.Place?.Label,
      latitude: result.Place?.Geometry.Point[1],
      longitude: result.Place?.Geometry.Point[0],
    }));
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
};

// Fetch place details from DynamoDB
export const getPlaceDetails = async (placeID: string) => {
  const params = {
    TableName: 'PlacesTable',
    Key: { PlaceID: placeID },
  };

  try {
    const response = await dynamoDb.get(params).promise();
    return response.Item;
  } catch (error) {
    console.error('Error fetching place details:', error);
    return null;
  }
};

// Other DynamoDB operations (e.g., add place, update place) can also be added here as needed

export default { searchNearbyPlaces, getPlaceDetails };
