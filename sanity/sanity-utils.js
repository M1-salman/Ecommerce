import { createClient, groq } from "next-sanity";

export async function getItems() {
  const client = createClient({
    projectId: "m7uvgv1i",
    dataset: "production",
    apiVersion: "2023-06-10",
  });

  return client.fetch(
    groq`*[_type == "item"]{
     _id,
     _createdAt,
     title,
     "slug": slug.current,
     subtitle,
     price,
     "image": image.asset->url,
    }`
  );
}

export async function getItem(slug) {
  const client = createClient({
    projectId: "m7uvgv1i",
    dataset: "production",
    apiVersion: "2023-06-10",
  });

  return client.fetch(
    groq`*[_type == "item" && slug.current == $slug][0]{
     _id,
     _createdAt,
     title,
     "slug": slug.current,
     subtitle,
     price,
     "image": image.asset->url,
    }`,
    { slug }
  );
}
