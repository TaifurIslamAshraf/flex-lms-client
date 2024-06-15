import { IinstructorInfo } from "./user";

export interface ICourse {
  _id: string;
  instructor: string | any;
  name: string;
  slug: string;
  description: string;
  price: number;
  estimatedPrice: number;
  thumbnail: string;
  rating: number;
  reviews: any[];
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

interface Benefit {
  title: string;
  _id: string;
}

interface Prerequisite {
  title: string;
  _id: string;
}

interface ICourseData {
  videoTitle: string;
  videoDescription: string;
  videoUrl: string;
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  contentDrip: boolean;
  _id: string;
  videoResource: any[];
  questions: any[];
}

export interface ISingleCourse extends ICourse {
  instructor: IinstructorInfo;
  details: { title: string; _id: string }[];
  tags: string;
  level: string;
  demoUrl: string;
  benefits: Benefit[];
  prerequistites: Prerequisite[];
  courseDuration: string;
  materialIncludes: any[];
  courseData?: ICourseData[];
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

export interface ICourseQueryProps {
  page?: string;
  limit?: string;
  category?: string;
  subcategory?: string;
  search?: string;
  price?: string;
  level?: string;
}

export interface IPagination {
  totalPage: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
}

export interface IUserCourses {
  _id: string;
  completed: boolean;
  progress: number;
  title: string;
  thumbnail: string;
  slug: string;
  videoDataLength: number;
  completedVideoLength: number;
}
