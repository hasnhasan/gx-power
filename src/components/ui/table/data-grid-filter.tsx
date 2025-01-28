'use client';

import { parseAsString, useQueryState } from 'nuqs';
import * as _ from 'lodash';
import { ColumnDef } from "@tanstack/react-table";
import { searchParams } from '@/lib/searchparams';
import { useCallback, useMemo } from 'react';
import { DataTableResetFilter } from './data-table-reset-filter';

interface DataGridProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
}

export function DataGridFilter<TData, TValue>({ columns }: DataGridProps<TData, TValue>) {

  const columnsFilters = useMemo(() => columns.filter((column: any) => column.filter), [columns]);
  const [page, setPage] = useQueryState('page', searchParams.page.withDefault(1));

  const queryStates = columnsFilters.map((column: any) => {
    const { accessorKey } = column;
    searchParams[accessorKey] = parseAsString;

    const [filterValue, setFilterValue] = useQueryState(
      accessorKey,
      searchParams[accessorKey]
        .withOptions({ shallow: false, throttleMs: 1000 })
        .withDefault('')
    );
    return { filterKey: accessorKey, filterValue, setFilterValue };
  });

  // Reset filters callback
  const resetFilters = useCallback(() => {
    queryStates.forEach(({ setFilterValue }) => setFilterValue(null));
    setPage(1)
  }, [queryStates]);

  // Determine if any filter is active
  const isAnyFilterActive = useMemo(() => {
    return queryStates.some(({ filterValue }) => !!filterValue);
  }, [queryStates]);


  return (
    <>
      <div className='flex flex-wrap items-center gap-4'>
        {columnsFilters.map((column: any, index) => {
          const { filterValue, setFilterValue } = queryStates[index];
          const FilterComponent = column.filter?.Component;

          return FilterComponent ? (
            <FilterComponent
              key={column.accessorKey || index}
              filterKey={column.accessorKey}
              title={column.header}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              setPage={setPage}
              {...column.filter}
            />
          ) : null;
        })}
        <DataTableResetFilter isFilterActive={isAnyFilterActive} onReset={resetFilters} />
      </div>
    </>
  );
}
