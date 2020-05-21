import { NbMenuItem } from '@nebular/theme';

const basePath = '/dashboard/admin';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Posições',
      group: true,
    },
    {
      title: 'Profissionais',
      icon: 'briefcase-outline',
      children: [
        {
          title: 'Adicionar novo',
          link: `${basePath}/adicionar/profissional`
        },
        {
          title: 'Ver todos',
          link: `${basePath}/lista/profissional'`
        }
      ]
    },
    {
      title: 'Administradores',
      icon: 'person-outline',
      link: `${basePath}/lista/admnistrador'`
    },
    {
      title: 'Equipe Help',
      icon: 'plus-square-outline',
      link: `${basePath}/lista/equipe-help'`
    },
    {
      title: 'Contratantes',
      icon: 'people-outline',
      link: `${basePath}/lista/contratante'`
    },
  ];