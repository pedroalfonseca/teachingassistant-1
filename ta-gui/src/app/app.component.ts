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
<<<<<<< HEAD
   aluno: Aluno = {nome: "", cpf: "", email: "", github: ""};
}

export class Aluno {
  nome: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  github: string | undefined;
=======
   aluno: Aluno = {nome: "", cpf: "", email: ""};
   alunoService = new AlunoService();

   gravar(a: Aluno): void {
     this.alunoService.gravar(a);
     this.aluno = {nome: "", cpf: "", email: ""};
  }
>>>>>>> ab841e1... botao e funcionalidade do formulario para cadastro de alunos
}
