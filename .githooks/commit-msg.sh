#!/bin/sh

commit_message=$(cat "$1")
pattern="^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}"

if echo "$commit_message" | grep -qE "$pattern"; then
  echo "✅ Commit message válida!"
  exit 0
else
  echo "❌ Commit message inválida!"
  echo ""
  echo "Exemplos válidos:"
  echo "  feat: adicionar botão de login"
  echo "  fix(login): corrigir erro de autenticação"
  echo "  chore: atualizar dependências"
  exit 1
fi
