export default function getIdFromSlug(slug) {
  return slug.split("-").pop();
}
