// Add address interface
export interface AddAddressResponce {
  status: string
  message: string
  data: AddressDetails[]
}

export interface AddressDetails {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}



// all user address interface
export interface allUserAddressResponce {
  results: number
  status: string
  data: addressDetails[]
}

export interface addressDetails {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}
