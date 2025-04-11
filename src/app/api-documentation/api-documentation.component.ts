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

  ngOnInit(): void { }

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
      if (selectedMethod === 'ALL' || method === selectedMethod) {
        (card as HTMLElement).style.display = '';
      } else {
        (card as HTMLElement).style.display = 'none';
      }
    });
  }

}
