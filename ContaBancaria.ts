export default class ContaBancaria {
    private numeroConta = 1000;
    private agencia = 100;
    private saldo = 0;
    private extrato: { data: string, descricao: string }[] = [];

public depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
      this.registrarOperacao(`Depósito no valor ${valor}`)
    }
}

public consultarSaldo() {
    return this.saldo;
}

public sacar(valor:number){
    if (this.saldo >= valor){
        this.saldo -= valor
        this.registrarOperacao(`Saque no valor de ${valor}`)
    } else {
      throw new Error(`Saldo insuficiente ou valor inválido`)
    }
}

public transferir(valor:number, contaDestino:ContaBancaria){
    if (this.saldo >= valor && valor > 0){
      this.sacar(valor);
      contaDestino.depositar(valor);
      this.registrarOperacao(`Transferência de ${valor} para a conta ${contaDestino}`)
    } else {
      throw new Error('Saldo insuficiente ou valor inválido');
    }
}

public exibirExtrato(){
  return this.extrato
}

public registrarOperacao(descricao:string){
   let data = new Date().toLocaleString();
   this.extrato.push({data, descricao});
}


}
