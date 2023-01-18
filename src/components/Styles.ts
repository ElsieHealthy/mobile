import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';
export const ComponentStyles = StyleSheet.create({
  input: {
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.Primary.DarkBlue,
    backgroundColor: Colors.Secondary.LightWhite,
    borderRadius: 10,
    marginTop: 8,
  },
  inputContainer: {
    flex: 1,
  },
  inputBlock: {
    width: '100%',
  },
  inputText: {
    color: Colors.Primary.DarkBlue,
  },
  inputError: {
    color: Colors.Secondary.LightRose,
  },
  inputMaskButton: {
    padding: 5,
  },
  inputIconWrapper: {
    position: 'absolute',
    right: 16,
    height: '100%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 8,
  },
  buttonRoot: {flex: 1, height: 50},
  buttonMarginLeft: {marginLeft: 16},
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: Colors.Primary.Purple,
  },
  ghostButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.Primary.White,
  },
  ghostButtonText: {
    color: Colors.Secondary.LightGrey,
  },
  buttonIconRight: {
    marginLeft: 8,
  },
  buttonIconLeft: {
    marginRight: 8,
  },
});
