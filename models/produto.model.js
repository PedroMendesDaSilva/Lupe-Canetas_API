const conexao = require('produto/database/connection')
async function getTodos(){
    try{
        let[rows]=await conexao.query(`
            select
            *
            from tb_produto
            `)
            return rows
        }catch(e){
            return e
        }
    }
module.exports = {
    getTodos
}