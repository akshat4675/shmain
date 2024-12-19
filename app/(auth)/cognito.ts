import { AWS_CONFIG } from './awsconfig';
import { CognitoUserPool,  CognitoUser,AuthenticationDetails, CognitoUserSession, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

  
  const userPool = new CognitoUserPool({
    UserPoolId: AWS_CONFIG.userPoolId,
    ClientId: AWS_CONFIG.clientId,
  });

 
  
  export const signUpUser = (
    username: string,
    email: string,
    password: string,
    onSuccess: () => void,
    onError: (err: any) => void
  ) => {
    const attributes: CognitoUserAttribute[] = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
    ];
  
    userPool.signUp(username, password, attributes, [], (err, result) => {
      if (err) {
        onError(err);
        return;
      }
      onSuccess();
    });
  };
  
  
  
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

 export const confirmUser = (username: string, code: string) =>
        new Promise((resolve, reject) => {
          const user = new CognitoUser({ Username: username, Pool: userPool });
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
      
