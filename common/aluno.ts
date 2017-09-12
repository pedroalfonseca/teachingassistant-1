export class Aluno {
  nome: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  github: string | undefined;
  metas: { [key: string]: string } = {};

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.github = "";
    this.metas = {};
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.github = from.github;
    this.copyMetasFrom(from.metas);
  }

  copyMetasFrom(from: any): void {
    this.metas = {};
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }
}