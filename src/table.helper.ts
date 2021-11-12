export interface Pagination {
  itemsPerPage: number;
  page: number;
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface SortCriteria<Item> {
  direction: SortDirection,
  byColumn: keyof Item,
}

export type TableQueryCriteria<Item> = Pagination & SortCriteria<Item>;

export type TableQueryParam<Item> =
  Partial<Item> & // refine search to match given attributes
  TableQueryCriteria<Item>;
