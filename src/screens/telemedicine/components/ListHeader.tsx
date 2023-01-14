import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {Font} from '../../../Fonts';

interface HeaderProps {
  title: string;
  subTitle: string;
  onPressSeeAll: () => void;
}

export const ListHeader = ({title, subTitle, onPressSeeAll}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View>
        <Text fontSize={FontSize.Headline} style={styles.title}>
          {title}
        </Text>
        <Text fontSize={FontSize.CaptionOne} style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPressSeeAll} style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  title: {
    color: Colors.Primary.Black,
  },
  subTitle: {
    color: Colors.Primary.Grey,
    fontSize: 13,
    fontFamily: Font.Regular,
    marginTop: -4,
  },
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllButton: {
    paddingHorizontal: 16,
    backgroundColor: Colors.Primary.Orange,
    borderRadius: 4,
    marginRight: 8,
  },
  seeAllText: {
    color: Colors.Primary.White,
    fontFamily: Font.Bold,
    fontSize: 12,
  },
});
