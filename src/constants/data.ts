import { t } from '@/lib/utils';
import { NavItem } from 'types';

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: t('dashboard'),
    url: '/panel/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: t('salesOperations'),
    url: '#',
    icon: 'sales',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [
      {
        title: t('sales'),
        url: '/panel/sales',
        shortcut: ['p', 'p'],
        isActive: false,
        items: [] // No child items
      },
      {
        title: t('purchase'),
        url: '/panel/sales',
        shortcut: ['p', 'p'],
        isActive: false,
        items: [] // No child items
      },
      {
        title: t('goodReturn'),
        url: '/panel/sales',
        shortcut: ['p', 'p'],
        isActive: false,
        items: [] // No child items
      },
      {
        title: t('defectiveReturn'),
        url: '/panel/sales',
        shortcut: ['p', 'p'],
        isActive: false,
        items: [] // No child items
      },
    ]
  },
  {
    title: t('payments'),
    url: '#',
    icon: 'payments',
    isActive: false,
    items: [
      {
        title: t('paymentsTitle'),
        url: '/panel/payments',
        shortcut: ['m', 'm']
      },
      {
        title: t('collections'),
        url: '/panel/collections',
        shortcut: ['l', 'l'],
        icon: 'login'
      }
    ]
  },
  {
    title: t('customersManagement'),
    url: '#',
    icon: 'customers',
    isActive: false,
    items: [
      {
        title: t('customers'),
        url: '#',
        isActive: false,
        items: []
      },
      {
        title: t('customerGroups'),
        url: '#',
        isActive: false,
        items: []
      },
    ]
  },
  {
    title: t('productManagement'),
    url: '#',
    icon: 'products',
    isActive: false,
    items: [
      {
        title: t('products'),
        url: '/panel/products',
        isActive: false,
        items: []
      },
      {
        title: t('productGroups'),
        url: '#',
        isActive: false,
        items: []
      },
      {
        title: t('brands'),
        url: '#',
        isActive: false,
        items: []
      },
      {
        title: t('prices'),
        url: '#',
        isActive: false,
        items: []
      },
    ]
  },
  {
    title: t('warehouseOperations'),
    url: '#',
    icon: 'warehouse',
    isActive: false,
    items: [
      {
        title: t('warehouses'),
        url: '#',
        isActive: false,
        items: []
      },
      {
        title: t('stocks'),
        url: '#',
        isActive: false,
        items: []
      },
    ]
  },
  {
    title: t('userManagement'),
    url: '#',
    icon: 'users',
    isActive: false,
    items: [
      {
        title: t('users'),
        url: '#',
        isActive: false,
        items: []
      },
      {
        title: t('userGroups'),
        url: '#',
        isActive: false,
        items: []
      },
      {
        title: t('rolesPermissions'),
        url: '#',
        isActive: false,
        items: []
      },
    ]
  },
  {
    title: t('reports'),
    url: '#',
    icon: 'reports',
    isActive: false,
    items: []
  },
];