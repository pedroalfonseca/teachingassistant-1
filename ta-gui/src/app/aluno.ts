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
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.github = this.github;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): { [key: string]: string } {
    var metas: { [key: string]: string } = {};
    for (let key in this.metas) {
      metas[key] = this.metas[key];
    }
    return metas;
  }
}
