// Kök göreli bağlantılara taban yolu (BASE_URL) ekler.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p: string) => (p.startsWith('/') ? base + p : p);
