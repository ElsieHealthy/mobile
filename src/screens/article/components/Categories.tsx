import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';

export const Categories = () => {
  const renderItem = ({item}) => {
    return (
      <Pressable style={styles.card}>
        <Text fontSize={FontSize.CaptionThree}>{item}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <Text style={styles.subTitle} fontSize={FontSize.Headline}>
        Article Category
      </Text>
      <View>
        <FlatList
          data={[
            'Sex',
            'Fashion',
            'Love',
            'SelfCare',
            'Tips',
            'Health',
            'Fitness',
            'MindFulness',
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  subTitle: {
    padding: 20,
    paddingVertical: 8,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  card: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.Secondary.LightBlue,
    margin: 4,
    borderRadius: 4,
  },
});
