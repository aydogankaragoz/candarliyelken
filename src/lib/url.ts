// GitHub Pages alt yolda (/candarliyelken/) yayınlandığı için kök göreli bağlantılara taban yolu ekler.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p: string) => (p.startsWith('/') ? base + p : p);
