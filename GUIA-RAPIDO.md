# ⚡ GUIA RÁPIDO: Publicar Automaticamente

## 🌐 DOMÍNIO: www.informaticasamtech.com.br

**✅ Arquivo CNAME já configurado!**

Para usar seu domínio personalizado: **[Ver guia completo →](CONFIGURAR-DOMINIO.md)**

---

## 🎯 3 Cliques e Pronto!

### ✅ Passo 1: Ativar GitHub Pages (30 segundos)

1. Clique aqui: **https://github.com/Samukajr/informatica-samtech/settings/pages**

2. Em **"Build and deployment"**, mude para:
   - **Source**: Selecione **"GitHub Actions"** (não "Deploy from a branch")

3. Salve (já salva automaticamente)

**✅ Feito!**

---

### ✅ Passo 2: Fazer Merge do Pull Request (30 segundos)

1. Clique aqui: **https://github.com/Samukajr/informatica-samtech/pulls**

2. Você verá um Pull Request ativo

3. Clique em **"Merge pull request"**

4. Clique em **"Confirm merge"**

**✅ Feito!**

---

### ✅ Passo 3: Aguardar Deploy (1-2 minutos)

1. Clique aqui: **https://github.com/Samukajr/informatica-samtech/actions**

2. Você verá "Deploy to GitHub Pages" rodando (bolinha amarela 🟡)

3. Aguarde ficar verde ✅ (1-2 minutos)

4. **Acesse seu site**: **https://samukajr.github.io/informatica-samtech/**

**🎉 Site no ar!**

---

## 🌐 Usar Domínio www.informaticasamtech.com.br

**✅ Arquivo CNAME já configurado automaticamente!**

### 🔥 Guia Completo: [CONFIGURAR-DOMINIO.md](CONFIGURAR-DOMINIO.md)

### Resumo Rápido:

**No Painel de DNS** (OBRIGATÓRIO):
```
Tipo: CNAME | Nome: www | Valor: samukajr.github.io
```

**Opcional** (para domínio sem www):
```
Tipo: A | Nome: @ | Valor: 185.199.108.153
Tipo: A | Nome: @ | Valor: 185.199.109.153
Tipo: A | Nome: @ | Valor: 185.199.110.153
Tipo: A | Nome: @ | Valor: 185.199.111.153
```

**No GitHub Pages**:
1. Vá em: https://github.com/Samukajr/informatica-samtech/settings/pages
2. Em **"Custom domain"**: `www.informaticasamtech.com.br`
3. Salve e aguarde verificação
4. Marque **"Enforce HTTPS"**

**Aguarde propagação DNS**: 5 minutos a 48 horas (normalmente 1-4 horas)

---

## 🔄 Como Atualizar o Site Depois

Sempre que fizer alterações:

```bash
git add .
git commit -m "Atualização"
git push
```

**Aguarde 1-2 minutos → Site atualizado automaticamente! ✅**

---

## 🆘 Problemas?

### "Não encontrei a opção GitHub Actions"
- Certifique-se de estar em: Settings → Pages
- Se não aparecer, aguarde o merge do Pull Request primeiro

### "Site não aparece"
- Aguarde 5 minutos após o primeiro deploy
- Limpe cache do navegador (Ctrl + Shift + R)
- Verifique se o workflow terminou: https://github.com/Samukajr/informatica-samtech/actions

### "Erro 404"
- O domínio pode estar errado
- Use: `samukajr.github.io/informatica-samtech/` (com a barra no final)

---

## ✨ Vantagens do Deploy Automático

- ✅ **Sem FTP** - não precisa configurar nada
- ✅ **Sem senhas** - usa sua conta GitHub
- ✅ **Automático** - push e pronto!
- ✅ **Grátis** - 100% sem custo
- ✅ **HTTPS** - SSL configurado automaticamente
- ✅ **Rápido** - 1-2 minutos para publicar
- ✅ **Seguro** - backup automático no Git

---

**🎉 Pronto! Agora é só usar!**

Para detalhes completos, veja: **[DEPLOY-AUTOMATICO.md](DEPLOY-AUTOMATICO.md)**
