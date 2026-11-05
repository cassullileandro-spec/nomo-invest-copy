import assert from 'node:assert/strict';
import { test } from 'node:test';
import { calculateScenario } from './simulator.mjs';

const scenario = (type, condition, status, quantity) => calculateScenario({ type, condition, status, quantity });

test('preços unitários e totais nas dez combinações da tabela disponível', () => {
  const rows = [
    ['office', 'new', 'available', 53000, 50000, null, null],
    ['office', 'level1', 'leased', 48000, 46000, 1300, 1066],
    ['office', 'level1', 'available', 46000, 44000, 1300, 1066],
    ['office', 'level2', 'leased', 44000, 42500, 1200, 984],
    ['office', 'level2', 'available', 42500, 41000, 1200, 984],
    ['sanitary', 'new', 'available', 84000, 81000, null, null],
    ['sanitary', 'level1', 'leased', 79000, 77000, 2300, 1886],
    ['sanitary', 'level1', 'available', 77000, 75000, 2300, 1886],
    ['sanitary', 'level2', 'leased', 75000, 73500, 2100, 1722],
    ['sanitary', 'level2', 'available', 73500, 72000, 2100, 1722]
  ];
  for (const [type, condition, status, single, multiple, gross, net] of rows) {
    for (const quantity of [1, 2, 3, 4, 5]) {
      const result = scenario(type, condition, status, quantity);
      const unit = quantity === 1 ? single : multiple;
      assert.deepEqual(result, {
        unit, total: unit * quantity,
        gross: gross === null ? null : gross * quantity,
        net: net === null ? null : net * quantity,
        fee: gross === null ? null : (gross - net) * quantity
      });
      if (gross !== null) assert.equal(result.net + result.fee, result.gross);
    }
  }
});

test('cenário divergente usa VRML de R$ 1.886, sem converter o percentual de 2,73%', () => {
  assert.deepEqual(scenario('sanitary', 'level1', 'available', 2), {
    unit: 75000, total: 150000, gross: 4600, net: 3772, fee: 828
  });
});

test('não inventa locação ou projeção para módulos novos', () => {
  assert.equal(scenario('office', 'new', 'available', 1).net, null);
  assert.throws(() => scenario('office', 'new', 'leased', 1), RangeError);
});

test('rejeita nível indisponível, faixas não fornecidas e entradas inválidas', () => {
  for (const quantity of [0, 6, 10, -1, 1.5, NaN, Infinity, '2', null]) {
    assert.throws(() => scenario('office', 'level1', 'leased', quantity), RangeError);
  }
  for (const args of [
    ['office', 'level3', 'available', 1], ['other', 'new', 'available', 1],
    ['toString', 'new', 'available', 1], ['office', 'toString', 'available', 1],
    ['office', 'level1', 'gross', 1]
  ]) assert.throws(() => scenario(...args), RangeError);
});
