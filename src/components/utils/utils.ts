export async function fetchPublicJson<T>(path: string): Promise<T | null> {

  const url = `${basePath.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

  try {
    const res = await fetch(url)

    // Si no existe (404) o cualquier error HTTP
    if (!res.ok) {
      console.warn(`JSON no encontrado: ${url} (${res.status})`)
      return null
    }

    return await res.json()
  } catch (err) {
    // Error de red, CORS, etc.
    console.warn(`Error de red al cargar JSON: ${url}`, err)
    return null
  }
}  
// @ts-ignore
export const basePath = import.meta.env.BASE_URL
