import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe ("Testando classe ContaBancaria",() =>{
    let conta:ContaBancaria
    let contaDestino: ContaBancaria
    beforeEach(() => {
    conta = new ContaBancaria()
    contaDestino = new ContaBancaria()
    
});

test("Testando depositar valor válido", () => {
    conta.depositar(100);
    expect(conta.consultarSaldo()).toBe(100);
  });

// test("Testando depositar valor inválido", () => {
//     conta.depositar(-50);
//     expect(conta.consultarSaldo()).toBe(0);
//   });

test("Testando sacar valor válido", () => {
    conta.depositar(100);
    conta.sacar(10)
    expect(conta.consultarSaldo()).toBe(90);
  });

// test("Testando sacar valor inválido", () => {
//     conta.depositar(100)
//     conta.sacar(120)
//     expect(conta.consultarSaldo()).toBe(100);
// });

test("Testando transferência válida", () => {
  conta.depositar(100);
  conta.transferir(10,contaDestino);
  expect(conta.consultarSaldo()).toBe(90);
  expect(contaDestino.consultarSaldo()).toBe(10);
});

// test("Testando transferência inválida", () => {
//   conta.depositar(100)
//   conta.transferir(-10,contaDestino);
//   expect(conta.consultarSaldo()).toBe(100);
// });

test("Consultando o saldo", () => {
  conta.consultarSaldo();
});

test("Exibição de extrato", () => {
  conta.depositar(100);
  conta.sacar(10);
  let extrato = conta.exibirExtrato();
  expect(extrato.length).toBe(2);
})

test("Registro de operações no extrato", () => {
  conta.depositar(200)
  conta.transferir(100,contaDestino);
  let extrato = conta.exibirExtrato();
  expect(extrato[2].descricao).toBe(`Transferência de 100 para a conta ${contaDestino}`);
})

})
