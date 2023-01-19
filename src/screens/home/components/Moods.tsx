import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {PlusIcon} from '../../../icons/Plus';
import {MoodModel} from './MoodModel';

const MoodData = [
  {
    text: 'Bad Mood',
    type: 'bad',
    image: require('../../../images/moods/bad.png'),
    backgroundColor: '#AFE9E5',
  },
  {
    text: 'Sad',
    type: 'sad',
    image: require('../../../images/moods/sad.png'),
    backgroundColor: '#F5D2DF',
  },
  {
    text: 'Happy',
    type: 'happy',
    image: require('../../../images/moods/happy.png'),
    backgroundColor: '#FFE2C7',
  },
  {
    text: 'Fun',
    type: 'fun',
    image: require('../../../images/moods/fun.png'),
    backgroundColor: '#FFE3AD',
  },
  {
    text: 'Frustrated',
    type: 'frustrated',
    image: require('../../../images/moods/frustrated.png'),
    backgroundColor: '#AFCBF5',
  },
  {
    text: 'Shocked',
    type: 'shocked',
    image: require('../../../images/moods/shocked.png'),
    backgroundColor: '#E6C7FF',
  },
  {
    text: 'Calm',
    type: 'calm',
    image: require('../../../images/moods/calm.png'),
    backgroundColor: '#FFC7C7',
  },
  {
    text: 'Nice',
    type: 'nice',
    image: require('../../../images/moods/nice.png'),
    backgroundColor: '#94D9C0',
  },
  {
    text: 'Relax',
    type: 'relax',
    image: require('../../../images/moods/relax.png'),
    backgroundColor: '#849EFB',
  },
];

const {width} = Dimensions.get('screen');

export const Moods = () => {
  const [showModal, setShowModal] = useState(false);
  const [moods, setMoods] = useState<Mood[]>([]);
  const moodData = MoodData as unknown as Mood[];
  return (
    <View>
      <Text style={styles.moodText} fontSize={FontSize.Headline}>
        Your Mood
      </Text>
      <ScrollView horizontal style={styles.moodContainer}>
        <Pressable
          onPress={() => {
            setShowModal(!showModal);
          }}
          containerStyle={styles.moodButton}>
          <View style={styles.moodButtonContainer}>
            <View style={styles.iconContainer}>
              <PlusIcon size={24} color={Colors.Primary.White} />
            </View>
          </View>
          <Text fontSize={FontSize.CaptionThree}>Add Mood</Text>
        </Pressable>
        {moods.map(_mood => {
          return (
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                marginHorizontal: 8,
              }}>
              <View
                style={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: width * 0.25,
                  aspectRatio: 1 / 1,
                  backgroundColor: _mood.backgroundColor,
                  borderRadius: 10,
                  marginBottom: 4,
                }}>
                <Image source={_mood.image} />
              </View>
              <Text fontSize={FontSize.CaptionThree}>{_mood.text}</Text>
            </View>
          );
        })}
      </ScrollView>
      <MoodModel
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSelectMood={_mood => {
          setMoods([...moods, _mood]);
          setShowModal(false);
        }}
        data={moodData}
      />
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  moodButtonContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.25,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    marginBottom: 4,
    backgroundColor: Colors.Secondary.LightPurple,
  },
  iconContainer: {
    backgroundColor: Colors.Primary.Purple,
    borderRadius: 30,
    padding: 6,
    alignSelf: 'center',
  },
});
