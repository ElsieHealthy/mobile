import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {DataBase} from '../Constant';

const toDoctor = (_doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
  return {
    id: _doc.id,
    ..._doc.data(),
  } as Doctor;
};

const subscribe = (callback: (err: Error | null, doctors: Doctor[]) => void) =>
  firestore()
    .collection(DataBase.Doctors)
    .onSnapshot(
      snapshot => {
        const source = snapshot.metadata.fromCache
          ? "Loading 'doctors' from local cache"
          : "Loading 'doctors' from server";
        console.log(source);

        const doctors = snapshot.docs.map(toDoctor);

        callback(null, doctors);
      },
      err => {
        console.log(err);
        callback(err, []);
      },
    );

export const DoctorsService = {
  subscribe,
};
