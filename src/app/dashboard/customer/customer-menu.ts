import { NbMenuItem } from '@nebular/theme';

const basePath = '/dashboard/contratante';

export const CUSTOMER_MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Tratamentos',
      icon: 'activity-outline',
      children: [
        {
          title: 'Solicitar novo',
          link: `${basePath}/adicionar/servico`
        }
      ]
    },
  ];