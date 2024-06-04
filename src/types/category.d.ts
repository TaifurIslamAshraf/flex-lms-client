export interface ICateogry {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISubcategory {
  courses?: [
    {
      name: string;
      slug: string;
      thumbnail: string;
      _id: string;
    }
  ];
  name: string;
  slug: string;
  _id: string;
}
[];
