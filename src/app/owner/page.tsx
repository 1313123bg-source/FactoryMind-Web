import Link from 'next/link';

const expenses = [
  { id:'INV-001', title:'FactoryMind Core', detail:'Monthly subscription', amount:'€149.00', status:'Due' },
  { id:'INV-002', title:'PLC Diagnostics Pack', detail:'Additional diagnostic module', amount:'€79.00', status:'Due' },
  { id:'INV-003', title:'Knowledge Base Setup', detail:'Initial configuration', amount:'€240.00', status:'Paid' },
];

export default function OwnerPage() {
  return <main className="site inner-page" id="top">
    <header className="header"><Link className="brand" href="/"><span>⌬</span>FactoryMind</Link><Link className="text-link" href="/">← Back to FactoryMind</Link></header>
    <section className="section inner-hero">
      <div className="eyebrow">FACTORYMIND / OWNER WORKSPACE</div>
      <h1>More control.<br/><em>Smarter decisions.</em></h1>
      <p className="hero-lead">A clear owner workspace for subscriptions, modules, services and invoices — with every cost and status visible in one place.</p>
      <div className="form-panel">
        <div className="panel-header"><span>OWNER BILLING</span><span>FINANCE / 01</span></div>
        <div className="app-status"><strong>Total due</strong><span>€228.00</span></div>
        <div className="expense-list">{expenses.map(expense=><article className="expense-row" key={expense.id}>
          <div><div className="eyebrow">{expense.id}</div><h3>{expense.title}</h3><p>{expense.detail}</p></div>
          <div className="expense-side"><strong>{expense.amount}</strong><span className={expense.status==='Paid'?'expense-paid':'expense-due'}>{expense.status}</span>{expense.status==='Due'?<button className="button" type="button">Pay expense →</button>:<span className="text-link">Receipt →</span>}</div>
        </article>)}</div>
        <p className="form-note">Visual billing workspace. Stripe Checkout and webhook confirmation can be connected to each payment action in the application stage.</p>
      </div>
    </section>
  </main>;
}