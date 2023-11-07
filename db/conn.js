const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc','root','1260',{
    host: 'localhost',
    dialect: 'mysql',
})
try{
    sequelize.authenticate()
    console.log('Conectou ao mysql');
}catch(error){
    console.error(`Não foi possivel conectar: ${error}`)
}

module.exports =sequelize