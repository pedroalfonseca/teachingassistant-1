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
   alunoService = new AlunoService();
=======
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = {nome: "", cpf: "", email: ""};
>>>>>>> b948fbc... serviço de aluno injetado, não criado pelo componente
   alunos: Aluno[] = [];
   cpfduplicado: boolean = false;

   gravar(a: Aluno): void {
     if (this.alunoService.gravar(a)) {
       this.alunos.push(a);
       this.aluno = {nome: "", cpf: "", email: "", github: ""};
     } else {
       this.cpfduplicado = true;
     }
  }
  onMove(): void {
      this.cpfduplicado = false;
  }
}
