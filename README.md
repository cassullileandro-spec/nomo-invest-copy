# No.Mo Invest — aprovação da copy

Página para revisão com o cliente, em preto suave, branco e cinza, com espaços reservados para imagens.

A única fonte editorial é `Apresentação No.Mo Invest.pdf`, de 17 páginas, fornecida pelo cliente. Seções anotadas no HTML com `data-source-pages`, sem exibir essas referências na página. Interface e chamadas de navegação adaptadas para a web.

## Correspondência com o documento

- Abertura: páginas 1 e 17.
- Modelo: página 2, em seção independente.
- Dinâmica econômica: páginas 3 e 7, em outra seção.
- Setores: página 6.
- Características dos módulos: páginas 4 e 8.
- Como funciona e ciclo: páginas 9 a 12.
- Cinco pilares: página 5.
- Administração: páginas 10 e 16.
- Estimativas: página 13, incluindo os números inseridos como imagem no PDF e todas as ressalvas de estimativas e comparação. Inclusão autorizada para esta versão de aprovação; valores e premissas continuam sujeitos a validação.
- Fontes de retorno e Selic: página 14.
- FAQ: página 16.
- Depoimentos: transcrição dos três relatos da página 15, com a ressalva do material.
- Contatos e grupo: páginas 3 e 17.

A página 10 contém uma divergência: título “A Modubras administra” e corpo identificando a Nomad. A página usa “Nomad”, como no corpo, no ciclo da página 12 e no FAQ da página 16. Essa divergência permanece para confirmação do cliente.

Não são usados os conteúdos antigos sobre tipos específicos de módulo, estados de conservação, faixas de quantidade ou programa de parceiros, pois não constam desta apresentação.

Os sete espaços de imagem (abertura e seis setores) são placeholders, não fotos de ativos reais.

HTML, CSS e JavaScript estáticos, sem dependências. GitHub Pages publica a raiz da branch `main`.
Prévia local: `python3 -m http.server 4173`.

## Regra de layout

Seguir [GRID.md](GRID.md) em toda alteração visual. Revisão com guias: acrescentar `?grid=1` ao endereço da página. A visita normal não carrega o inspetor.
