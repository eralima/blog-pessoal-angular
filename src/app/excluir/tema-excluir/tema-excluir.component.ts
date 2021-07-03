import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-excluir',
  templateUrl: './tema-excluir.component.html',
  styleUrls: ['./tema-excluir.component.css']
})
export class TemaExcluirComponent implements OnInit {
  tema: Tema = new Tema()
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])

    }
    this.idTema = this.route.snapshot.params['id']
    this.temaPeloId(this.idTema)
  }

  temaPeloId(id: number){
    this.temaService.temaPeloId(id).subscribe((resposta : Tema) => {
      this.tema = resposta
    })
  }

  apagar(){
    this.temaService.excluirTema(this.idTema).subscribe(() => {
      alert ('Tema apagado com sucesso')
      this.router.navigate(['/tema'])
    })
  }
}
