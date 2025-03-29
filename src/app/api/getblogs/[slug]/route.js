import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request,{params}) {
    const {slug}=params;
    try {
        const filePath = path.join(process.cwd(), "blogdata", `${slug}.json`);
        const data = await fs.readFile(filePath, 'utf-8');
        
        return new Response(data, { status: 200, headers: { "Content-Type": "application/json" } });
    }
     catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
