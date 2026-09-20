'use client';

export default function FactoryMindScene({ menuOpen=false }: { menuOpen?: boolean }) {
  return (
    <div className="fm-reference-scene" aria-hidden="true">
      <picture>
        <source media="(max-width: 650px)" srcSet={menuOpen ? '/reference/menu.webp' : '/reference/mobile.webp'} />
        <source media="(max-width: 1000px)" srcSet="/reference/tablet.webp" />
        <img src="/reference/desktop.webp" alt="" className="fm-reference-image" />
      </picture>
    </div>
  );
}
