export interface ICourse {
  _id: string;
  instructor: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  estimatedPrice: number;
  thumbnail: string;
  rating: number;
  reviews: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type ICategoryCourse = {
  _id: string;
  name: string;
  slug: string;
  courses: Omit<
    ICourse,
    | "description"
    | "createdAt"
    | "updatedAt"
    | "__v"
    | "instructor"
    | "rating"
    | "reviews"
  >[];
};

export type ICardCourse = Omit<
  ICourse,
  | "description"
  | "createdAt"
  | "updatedAt"
  | "__v"
  | "instructor"
  | "rating"
  | "reviews"
>;
