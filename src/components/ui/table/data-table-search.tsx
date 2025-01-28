'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Options } from 'nuqs';
import { useTransition } from 'react';

interface DataTableSearchProps {
  filterKey: string;
  filterValue: string;
  setFilterValue: (
    value: string | ((old: string) => string | null) | null,
    options?: Options | undefined
  ) => Promise<URLSearchParams>;
  setPage: <Shallow>(
    value: number | ((old: number) => number | null) | null,
    options?: Options | undefined
  ) => Promise<URLSearchParams>;
}

/*************  ✨ Command ⭐  *************/
/**
 * A search input for a DataTable.
 *
 * @remarks
 *
 * This component allows users to search the table by keyword. It uses the
 * `useTransition` hook from `react` to prevent the component from re-rendering
 * while the search is in progress.
 *
 * The component expects the following props:
 *
 * - `filterKey`: A string that describes what the user is searching for.
 * - `filterValue`: The current search query.
 * - `setFilterValue`: A function that sets the search query.
 * - `setPage`: A function that sets the page number.
 *
 * The component returns an `Input` component with a placeholder that includes
 * the `filterKey`. The component is wrapped in a `div` with a class of
 * `"data-table-search"`.
 ***/

export function DataTableSearch({
  filterKey,
  filterValue,
  setFilterValue,
  setPage
}: DataTableSearchProps) {
  const [isLoading, startTransition] = useTransition();

  const handleSearch = (value: string) => {
    setFilterValue(value, { startTransition });
    setPage(1); // Reset page to 1 when search changes
  };

  return (
    <Input
      placeholder={`Search ${filterKey}...`}
      value={filterValue ?? ''}
      onChange={(e) => handleSearch(e.target.value)}
      className={cn('w-full md:max-w-sm', isLoading && 'animate-pulse')}
    />
  );
}
