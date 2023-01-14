import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {PlusIcon} from '../../../icons/Plus';

export const Moods = () => {
  return (
    <View>
      <Text style={styles.moodText} fontSize={FontSize.Headline}>
        Your Mood
      </Text>
      <View style={styles.moodContainer}>
        <Pressable
          style={styles.moodButton}
          containerStyle={styles.moodButtonContainer}>
          <View style={styles.iconContainer}>
            <PlusIcon size={24} color={Colors.Primary.White} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moodContainer: {
    flexDirection: 'row',
  },
  moodText: {
    paddingVertical: 8,
  },
  moodButton: {
    borderRadius: 10,
    backgroundColor: Colors.Secondary.LightPurple,
    width: '25%',
    aspectRatio: 1 / 1,
  },
  moodButtonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: Colors.Primary.Purple,
    borderRadius: 30,
    padding: 6,
    alignSelf: 'center',
  },
});
