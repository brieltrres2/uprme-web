import { useEffect, useState } from 'react';

/*
Usage:
<PreloadPublicImages onComplete={() => console.log('done')} />
*/
export default function PreloadPublicImages({ onComplete } = {}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchAndPreload() {
      try {
        const res = await fetch('/image-manifest.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error('manifest not found');
        const images = await res.json();
        await Promise.all(images.map(src => new Promise(resolve => {
          const img = new Image();
          img.onload = img.onerror = () => resolve();
          img.src = src;
        })));
        if (!cancelled) {
          setLoaded(true);
          if (typeof onComplete === 'function') onComplete();
        }
      } catch (e) {
        // manifest missing or fetch error — treat as done
        if (!cancelled) {
          setLoaded(true);
          if (typeof onComplete === 'function') onComplete();
        }
      }
    }
    fetchAndPreload();
    return () => { cancelled = true; };
  }, [onComplete]);

  return null; // invisible component; include near app root
}

