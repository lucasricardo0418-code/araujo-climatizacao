#!/bin/bash
set -e

echo "========================================"
echo "  Build estático para HostGator"
echo "========================================"
echo ""

# Clean previous builds
echo "→ Limpando builds anteriores..."
rm -rf dist/

# Run the build
echo "→ Executando build com prerender..."
bun run build

# Verify index.html exists
if [ ! -f "dist/client/index.html" ]; then
  echo "❌ ERRO: index.html não foi gerado em dist/client/"
  exit 1
fi

echo ""
echo "→ Baixando assets do CDN (/__l5e/) para empacotamento local..."

CDN_BASE="${CDN_BASE:-https://araujo-climatizacao.lovable.app}"
OUT_DIR="dist/client"

# Coleta todas as URLs únicas /__l5e/assets-v1/... presentes nos arquivos do build
ASSET_PATHS=$(grep -rhoE '/__l5e/assets-v1/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+' "$OUT_DIR" 2>/dev/null | sort -u)

if [ -z "$ASSET_PATHS" ]; then
  echo "  (nenhuma referência /__l5e/ encontrada)"
else
  COUNT=0
  for p in $ASSET_PATHS; do
    target="$OUT_DIR$p"
    mkdir -p "$(dirname "$target")"
    if [ ! -f "$target" ]; then
      url="$CDN_BASE$p"
      if curl -sfL "$url" -o "$target"; then
        COUNT=$((COUNT+1))
        echo "  ✓ $p"
      else
        echo "  ✗ FALHA ao baixar $url"
        rm -f "$target"
        exit 1
      fi
    fi
  done
  echo "→ $COUNT asset(s) baixado(s) com sucesso."
fi

echo ""
echo "✅ Build estático gerado com sucesso!"
echo ""
echo "Arquivos gerados em: dist/client/"
echo "  - index.html (página principal)"
echo "  - .htaccess (regras de rewrite para SPA)"
echo "  - assets/ (JS, CSS, imagens)"
echo ""

# Create zip for easy upload
echo "→ Criando pacote zip para upload..."
cd dist/client
zip -r ../../araujo-climatizacao-hostgator.zip . -x "*.map"
cd ../..

echo ""
echo "========================================"
echo "  Pacote pronto: araujo-climatizacao-hostgator.zip"
echo "========================================"
echo ""
echo "INSTRUÇÕES DE UPLOAD NO HOSTGATOR:"
echo ""
echo "1. Acesse o cPanel → Gerenciador de Arquivos"
echo "2. Navegue até a pasta public_html/"
echo "3. Faça upload do arquivo araujo-climatizacao-hostgator.zip"
echo "4. Extraia o conteúdo do zip na pasta public_html/"
echo ""
echo "IMPORTANTE: O arquivo .htaccess incluído configura"
echo "o rewrite para que o SPA (Single Page Application)"
echo "funcione corretamente no Apache."
echo ""
