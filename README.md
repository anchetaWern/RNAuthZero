# RNAuthZero

A sample app showing how to implement authentication in React Native using Auth0.

You can read the full tutorial at: [https://blog.pusher.com/react-native-auth0/](https://blog.pusher.com/react-native-auth0/)

## Getting Started

1.  Create a new app on Auth0
2.  Create new React Native app

```
react-native init RNAuthZero
```

3.  Install the packages:

```
cd RNAuthZero
npm install --save react-native-auth0 react-navigation react-native-device-info@0.21.0 react-native-sensitive-info react-native-config react-native-restart
```

4.  Setup the packages by following the links:

-   [react-native-auth0 v1.2.2](https://github.com/auth0/react-native-auth0/tree/v1.2.2#installation)
-   [react-native-device-info v0.21.0](https://github.com/rebeccahughes/react-native-device-info/tree/v0.21.0#installation)
-   [react-native-sensitive-info v5.1.0](https://github.com/mCodex/react-native-sensitive-info/tree/5.1.0#install)
-   [react-native-config v0.11.5](https://github.com/luggit/react-native-config/tree/v0.11.5#setup)
-   [react-native-restart v0.0.3](https://github.com/avishayil/react-native-restart/tree/v0.0.3#installing-the-library)

5.  Copy the `.env` file from this repo and update it with your Auth0 credentials.

6.  Replace the files in the `android` and `ios` directories with the files from this repo.

7.  Run the app.

```
react-native run-android
react-native run-ios
```

### Prerequisites

-   React Native development environment
-   Genymotion Emulator, Android emulator or iOS simulator, or an Android or iOS device
-   Auth0 account

## Built With

-   [React Native](https://facebook.github.io/react-native/) - mobile development framework for developing apps with JavaScript and React.
-   [Auth0](https://auth0.com/) - authentication as a service.

## Acknowledgments

-   [react-native-auth0](https://github.com/auth0/react-native-auth0)
-   [react-navigation ](https://github.com/react-navigation/react-navigation)
-   [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info)
-   [react-native-sensitive-info](https://github.com/mCodex/react-native-sensitive-info)
-   [react-native-config](https://github.com/luggit/react-native-config)
-   [react-native-restart](https://github.com/avishayil/react-native-restart)
