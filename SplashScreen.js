// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the Login screen after the delay
    }, 2000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./logo.png')} // Adjust the path based on your actual logo file
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome to the MEDIREMOTE</Text>
      </View>

      {/* Additional View with Text */}
      <View style={styles.additionalContent}>
        <Text style={styles.additionalText}>
          A Brand of E-Healthcare Systems and Wireless Communications.{'\n'}
          Current and Future Challenges
        </Text>
      </View>

      {/* Separate View for Copyright Text */}
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>
          Copyright © 2023 MEDIREMOTE. All Rights Reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 170,
  },
  logo: {
    width: 202,
    height: 54,
    marginBottom: 20,
  },
  welcomeText: {
    color: '#01619b',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  additionalContent: {
    marginTop: 40,
    alignItems: 'center',
  },
  additionalText: {
    color: '#01619b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 285,
  },
  copyrightContainer: {
    marginBottom: 65, // Adjust the margin as needed
    alignItems: 'center',
  },
  copyrightText: {
    color: '#01619b',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
