import { ApiEndpoint } from '../api-endpoints';
import { HttpMethod, Role } from '../api-enums';

export const AuthenticationMicroserviceEndPoints: ApiEndpoint[] = [
  {
    title: 'Create Api Key For Master',
    path: 'http://localhost:8082/apiKey/createApiKey',
    access: [Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Delete Api Key For Master',
    path: 'http://localhost:8082/apiKey/deleteApiKey',
    access: [Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.DELETE,
    implemented: true
  },
  {
    title: 'View All Notification For Admin Related API Keys',
    path: 'http://localhost:8082/notification/apikeyrequest',
    access: [Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.GET,
    implemented: true
  }
]
