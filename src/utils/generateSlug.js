import slugify from "slugify";

export const slugWithId = (title, id) => {
  const slug = `${slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })}-${id}`;

  return slug;
};
