import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema =  new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      //alert('Sua sessão expirou, faça o login novamente!')
      
      this.router.navigate(['/entrar'])

    }
    this.todosTemas()
    this.temaService.refreshToken()
  }

  todosTemas(){
      this.temaService.todosTemas().subscribe((resposta: Tema []) => {
      this.listaTemas = resposta
    })
  }
  cadastrarTema(){
    this.temaService.inserirTema(this.tema).subscribe((resposta: Tema) => {
      this.tema = resposta
      alert('Tema cadastrado com sucesso!')
      this.todosTemas()
      this.tema = new Tema()
    })
  }

}
