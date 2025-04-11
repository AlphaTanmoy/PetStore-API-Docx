import { HttpMethod, Microservice, Role } from './api-enums';
import { AdminMicroserviceEndPoints } from './microservices/admin-endpoints';
import { AuthenticationMicroserviceEndPoints } from './microservices/authenticaion-endpoints';
import { CoreMicroserviceEndPoints } from './microservices/core-enpoints';
import { DoctorMicroserviceEndPoints } from './microservices/doctor-endpoints';
import { KycMicroserviceEndPoints } from './microservices/kyc-endpoints';
import { ManagementMicroserviceEndPoints } from './microservices/management-endpoints';
import { PaymnetMicroserviceEndPoints } from './microservices/payment-endpoints';
import { S3MicroserviceEndPoints } from './microservices/s3-endpoints';

export interface ApiEndpoint {
  title: string;
  path: string;
  access: Role[];
  request: string;
  response: string;
  curl: string;
  method: HttpMethod;
  expanded?: boolean;
  implemented: boolean;
  notes?: string;
}

export const API_DATA: { [key in Microservice]?: ApiEndpoint[] } = {
  [Microservice.ADMIN]: AdminMicroserviceEndPoints,
  [Microservice.AUTHENTICATION]: AuthenticationMicroserviceEndPoints,
};
