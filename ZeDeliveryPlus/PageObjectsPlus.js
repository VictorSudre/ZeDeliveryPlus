const el = require ('./ElementosPlus').ELEMENTS
class PageObjectsNew{
 Acessar(){
    cy.visit('https://www.ze.delivery/')
    cy.get(el.AceitarCookies).click()
 }

 Logar(){
    cy.get(el.BotaoEntrar).click()
    cy.get(el.TelaLogin).should('contain', 'Entrar na conta com E-mail e senha:')
    cy.get(el.CampoEmail).type()//<----- Adicionar Email antes de executar
    cy.get(el.CampoSenha).type()//<----- Adicionar Senha antes de executar
    cy.get(el.BotaoLogar).click()
 }

 Espera(){
    cy.wait(3000)
 }
 ConfirmarMaiorIdade(){
    cy.get(el.PopUpMaiorIdade).should('contain', 'Você tem 18 anos ou mais?')
    cy.get(el.OpcaoSimMaiorDe18).click()
 }

 ValidarUser(){
    cy.get(el.Cabeçalho).should('contain', 'Victor')//<----- Adicionar nome do úsuario logado (Exemplo: Victor)
    cy.get(el.ItensSacola).should('contain', '0')
 }

 AdicionarCerveja(){
    cy.get(el.CategoriaCervejas).click()
    cy.wait(2000)
    cy.get(el.CervejaBrahma).click()
    cy.get(el.PaginaAtual).should('contain', 'Brahma')
    cy.get(el.BrahmaDuploMalte).click()
    cy.get(el.AdicionarProduto).click()
    cy.get(el.ChecarProduto).should('contain', 'Brahma Duplo Malte 350ml')
    cy.get(el.FecharTelaSacola).click()
 }

 AdicionarDestilado(){
    cy.get(el.CategoriaDestilado).click()
    cy.get(el.DestiladoBeats).click()
    cy.get(el.PaginaAtual).should('contain', 'Beats')
    cy.get(el.SkolBeats).click()
    cy.get(el.AdicionarProduto).click()
    cy.get(el.ChecarProduto).should('contain', 'Beats Senses')
    cy.get(el.FecharTelaSacola).click()
 }

 AdicionarVinho(){
    cy.get(el.CategoriaVinhos).click()
    cy.get(el.VinhosBranco).click()
    cy.get(el.TorrontesCava).click()
    cy.get(el.AdicionarProduto).click()
    cy.get(el.ChecarProduto).should('contain', 'Vinho Branco Torrontés Cava Negra 750ml')
    cy.get(el.FecharTelaSacola).click()
 }


 AdicionarItemDaLojinha(){
    cy.get(el.CategoriaLojinha).click()
    cy.get(el.GeloLojinha).click()
    cy.get(el.Gelo5kg).click()
    cy.get(el.AdicionarProduto).click()
    cy.get(el.ChecarProduto).should('contain', 'Saco de Gelo em Cubos - 5kg')
    cy.get(el.FecharTelaSacola).click()
 }

 AdicionarComidinha(){
    cy.get(el.CategoriaComidinha).click()
    cy.get(el.ChocolatesComidinha).click()
    cy.get(el.BisLacta).click()
    cy.get(el.AdicionarProduto).click()
    cy.get(el.ChecarProduto).should('contain', 'Chocolate Bis Lacta ao Leite 126g')
 }

 BotãoContinuar(){
    cy.get(el.BotaoContinuar).click()
 }

 ValidarItensDoPedido(){
    cy.get(el.ItensDeCompra)
    .should('contain', 'Beats Senses 269ml')
    .should('contain', 'Brahma Duplo Malte 350ml')
    .should('contain', 'Saco de Gelo em Cubos - 5kg')
    .should('contain', 'Vinho Branco Torrontés Cava Negra 750ml')
    .should('contain', 'Chocolate Bis Lacta ao Leite 126g')
 }

 AdicionarCupom(){
    cy.get(el.AcessarTelaCupom).click()
    cy.get(el.AdicionarCupom).click()
    cy.get(el.DetalhesDOCupom).should('contain', 'DOUCABOR9')
    cy.get(el.CheckoutValores).should('contain', 'Desconto do cupom')
 }

}

export default new PageObjectsNew();