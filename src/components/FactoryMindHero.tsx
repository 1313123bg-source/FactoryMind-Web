export default function FactoryMindHero() {
  return (
    <div className="fm-hero-visual" aria-hidden="true">
      <picture>
        <source media="(max-width: 650px)" srcSet="/reference/mobile.avif" />
        <source media="(max-width: 1000px)" srcSet="/reference/tablet.avif" />
        <img src="/reference/desktop.avif" alt="" />
      </picture>
      <div className="fm-hero-vignette" />
      <div className="fm-hero-grid" />
    </div>
  );
}