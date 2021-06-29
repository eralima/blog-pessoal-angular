import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  
  usuarioLogin: UsuarioLogin =  new UsuarioLogin()

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.autenticacaoService.entrar(this.usuarioLogin).subscribe((resposta: UsuarioLogin) => {
      this.usuarioLogin = resposta

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.linkFoto = this.usuarioLogin.linkFoto

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.linkFoto)

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }
}
