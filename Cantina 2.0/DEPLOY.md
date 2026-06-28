# 🚀 Guia de Implantação — Cantina Bella Roma

Este guia explica passo a passo como subir este projeto para o **GitHub** e publicá-lo na **Vercel** para que fique online e acessível para todos.

---

## 🛠️ O que foi preparado no projeto?

Para garantir que a importação e a hospedagem ocorram sem problemas e com o máximo de performance, criamos dois arquivos essenciais na raiz do projeto:

1. **`.gitignore`**: Evita o envio de arquivos desnecessários do seu computador (como pastas temporárias, logs e arquivos ocultos do sistema operacional) para o repositório do GitHub.
2. **`vercel.json`**: Configura regras de otimização na Vercel, ativando URLs limpas (sem necessidade do `.html` no final dos links) e configurando cache de longa duração para carregar imagens, fontes, estilos e scripts instantaneamente.

---

## 📂 Opção A: Usando o GitHub Desktop (Recomendado para quem prefere interface visual)

Se você não quer usar o terminal de comandos:

1. **Baixe e Instale o GitHub Desktop**: Se ainda não tiver, baixe em [desktop.github.com](https://desktop.github.com/).
2. **Adicione o Projeto**:
   - Abra o GitHub Desktop.
   - Vá em **File > Add Local Repository...** (ou pressione `Ctrl + O`).
   - Selecione a pasta do projeto `Cantina 2.0` no seu computador e clique em **Add Repository**.
   - O aplicativo avisará que a pasta não é um repositório Git e oferecerá para criá-lo (**Create a Repository**). Clique nesta opção.
3. **Commit Inicial**:
   - Dê um nome (ex: `Initial commit`) e clique no botão **Commit to main** (ou master).
4. **Publique no GitHub**:
   - Clique no botão **Publish repository** no topo da tela.
   - Escolha se deseja manter o código privado ou público e clique em **Publish**.

---

## 💻 Opção B: Usando a Linha de Comando (Terminal / Git Bash)

Se você tem o Git instalado no seu computador e prefere usar o terminal:

1. Abra o terminal (PowerShell, CMD ou Git Bash) **dentro da pasta do projeto** e execute:
   ```bash
   # Inicializa o repositório Git local
   git init

   # Adiciona todos os arquivos do projeto
   git add .

   # Salva o estado atual
   git commit -m "feat: setup inicial do projeto com gitignore e vercel.json"
   ```

2. Crie um repositório **vazio** no seu [GitHub](https://github.com/new).
3. Copie a URL do repositório criado (ex: `https://github.com/seu-usuario/seu-repositorio.git`).
4. Associe o repositório local ao GitHub e envie os arquivos:
   ```bash
   # Define a branch principal como main
   git branch -M main

   # Conecta ao seu repositório no GitHub (substitua a URL abaixo pela sua)
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git

   # Envia os arquivos para o GitHub
   git push -u origin main
   ```

---

## ⚡ Como Publicar na Vercel

Após enviar o código para o GitHub, siga estes passos para colocar o site no ar de forma gratuita:

1. Acesse o painel da **Vercel** ([vercel.com](https://vercel.com/)) e faça login com a sua conta do **GitHub**.
2. Clique no botão **Add New...** no canto superior direito e selecione **Project**.
3. Na lista de repositórios do GitHub, localize o repositório do seu projeto (ex: `seu-repositorio`) e clique no botão **Import**.
4. Na tela de configuração:
   - **Framework Preset**: Deixe como `Other` (a Vercel detectará automaticamente que é um site estático).
   - **Root Directory**: Deixe como `./` (raiz).
   - **Build and Development Settings**: Não precisa alterar nada, pois não há processo de build.
5. Clique no botão **Deploy**.

Em menos de 1 minuto, a Vercel criará um link público para o seu site (ex: `cantina-bella-roma.vercel.app`) com certificado SSL (HTTPS) configurado automaticamente!

---

## 🔄 Próximas Atualizações
Sempre que você fizer uma alteração no código localmente e enviar (`git push`) para o GitHub, a Vercel detectará a mudança automaticamente e atualizará o site no ar em poucos segundos!
