import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(request, response) {
  try {
    if (request.method === "GET") {
      const count = (await redis.get("global_count")) || 0;
      return response.status(200).json({ count });
    }

    if (request.method === "POST") {
      const newCount = await redis.incr("global_count");
      return response.status(200).json({ count: newCount });
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
