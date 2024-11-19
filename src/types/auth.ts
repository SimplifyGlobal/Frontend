export type UserType = "seller" | "distributor" | "customer";

export interface SignupFormData {
  userType: UserType;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  // Seller specific
  businessName?: string;
  gstin?: string;
  businessAddress?: string;
  exportCountry?: string;
  productCategory?: string;
  yearsInBusiness?: string;
  // Distributor specific
  companyName?: string;
  licenseNumber?: string;
  headquarters?: string;
  serviceRegions?: string[];
  insuranceCoverage?: string;
  availableServices?: string[];
  yearsInOperation?: string;
}