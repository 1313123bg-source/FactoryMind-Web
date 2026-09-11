import Link from 'next/link';

const expenses = [
  { id: 'INV-001', title: 'FactoryMind Core', detail: 'Месечен абонамент', amount: '€149.00', status: 'Дължимо' },
  { id: 'INV-002', title: 'PLC Diagnostics Pack', detail: 'Допълнителен диагностичен модул', amount: '€79.00', status: 'Дължимо' },
  { id: 'INV-003', title: 'Knowledge Base Setup', detail: 'Първоначална конфигурация', amount: '€240.00', status: 'Платено' },
];

export default function OwnerPage() {
  return (
    <main className="site inner-page" id="top">
      <header className="header">
        <Link className="brand" href="/">Factory<span>Mind</span></Link>
        <Link className="text-link" href="/">← Към сайта</Link>
      </header>

      <section className="section inner-hero">
        <div className="eyebrow">FACTORYMIND / OWNER WORKSPACE</div>
        <h1>Контрол над<br /><em>всеки разход.</em></h1>
        <p className="hero-lead">Собственикът вижда абонаменти, допълнителни модули, услуги и отделни фактури. Всеки разход има собствен статус и собствено плащане.</p>

        <div className="form-panel">
          <div className="panel-header"><span>OWNER BILLING</span><span>FINANCE / 01</span></div>
          <div className="app-status"><strong>Общо дължимо</strong><span>€228.00</span></div>
          <div className="expense-list">
            {expenses.map((expense) => (
              <article className="expense-row" key={expense.id}>
                <div>
                  <div className="eyebrow">{expense.id}</div>
                  <h3>{expense.title}</h3>
                  <p>{expense.detail}</p>
                </div>
                <div className="expense-side">
                  <strong>{expense.amount}</strong>
                  <span className={expense.status === 'Платено' ? 'expense-paid' : 'expense-due'}>{expense.status}</span>
                  {expense.status === 'Дължимо' ? <button className="button" type="button">Плати разхода ↗</button> : <span className="text-link">Разписка →</span>}
                </div>
              </article>
            ))}
          </div>
          <p className="form-note">Това е визуална версия на собственическия billing workspace. Следващият етап е свързване на всеки бутон с отделен Stripe Checkout session и webhook за потвърждение на плащането.</p>
        </div>
      </section>
    </main>
  );
}
