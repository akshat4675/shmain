import { AWS_CONFIG } from './awsconfig';
import { CognitoUserPool,  CognitoUser,AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

  
  const userPool = new CognitoUserPool({
    UserPoolId: AWS_CONFIG.userPoolId,
    ClientId: AWS_CONFIG.clientId,
  });

 
  
  export const signUp = (email: string, password: string) =>
    new Promise((resolve, reject) => {
      userPool.signUp(email, password, [],[], (err, result) => {
        if (err) reject(err.message || JSON.stringify(err));
        else resolve(result);
      });
    });
  
  
    export const signIn = (email: string, password: string) =>
      new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username: email, Pool: userPool });
        const authDetails = new AuthenticationDetails({ Username: email, Password: password });
    
        user.authenticateUser(authDetails, {
          onSuccess: async (result) => {
            const token = result.getIdToken().getJwtToken();
            await AsyncStorage.setItem('authToken', token); // Store token
            resolve(result);
          },
          onFailure: (err) => reject(err.message || JSON.stringify(err)),
        });
      });

    export const confirmUser = (email: string, code: string) =>
        new Promise((resolve, reject) => {
          const user = new CognitoUser({ Username: email, Pool: userPool });
          user.confirmRegistration(code, true, (err, result) => {
            console.log(err)
            if (err) reject(err.message || JSON.stringify(err));
            else resolve(result);
          });
        });
  

        export const isAuthenticated = async (): Promise<boolean> => {
          const currentUser = userPool.getCurrentUser();
        
          if (!currentUser) return false;
        
          return new Promise((resolve) => {
            currentUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
              if (err || !session?.isValid()) {
                resolve(false);
              } else {
                resolve(true);
              }
            });
          });
        };

        //


export const checkUserExists = (phoneNumber: string): Promise<boolean> => {
  const cognitoUser = new CognitoUser({
    Username: phoneNumber,
    Pool: userPool,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.getSession((err: any) => {
      if (err) {
        console.log(err)
        resolve(false); // No session, user does not exist
      } else {
        
        resolve(true); // Session exists, user exists
      }
    });
  });
};

// Send OTP
export const sendOTP = (phoneNumber: string): Promise<CognitoUser> => {
  const cognitoUser = new CognitoUser({
    Username: phoneNumber,
    Pool: userPool,
  });

  const authenticationDetails = new AuthenticationDetails({
    Username: 'username',
  });

  return new Promise((resolve, reject) => {
    cognitoUser.initiateAuth(
      authenticationDetails,
      {
        onSuccess: (result) => resolve(cognitoUser),
        onFailure: (err) =>{ 
          console.log(err);
          reject(err);
        },
      }
    );
  });
};


// Verify OTP
export const verifyOTP = (cognitoUser: CognitoUser, otp: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    cognitoUser.sendCustomChallengeAnswer(otp, {
      onSuccess: (session) => resolve(session),
      onFailure: (err) =>{ 
        console.log(err);
        reject(err);
      },
    });
  });
};

// Register new user
export const registerUser = (phoneNumber: string, session: any): Promise<void> => {
  // Example additional attributes to add to the user
  const userAttributes = [
    {
      Name: 'phone_number_verified',
      Value: 'true',
    },
  ];

  return new Promise((resolve, reject) => {
    userPool.signUp(
      phoneNumber,
      session.getAuthenticationCode(),
      [],
      [],
      (err, result) => {
        if (err) {
          reject(err);
          console.log(err);
        } else {
          resolve();
        }
      }
    );
  });
};
