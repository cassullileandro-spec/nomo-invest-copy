# No.Mo Invest — aprovação da copy

Página para revisão com o cliente, em preto suave, branco e cinza, com espaços reservados para imagens.

A única fonte editorial é `Apresentação No.Mo Invest.pdf`, de 17 páginas, fornecida pelo cliente. Seções anotadas no HTML com `data-source-pages`, sem exibir essas referências na página. Interface e chamadas de navegação adaptadas para a web.

## Direção editorial

O site apresenta a proposta e desperta interesse em receber a apresentação; não reproduz o deck página por página. Fatos e condições vêm do PDF, com redação própria para a web. Depoimentos permanecem literais.

- Abertura: benefício e funcionamento em poucas linhas, com ticket da página 9.
- Modelo e dinâmica: seções independentes; o que se adquire e de onde pode vir a receita (páginas 2, 5, 7, 9, 12 e 14).
- Setores e módulos: possibilidades de uso, reutilização e limites (páginas 4 a 8).
- Jornada: aquisição, administração e vínculo com a locação (páginas 9 a 12).
- Operação: responsabilidades da Nomad (páginas 10 e 16).
- Estimativas: faixa de ~1,5% a 2,0% ao mês da página 13, com condições e ressalvas. Comparações com outros produtos ficaram para a apresentação; não se sugere equivalência de risco ou superioridade.
- Depoimentos: três relatos literais da página 15 e respectiva ressalva.
- FAQ: retorno, manutenção e saída (página 16).
- Conversão: solicitação da apresentação pelo WhatsApp da página 17, com mensagem preenchida. O visitante decide enviar; o site não envia mensagens nem entrega o PDF automaticamente.

Os blocos repetidos de cinco pilares e comparação com a Selic foram absorvidos pela narrativa principal. O PDF permanece como material de aprofundamento. Não foram criadas promessas, garantias, estatísticas, prazos de atendimento ou argumentos sem base documental.

A página 10 contém uma divergência: título “A Modubras administra” e corpo identificando a Nomad. A página usa “Nomad”, como no corpo, no ciclo da página 12 e no FAQ da página 16. Essa divergência permanece para confirmação do cliente.

Não são usados os conteúdos antigos sobre tipos específicos de módulo, estados de conservação, faixas de quantidade ou programa de parceiros, pois não constam desta apresentação.

Os sete espaços de imagem (abertura e seis setores) são placeholders, não fotos de ativos reais.

HTML, CSS e JavaScript estáticos, sem dependências. GitHub Pages publica a raiz da branch `main`.
Prévia local: `python3 -m http.server 4173`.

## Regra de layout

Seguir [GRID.md](GRID.md) em toda alteração visual. Revisão com guias: acrescentar `?grid=1` ao endereço da página. A visita normal não carrega o inspetor.

Notas pequenas e asteriscos removidos a pedido do usuário. As condições essenciais foram incorporadas à copy principal; as ressalvas de estimativas seguem junto da tabela, em 16/24 px. Placeholders preservam a descrição acessível sem rótulos visuais.
