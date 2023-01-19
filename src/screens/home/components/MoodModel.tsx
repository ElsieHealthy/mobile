import React from 'react';
import {FlatList, Image, Dimensions, View} from 'react-native';
import {BottomModal} from '../../../components/BottomModal';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';

interface MoodModelProps {
  show: boolean;
  onClose: () => void;
  onSelectMood: (mood: Mood) => void;
  data: Mood[];
}

const {width} = Dimensions.get('screen');
export const MoodModel = ({
  show,
  onClose,
  onSelectMood,
  data,
}: MoodModelProps) => {
  const renderMoodList = () => {
    return (
      <View>
        <Text
          style={{
            marginVertical: 20,
          }}
          center
          fontSize={FontSize.Headline}>
          Choose your mood
        </Text>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() => onSelectMood(item)}
                containerStyle={{
                  alignContent: 'center',
                  alignItems: 'center',
                  marginVertical: 8,
                  width: width * 0.33,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width * 0.2,
                    aspectRatio: 1 / 1,
                    backgroundColor: item.backgroundColor,
                    borderRadius: 10,
                    marginBottom: 4,
                  }}>
                  <Image source={item.image} />
                </View>
                <Text fontSize={FontSize.CaptionThree}>{item.text}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    );
  };

  return (
    <BottomModal show={show} onClose={onClose} children={renderMoodList()} />
  );
};
