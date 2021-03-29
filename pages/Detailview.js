import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DetailView = () => {
    return(
        <View style={styles.container}>
            <Text>
                "Hi! I am the detail view!"
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default DetailView;
