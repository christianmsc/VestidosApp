import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { NovoUsuario } from '../models/NovoUsuario';
import { CadastrarUsuarioService } from '../services/cadastrar-usuario.service';
import { NavController, ActionSheetController } from '@ionic/angular';
import { FotoUploadService } from '../services/foto-upload.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  foto: string;
  nomeFoto: string;
  

  constructor(private camera: Camera, 
    private file: File, 
    private cadastrarUsuarioService: CadastrarUsuarioService, 
    private navCtrl: NavController, 
    public actionSheetController: ActionSheetController,
    private fotoUploadService: FotoUploadService) { }

  ngOnInit() {
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Para a foto de perfil, vou...",
      buttons: [{
        text: 'Escolher uma existente',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar a câmera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Não quero mais colocar foto',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = 'data:image/jpeg;base64,' + imageData;
      this.fotoUploadService.uploadFoto(imageData).subscribe((data: any) => {
        data = JSON.parse(data._body);
        if (data.sucesso) {
          this.nomeFoto = data.nomeFoto;
        }
        else {
          alert(data.mensagem);
        }
      }, err => {
        alert('nao consegui mandar a foto =´(');
      });
    }, (err) => {
      // Handle error
    });
  }

  cadastrar(nome, cpf, dataNascimento, telefone, email, senha, rua, numero, complemento, bairro, cidade, estado, cep) {

    const usuario: NovoUsuario = new NovoUsuario();
    usuario.Nome = nome.value;
    usuario.Cpf = cpf.value;
    usuario.DataNascimento = dataNascimento.value;
    usuario.Telefone = telefone.value;
    usuario.Email = email.value;
    usuario.Senha = senha.value;
    usuario.Foto = this.nomeFoto;
    usuario.Rua = rua.value;
    usuario.Numero = numero.value;
    usuario.Complemento = complemento.value;
    usuario.Bairro = bairro.value;
    usuario.Cidade = cidade.value;
    usuario.Estado = estado.value;
    usuario.Cep = cep.value;

    this.cadastrarUsuarioService.postUsuario(usuario).subscribe((data: any) => {
      data = JSON.parse(data._body);
      if (data.sucesso) {
        alert('cadastrad@ com sucesso =D');
        this.navCtrl.navigateForward('tabs/login');
      }
      else {
        alert(data.mensagem);
      }
    }, err => {
      alert('erro ao cadastrar =´(');
    });

  }

}
