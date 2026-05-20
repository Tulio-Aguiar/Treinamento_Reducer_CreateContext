#!/usr/bin/env python3
"""
resumo_docs.py — Protocolo Aruanda
Varre um projeto em busca de arquivos .html, .css e .js,
captura o conteúdo de cada um e gera resumo-docs.md na raiz.

Uso:
    python resumo_docs.py                  # usa o diretório atual
    python resumo_docs.py /caminho/projeto # usa o caminho informado
"""

import sys
import os
from pathlib import Path
from datetime import datetime

EXTENSOES_ALVO = {".html", ".css", ".js"}

DIRETORIOS_IGNORADOS = {
    "node_modules",
    ".git",
    ".next",
    "dist",
    "build",
    ".cache",
    "coverage",
    "__pycache__",
    ".venv",
    "venv",
}

NOME_SAIDA = "resumo-docs.md"


def coletar_arquivos(raiz: Path) -> list[Path]:
    arquivos = []

    for caminho in sorted(raiz.rglob("*")):
        if not caminho.is_file():
            continue

        partes = caminho.relative_to(raiz).parts
        if any(parte in DIRETORIOS_IGNORADOS for parte in partes):
            continue

        if caminho.suffix.lower() in EXTENSOES_ALVO:
            arquivos.append(caminho)

    return arquivos


def ler_arquivo(caminho: Path) -> str:
    try:
        return caminho.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            return caminho.read_text(encoding="latin-1")
        except Exception as erro:
            return f"[erro ao ler o arquivo: {erro}]"


def mapear_linguagem(extensao: str) -> str:
    mapa = {
        ".html": "html",
        ".css": "css",
        ".js": "javascript",
    }
    return mapa.get(extensao.lower(), "")


def gerar_markdown(raiz: Path, arquivos: list[Path]) -> str:
    linhas = []

    linhas.append(f"# resumo-docs\n")
    linhas.append(f"> Gerado em {datetime.now().strftime('%d/%m/%Y às %H:%M')}  ")
    linhas.append(f"> Raiz do projeto: `{raiz}`  ")
    linhas.append(f"> Arquivos encontrados: {len(arquivos)}\n")
    linhas.append("---\n")

    agrupado: dict[str, list[Path]] = {".html": [], ".css": [], ".js": []}
    for arquivo in arquivos:
        ext = arquivo.suffix.lower()
        agrupado[ext].append(arquivo)

    linhas.append("## Índice\n")
    for ext, lista in agrupado.items():
        if lista:
            linhas.append(f"### {ext.upper()}\n")
            for arquivo in lista:
                rel = arquivo.relative_to(raiz)
                ancora = str(rel).replace("/", "").replace("\\", "").replace(".", "").replace(" ", "-").lower()
                linhas.append(f"- [`{rel}`](#{ancora})\n")

    linhas.append("\n---\n")

    for ext, lista in agrupado.items():
        if not lista:
            continue

        linhas.append(f"## Arquivos {ext.upper()}\n")

        for arquivo in lista:
            rel = arquivo.relative_to(raiz)
            ancora = str(rel).replace("/", "").replace("\\", "").replace(".", "").replace(" ", "-").lower()
            linguagem = mapear_linguagem(ext)
            conteudo = ler_arquivo(arquivo)
            tamanho = arquivo.stat().st_size

            linhas.append(f"### `{rel}` {{#{ancora}}}\n")
            linhas.append(f"> {tamanho:,} bytes\n")
            linhas.append(f"```{linguagem}")
            linhas.append(conteudo.rstrip())
            linhas.append("```\n")

    return "\n".join(linhas)


def main() -> None:
    raiz = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()

    if not raiz.exists() or not raiz.is_dir():
        print(f"Erro: '{raiz}' não é um diretório válido.")
        sys.exit(1)

    print(f"Varrendo: {raiz}")

    arquivos = coletar_arquivos(raiz)

    if not arquivos:
        print("Nenhum arquivo .html, .css ou .js encontrado.")
        sys.exit(0)

    contagem = {ext: sum(1 for a in arquivos if a.suffix.lower() == ext) for ext in EXTENSOES_ALVO}
    for ext, total in contagem.items():
        if total:
            print(f"  {ext}: {total} arquivo(s)")

    markdown = gerar_markdown(raiz, arquivos)

    destino = raiz / NOME_SAIDA
    destino.write_text(markdown, encoding="utf-8")

    print(f"\nArquivo gerado: {destino}")


if __name__ == "__main__":
    main()
