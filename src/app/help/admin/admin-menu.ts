import { NbMenuItem } from '@nebular/theme';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Posições',
      group: true,
    },
    {
      title: 'Profissionais',
      icon: 'briefcase-outline',
      link: '/lista/profissionais',
    },
    {
      title: 'Administradores',
      icon: 'person-outline',
      link: '/lista/administradores',
    },
    {
      title: 'Equipe Help',
      icon: 'plus-square-outline',
      link: '/lista/equipe-help',
    },
    {
      title: 'Contratantes',
      icon: 'people-outline',
      link: '/lista/contratantes',
    },
  ];