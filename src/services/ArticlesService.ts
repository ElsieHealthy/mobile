import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {DataBase} from '../Constant';

const toArticle = (_doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
  return {
    id: _doc.id,
    ..._doc.data(),
  } as Article;
};

const subscribe = (
  callback: (err: Error | null, articles: Article[]) => void,
) =>
  firestore()
    .collection(DataBase.Articles)
    .onSnapshot(
      snapshot => {
        const source = snapshot.metadata.fromCache
          ? "Loading 'articles' from local cache"
          : "Loading 'articles' from server";
        console.log(source);

        const articles = snapshot.docs.map(toArticle);

        callback(null, articles);
      },
      err => {
        console.log(err);
        callback(err, []);
      },
    );

export const ArticlesService = {
  subscribe,
};
