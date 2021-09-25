import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


export interface Clientes {
  nome: string;
  cpf: string;
  bairro: string;
  rua: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  clients: Clientes[] = [];

  nome: string;
  cpf: string;
  rua: string;
  bairro: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      height: '380px',
      data: { nome: this.nome, cpf: this.cpf, rua: this.rua, bairro: this.bairro }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);

      if(result.nome !== undefined || result.cpf !== undefined || result.rua !== undefined || result.bairro !== undefined){
        this.clients.push(result);
      }
    });
  }

  removerLinha(event: number){
    this.clients.splice(event, 1);
  }
}
