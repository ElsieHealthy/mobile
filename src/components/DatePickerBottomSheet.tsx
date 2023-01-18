import React, {useState, useEffect} from 'react';
import {
  GestureResponderEvent,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

import {Text} from './Text';
import {Colors} from '../Colors';
import {CalendarIcon} from '../icons/Calendar';
import {ComponentStyles} from './Styles';

interface Props {
  date: Date | null;
  minimumDate?: Date;
  maximumDate?: Date;
  defaultDate?: Date;
  placeholderText?: string;
  testID?: string;
  onConfirm: (date: Date) => void;
  label: string;
}

export const DatePickerBottomSheet = ({
  date,
  minimumDate,
  maximumDate,
  defaultDate,
  placeholderText = 'Välj...',
  onConfirm,
  testID,
  label,
}: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(date);

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  const handleClose = () => {
    setModalIsVisible(false);
  };

  const handleOnConfirm = (_: GestureResponderEvent) => {
    setModalIsVisible(false);
    onConfirm(selectedDate || new Date());
  };

  const onChange = (d: Date | undefined) => {
    const newDate = d || date || new Date();
    const offsetDate = new Date(
      newDate.getTime() - newDate.getTimezoneOffset() * 60000,
    );

    if (Platform.OS === 'android') {
      setModalIsVisible(false);
      setSelectedDate(offsetDate);
      onConfirm(offsetDate || new Date());
    } else {
      setSelectedDate(offsetDate);
    }
  };

  const value = selectedDate || (defaultDate ?? new Date());

  return (
    <View>
      {label && <Text style={ComponentStyles.inputText}>{label}</Text>}

      <TouchableOpacity
        testID={testID}
        onPress={() => setModalIsVisible(!modalIsVisible)}>
        <View style={styles.container}>
          <Text
            style={{
              color: date
                ? Colors.Primary.DarkBlue
                : Colors.Secondary.LightGrey,
            }}>
            {date ? date.toLocaleDateString() : placeholderText}
          </Text>
          <CalendarIcon size={24} color={Colors.Primary.Purple} />
        </View>
      </TouchableOpacity>

      {Platform.OS === 'ios' ? (
        <Modal
          isVisible={modalIsVisible}
          onBackdropPress={handleClose}
          backdropOpacity={0.5}
          style={styles.modal}>
          <View style={styles.content}>
            <TouchableOpacity onPress={handleOnConfirm} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <DateTimePicker
              style={styles.dateTimePicker}
              value={value}
              mode="date"
              is24Hour={true}
              display="spinner"
              onChange={(_, d) => onChange(d)}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
            />
          </View>
        </Modal>
      ) : modalIsVisible ? (
        <DateTimePicker
          style={styles.dateTimePicker}
          value={value}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(_, d) => onChange(d)}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginBottom: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: Colors.Secondary.LightWhite,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  content: {
    paddingBottom: 32,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.Primary.White,
  },

  dateTimePicker: {
    margin: 0,
    padding: 0,
    width: '100%',
  },

  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.Primary.Purple,
  },

  buttonText: {
    color: Colors.Primary.White,
  },
});
