export async function fetchPublicJson<T>(path: string): Promise<T | null> {
  // @ts-ignore
  const base = import.meta.env.BASE_URL

  const url = `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

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