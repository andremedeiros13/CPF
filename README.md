<h1 align="center">Bem-Vindo ao Desafio Técnico Backend 👋</h1>


## ✨ Sobre o Desafio

<p align="rigth">
  Atualmente o time de análise antifraude do ecommerce realiza um controle de CPFs em uma planilha eletrônica. Nesta planilha são adicionados CPFs com risco de fraude. Com o aumento da nossa base de clientes têm ficado cada vez mais difícil manter o controle manual.
</p>

# Desenvolvendo o projeto
<p align="rigth">
  Para o desenvolvimento deste projeto foi utilizado o Node.js(Javascript) e o MongoDB, a arquitetura do projeto visa possibilitar uma escalabilidade e sustentabilidade do código alinhado a agilidade.
</p>

# Pré-requisitos:
- npm >= 6.14.13
- node >= 14.17.3

# Instalação e Execução:
1) Abra o terminal do seu computador. Se estiver no Windows, pode ser o Prompt de Comando ou PowerShell. Caso use o WSL no Windows, use o Windows Terminal, usando o Ubuntu ou qualquer distribuição suportada pelo WSL.
2) Altere o diretório de trabalho atual para o local em que deseja ter o código do módulo salvo no seu computador.
3) Faça um clone desse repositório rodando:
git clone https://github.com/andremedeiros13/CPF;
4) Entre na pasta rodando pelo terminal: cd CPF;
5) Rode npm install para instalar as dependências do projeto;
6) Rode npm start para iniciar o servidor de desenvolvimento.

# APIS 
As APIS possuem 4 rotas conforme exemplos a seguir:

Importante: Sugerimos que seja utilizado sempre o CPF formatado.

1) Retorna todos os CPFs Cadastrados na base:
- HTTP Verb: GET
- localhost:3000/cpf

2) Retorna um CPF especifico:
- HTTP Verb: GET
- localhost:3000/cpf/{cpf}

3) Insere um CPF na base:
- HTTP Verb: POST
- localhost:3000/cpf
 - Body da requisição:
 - {
      "cpf":"xxx.xxx.xxx-xx"
  }

4) Remove um CPF da base de dados:
- HTTP Verb: DELETE
- localhost:3000/cpf/{cpf}

# CPF
Para criar CPFs validos o link a seguir pode ser utilizado:
https://www.4devs.com.br/gerador_de_cpf




# Autor: 
- André Antonio de Medeiros


