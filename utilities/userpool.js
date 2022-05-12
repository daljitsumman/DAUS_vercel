import {CognitoUserPool,CognitoUserAttribute} from "amazon-cognito-identity-js"

const userpool = {
    UserPoolId:"eu-west-2_04ZP4ko55",
    ClientId:"203fr5c8sijujne0i0gi13ftvo"
}

export default new CognitoUserPool(userpool);
export const Attribute = CognitoUserAttribute;
