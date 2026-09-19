'use client';

export default function FactoryMindScene({ menuOpen = false }: { menuOpen?: boolean }) {
  return (
    <div className="fm-scene-shell fm3d-scene fm-reference-stage" aria-hidden="true">
      <picture className="fm-reference-picture">
        <source media="(max-width: 650px)" srcSet={menuOpen ? '/reference/menu.avif' : '/reference/mobile.avif'} />
        <source media="(max-width: 1000px)" srcSet="/reference/tablet.avif" />
        <img className="fm-reference-image" src="/reference/desktop.avif" alt="" draggable={false} />
      </picture>
    </div>
  );
}
