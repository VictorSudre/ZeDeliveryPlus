///<reference types="cypress"/>
import PageObjectsNew from './PageObjectsPlus'
describe('Teste Zé Delivery Plus',()=>{

       it('Cenario E2E Zé Delivery com Login', function (){
       PageObjectsNew.Acessar()
       PageObjectsNew.Logar()
       PageObjectsNew.Espera()
       PageObjectsNew.ConfirmarMaiorIdade()
       PageObjectsNew.ValidarUser()
       PageObjectsNew.AdicionarCerveja()
       PageObjectsNew.AdicionarDestilado()
       PageObjectsNew.AdicionarVinho()
       PageObjectsNew.AdicionarItemDaLojinha()
       PageObjectsNew.AdicionarComidinha()
       PageObjectsNew.BotãoContinuar()
       PageObjectsNew.ValidarItensDoPedido()
       PageObjectsNew.AdicionarCupom()
    


       })
      
})