export function postPublicacoes() {
    // Essa funcao a baixo e que manda os dados para a api, e so mudares o link
    async function Get({ titulo, descricao }) {
        //Os dados que estaras a mandar sao o tutulo e a descricao
        // podes colocar nessa constante a baixo e mandas logo tudo junto
        const publicacoes = {
            title: titulo,
            description: descricao
        }
        let dados = fetch("http://localhost:8000/api/posts", {

            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(publicacoes)
        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    return { Get }
}