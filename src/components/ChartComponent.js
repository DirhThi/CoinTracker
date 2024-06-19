// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import React from "react";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { marketStyles } from "../styles/MarketStyles";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const ChartComponent = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkLine,
  high_24h,
  low_24h,
  price_change_24h,
  price_change_percentage_24h,
}) => {
  console.log(currentPrice);
  // -----------------------------------------------------------------------------------
  //  PRICE COLOR CHANGE
  // -----------------------------------------------------------------------------------
  const priceChangeColor =
    priceChangePercentage7d > 0 ? ColorTheme.FernGreen : ColorTheme.red;

  const percentageChangeColor =
  price_change_percentage_24h > 0 ? ColorTheme.FernGreen : ColorTheme.red;

  // Format sparkline data for chart
  const formattedSparkLine = sparkLine.map((point) => point);
  console.log(formattedSparkLine);

  return (
    <View style={styles.container}>
    {/* ------------------ Title wrapper ---------------------- */}
    <View style={[styles.titleWrapper, marketStyles.chartTitle]}>
      <View style={[styles.innerWrapper, marketStyles.listWrapper]}>
        <View style={marketStyles.listWrapper}>
          <Image style={marketStyles.modalImage} source={{ uri: logoUrl }} />
          <Text style={[styles.textGray, styles.textPadding]}>
            {name} {symbol}
          </Text>
        </View>
        <Text style={[styles.textGray, marketStyles.subTitle]}>
          7d
        </Text>
      </View>
      <View style={[styles.innerWrapper, marketStyles.listWrapper]}>
        <Text style={marketStyles.modalBoldTitle}>
          $ {currentPrice.toLocaleString('en-US', { currency: 'USD' })}
        </Text>
        <Text style={[marketStyles.modalRegularTitle, { color: priceChangeColor }]}>
          {priceChangePercentage7d.toFixed(3)}%
        </Text>
      </View>
    </View>
    {/* ------------------ chart wrapper ---------------------- */}
    <View style={[styles.chartWrapper, marketStyles.flexEven]}>
      <View style={marketStyles.listWrapper}>
        <View style={marketStyles.flexCenter}>
          <Text style={marketStyles.modalPriceText}>
            $ {high_24h.toLocaleString('en-US', { currency: 'USD' })}
          </Text>
          <Text style={marketStyles.modalPriceSubText}>
            highest price in 24 hours
          </Text>
        </View>
        <View style={marketStyles.flexCenter}>
          <Text style={[marketStyles.modalPriceText, { color: ColorTheme.red }]}>
            $ {low_24h.toLocaleString('en-US', { currency: 'USD' })}
          </Text>
          <Text style={marketStyles.modalPriceSubText}>
            lowest price in 24 hours
          </Text>
        </View>
      </View>
      <View style={marketStyles.flexCenter}>
        <Text style={marketStyles.modalPriceText}>
          $ {price_change_24h.toFixed(3)}
        </Text>
        <Text style={marketStyles.modalPriceSubText}>
          price change in 24 hours
        </Text>
      </View>
      <View style={marketStyles.flexCenter}>
        <Text style={[marketStyles.rateText, { color: percentageChangeColor }]}>
          {price_change_percentage_24h.toFixed(3)}%
        </Text>
        <Text style={marketStyles.modalPriceSubText}>
          change rate
        </Text>
      </View>
    </View>
  </View>
);
};

export default ChartComponent;

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
titleWrapper: {
  width: '100%',
  height: '20%',
},
innerWrapper: {
  paddingHorizontal: 16, 
},
textGray: {
  color: 'gray',
},
textPadding: {
  paddingLeft: 12, 
},
chartWrapper: {
  width: '100%',
  height: '80%',
  paddingHorizontal: 16, 
},
});

