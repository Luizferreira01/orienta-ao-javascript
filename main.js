class Veiculo {
    constructor(volkswagen, gol) {
      this.marca = volkswagen;
      this.modelo = gol;
    }
  
    acelerar() {
      console.log(`${this.modelo} está acelerando.`);
    }
  
    frear() {
      console.log(`${this.modelo} está freando.`);
    }
  

    ligar() {
      throw new Error(' ligar ');
    }
  }
  

  class Carro extends Veiculo {
    constructor(volkswagen, gol, vermelha) {
      super(volkswagen, gol);
      this.cor = vermelha;
    }
  
    ligar() {
      console.log(`${this.modelo} ligou o motor.`);
    }
  }
  

  class Moto extends Veiculo {
    constructor(honda, start, 160) {
      super(honda, start);
      this.cilindradas = 160;
    }
  
    ligar() {
      console.log(`${this.modelo} ligou o motor.`);
    }
  }
  

  let carro1 = new Carro('Toyota', 'Corolla', 'Preto');
  let moto1 = new Moto('Honda', 'CBR', 600);
  let carro2 = new Carro('Ford', 'Fiesta', 'Prata');
  
  carro1.acelerar();
  moto1.frear();
  carro2.ligar();