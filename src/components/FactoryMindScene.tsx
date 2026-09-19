'use client';

export default function FactoryMindScene() {
  return (
    <div className="fm-scene-shell fm3d-scene fm-reference-stage" aria-hidden="true">
      <picture className="fm-reference-picture">
        <source media="(max-width: 650px)" srcSet="/reference/mobile.webp" />
        <source media="(max-width: 1000px)" srcSet="/reference/tablet.webp" />
        <img
          className="fm-reference-image"
          src="/reference/desktop.webp"
          alt=""
          draggable={false}
        />
      </picture>
    </div>
  );
}
