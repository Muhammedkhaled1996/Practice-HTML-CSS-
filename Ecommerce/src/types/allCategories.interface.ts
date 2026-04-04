// Get All Category
export interface allCategoriesResponce {
  results: number;
  metadata: Metadata;
  data: categoryDetails[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface categoryDetails {
  _id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}


// get specific category 
export interface getSpecificCategoryResponce {
  data: SpecificCategoryDetails
}

export interface SpecificCategoryDetails {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
}
