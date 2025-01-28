'use client';
import { Product } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box';
import { DataTableSearch } from '@/components/ui/table/data-table-search';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'photo_url',
    header: 'Image',
    cell: ({ row }) => {
      return (
        <div className='relative aspect-square'>
          <Image
            src={row.getValue('photo_url')}
            alt={row.getValue('name')}
            fill
            className='rounded-lg'
          />
        </div>
      );
    }
  },
  {
    accessorKey: 'name',
    header: 'Name',
    filter:{
      Component: DataTableSearch,
    }
  },
  {
    accessorKey: 'category',
    header: 'Category',
    filter: {
      Component: DataTableFilterBox,
      options: [
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Furniture', label: 'Furniture' },
        { value: 'Clothing', label: 'Clothing' },
        { value: 'Toys', label: 'Toys' },
        { value: 'Groceries', label: 'Groceries' },
        { value: 'Books', label: 'Books' },
        { value: 'Jewelry', label: 'Jewelry' },
        { value: 'Beauty Products', label: 'Beauty Products' }
      ]
    }
  },
  {
    accessorKey: 'price',
    header: 'Price'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
