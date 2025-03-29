import path from "path";
import fs from "fs/promises";

export async function GET(resolve) {
  const filepath = path.join(process.cwd(), "blogdata");
  try {
    const files = await fs.readdir(filepath);
    const blogs = [];
    for (const file of files) {
      const fileContent = await fs.readFile(path.join(filepath, file), "utf-8");
      blogs.push(JSON.parse(fileContent));
    }
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Promise(JSON.stringify({ message: "No data found" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
