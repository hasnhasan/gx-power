import { fakeProducts } from '@/constants/mock-api';
import { columns } from './product-tables/columns';
import { searchParamsCache } from '@/lib/searchparams';
import { DataTable } from '@/components/ui/table/data-table';

type ProductListingPage = {
  searchParams: Record<string, any>;
};

export default async function ProductListingPage({ searchParams }: ProductListingPage) {

  const data = await fakeProducts.getProducts({ ...searchParamsCache.all(), ...searchParams });

  return (
    <DataTable columns={columns} data={data.products} totalItems={data.total_products} />
  );
}
