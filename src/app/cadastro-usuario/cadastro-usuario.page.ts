import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NovoUsuario } from '../models/NovoUsuario';
import { CadastrarUsuarioService } from '../services/cadastrar-usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  options = {
    // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
    // selection of a single image, the plugin will return it.
    maximumImagesCount: 1,

    // max width and height to allow the images to be.  Will keep aspect
    // ratio no matter what.  So if both are 800, the returned image
    // will be at most 800 pixels wide and 800 pixels tall.  If the width is
    // 800 and height 0 the image will be 800 pixels wide if the source
    // is at least that wide.
    width: 800,
    height: 600,

    // quality of resized image, defaults to 100
    quality: 100,

    // output type, defaults to FILE_URIs.
    // available options are 
    // window.imagePicker.OutputType.FILE_URI (0) or 
    // window.imagePicker.OutputType.BASE64_STRING (1)
    outputType: 1
  };

  constructor(private imagePicker: ImagePicker, private cadastrarUsuarioService: CadastrarUsuarioService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  selecionarFoto() {
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  cadastrar(nome, cpf, dataNascimento, telefone, email, senha, rua, numero, complemento, bairro, cidade, estado, cep) {

    const usuario: NovoUsuario = new NovoUsuario();
    usuario.Nome = nome.value;
    usuario.Cpf = cpf.value;
    usuario.DataNascimento = dataNascimento.value;
    usuario.Telefone = telefone.value;
    usuario.Email = email.value;
    usuario.Senha = senha.value;
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
      }
      else {
        alert(data.mensagem);
      }
      this.navCtrl.navigateRoot('intro');

    }, err => {
      alert('erro ao cadastrar =´(');
    });

  }

}
