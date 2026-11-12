import type { ImageMetadata } from 'astro';

const gallery = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.jpg', { eager: true });
const adb = import.meta.glob<{ default: ImageMetadata }>('../assets/adb/*.jpg', { eager: true });
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

const pick = (map: Record<string, { default: ImageMetadata }>, dir: string, file: string) => {
  const hit = map[`../assets/${dir}/${file}`];
  if (!hit) throw new Error(`Görsel bulunamadı: ${dir}/${file}`);
  return hit.default;
};

export const galleryImg = (file: string) => pick(gallery, 'gallery', file);
export const adbImg = (file: string) => pick(adb, 'adb', file);
export const photo = (file: string) => pick(photos, 'photos', file);
