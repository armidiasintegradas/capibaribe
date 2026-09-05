export interface ProjectInput {
  captacao?: number | string;
  fee_percent?: number | string;
  parceiros?: number | string;
  despesas_captacao?: number | string;
}

export interface ProjectFinancials {
  subTotalLiquido: number;
  encargosNf: number;
  subTotal: number;
  rsLiquido: number;
  despesasCorrentes: number;
  reservaLegal: number;
  tesouraria: number;
  caridade: number;
  lucro: number;
  leo: number;
  michel: number;
  juliana: number;
}

export function calculateProjectFinancials(p: ProjectInput): ProjectFinancials {
  const t = Number(p.captacao) || 0;
  const n = Number(p.fee_percent) || 0;
  const r = Number(p.parceiros) || 0;
  const i = Number(p.despesas_captacao) || 0;

  const a = t * n;
  const o = a * 0.05;
  const s = a - o - r;
  const c = s - i;
  const u = c * 0.1001;
  const f = c * 0.08;
  const h = c * 0.1;
  const m = c * 0.02;
  const y = c - u - f - h - m;
  const S = y / 3;

  return {
    subTotalLiquido: a,
    encargosNf: o,
    subTotal: s,
    rsLiquido: c,
    despesasCorrentes: u,
    reservaLegal: f,
    tesouraria: h,
    caridade: m,
    lucro: y,
    leo: S,
    michel: S,
    juliana: S
  };
}

export interface RecurringInput {
  rs_bruto?: number | string;
  parceiros?: number | string;
}

export interface RecurringFinancials {
  encargosNf: number;
  subTotal: number;
  despesasCorrentes: number;
  reserva: number;
  caridade: number;
  lucro: number;
  leo: number;
  michel: number;
  ju: number;
}

export function calculateRecurringFinancials(r: RecurringInput): RecurringFinancials {
  const t = Number(r.rs_bruto) || 0;
  const n = Number(r.parceiros) || 0;

  const enc = t * 0.05;
  const sub = t - enc - n;
  const desp = sub * 0.1001;
  const res = sub * 0.1;
  const car = sub * 0.1;
  const luc = sub - desp - res - car;
  const split = luc / 3;

  return {
    encargosNf: enc,
    subTotal: sub,
    despesasCorrentes: desp,
    reserva: res,
    caridade: car,
    lucro: luc,
    leo: split,
    michel: split,
    ju: split
  };
}

export function formatCurrency(value: number | string): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  }).format(Number(value) || 0);
}
