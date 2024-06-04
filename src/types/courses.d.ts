export interface ICourse {
  _id: string;
  instructor: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  estimatedPrice: number;
  thumbnail: string;
  tags: string;
  rating: number;
  reviews: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
