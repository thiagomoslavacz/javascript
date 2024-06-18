## Ambiente do Browser

- O JavaScript foi criado originalmente para a web.
- Já vimos como inserir JS numa página web.
- O ambiente onde o JavaScript é executado disponibiliza funcionalidades extra.

## Browser

    (para além de interpretar HTML e CSS...)

    window {
        DOM (Document Object Model)
            - Acesso aos elementos HTML que existem na página.
            - O DOM representa o conteúdo da página na forma de objetos que podemos modificar.
            - O 'document' é o principal ponto de entrada para modificar o conteúdo HTML.

        BOM (Browser Object Model)
            - Contém objetos adicionais para manipular o browser, exceto o documento HTML.
            Exemplo:
                'navigator' permite obter informações do sistema.
                'location' permite ler a URL atual e redirecionar para outra página.

        JavaScript Core
            - Os mecanismos internos do JavaScript:
                (sintaxe, arrays, objetos, classes, etc.)
    }
