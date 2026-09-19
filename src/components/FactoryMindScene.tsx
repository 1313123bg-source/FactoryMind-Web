'use client';

export default function FactoryMindScene({ menuOpen = false }: { menuOpen?: boolean }) {
  return (
    <div className="fm-scene-shell fm3d-scene fm-reference-stage" aria-hidden="true">
      <picture className="fm-reference-picture">
        <source media="(max-width: 650px)" srcSet={menuOpen ? '/reference/menu.webp' : '/reference/mobile.webp'} />
        <source media="(max-width: 1000px)" srcSet="/reference/tablet.webp" />
        <img className="fm-reference-image" src="/reference/desktop.webp" alt="" draggable={false} />
      </picture>
    </div>
  );
}
