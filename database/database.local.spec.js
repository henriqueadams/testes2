const {gravarDados}=require("./database.local");


test ("Teste buscar dados database",()=>{
    //execução
    const resultado=gravarDados("1");

    //validação
    expect(resultado).toBe(true);
});