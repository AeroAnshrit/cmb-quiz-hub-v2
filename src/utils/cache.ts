// A simple in-memory cache
const cache = new Map<string, any>();

export const fetchWithCache = async (url: string) => {
  const fullUrl = `${(import.meta as any).env.BASE_URL}${url.startsWith('/') ? url.substring(1) : url}`;
  if (cache.has(fullUrl)) {
    return cache.get(fullUrl);
  }

  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} for URL: ${fullUrl}`);
  }
  const data = await response.json();
  cache.set(fullUrl, data);
  return data;
};