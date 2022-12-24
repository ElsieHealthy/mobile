import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ReactNativeFirebase} from '@react-native-firebase/app';
import {UserService} from '../services/UserService';
import {AuthenticationStackParamList} from '../navigators/Authentication';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type State = {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  signInWithPhoneNumber: (phoneNumber: string) => Promise<any>;
  resendConfirmationCode: (phoneNumber: string) => Promise<any>;
  confirmCode: (code: string) => Promise<any>;
  setOnboardingCompleted: () => void;
  onLogout: () => Promise<any>;
};

export const AuthContext = createContext<State>({
  loading: true,
  isAuthenticated: false,
  user: null,
  signInWithPhoneNumber: async () => {},
  resendConfirmationCode: async () => {},
  confirmCode: async () => {},
  setOnboardingCompleted: () => {},
  onLogout: async () => {},
});

export const useAuthContext = () => useContext(AuthContext);

interface Props {
  children: any;
}

type NavigationProps = NavigationProp<
  AuthenticationStackParamList,
  'AccountDetails'
>;

export const AuthProvider = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const {navigate} = useNavigation<NavigationProps>();

  useEffect(() => {
    setLoading(true);
    const subscriber = auth().onAuthStateChanged(_authUser => {
      if (_authUser) {
        UserService.onGet(_authUser.uid).then(_u => {
          setUser(_u);
          console.log('_u', _u);
          if (!_u.onboarding) {
            navigate('AccountDetails');
            return;
          }

          if (_u.onboarding === 'COMPLETED') {
            setAuthenticated(true);
          } else if (_u.onboarding === 'AD') {
            navigate('VehicleDetails');
          }
        });
        setLoading(false);
      } else {
        setLoading(false);
        setAuthenticated(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, [navigate]);

  const signInWithPhoneNumber = useCallback(async (phoneNumber: string) => {
    return new Promise<void>((resolve, reject) => {
      auth()
        .signInWithPhoneNumber(phoneNumber.replace('0', '+94'))
        .then((_confirm: FirebaseAuthTypes.ConfirmationResult) => {
          setConfirm(_confirm);
          resolve();
        })
        .catch((e: ReactNativeFirebase.NativeFirebaseError) => {
          console.log('signInWithPhoneNumber had Following error', e.code);
          switch (e.code) {
            case 'auth/user-disabled':
              reject('Your account has been disabled');
              break;
            case 'auth/quota-exceeded':
              reject('Please try again');
              break;
            case 'auth/invalid-phone-number':
            case 'auth/missing-phone-number':
              reject('Please check the Phone Number and try again');
              break;
          }
        });
    });
  }, []);

  const resendConfirmationCode = useCallback(async (phoneNumber: string) => {
    return new Promise<void>((resolve, reject) => {
      auth()
        .signInWithPhoneNumber(phoneNumber.replace('0', '+94'), true)
        .then((_confirm: FirebaseAuthTypes.ConfirmationResult) => {
          setConfirm(_confirm);
          resolve();
        })
        .catch((e: ReactNativeFirebase.NativeFirebaseError) => {
          console.log('signInWithPhoneNumber had Following error', e.code);
          switch (e.code) {
            case 'auth/user-disabled':
              reject('Your account has been disabled');
              break;
            case 'auth/quota-exceeded':
              reject('Please try again');
              break;
            case 'auth/invalid-phone-number':
            case 'auth/missing-phone-number':
              reject('Please check the Phone Number and try again');
              break;
          }
        });
    });
  }, []);

  const confirmCode = useCallback(
    async (code: string) => {
      return new Promise<any>((resolve, reject) => {
        if (confirm) {
          confirm
            .confirm(code)
            .then(_userCredential => {
              if (_userCredential) {
                UserService.onGet(_userCredential.user.uid).then(_user => {
                  setUser({
                    ..._user,
                    mobileNo: _userCredential.user.phoneNumber!,
                  });
                  if (_user.onboarding === 'COMPLETED') {
                    setAuthenticated(true);
                  } else {
                    return resolve(_user);
                  }
                });
              }
            })
            .catch((_error: ReactNativeFirebase.NativeFirebaseError) => {
              console.log('confirmCode had Following error', _error.code);
              switch (_error.code) {
                case 'auth/invalid-verification-code':
                  reject('Invalid Verification Code, Please try again');
                  break;
                default:
                  reject('Something wen wrong');
                  break;
              }
            });
        }
      });
    },
    [confirm],
  );

  const setOnboardingCompleted = useCallback(() => {
    setAuthenticated(true);
  }, []);

  const onLogout = useCallback(async () => {
    return auth().signOut();
  }, []);

  const values = useMemo(
    () => ({
      isAuthenticated,
      loading,
      user,
      signInWithPhoneNumber,
      confirmCode,
      resendConfirmationCode,
      setOnboardingCompleted,
      onLogout,
    }),
    [
      isAuthenticated,
      loading,
      user,
      signInWithPhoneNumber,
      confirmCode,
      resendConfirmationCode,
      setOnboardingCompleted,
      onLogout,
    ],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthentication = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthentication must be used within an AuthProvider');
  }
  return context;
};
