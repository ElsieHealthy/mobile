import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Button/Pressable';
import {Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {ArrowLeftIcon} from '../../../icons/ArrowLeft';
import {ArrowRightIcon} from '../../../icons/ArrowRight';

interface HeaderProps {
  title: string;
  icon?: React.FunctionComponent<IconProps>;
  onPressLeft: () => void;
  onPressRight: () => void;
}

export const Header = ({
  title,
  icon: Icon,
  onPressLeft,
  onPressRight,
}: HeaderProps) => {
  return (
    <View style={styles.chartHeader}>
      <Pressable onPress={onPressLeft}>
        <ArrowLeftIcon size={13} />
      </Pressable>
      <View style={styles.titleContainer}>
        {Icon && (
          <View style={styles.iconWrapper}>
            <Icon size={13} color={Colors.Primary.Black} />
          </View>
        )}
        <Text style={styles.chartTitle}>{title}</Text>
      </View>
      <Pressable onPress={onPressRight}>
        <ArrowRightIcon size={13} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.Label.OffBlue,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  chartHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartTitle: {
    fontFamily: Font.Bold,
    fontSize: 13,
    lineHeight: 16,
    color: Colors.Primary.Black,
  },
  container: {
    flexDirection: 'row',
  },
  iconWrapper: {
    marginRight: 8,
  },
});
