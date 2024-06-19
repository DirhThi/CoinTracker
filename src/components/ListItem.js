// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { marketStyles } from "../styles/MarketStyles";
import ColorTheme from "../config/ColorTheme";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  onPress
}) => {
  // -----------------------------------------------------------------------------------
  //  PRICE COLOR CHANGE
  // -----------------------------------------------------------------------------------
  const priceChangeColor =
    priceChangePercentage7d > 0 ? ColorTheme.FernGreen : ColorTheme.red;
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
    <View style={[styles.container, marketStyles.listWrapper]}>
      {/* ---------------- left wrapper --------------------- */}
      <View style={[marketStyles.flexCenter, marketStyles.leftWrapper]}>
        <Image
          source={{ uri: logoUrl }}
          style={marketStyles.image}
        />
        <View style={[styles.titleWrapper, marketStyles.titlleWrapper]}>
          <Text style={marketStyles.title}>{name}</Text>
          <Text style={[styles.textGray, marketStyles.subTitle]}>
            {symbol.toUpperCase()}
          </Text>
        </View>
      </View>
      {/* ---------------- right wrapper -------------------- */}
      <View style={marketStyles.rightWrapper}>
        <Text style={marketStyles.title}>
          $ {currentPrice.toLocaleString('en-US', { currency: 'USD' })}
        </Text>
        <Text style={[marketStyles.subTitle, { color: priceChangeColor }]}>
          {priceChangePercentage7d.toFixed(3)}%
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
};

export default ListItem;

const styles = StyleSheet.create({
container: {
  paddingHorizontal: 16, 
},
titleWrapper: {
  marginLeft: 8, 
},
textGray: {
  color: 'gray',
},
});


