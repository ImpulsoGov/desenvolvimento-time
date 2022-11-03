# GITHUB

## Github: O que são? Onde vivem? Do que se alimentam?

Em suma, o GitHub é um serviço baseado em nuvem que hospeda um sistema de controle de versão chamado Git. Ele permite que os desenvolvedores colaborem e façam mudanças em projetos compartilhados enquanto mantêm um registro detalhado do seu progresso.


O GitHub também é uma "rede social" de desenvolvedores.

#### Por que saber mexer no github?
* <b>Organização</b><br>
Fica mais simples de achar o que já foi feito.<br>
Manter códigos organizados é o que permite o seu trabalho ser durável!<br>
exemplo recente: [Fernanda e o boletim do Farol](https://github.com/ImpulsoGov/internal_analysis/tree/master/weekly_analysis).<br>

* <b>Rapidez no Trabalho</b><br>
Tornar-se indepedente do trabalho de um programador para ajustes simples que podem afetar seu trabalho, economizando seu tempo.<br>
exemplo: código a ser compartilhado em apresentacão da vacina / ajustes de erro de português em um texto do Escola Segura.<br>
Mas e o medo de fazer alguma coisa e quebrar? Relaxa, vamos chegar lá.

* <b>Integração</b><br>
Se está no git permite que se torne mais rápido para automatizar o trabalho.<br>
Além disso é o que permite rodar mais rapidamente em sua máquina, só clonar e rodar, ao invés de ter que procurar dentro do Drive um arquivo de texto, baixar, organizar, e ficar rodando até todas as dependencias estarem certas.<br>

* <b>Interação</b><br>
Você pode ler o código de outros analistas, interagir com outras pessoas que fazem um trabalho parecido ou relacionado com o seu e trocar figurinhas.<br>
Por outro lado é também o que permite que pessoas consultem seus códigos e economizem tempo em fazer análises próximas a sua.<br>
MUITAS vezes programadores deixam o github mais explicativo que o site, assim você pode conseguir informacões técnicas mais rapidamente.<br>
exemplo recente: Jancer e a análise do prontuário e-SUS/ [análises do NEXO Jornal](https://github.com/Nexo-Dados/PoliticasPublicas).

#### Mas eu não vou quebrar?
* Se quebrar o erro não foi seu, foi meu.
* Temos um esquema de protecão de branches.<br>
[infraestrutura](https://docs.google.com/file/d/1aK_UkmuuKrqej9hUdhue71E4quunRIi0j1oB2wUu29Y/edit)<br>
[exemplo coronacidades](https://github.com/ImpulsoGov/coronacidades-datasource/settings/branches)<br>

## O básico
[github sem código](https://guides.github.com/activities/hello-world/)<br>
[git - guia prático](https://rogerdudler.github.io/git-guide/index.pt_BR.html)<br>
[Dicionário Git e GitHub](https://gist.github.com/victorsenam/8580499)<br>
[Aprenda Git do básico ao avançado](https://comandosgit.github.io/)

#### Conceitos

* <b>Repositório</b><br>
O repositório é a pasta do projeto.

* <b>README.md</b><br>
README é o cartão de visita do seu código! <br>
É um arquivo de texto utilizado para descrever o seu projeto. Ele não é obrigatório, mas é essencial se o seu repositório for público, pois explica a comunidade, qual o propósito do seu projeto.<br>
[Como fazer um README.md BONITÃO](https://medium.com/@raullesteves/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8)<br>
[exemplo perfil readme](https://github.com/ibrahimcesar)<br>
[exemplo perfil readme](https://github.com/gabriellearruda)

* <b>Branch</b><br>
Branches são separações de código. Branches normalmente são utilizados para separar alterações a serem atualizadas sem afetar a branch principal.

* <b>Fork</b><br>
É uma cópia do projeto para fora do repositório original.<br>
Fork é usado normalmente quando você vai iniciar um novo projeto baseado no original, a branch são para alteracões curtas/temporárias.

* <b>PR</b><br>
Um pull request é um pedido de alteracão do repositório, para que esse atualize o código anterior com o seu código.<br>
Como temos branches protegidas essa é única maneira de se atualizar em live as ferramentas e a API.<br>


## Prática Parte I!
<details>
  <br>
  1. Crie uma branch nova nesse diretório, crie uma pasta dentro de (/git) pra você com seu nome (ex: gabrielle) e coloque dentro seu arquivo README.

  2. Adione uma foto qualquer a sua pasta!

  3. Crie um PR para atualizar a master com a sua branch.
  
  4. Dê um fork nessa pasta (depois você pode excluir é só para aprender a fazer). 
</details>


## Indo além

#### Comandos

* <b>git clone</b><br>
Um clone de um repositório funciona como cópia de um repositório online em um repositório local. 

* <b>git pull</b><br>
É uma atualização do repositório local com a versão mais atual do projeto online. 

* <b>git add</b><br>
Para propor mudanças (adicioná-las ao Index). 

* <b>git commit</b><br>
Confirma as mudanças e nomeia com uma frase que comenta as alterações. Agora o arquivo é enviado para o HEAD, mas ainda não para o repositório remoto online.

* <b>git push</b><br>
Para enviar as alterações do commit ao seu repositório remoto.<br>
Se seu código está desatualizado você precisa fazer o git pull.

* <b>git status</b><br>
A principal ferramenta utilizada para determinar quais arquivos estão em quais estados.

<img src="git-trans.png">


## Agora sem a mão!

* <b>VisualCodeStudio</b><br>
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

## Prática Parte II!
<details>
  <br>
  1. Clone esse repositório no seu computador.
  
  2. Faca uma alteracão no seu README.
  
  3. Envie essa alteracão via Visual Studio Code.
</details>


## Para pós sessão!

  1. Clone o datasource no seu computador (vamos trabalhar com ele em breve!)
