import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';

const cardHeight = Dimensions.get('screen').height * 0.15;

interface ArticleRowProps {
  title: string;
}

export const ArticleRow = ({title}: ArticleRowProps) => {
  const renderItem = ({item}) => {
    return (
      <Pressable containerStyle={styles.card}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <LinearGradient
          colors={Colors.Gradients.Red}
          style={styles.titleContainer}>
          <Text
            style={{
              color: Colors.Primary.White,
            }}
            fontSize={FontSize.CaptionOne}>
            {item}
          </Text>
        </LinearGradient>
      </Pressable>
    );
  };

  return (
    <View>
      <Text style={styles.subTitle} fontSize={FontSize.Headline}>
        {title}
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
    backgroundColor: Colors.Secondary.LightBlue,
    margin: 4,
    borderRadius: 20,
    aspectRatio: 1 / 1,
    height: cardHeight,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    aspectRatio: 1 / 1,
    height: cardHeight,
    opacity: 0.8,
  },
  titleContainer: {
    ...StyleSheet.absoluteFill,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    padding: 8,
  },
});
