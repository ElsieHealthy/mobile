import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar as RNCalendar, CalendarUtils} from 'react-native-calendars';
import {Colors} from '../../../Colors';
import {Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {CalendarIcon} from '../../../icons/Calendar';
import {Header} from '../../chart/components/Header';

interface InputCalendarProps {
  selectedDate: Date | null;
  onChangeDate: (date: Date) => void;
}

const markedDateStyle = {
  customStyles: {
    container: {
      backgroundColor: Colors.Primary.Purple,
    },
    text: {
      color: Colors.Primary.White,
      fontFamily: Font.Bold,
      fontSize: 14,
    },
  },
};

export const InputCalendar = ({
  selectedDate,
  onChangeDate,
}: InputCalendarProps) => {
  const renderHeader = () => {
    return (
      <View>
        <Header
          title={'Jan 2023'}
          icon={CalendarIcon}
          onPressLeft={() => {}}
          onPressRight={() => {}}
        />
        <View style={styles.dayContainer}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(item => (
            <Text style={styles.dayLabel}>{item}</Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <RNCalendar
        style={{}}
        current={new Date().toDateString()}
        hideExtraDays
        firstDay={0}
        onDayPress={day => {
          onChangeDate(new Date(day.dateString));
        }}
        markingType={'custom'}
        markedDates={{
          [CalendarUtils.getCalendarDateString(new Date(selectedDate!))]:
            markedDateStyle,
        }}
        customHeader={renderHeader}
        theme={{
          dayTextColor: Colors.Primary.Black,
          textDayFontFamily: Font.Regular,
          textMonthFontFamily: Font.Regular,
          textDayHeaderFontFamily: Font.Regular,
          textDayFontSize: 12,
          textDayHeaderFontSize: 15,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
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
  dayContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF1E3',
    borderRadius: 8,
    justifyContent: 'space-around',
    marginTop: 16,
  },
  dayLabel: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Font.Regular,
  },
});
