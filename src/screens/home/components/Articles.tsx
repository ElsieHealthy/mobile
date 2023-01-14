import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {
  MoodFigure,
  HappinessFigure,
  StrongFigure,
} from '../../../icons/article';
import {HomeStackParamList} from '../../../navigators/Home';

type NavigationProps = StackNavigationProp<HomeStackParamList, 'Home'>;

const figureHeight = Dimensions.get('screen').height * 0.13;

export const Articles = () => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text fontSize={FontSize.Headline}>Article</Text>
        <Pressable onPress={() => navigate('ArticleList')}>
          <Text
            style={{
              color: Colors.Primary.Purple,
            }}
            fontSize={FontSize.CaptionThree}>
            See all
          </Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable
          style={styles.card}
          containerStyle={styles.cardRootContainer}>
          <Text style={styles.cardTitle}>Daily Women</Text>
          <View style={styles.cardFigureContainer}>
            <HappinessFigure size={figureHeight} />
          </View>
        </Pressable>

        <Pressable
          style={styles.card}
          containerStyle={styles.cardRootContainer}>
          <Text style={styles.cardTitle}>Daily Women</Text>
          <View style={styles.cardFigureContainer}>
            <MoodFigure size={figureHeight} />
          </View>
        </Pressable>

        <Pressable
          style={styles.card}
          containerStyle={styles.cardRootContainer}>
          <Text style={styles.cardTitle}>Daily Women</Text>
          <View style={styles.cardFigureContainer}>
            <StrongFigure size={figureHeight} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  card: {
    width: '31%',
    overflow: 'hidden',
  },
  cardRootContainer: {
    backgroundColor: Colors.Secondary.LightPurple,
    padding: 8,
    paddingBottom: 0,
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: Colors.Primary.Purple,
    fontFamily: Font.ExtraBold,
    fontSize: 16,
    width: '80%',
  },
  cardFigureContainer: {
    alignSelf: 'center',
    paddingTop: 8,
  },
});
