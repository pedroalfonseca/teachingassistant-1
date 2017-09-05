import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];
<<<<<<< HEAD
  
  gravar(aluno: Aluno): Aluno | null {
=======

  criar(aluno: Aluno): Aluno {
    aluno = aluno.clone();
>>>>>>> b9d0e2f... cadastro de metas, e clonagem de objetos para simular funcionamento do servidor
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf)) {
      this.alunos.push(aluno);
      result = aluno;
    }
    return result;
  }
<<<<<<< HEAD
  cpfNaoCadastrado(cpf: string | undefined): boolean {
=======

  cpfNaoCadastrado(cpf: string): boolean {
>>>>>>> b9d0e2f... cadastro de metas, e clonagem de objetos para simular funcionamento do servidor
     return !this.alunos.find(a => a.cpf == cpf);
  }

  atualizar(aluno:Aluno): void {
    aluno = aluno.clone();
    for (let a of this.alunos) {
        if (a.cpf == aluno.cpf) {
           a.metas = aluno.metas;
        }
    }
  }
}
