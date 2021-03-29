import React from 'react';
import { View, Text } from 'react-native';

import styles from './DetailView.styles';

const DetailView = () => {
  return(
    <View style={styles.container}>
      <Text>
        "Hi! I am the detail view!"
      </Text>
    </View>
  );
}
export default DetailView;
