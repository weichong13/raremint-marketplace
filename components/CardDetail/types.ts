import { BreadcrumbItemType } from "../Breadcrumb/types";
import { cardItemData } from "../CardItem/types";

export interface CardDetailPropsType {
  data: cardItemData;
  breadcrumb?: BreadcrumbItemType[];
  isOwned?: boolean;
}
