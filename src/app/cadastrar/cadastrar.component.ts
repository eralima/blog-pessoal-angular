import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
  export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  usuarioTipo: string

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.usuarioTipo = event.target.value
  }

  cadastrar(){
    this.usuario.tipoUsuario = this.usuarioTipo
    if(this.usuario.senha != this.confirmarSenha ){
      alert('As senhas estão incorretas')
    }
    else{
      this.autenticacaoService.cadastrar(this.usuario).subscribe((resposta: Usuario) => {
        this.usuario = resposta
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')

      })
    }

  }

}
