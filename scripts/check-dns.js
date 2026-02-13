#!/usr/bin/env node

const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

const DOMAIN = 'www.informaticasamtech.com.br';
const EXPECTED_CNAME = 'samukajr.github.io';

console.log('🔍 Verificando configuração DNS...\n');

async function checkDNS() {
  try {
    console.log(`Domínio: ${DOMAIN}`);
    console.log(`Esperado: ${EXPECTED_CNAME}\n`);
    
    // Check with nslookup
    console.log('📡 Consultando DNS...');
    const { stdout } = await execAsync(`nslookup ${DOMAIN}`);
    
    console.log(stdout);
    
    if (stdout.includes(EXPECTED_CNAME)) {
      console.log('✅ DNS CONFIGURADO CORRETAMENTE!');
      console.log(`✅ ${DOMAIN} → ${EXPECTED_CNAME}\n`);
      console.log('🎉 Seu site deve estar funcionando em:');
      console.log(`   https://${DOMAIN}\n`);
      return true;
    } else {
      console.log('❌ DNS NÃO CONFIGURADO!');
      console.log(`❌ ${DOMAIN} NÃO aponta para ${EXPECTED_CNAME}\n`);
      console.log('📝 Você precisa adicionar este registro no seu provedor:');
      console.log('   Tipo: CNAME');
      console.log('   Nome: www');
      console.log(`   Valor: ${EXPECTED_CNAME}\n`);
      console.log('📖 Veja: ERRO-DNS-SOLUCAO.md\n');
      return false;
    }
  } catch (error) {
    console.log('❌ Erro ao verificar DNS:');
    console.log(error.message);
    console.log('\n⚠️  Possíveis causas:');
    console.log('   1. DNS ainda não propagou (aguarde 1-4 horas)');
    console.log('   2. DNS não está configurado');
    console.log('   3. Comando nslookup não disponível\n');
    console.log('🌐 Teste online: https://www.whatsmydns.net\n');
    return false;
  }
}

// Run check
checkDNS().then(success => {
  process.exit(success ? 0 : 1);
});
