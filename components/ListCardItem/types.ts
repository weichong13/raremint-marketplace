import { cardItemData } from '../CardItem/types';

export interface ListCardItemProps {
  title?: string;
  iconImage?: any;
  showMoreLink?: string;
  showFilter?: boolean;
  showPagination?: boolean;
  data?: cardItemData[];
  totalItem?: number;
  showLoading?: boolean;
  isOwned?: boolean;
}
