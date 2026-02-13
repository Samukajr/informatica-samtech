# 🌐 Configurar www.informaticasamtech.com.br

## ✅ Arquivo CNAME Já Configurado!

O arquivo `CNAME` já está no repositório com o domínio `www.informaticasamtech.com.br`.

Agora você só precisa:

---

## 📋 Passo 1: Configurar DNS (5 minutos)

### Onde Configurar:

Acesse o painel onde você gerencia o DNS de **informaticasamtech.com.br**

Pode ser:
- Registro.br
- Google Domains
- GoDaddy
- Hostgator
- Locaweb
- Outro provedor de domínio

### DNS a Adicionar:

Adicione **EXATAMENTE** estes registros:

```
═══════════════════════════════════════════════════════
REGISTRO 1 - CNAME para www
═══════════════════════════════════════════════════════
Tipo:  CNAME
Nome:  www
Valor: samukajr.github.io
TTL:   3600 (ou padrão)

═══════════════════════════════════════════════════════
REGISTRO 2 - A para domínio raiz (opcional)
═══════════════════════════════════════════════════════
Tipo:  A
Nome:  @ (ou deixe vazio, ou informaticasamtech.com.br)
Valor: 185.199.108.153

═══════════════════════════════════════════════════════
REGISTRO 3 - A para domínio raiz (opcional)
═══════════════════════════════════════════════════════
Tipo:  A
Nome:  @ (ou deixe vazio, ou informaticasamtech.com.br)
Valor: 185.199.109.153

═══════════════════════════════════════════════════════
REGISTRO 4 - A para domínio raiz (opcional)
═══════════════════════════════════════════════════════
Tipo:  A
Nome:  @ (ou deixe vazio, ou informaticasamtech.com.br)
Valor: 185.199.110.153

═══════════════════════════════════════════════════════
REGISTRO 5 - A para domínio raiz (opcional)
═══════════════════════════════════════════════════════
Tipo:  A
Nome:  @ (ou deixe vazio, ou informaticasamtech.com.br)
Valor: 185.199.111.153
```

### ⚠️ IMPORTANTE:

**Registro OBRIGATÓRIO**: CNAME para www
**Registros OPCIONAIS**: Os 4 registros A (só se você quiser que informaticasamtech.com.br sem www também funcione)

---

## 📋 Passo 2: Ativar no GitHub Pages (1 minuto)

1. Vá em: https://github.com/Samukajr/informatica-samtech/settings/pages

2. Em **"Custom domain"**, digite: `www.informaticasamtech.com.br`

3. Clique em **"Save"**

4. Aguarde a verificação do DNS (pode levar alguns minutos)

5. Quando disponível, marque **"Enforce HTTPS"** ✓

---

## ⏰ Passo 3: Aguardar Propagação (até 48 horas)

### Tempos Típicos:
- **Mínimo**: 5-10 minutos
- **Comum**: 1-4 horas
- **Máximo**: 24-48 horas

### Enquanto Aguarda:

Você pode testar se o DNS está configurado:

```bash
# No terminal/prompt de comando:
nslookup www.informaticasamtech.com.br

# Deve retornar algo como:
# Name: samukajr.github.io
# Address: XXX.XXX.XXX.XXX
```

Ou use ferramentas online:
- https://www.whatsmydns.net
- Digite: www.informaticasamtech.com.br
- Tipo: CNAME

---

## ✅ Como Saber se Funcionou:

### Teste 1: DNS Configurado?
```
nslookup www.informaticasamtech.com.br
```
✅ Deve mostrar: samukajr.github.io

### Teste 2: GitHub Verificou?
Vá em: https://github.com/Samukajr/informatica-samtech/settings/pages
✅ Deve aparecer: "DNS check successful"

### Teste 3: Site Carrega?
Acesse: https://www.informaticasamtech.com.br
✅ Site deve aparecer!

---

## 🔒 HTTPS (SSL) Automático

Depois que o DNS propagar:

1. GitHub detecta automaticamente
2. Emite certificado SSL gratuito (Let's Encrypt)
3. HTTPS fica disponível automaticamente!

⚠️ **Pode levar até 24 horas** para o SSL ser emitido após DNS propagar.

---

## ❓ Perguntas Comuns

### "Posso usar sem o www?"

Sim! Se você configurou os registros A, pode acessar:
- ✅ www.informaticasamtech.com.br (principal)
- ✅ informaticasamtech.com.br (redireciona para www)

### "Quanto tempo demora?"

- DNS: 5 minutos a 48 horas (normalmente 1-4 horas)
- Verificação GitHub: Alguns minutos após DNS propagar
- SSL: Até 24 horas após verificação

### "Meu domínio está em outro lugar, não no Google"

Não tem problema! Os registros DNS são os mesmos, não importa onde está:
- CNAME: www → samukajr.github.io
- A (opcional): @ → IPs do GitHub Pages

### "Dá erro 404"

Aguarde mais um pouco. O DNS ainda está propagando.
Limpe o cache do navegador (Ctrl + Shift + R).

### "Dá erro de certificado SSL"

Aguarde até 24 horas após DNS propagar.
O GitHub precisa emitir o certificado SSL.

---

## 🆘 Problemas?

### DNS não propaga

1. Verifique se digitou os registros corretamente
2. Aguarde mais tempo (até 48 horas)
3. Entre em contato com seu provedor de domínio

### GitHub não verifica DNS

1. Certifique-se que o CNAME está apontando para: samukajr.github.io
2. Aguarde alguns minutos
3. Tente remover e adicionar o domínio novamente

### Site não carrega

1. Limpe cache do navegador
2. Teste em modo anônimo
3. Teste de outro dispositivo/rede
4. Aguarde mais tempo para propagação

---

## 📊 Status da Configuração

Marque conforme faz:

- [ ] DNS configurado (CNAME: www → samukajr.github.io)
- [ ] Domínio adicionado no GitHub Pages
- [ ] DNS verificado pelo GitHub (✅ na página de settings)
- [ ] Site acessível em www.informaticasamtech.com.br
- [ ] HTTPS funcionando (cadeado verde no navegador)

---

## 🎉 Pronto!

Quando tudo estiver funcionando, seu site estará disponível em:

**https://www.informaticasamtech.com.br** 🎊

---

**Última atualização**: Fevereiro 2024
