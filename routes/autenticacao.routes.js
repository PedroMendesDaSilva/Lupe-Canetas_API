const express = require('express');
const router = express.Router();
const sql = require('../models/autenticacao.model');
const sha1 = require('sha1')







router.post('/autenticar',function(req,res){
    let requisicao = req.body;
    requisicao.senha = sha1(requisicao.senha);
      sql.autenticaUsuario(req.body.login,req.body.senha)
        .then((resposta)=>{
            console.log(resposta)
            if(resposta instanceof Error){
                res.status(500).json(resposta);
                return;
            }
            if(resposta.length != 1){
                res.status(401).json({mensagem:'Usuário'})
                return;
            }
            res.status(200).json(resposta);
         })
})


module.exports = router;

router.post('/geraSenhaCripto',(req,res) =>{
    let senha = req.body.senha;''
    if(!senha || senha == ''){
        res.status(400).json({mensagem:'Senha vazia'})
        return;
    }
    senha = sha1(senha);
    res.status(201).json ({senha})
})