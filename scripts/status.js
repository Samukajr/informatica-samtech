#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

console.log('📊 STATUS DO PROJETO\n');
console.log('═'.repeat(50));
console.log('\n');

async function showStatus() {
  // Git status
  console.log('📂 Git Status:\n');
  try {
    const { stdout: branch } = await execAsync('git branch --show-current');
    console.log(`   Branch atual: ${branch.trim()}`);
    
    const { stdout: status } = await execAsync('git status --short');
    if (status.trim()) {
      console.log('   Arquivos modificados:');
      console.log(status.split('\n').map(line => '     ' + line).join('\n'));
    } else {
      console.log('   ✅ Nenhuma mudança pendente');
    }
  } catch (e) {
    console.log('   ⚠️  Não é um repositório git');
  }
  
  console.log('\n');
  
  // CNAME check
  console.log('🌐 Configuração de Domínio:\n');
  const cnameFile = path.join(__dirname, '..', 'CNAME');
  if (fs.existsSync(cnameFile)) {
    const domain = fs.readFileSync(cnameFile, 'utf8').trim();
    console.log(`   ✅ CNAME: ${domain}`);
  } else {
    console.log('   ❌ CNAME não encontrado');
  }
  
  console.log('\n');
  
  // Files check
  console.log('📄 Arquivos do Site:\n');
  const files = [
    'index.html',
    'css/style.css',
    'js/script.js',
    '.github/workflows/deploy.yml'
  ];
  
  files.forEach(file => {
    const filepath = path.join(__dirname, '..', file);
    const exists = fs.existsSync(filepath);
    const icon = exists ? '✅' : '❌';
    console.log(`   ${icon} ${file}`);
  });
  
  console.log('\n');
  
  // URLs
  console.log('🔗 URLs:\n');
  console.log('   GitHub: https://github.com/Samukajr/informatica-samtech');
  console.log('   Settings: https://github.com/Samukajr/informatica-samtech/settings/pages');
  console.log('   Actions: https://github.com/Samukajr/informatica-samtech/actions');
  console.log('   Site: https://www.informaticasamtech.com.br');
  
  console.log('\n');
  
  // Next steps
  console.log('📝 Próximos Passos:\n');
  console.log('   1. Configure DNS no seu provedor');
  console.log('   2. Rode: npm run check-dns');
  console.log('   3. Aguarde propagação (1-4 horas)');
  console.log('   4. Verifique: https://www.informaticasamtech.com.br');
  
  console.log('\n');
  console.log('═'.repeat(50));
}

showStatus();
