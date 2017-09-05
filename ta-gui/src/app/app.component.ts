import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private alunoService: AlunoService) {}

<<<<<<< HEAD
   aluno: Aluno = {nome: "", cpf: "", email: "", github: ""};
=======
   aluno: Aluno = new Aluno();
>>>>>>> b9d0e2f... cadastro de metas, e clonagem de objetos para simular funcionamento do servidor
   alunos: Aluno[] = [];
   cpfduplicado: boolean = false;

   criarAluno(a: Aluno): void {
     if (this.alunoService.criar(a)) {
       this.alunos.push(a);
<<<<<<< HEAD
       this.aluno = {nome: "", cpf: "", email: "", github: ""};
=======
       this.aluno = new Aluno();
>>>>>>> b9d0e2f... cadastro de metas, e clonagem de objetos para simular funcionamento do servidor
     } else {
       this.cpfduplicado = true;
     }
   }

   onMove(): void {
      this.cpfduplicado = false;
   }

   atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno);
   }

}
