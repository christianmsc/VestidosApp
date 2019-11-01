import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VestidoService } from '../services/vestido.service';

@Component({
  selector: 'app-vestido-detalhes',
  templateUrl: './vestido-detalhes.page.html',
  styleUrls: ['./vestido-detalhes.page.scss'],
})
export class VestidoDetalhesPage implements OnInit {

  public id: number;
  public vestido: any;

  constructor(private router: ActivatedRoute, private vestidoService: VestidoService) { }

  ngOnInit() {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.vestidoService.getVestidos(this.id).subscribe((data: any) => {

      data = JSON.parse(data._body);

      if (data.sucesso) {
        this.vestido = data.vestido;
      }

    }, err => {
      alert(err);
    });
  }
}
