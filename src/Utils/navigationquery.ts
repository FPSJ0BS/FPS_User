import { AppRoute } from "@Navigator/AppRoute";

export const createQueryBySlug = (item: any, Category: any) => {
  const categoryItem =
    Category?.data &&
    Category?.data.filter((_item) => _item.ID === item?.catID);
  
    const query = `${AppRoute.Find_Jobs}/${categoryItem?.[0]?.category
      ?.trim()
      .replaceAll(" ", "-")
      .toLowerCase()}/${item?.slug}/${item?.state
      ?.trim()
      .replaceAll(" ", "-")
      .toLowerCase()}/${item?.city
      ?.trim()
      .replaceAll(" ", "-")
      .toLowerCase()}/${item?.salary_unit.trim()
      ?.replaceAll(" ", "-")
      ?.trim()
      .replaceAll("/", "-")
      .toLowerCase()}/${item?.min_experience?.trim()}-years`;
  return query;
};
