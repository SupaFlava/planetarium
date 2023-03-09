import fsPromises from "fs/promises";
import path from "path";

export async function loadPlanets() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const filePath = path.join(process.cwd(), "data.json");

  const res = await fsPromises.readFile(filePath);
  const posts = await JSON.parse(res.toString());

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

// export default async function getPlanets() {
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData: [] = await JSON.parse(jsonData.toString());
//   console.log(objectData);

//   return objectData;
// }
