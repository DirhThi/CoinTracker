// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, {
  useEffect,
  useState,
} from "react";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { currencyConverterStyles } from "../styles/CurrencyConverterStyle";
import ColorTheme from "../config/ColorTheme";
import Money from "@expo/vector-icons/Fontisto";

const CurrencyConverter = () => {
  const [cryptocurrencyPrice, setCryptocurrencyPrice] = useState(0);
  const [conversionResultINR, setConversionResultINR] = useState(0);
  const [conversionResultEUR, setConversionResultEUR] = useState(0);
  const [inputError, setInputError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      const exchangeRateINR = data.rates.INR;
      const exchangeRateEUR = data.rates.EUR;
      setConversionResultINR(
        parseFloat(cryptocurrencyPrice) * exchangeRateINR
      );
      setConversionResultEUR(
        parseFloat(cryptocurrencyPrice) * exchangeRateEUR
      );
      setInputError(false);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const handleConvert = () => {
    if (cryptocurrencyPrice !== "" && !isNaN(cryptocurrencyPrice)) {
      fetchExchangeRate();
      setInputError(false);
    }else{
      setInputError(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.headerContainer, currencyConverterStyles.flexStart]}>
        <Text style={[styles.headerText, currencyConverterStyles.largeTitle]}>
          Coinverter
        </Text>
      </View>
      <View style={[styles.imageContainer, currencyConverterStyles.flexCenter]}>
        <View style={currencyConverterStyles.flexCenter}>
          <Image
            source={require("../../assets/images/crypto.png")}
            resizeMode="contain"
            style={[styles.image, currencyConverterStyles.cryptoImage]}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, currencyConverterStyles.title]}>
          Convert coin value
        </Text>
        <View>
          <TextInput
            onChangeText={(value) => setCryptocurrencyPrice(parseFloat(value))}
            style={[styles.input, currencyConverterStyles.input]}
            keyboardType="numeric"
            placeholder="Enter USD value of currency"
            placeholderTextColor={ColorTheme.grey}
          />
          <Money name="money-symbol" style={currencyConverterStyles.favIcon} />
        </View>
        {inputError && (
          <Text style={currencyConverterStyles.errorText}>
            Please enter a valid numeric value.
          </Text>
        )}
        <View>
          <TouchableOpacity
            onPress={handleConvert}
            style={[styles.button, currencyConverterStyles.submitButton, currencyConverterStyles.flexCenter]}
            activeOpacity={0.4}
          >
            <Text style={currencyConverterStyles.submitText}>CONVERT</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.resultContainer, currencyConverterStyles.card]}>
          <View>
            <Text style={currencyConverterStyles.priceTitle}>€ {conversionResultEUR.toFixed(2)}</Text>
            <Text style={currencyConverterStyles.subTitle}>valuation in EUR</Text>
          </View>
          <View style={currencyConverterStyles.flexEnd}>
            <Text style={currencyConverterStyles.priceTitle}>₹ {conversionResultINR.toFixed(2)}</Text>
            <Text style={currencyConverterStyles.subTitle}>valuation in INR</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  </TouchableWithoutFeedback>
);
};

export default CurrencyConverter;

const styles = StyleSheet.create({
safeArea: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
headerContainer: {
  width: '100%',
  height: '10%',
  padding: 20,
},
headerText: {
  paddingTop: 2,
},
imageContainer: {
  width: '100%',
  height: '25%',
  padding: 20,
  marginTop: -20,
},
image: {
  width: '100%',
  height: '100%',
},
contentContainer: {
  width: '100%',
  height: '65%',
  padding: 20,
},
title: {
  paddingHorizontal: 20,
},
input: {
  paddingHorizontal: 48,
  marginTop: 16,
},
button: {
  paddingHorizontal: 48,
  marginTop: 16,
},
resultContainer: {
  marginTop: 32,
  paddingHorizontal: 20,
},
});

