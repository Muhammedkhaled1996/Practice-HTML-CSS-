// Get All brands
export interface AllBrandsResponce {
  results: number;
  metadata: Metadata;
  data: brandDetails[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface brandDetails {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

// Get Specific Brand
export interface GetSpecificBrand {
  data: SpecificBrandDetails;
}

export interface SpecificBrandDetails {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
