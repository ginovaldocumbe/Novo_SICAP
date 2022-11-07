export function getPublicacoes() {
    // Essa funcao a baixo e que busca os dados da api, e so mudares o link
    async function Get() {
        let dados = fetch("http://localhost:8000/api/posts", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    return { Get }
}