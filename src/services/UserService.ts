import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {DataBase} from '../Constant';

const toUser = (_doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
  return {
    id: _doc.id,
    ..._doc.data(),
  } as User;
};

const subscribeToUser = (
  id: User['id'],
  callback: (err: Error | null, user: User | null) => void,
) =>
  firestore()
    .collection(DataBase.Users)
    .doc(id)
    .onSnapshot(
      snapshot => {
        return callback(null, toUser(snapshot));
      },
      err => callback(err, null),
    );

const onGet = (id: User['id']) =>
  firestore()
    .collection(DataBase.Users)
    .doc(id)
    .get()
    .then((doc: FirebaseFirestoreTypes.DocumentSnapshot) => toUser(doc));

const onCreate = (userData: User) =>
  firestore()
    .collection(DataBase.Users)
    .doc(userData.id)
    .set(userData, {merge: true});

const onUpdate = (userData: Partial<User>) =>
  firestore()
    .collection(DataBase.Users)
    .doc(userData.id)
    .set(userData, {merge: true});

const onDelete = async () => {
  try {
    // return sendEmail('DELETE_ACCOUNT');
  } catch (e) {
    // return {data: [], message: '', status: 'error.notFound'} as HttpResponse;
  }
};

export const UserService = {
  subscribeToUser,
  onUpdate,
  onCreate,
  onDelete,
  onGet,
};
