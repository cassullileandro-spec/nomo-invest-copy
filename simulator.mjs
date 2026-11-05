// Tabela comercial No.Mo Invest, novembro/2026, páginas 4–6 e 9–11.
export const MODULES = {
  office: {
    new: { available: [53000, 50000], gross: null, net: null },
    level1: { leased: [48000, 46000], available: [46000, 44000], gross: 1300, net: 1066 },
    level2: { leased: [44000, 42500], available: [42500, 41000], gross: 1200, net: 984 }
  },
  sanitary: {
    new: { available: [84000, 81000], gross: null, net: null },
    level1: { leased: [79000, 77000], available: [77000, 75000], gross: 2300, net: 1886 },
    level2: { leased: [75000, 73500], available: [73500, 72000], gross: 2100, net: 1722 }
  }
};

export function calculateScenario({ type, condition, status, quantity }) {
  if (!Object.hasOwn(MODULES, type) || !Object.hasOwn(MODULES[type], condition) ||
      !['leased', 'available'].includes(status) || !Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
    throw new RangeError('Escolha uma opção válida e uma quantidade de 1 a 5 módulos.');
  }
  const item = MODULES[type][condition];
  if (!item[status]) throw new RangeError('Módulos novos não têm locação vigente na tabela.');
  const unit = item[status][quantity === 1 ? 0 : 1];
  return {
    unit, total: unit * quantity,
    gross: item.gross === null ? null : item.gross * quantity,
    net: item.net === null ? null : item.net * quantity,
    fee: item.gross === null ? null : (item.gross - item.net) * quantity
  };
}

if (typeof document !== 'undefined') {
  const widget = document.querySelector('#simulator-widget');
  const form = document.querySelector('#simulator-form');
  const fields = form.elements;
  const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const show = (id, text) => { document.getElementById(id).textContent = text; };
  const selectedLabel = field => field.selectedOptions[0].textContent;

  function update() {
    const isNew = fields.condition.value === 'new';
    fields.status.querySelector('[value="leased"]').disabled = isNew;
    if (isNew) fields.status.value = 'available';
    const result = calculateScenario({type: fields.type.value, condition: fields.condition.value,
      status: fields.status.value, quantity: Number(fields.quantity.value)});
    show('sim-unit', money.format(result.unit));
    show('sim-total', money.format(result.total));
    show('sim-gross', result.gross === null ? 'Sem estimativa' : money.format(result.gross));
    show('sim-fee', result.fee === null ? 'Sem estimativa' : money.format(result.fee));
    show('sim-net', result.net === null ? 'Sem estimativa' : money.format(result.net));
    show('sim-summary', `${selectedLabel(fields.quantity)} · ${selectedLabel(fields.type)} · ${selectedLabel(fields.condition)}`);
    show('sim-status', isNew
      ? 'Para módulos novos, a tabela não apresenta estimativa de receita. A locação futura precisa ser confirmada com a equipe.'
      : fields.status.value === 'available'
        ? 'Sem locação vigente. O valor mensal é apenas uma referência para uma eventual locação; não representa receita atual.'
        : 'Cenário com locação vigente. O recebimento depende dos pagamentos e das condições do contrato; não é garantido.');
    document.querySelector('#sim-wc').hidden = fields.type.value !== 'office' || !isNew;
    const message = `Olá! Quero receber a apresentação da No.Mo Invest e consultar este cenário: ${selectedLabel(fields.quantity)}, ${selectedLabel(fields.type)}, ${selectedLabel(fields.condition)}, ${selectedLabel(fields.status)}. Valor de aquisição de referência: ${money.format(result.total)}. Gostaria de confirmar disponibilidade e condições.`;
    document.querySelector('#sim-contact').href = `https://wa.me/5537999450604?text=${encodeURIComponent(message)}`;
  }
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('change', update);
  update();
  widget.hidden = false;
}
