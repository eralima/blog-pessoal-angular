import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-tema-edicao',
  templateUrl: './tema-edicao.component.html',
  styleUrls: ['./tema-edicao.component.css']
})
export class TemaEdicaoComponent implements OnInit {
  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      //alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.temaPeloId(id)
  }

  temaPeloId(id: number){
    this.temaService.temaPeloId(id).subscribe((resposta: Tema) => {
      this.tema = resposta
    })
  }

  atualizar(){
    this.temaService.inserirTema(this.tema).subscribe((resposta: Tema) => {
      this.tema = resposta
      alert ('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}
