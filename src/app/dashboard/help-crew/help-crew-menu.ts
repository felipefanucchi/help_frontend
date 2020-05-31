import { NbMenuItem } from '@nebular/theme';

const basePath = '/dashboard/help';

export const HELP_MENU_ITEMS: NbMenuItem[] = [
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
          link: `${basePath}/lista/profissional`
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