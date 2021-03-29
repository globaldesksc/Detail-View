import React from 'react';
import { Button, View } from 'react-native';

import styles from './HomeView.styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to detail view" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

export default HomeScreen;