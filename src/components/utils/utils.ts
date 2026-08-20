export async function fetchPublicJson<T>(path: string): Promise<T | null> {
  const url = `${basePath.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

  try {
    const res = await fetch(url);

    // Si no existe (404) o cualquier error HTTP
    if (!res.ok) {
      console.warn(`JSON no encontrado: ${url} (${res.status})`);
      return null;
    }

    return await res.json();
  } catch (err) {
    // Error de red, CORS, etc.
    console.warn(`Error de red al cargar JSON: ${url}`, err);
    return null;
  }
}
// @ts-ignore
export const basePath = import.meta.env.BASE_URL;
export const getCardClass = (
  items: number,
  index: number,
  columns: number,
): string => {
  const rowStart = Math.floor(index / columns) * columns;
  const rowSize = Math.min(items - rowStart, columns);

  const colSpan = Math.floor(6 / rowSize);
  const colSpanClasses: Record<number, string> = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
  };

  return `col-span-6 ${colSpanClasses[colSpan]}`;
};
