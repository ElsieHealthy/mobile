import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../Colors';
import {Font} from '../../Fonts';

export const styles = (fullScreen?: boolean) =>
  StyleSheet.create({
    modalStyle: {
      margin: 0,
      backgroundColor: fullScreen
        ? Colors.Label.OffBlue
        : Colors.Secondary.LightYellow,
    },

    container: {
      flex: fullScreen ? 1 : undefined,
      padding: fullScreen ? 8 : 16,
      borderRadius: fullScreen ? 0 : 20,
      backgroundColor: Colors.Label.OffBlue,
      justifyContent: 'center',
    },

    dangerTheme: {
      backgroundColor: Colors.Label.OffBlue,
    },

    loadingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    headerContainer: {
      flexDirection: fullScreen ? 'column' : 'row',
      justifyContent: fullScreen ? undefined : 'center',
      alignItems: fullScreen ? 'center' : undefined,
    },

    button: {
      flexDirection: 'row',
      marginTop: fullScreen ? 20 : 14,
      justifyContent: 'center',
    },

    closeButton: {
      justifyContent: fullScreen ? undefined : 'flex-end',
      alignItems: fullScreen ? undefined : 'flex-end',
      marginBottom: fullScreen ? undefined : 14,
      position: fullScreen ? 'absolute' : undefined,
      top: fullScreen ? '8%' : undefined,
      right: fullScreen ? '5%' : undefined,
    },

    title: {
      textAlign: 'center',
      fontSize: 24,
      lineHeight: 28,
      color: Colors.Primary.Grey,
      marginTop: fullScreen ? 50 : 0,
      paddingHorizontal: fullScreen ? 24 : 10,
    },

    subTitle: {
      textAlign: 'center',
      fontFamily: Font.Regular,
      color: Colors.Primary.Grey,
      fontSize: 16,
      marginTop: 8,
      marginBottom: 5,
      paddingHorizontal: fullScreen ? 24 : 0,
    },

    buttonText: {
      color: Colors.Primary.White,
      fontFamily: Font.Bold,
      fontSize: 16,
      lineHeight: 18,
    },

    buttonSecondary: {
      color: Colors.Primary.White,
      fontFamily: Font.Bold,
      fontSize: 16,
      lineHeight: 18,
    },

    iconStyle: {
      width: fullScreen ? Dimensions.get('screen').width / 2 : 30,
      height: fullScreen ? Dimensions.get('screen').width / 2 : 30,
    },

    footer: {
      flexDirection: 'row',
      marginTop: 16,
      marginHorizontal: fullScreen ? 20 : 0,
      width: '100%',
    },
    footerButton: {
      flex: 1,
      marginHorizontal: 8,
      padding: 8,
      borderRadius: 8,
      alignContent: 'center',
      alignItems: 'center',
    },
  });

export const closeIconSize = 30;
