interface User {
  id: string;
  nickName: string;
  dob: Date;
  age: number;
  periodLength: number;
  cycleLength: number;
}

interface Mood {
  date: Date;
  moods: string[];
}

interface Article {
  id: string;
  content: string;
  imageUrl: string;
  author: string;
}

interface Doctor {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  title: string;
  specialization: string;
  price: {
    unit: string;
    value: string;
  };
  practiceAt: string;
  graduateFom: string;
  experience: {
    unit: string;
    value: string;
  };
}

interface Product {
  id: string;
  brand: string;
  description: string;
  discount: number;
  price: {
    unit: string;
    value: string;
  };
  stock: number;
  title: string;
}
