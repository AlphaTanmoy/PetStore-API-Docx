import { ApiEndpoint } from '../api-endpoints';
import { HttpMethod, Role } from '../api-enums';

export const AdminMicroserviceEndPoints: ApiEndpoint[] = [
  {
    title: 'Approve Api Key Request',
    path: 'http://localhost:8082/apiKey/approveApiKey',
    access: [Role.MASTER, Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.PUT,
    implemented: false
  },
  {
    title: 'Reject Api Key Request',
    path: 'http://localhost:8082/apiKey/rejectApiKey',
    access: [Role.MASTER, Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.PUT,
    implemented: false
  },
  {
    title: 'Create Api Key For Admin',
    path: 'http://localhost:8082/apiKey/createApiKey',
    access: [Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Delete Api Key For Admin',
    path: 'http://localhost:8082/apiKey/deleteApiKey',
    access: [Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.DELETE,
    implemented: true
  },
  {
    title: 'Add Address For Admin',
    path: 'http://localhost:8082/addAddress',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Add Address For Admin',
    path: 'http://localhost:8082/addAddress',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.PUT,
    implemented: true
  },
  {
    title: 'Delete Address For Admin',
    path: 'http://localhost:8082/deleteAddress/{addressId}',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.PUT,
    implemented: true
  },
  {
    title: 'Get All Admin',
    path: 'http://localhost:8082/getAll',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.GET,
    implemented: true
  },
  {
    title: 'Get All Admin Logs',
    path: 'http://localhost:8082/adminLogs/getAll',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.DELETE,
    implemented: false
  },
  {
    title: 'Delete Customized Admin Logs',
    path: 'http://localhost:8082/adminLogs/deleteInRange',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.DELETE,
    implemented: false
  },
  {
    title: 'Sent Otp Admin Logs',
    path: 'http://localhost:8082/sent/otp',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Verify Two Steps',
    path: 'http://localhost:8082/twoStepVerification/{otp}',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Change Password',
    path: 'http://localhost:8082/changePassword/{newPassword}',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Forgot Password',
    path: 'http://localhost:8082/forgotPassword',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: false
  },
  {
    title: 'Admin Sign up',
    path: 'http://localhost:8082/signUp',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Admin Sign In',
    path: 'http://localhost:8082/signIn',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Admin Get Profile',
    path: 'http://localhost:8082/getProfile',
    access: [Role.ADMIN,Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Admin Logout',
    path: 'http://localhost:8082/logout',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Admin Validate Email',
    path: 'http://localhost:8082/validateEmail/{email}',
    access: [Role.ADMIN],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.GET,
    implemented: true
  },
  {
    title: 'Add To BlackList',
    path: 'http://localhost:8082/addToBlackList',
    access: [Role.ADMIN, Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  },
  {
    title: 'Remove From BlackList',
    path: 'http://localhost:8082/removeFromBlackList',
    access: [Role.ADMIN, Role.MASTER],
    request: '{}',
    response: '{}',
    curl: '',
    method: HttpMethod.POST,
    implemented: true
  }
];
