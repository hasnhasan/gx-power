import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
} from 'nuqs/server';

export const searchParams: Record<string, any> = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
