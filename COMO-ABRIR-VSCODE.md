# 🚀 COMO ABRIR NO VSCODE LOCAL

## 📍 PASSO A PASSO COMPLETO

### PASSO 1: Instalar Git (se não tiver)

**Windows:**
- Download: https://git-scm.com/download/win
- Instale com as opções padrão

**Mac:**
```bash
# Instale via Homebrew
brew install git
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
```

---

### PASSO 2: Instalar VSCode (se não tiver)

**Download:** https://code.visualstudio.com/

Instale normalmente.

---

### PASSO 3: Clonar o Repositório

#### Opção A: Via VSCode (Mais Fácil)

1. Abra o **VSCode**
2. Pressione: `Ctrl+Shift+P` (Windows/Linux) ou `Cmd+Shift+P` (Mac)
3. Digite: `Git: Clone`
4. Cole esta URL:
   ```
   https://github.com/Samukajr/informatica-samtech.git
   ```
5. Escolha uma pasta no seu computador
6. Clique em **"Open"** quando perguntar

#### Opção B: Via Terminal

```bash
# Navegue até onde quer salvar
cd ~/Desktop

# Clone o repositório
git clone https://github.com/Samukajr/informatica-samtech.git

# Entre na pasta
cd informatica-samtech

# Abra no VSCode
code .
```

---

### PASSO 4: Instalar Extensões Recomendadas

No VSCode, instale estas extensões:

1. **Live Server** (by Ritwick Dey)
   - Para visualizar o site localmente
   
2. **GitHub Pull Requests** (by GitHub)
   - Para trabalhar com GitHub

3. **GitLens** (opcional, mas útil)
   - Melhora visualização do Git

**Como instalar:**
1. Clique no ícone de extensões (quadradinhos) na barra lateral
2. Pesquise o nome
3. Clique em "Install"

---

### PASSO 5: Ver o Site Localmente

1. No VSCode, abra o arquivo `index.html`
2. Clique com botão direito no código
3. Selecione: **"Open with Live Server"**
4. Seu navegador abrirá com o site!

**Ou use Python:**
```bash
# No terminal do VSCode (View → Terminal)
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

---

## ⚠️ IMPORTANTE: O QUE POSSO E NÃO POSSO FAZER

### ✅ O QUE POSSO FAZER NO VSCODE:

- ✅ Editar código HTML/CSS/JS
- ✅ Ver o site localmente
- ✅ Fazer commits e push
- ✅ Rodar scripts de verificação
- ✅ Testar alterações

### ❌ O QUE NÃO POSSO FAZER (MESMO NO VSCODE):

- ❌ **Configurar DNS** → Requer acesso ao seu provedor
- ❌ **Acessar painel de domínio** → Requer suas credenciais
- ❌ **Fazer login no Registro.br/Locaweb/etc** → Apenas você pode

**POR QUÊ?** 🔒

Porque DNS é configurado no site onde você COMPROU o domínio, não no GitHub ou VSCode!

---

## 🛠️ SCRIPTS DE AUTOMAÇÃO (O QUE CONSIGO AJUDAR)

Criei scripts para facilitar:

### 1. Verificar DNS
```bash
npm run check-dns
```

### 2. Validar Configuração
```bash
npm run validate
```

### 3. Ver Status
```bash
npm run status
```

Veja: [SCRIPTS-AUTOMACAO.md](SCRIPTS-AUTOMACAO.md)

---

## 📂 ESTRUTURA DO PROJETO

Depois de abrir no VSCode, você verá:

```
informatica-samtech/
├── index.html          ← Site principal
├── css/
│   └── style.css       ← Estilos
├── js/
│   └── script.js       ← JavaScript
├── .github/
│   └── workflows/      ← GitHub Actions (deploy automático)
├── CNAME               ← Configuração de domínio
└── *.md                ← Documentação
```

---

## 🎯 WORKFLOW RECOMENDADO

### 1. Clonar e Abrir
```bash
git clone https://github.com/Samukajr/informatica-samtech.git
cd informatica-samtech
code .
```

### 2. Visualizar Localmente
```bash
python -m http.server 8000
# Ou use Live Server
```

### 3. Fazer Alterações
- Edite arquivos no VSCode
- Salve (Ctrl+S)
- Veja mudanças no navegador

### 4. Commit e Push
```bash
git add .
git commit -m "Suas alterações"
git push
```

### 5. Deploy Automático
- GitHub Actions publica automaticamente
- Aguarde 1-2 minutos

---

## 🔧 CONFIGURAR DNS (AINDA MANUAL)

**Mesmo no VSCode, você AINDA precisa:**

1. Acessar site do provedor (Registro.br, Locaweb, etc)
2. Adicionar: `CNAME www samukajr.github.io`
3. Aguardar 1-4 horas

**Use o script para verificar:**
```bash
npm run check-dns
```

---

## 🚨 SE TIVER PROBLEMAS

### Erro ao clonar?
```bash
# Configure seu Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### VSCode não abre?
```bash
# Instale o comando 'code'
# No VSCode: Ctrl+Shift+P → "Shell Command: Install 'code' command"
```

### Live Server não funciona?
```bash
# Use Python
python -m http.server 8000
```

---

## 💡 DICAS ÚTEIS

### Atalhos do VSCode:
- `Ctrl+\`` → Abrir terminal
- `Ctrl+P` → Abrir arquivo rápido
- `Ctrl+Shift+P` → Command palette
- `Ctrl+B` → Toggle sidebar

### Ver mudanças do Git:
- Clique no ícone do Git (ramo/branch) na barra lateral
- Veja arquivos modificados
- Faça commit direto no VSCode

### Extensões úteis:
- **Prettier** → Formata código
- **Auto Rename Tag** → Renomeia tags HTML
- **Path Intellisense** → Autocomplete de caminhos

---

## 🎊 RESUMO

### O VSCode VAI AJUDAR:
✅ Editar código facilmente
✅ Ver site localmente
✅ Git integration
✅ Rodar scripts de verificação

### O VSCode NÃO VAI FAZER:
❌ Configurar DNS automaticamente
❌ Acessar seu provedor de domínio
❌ Fazer login no Registro.br/Locaweb

### Você AINDA precisa:
⏳ Configurar DNS manualmente
⏳ No site do seu provedor
⏳ Apenas 5 minutos!

---

## 📖 PRÓXIMOS PASSOS

1. ✅ Clone o repositório
2. ✅ Abra no VSCode
3. ✅ Instale extensões
4. ✅ Rode scripts de verificação
5. ⏳ Configure DNS (manual)
6. ✅ Aguarde propagação
7. 🎉 Site no ar!

---

**Criado para facilitar seu trabalho no VSCode!** 💻

**Mas lembre-se: DNS ainda é manual!** 🔒
