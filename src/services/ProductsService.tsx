import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {DataBase} from '../Constant';

const toProducts = (_doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
  return {
    id: _doc.id,
    ..._doc.data(),
  } as Product;
};

const subscribe = (
  callback: (err: Error | null, products: Product[]) => void,
) =>
  firestore()
    .collection(DataBase.Products)
    .onSnapshot(
      snapshot => {
        const source = snapshot.metadata.fromCache
          ? "Loading 'products' from local cache"
          : "Loading 'products' from server";
        console.log(source);

        const doctors = snapshot.docs.map(toProducts);

        callback(null, doctors);
      },
      err => {
        console.log(err);
        callback(err, []);
      },
    );

export const ProductsService = {
  subscribe,
};
