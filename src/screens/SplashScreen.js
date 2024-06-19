// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text,StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { splashStyles } from '../styles/SplashStyles';
// --------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------
import Logo from '../assets/SVGComponents/Logo';
// --------------------------------------------------------------------
// SCREEN
// --------------------------------------------------------------------
import MarketScreen from './MarketScreen';

const SplashScreen = ({ navigation }) => {
  console.log(('nnnn', navigation));
  useEffect(() => {
    splashNav();
  }, []);

  const splashNav = () => {
    const intervalNav = setInterval(() => {
      navigation.replace("MarketScreen");
      clearInterval(intervalNav);
    }, 3000);
  };

  return (
    <View style={styles.container}>
    <View style={[styles.topSection, splashStyles.flexEnd, splashStyles.bodyColor]}>
      <Text style={[styles.textStart, splashStyles.faintedText]}>COIN</Text>
    </View>
    <View style={[styles.middleSection, splashStyles.flexCenter, splashStyles.bodyColor]}>
      <Logo />
      <Text style={[styles.textMargin, splashStyles.normalText]}>Coinflow</Text>
    </View>
    <View style={[styles.bottomSection, splashStyles.flexStart, splashStyles.bodyColor]}>
      <Text style={[styles.textStart, splashStyles.faintedText]}>FLOW</Text>
    </View>
  </View>
);
};

export default SplashScreen

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
topSection: {
  width: '100%',
  height: '30%',
},
middleSection: {
  width: '100%',
  height: '40%',
},
bottomSection: {
  width: '100%',
  height: '30%',
},
textStart: {
  textAlign: 'left',
},
textMargin: {
  marginTop: 6, 
},
});
