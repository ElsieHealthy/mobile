import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar as RNCalendar, CalendarUtils} from 'react-native-calendars';
import {Colors} from '../../../Colors';
import {Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {CalendarIcon} from '../../../icons/Calendar';
import {Header} from './Header';

export const Calendar = () => {
  const getDate = (count: number) => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

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
        // ref={ref}
        style={{}}
        current={new Date().toDateString()}
        hideExtraDays
        firstDay={0}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        markingType={'custom'}
        markedDates={{
          [getDate(1)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightPurple,
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(2)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightPurple,
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(3)]: {
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
          },
          [getDate(7)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightGreen,
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(8)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightGreen,
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(9)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightGreen,
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(10)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightRose,
                borderColor: Colors.Primary.Rose,
                borderWidth: 1,
                borderStyle: 'dashed',
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(11)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightRose,
                borderColor: Colors.Primary.Rose,
                borderWidth: 1,
                borderStyle: 'dashed',
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(12)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Secondary.LightRose,
                borderColor: Colors.Primary.Rose,
                borderWidth: 1,
                borderStyle: 'dashed',
              },
              text: {
                color: Colors.Primary.Black,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
          [getDate(13)]: {
            customStyles: {
              container: {
                backgroundColor: Colors.Primary.Rose,
                borderColor: Colors.Secondary.LightRose,
                borderWidth: 1,
                borderStyle: 'dashed',
              },
              text: {
                color: Colors.Primary.White,
                fontFamily: Font.Bold,
                fontSize: 14,
              },
            },
          },
        }}
        customHeader={renderHeader}
        theme={{
          // backgroundColor: '#ffffff',
          // calendarBackground: '#ffffff',
          // textSectionTitleColor: '#b6c1cd',
          // textSectionTitleDisabledColor: '#d9e1e8',
          //   selectedDayBackgroundColor: '#00adf5',
          // selectedDayTextColor: '#ffffff',
          // todayTextColor: '#00adf5',
          dayTextColor: Colors.Primary.Black,
          // textDisabledColor: '#d9e1e8',
          // dotColor: '#00adf5',
          // selectedDotColor: '#ffffff',
          // arrowColor: 'orange',
          // disabledArrowColor: '#d9e1e8',
          textDayFontFamily: Font.Regular,
          textMonthFontFamily: Font.Regular,
          textDayHeaderFontFamily: Font.Regular,
          textDayFontSize: 12,
          textDayHeaderFontSize: 15,
        }}
      />

      <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
          <View style={styles.detailSubRow}>
            <View
              style={[
                {
                  backgroundColor: Colors.Secondary.LightRose,
                },
                styles.detailColor,
              ]}
            />
            <Text>Menstruation</Text>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.detailSubRow}>
              <View
                style={[
                  {
                    backgroundColor: Colors.Primary.Purple,
                  },
                  styles.detailColor,
                ]}
              />
              <Text>Ovulation</Text>
            </View>
          </View>
        </View>

        <View style={styles.columnContainer}>
          <View style={styles.detailSubRow}>
            <View
              style={[
                {
                  backgroundColor: Colors.Secondary.LightRose,
                },
                styles.detailColor,
              ]}
            />
            <Text>Fertile Day</Text>
          </View>

          <View style={styles.detailSubRow}>
            <View
              style={[
                {
                  backgroundColor: Colors.Secondary.LightGreen,
                },
                styles.detailColor,
              ]}
            />
            <Text>Safe Period</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 32,
    paddingHorizontal: 8,
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
  columnContainer: {
    marginTop: 8,
  },
  rowContainer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailSubRow: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  detailColor: {
    width: 16,
    aspectRatio: 1 / 1,
    borderRadius: 8,
    marginRight: 8,
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
