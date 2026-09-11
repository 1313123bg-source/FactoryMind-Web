import Link from 'next/link';

export default function DemoPage() {
  return (
    <main className="site inner-page" id="top">
      <header className="header">
        <Link className="brand" href="/">Factory<span>Mind</span></Link>
        <Link className="text-link" href="/">← Обратно към сайта</Link>
      </header>

      <section className="section inner-hero">
        <div className="eyebrow">FACTORYMIND / DEMO REQUEST</div>
        <h1>Нека разгледаме<br /><em>вашата фабрика.</em></h1>
        <p className="hero-lead">Заявете демонстрация и ще покажем как FactoryMind може да свърже симптоми, сигнали, документация и експертно знание в един проследим диагностичен процес.</p>
        <div className="form-panel">
          <div className="panel-header"><span>DEMO INTAKE</span><span>01 / 03</span></div>
          <form className="demo-form">
            <label>Име и фамилия<input name="name" placeholder="Вашето име" required /></label>
            <label>Работен имейл<input type="email" name="email" placeholder="name@company.com" required /></label>
            <label>Компания<input name="company" placeholder="Име на компанията" /></label>
            <label>Какво искате да подобрите?<textarea name="message" placeholder="Напр. диагностика на PLC, престои, знания на техниците..." rows={4} /></label>
            <button className="button" type="submit">Изпрати запитване <span>↗</span></button>
          </form>
          <p className="form-note">Това е подготвена демонстрационна форма. Свързването с реален имейл/CRM ще бъде добавено на следващ етап.</p>
        </div>
      </section>
    </main>
  );
}
