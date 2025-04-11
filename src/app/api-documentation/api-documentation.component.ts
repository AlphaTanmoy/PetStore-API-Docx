import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_DATA, ApiEndpoint } from './api-endpoints';
import { HttpMethod, Microservice } from './api-enums';
import { Role } from './api-enums';


@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ApiDocumentationComponent implements OnInit {
  readonly METHODS = Object.values(HttpMethod);
  readonly MICROSERVICES = Object.values(Microservice);
  readonly ROLE_DISPLAY_NAMES: { [key in Role]: string } = {
    [Role.MASTER]: 'MASTER',
    [Role.CUSTOMER]: 'CUSTOMER',
    [Role.DOCTOR]: 'DOCTOR',
    [Role.CUSTOMER_CARE]: 'CUSTOMER CARE',
    [Role.RAIDER]: 'RAIDER',
    [Role.ADMIN]: 'ADMIN',
    [Role.GUEST]: 'GUEST',
    [Role.SELLER]: 'SELLER'
  };
  apiData = API_DATA;
  sectionExpanded: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    this.MICROSERVICES.forEach(service => this.sectionExpanded[service] = false);
  }


  toggleSection(section: string) {
    this.sectionExpanded[section] = !this.sectionExpanded[section];
  }


  toggleCard(api: ApiEndpoint) {
    api.expanded = !api.expanded;
  }

  getRoleDisplayName(role: string): string {
    return this.ROLE_DISPLAY_NAMES[role as Role] ?? role;
  }

  filterCards(service: string, event: Event) {
    const selectedMethod = (event.target as HTMLSelectElement).value;
    const section = document.getElementById(service + '-content');
    if (!section) return;

    const cards = section.querySelectorAll(`[data-method]`);

    cards.forEach(card => {
      const method = card.getAttribute('data-method');
      const isImplemented = card.classList.contains('implemented');
      const shouldShow =
        selectedMethod === 'ALL' ||
        method === selectedMethod ||
        (selectedMethod === 'NOT_IMPLEMENTED' && !isImplemented);

      (card as HTMLElement).style.display = shouldShow ? '' : 'none';
    });
  }


  gradientMap: { [key: string]: string } = {
    'Admin': 'linear-gradient(0deg,rgb(255, 255, 255) 0%,rgba(255, 238, 0, 0.4) 100%)',
    'Authentication': 'linear-gradient(0deg,rgb(255, 255, 255) 0%,rgba(102, 255, 0, 0.4) 100%)',
    'Core': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgba(0, 255, 191, 0.4) 100%)',
    'Doctor': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgba(0, 247, 255, 0.4) 100%)',
    'Kyc': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgb(0, 110, 255, 0.4) 100%)',
    'Management': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgb(98, 0, 255, 0.4) 100%)',
    'S3': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgb(0, 17, 255, 0.4) 100%)',
    'Payment': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgb(174, 0, 255, 0.4) 100%)',
    'Seller': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgb(255, 0, 179, 0.4) 100%)',
    'User': 'linear-gradient(0deg, rgb(255, 255, 255) 0%,rgb(255, 0, 0, 0.4) 100%)',
  };

  getImplementationStats(service: Microservice): { total: number, implemented: number, notImplemented: number } {
    const apis = this.apiData[service] || [];
    const implemented = apis.filter(api => api.implemented).length;
    const total = apis.length;
    const notImplemented = total - implemented;
    return { total, implemented, notImplemented };
  }

}

