# 🤖 SCRIPTS DE AUTOMAÇÃO

## 🎯 O QUE ESTES SCRIPTS FAZEM

Scripts para **verificar e validar** sua configuração.

**⚠️ IMPORTANTE:** Scripts NÃO configuram DNS automaticamente (isso é impossível sem acesso ao seu provedor).

---

## 📋 SCRIPTS DISPONÍVEIS

### 1. ✅ Validar Configuração

```bash
npm run validate
```

**O que faz:**
- ✅ Verifica se arquivo CNAME existe
- ✅ Verifica se index.html existe
- ✅ Verifica pasta css/
- ✅ Verifica pasta js/
- ✅ Verifica GitHub Actions

**Quando usar:** Antes de fazer push

---

### 2. 🔍 Verificar DNS

```bash
npm run check-dns
```

**O que faz:**
- 🔍 Consulta DNS do domínio
- ✅ Verifica se aponta para GitHub Pages
- 📊 Mostra resultado detalhado

**Quando usar:** Depois de configurar DNS no provedor

**Exemplo de saída:**

```
🔍 Verificando configuração DNS...

Domínio: www.informaticasamtech.com.br
Esperado: samukajr.github.io

📡 Consultando DNS...

✅ DNS CONFIGURADO CORRETAMENTE!
✅ www.informaticasamtech.com.br → samukajr.github.io

🎉 Seu site deve estar funcionando em:
   https://www.informaticasamtech.com.br
```

---

### 3. 📊 Ver Status

```bash
npm run status
```

**O que faz:**
- 📂 Mostra status do Git
- 🌐 Mostra configuração de domínio
- 📄 Lista arquivos do site
- 🔗 Mostra URLs importantes

**Quando usar:** Para ver overview do projeto

---

### 4. 🚀 Iniciar Servidor Local

```bash
npm start
# ou
npm run serve
```

**O que faz:**
- 🌐 Inicia servidor HTTP local na porta 8000
- 🔄 Permite visualizar site localmente

**Acesse:** http://localhost:8000

---

### 5. 📤 Deploy

```bash
npm run deploy
```

**O que faz:**
- 📤 Push para GitHub (branch main)
- 🤖 Triggera GitHub Actions
- ⏰ Deploy automático em 1-2 minutos

---

## 🛠️ COMO USAR

### Primeira Vez (Instalar Node.js)

**Se não tiver Node.js:**

1. Download: https://nodejs.org
2. Instale versão LTS (recomendada)
3. Verifique instalação:
   ```bash
   node --version
   npm --version
   ```

### No VSCode

1. Abra o terminal: `Ctrl+\``
2. Rode qualquer script:
   ```bash
   npm run validate
   npm run check-dns
   npm run status
   ```

### No Terminal Normal

```bash
# Navegue até a pasta do projeto
cd caminho/para/informatica-samtech

# Rode os scripts
npm run validate
npm run check-dns
npm run status
```

---

## 📖 FLUXO DE TRABALHO RECOMENDADO

### 1. Clonar e Configurar

```bash
git clone https://github.com/Samukajr/informatica-samtech.git
cd informatica-samtech
```

### 2. Validar Tudo

```bash
npm run validate
```

### 3. Ver Status

```bash
npm run status
```

### 4. Testar Localmente

```bash
npm start
# Acesse: http://localhost:8000
```

### 5. Fazer Alterações

- Edite arquivos no VSCode
- Salve (Ctrl+S)
- Veja mudanças no navegador

### 6. Verificar DNS

```bash
npm run check-dns
```

**Se der erro:** Configure DNS no provedor (veja ERRO-DNS-SOLUCAO.md)

### 7. Commit e Deploy

```bash
git add .
git commit -m "Minhas alterações"
npm run deploy
```

---

## ❓ PERGUNTAS FREQUENTES

### "npm: command not found"

**Solução:** Instale Node.js: https://nodejs.org

### "Os scripts não funcionam"

**Solução:** Verifique se está na pasta correta:
```bash
pwd  # Deve mostrar: .../informatica-samtech
ls   # Deve mostrar: package.json
```

### "check-dns dá erro"

**Possíveis causas:**
1. DNS ainda não propagou (aguarde 1-4 horas)
2. DNS não configurado
3. nslookup não disponível

**Solução:** Use online: https://www.whatsmydns.net

### "validate dá erro"

**Possíveis causas:**
1. Arquivos faltando
2. Pasta errada

**Solução:** Verifique estrutura do projeto:
```bash
npm run status
```

---

## 🔧 SCRIPTS AVANÇADOS (Opcional)

### Verificar DNS de Forma Simples (sem npm)

**Windows:**
```cmd
nslookup www.informaticasamtech.com.br
```

**Mac/Linux:**
```bash
nslookup www.informaticasamtech.com.br
# ou
dig www.informaticasamtech.com.br
# ou
host www.informaticasamtech.com.br
```

### Ver Logs do Git

```bash
git log --oneline -5
```

### Ver Diferenças

```bash
git diff
```

---

## ⚠️ LIMITAÇÕES

### ❌ O QUE OS SCRIPTS NÃO FAZEM:

- ❌ **Não configuram DNS** → Apenas verificam
- ❌ **Não acessam provedor** → Sem credenciais
- ❌ **Não fazem login** → Requer autenticação manual

### ✅ O QUE OS SCRIPTS FAZEM:

- ✅ **Verificam** se DNS está correto
- ✅ **Validam** estrutura do projeto
- ✅ **Mostram** status atual
- ✅ **Facilitam** workflow

---

## 🎊 RESUMO

**Scripts criados:**
1. ✅ `npm run validate` → Valida configuração
2. 🔍 `npm run check-dns` → Verifica DNS
3. 📊 `npm run status` → Mostra status
4. 🚀 `npm start` → Servidor local
5. 📤 `npm run deploy` → Deploy para GitHub

**O que você AINDA precisa fazer manualmente:**
- ⏳ Configurar DNS no provedor
- ⏳ Aguardar propagação

**Mas agora tem scripts para:**
- ✅ Verificar se está certo
- ✅ Facilitar desenvolvimento
- ✅ Automatizar deploy

---

## 🆘 AJUDA

**Documentação relacionada:**
- [COMO-ABRIR-VSCODE.md](COMO-ABRIR-VSCODE.md) → Setup VSCode
- [ERRO-DNS-SOLUCAO.md](ERRO-DNS-SOLUCAO.md) → Configurar DNS
- [README.md](README.md) → Visão geral

**Comandos úteis:**
```bash
npm run validate    # Validar tudo
npm run check-dns   # Verificar DNS
npm run status      # Ver status
npm start           # Servidor local
```

---

**Criado para facilitar seu workflow!** 🚀

**Mas DNS ainda precisa ser configurado manualmente!** 🔒
