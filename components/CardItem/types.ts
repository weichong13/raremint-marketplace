export interface cardItemData {
  name: string;
  quantity: number;
  priceInDollar: number;
  priceInEther: number;
  minted: string;
  type: string;
}

export interface cardItemProps {
  showActionButton?: boolean;
  data: cardItemData;
}
