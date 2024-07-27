import { AppRoute } from "@Navigator/AppRoute";

export const createQueryBySlug = (item: any, Category: any) => {
  console.log(item);
  const categoryItem =
    Category?.data &&
    Category?.data.filter((_item) => _item.ID.toString() === item?.catID.toString());
  
    const query = `${AppRoute.Find_Jobs}/${categoryItem?.[0]?.category.toString()
      ?.trim()
      .replaceAll(" ", "-")
      .toLowerCase()}/${item?.slug.toString()}/${item?.state.toString()
      ?.trim()
      .replaceAll(" ", "-")
      .toLowerCase()}/${item?.city.toString()
      ?.trim()
      .replaceAll(" ", "-")
      .toLowerCase()}/${item?.salary_unit.toString().trim()
      ?.replaceAll(" ", "-")
      ?.trim()
      .replaceAll("/", "-")
      .toLowerCase()}/${item?.min_experience?.toString().trim()}-years`;
  return query;
};
