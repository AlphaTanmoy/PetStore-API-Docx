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
  LIVENESS = 'Liveness',
  MANAGEMENT = 'Management',
  S3 = 'S3',
  SANCTION = 'Sanction',
  SELLER = 'Seller',
  USER = 'User'
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
