import React, { ReactNode, memo } from "react";
type IProps<T> = {
  data: T[];
  renderItem: (data: T,index?:T) => ReactNode;
  ListEmptyComponent?: () => ReactNode;
};
function FlatList<T>({ data, renderItem, ListEmptyComponent }: IProps<T>) {
  return data && data?.length > 0 ? (
    data?.map((item, index:any) => (
      <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
    ))
  ) : ListEmptyComponent ? (
    <>{ListEmptyComponent()}</>
  ) : (
    <></>
  );
}

export default memo(FlatList);
