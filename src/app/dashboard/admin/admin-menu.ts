import { NbMenuItem } from '@nebular/theme';

const basePath = '/dashboard/admin';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Usuários',
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
          link: `${basePath}/lista/profissional`
        }
      ]
    },
    {
      title: 'Administradores',
      icon: 'person-outline',
      children: [
        {
          title: 'Adicionar novo',
          link: `${basePath}/adicionar/administrador`
        },
        {
          title: 'Ver todos',
          link: `${basePath}/lista/administrador`
        }
      ]
    },
    {
      title: 'Equipe Help',
      icon: 'plus-square-outline',
      children: [
        {
          title: 'Adicionar novo',
          link: `${basePath}/adicionar/equipe-help`
        },
        {
          title: 'Ver todos',
          link: `${basePath}/lista/equipe-help`
        }
      ]
    },
    {
      title: 'Contratantes',
      icon: 'people-outline',
      children: [
        {
          title: 'Adicionar novo',
          link: `${basePath}/adicionar/contratante`
        },
        {
          title: 'Ver todos',
          link: `${basePath}/lista/contratante`
        }
      ]
    },
    {
      title: 'Operação',
      group: true,
    },
    {
      title: 'Pacientes',
      icon: 'people-outline',
      children: [
        {
          title: 'Adicionar novo',
          link: `${basePath}/adicionar/paciente`
        },
        {
          title: 'Ver todos',
          link: `${basePath}/lista/paciente`
        }
      ]
    },
    {
      title: 'Tratamentos',
      icon: 'activity-outline',
      children: [
        {
          title: 'Adicionar novo',
          link: `${basePath}/adicionar/tratamento`
        },
        {
          title: 'Ver todos',
          link: `${basePath}/lista/tratamento`
        }
      ]
    },
  ];