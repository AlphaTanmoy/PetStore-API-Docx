import { HttpMethod, Microservice, Role } from './api-enums';

export interface ApiEndpoint {
  title: string;
  path: string;
  access: Role[];
  location: Microservice;
  request: string;
  response: string;
  curl: string;
  method: HttpMethod;
  expanded?: boolean;
}

export const API_DATA: { [key in Microservice]?: ApiEndpoint[] } = {
  [Microservice.AUTHENTICATION]: [
    {
      title: 'Create Api Key For Master',
      path: 'http://localhost:8082/apiKey/createApiKey',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.POST
    },
    {
      title: 'Delete Api Key For Master',
      path: 'http://localhost:8082/apiKey/deleteApiKey',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.DELETE
    },
    {
      title: 'View All Notification For Admin Related API Keys',
      path: 'http://localhost:8082/notification/apikeyrequest',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.GET
    }
  ],
  [Microservice.ADMIN]: [
    {
      title: 'Approve Api Key Request',
      path: 'http://localhost:8082/apiKey/approveApiKey',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.PUT
    },
    {
      title: 'Reject Api Key Request',
      path: 'http://localhost:8082/apiKey/rejectApiKey',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.PUT
    },
    {
      title: 'Create Api Key For Admin',
      path: 'http://localhost:8082/apiKey/createApiKey',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.POST
    },
    {
      title: 'Delete Api Key For Admin',
      path: 'http://localhost:8082/apiKey/deleteApiKey',
      access: [Role.MASTER],
      location: Microservice.AUTHENTICATION,
      request: '{}',
      response: '{}',
      curl: '',
      method: HttpMethod.DELETE
    }
  ]
};
