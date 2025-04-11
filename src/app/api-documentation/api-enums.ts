export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum Microservice {
  ADMIN = 'Admin',
  AUTHENTICATION = 'Authentication',
  CORE = 'Core',
  DOCTOR = 'Doctor',
  KYC = 'Kyc',
  MANAGEMENT = 'Management',
  S3 = 'S3',
  SELLER = 'Seller',
  USER = 'User',
  PAYMENT = 'Payment',
}

export enum Role {
  MASTER = 'MASTER',
  CUSTOMER = 'CUSTOMER',
  DOCTOR = 'DOCTOR',
  CUSTOMER_CARE = 'CUSTOMER_CARE',
  RAIDER = 'RAIDER',
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
  SELLER = 'SELLER'
}
