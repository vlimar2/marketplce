#language: pt
Funcionalidade: Realizando login
Como um Participante
Quero acessar a página princial de Avon
Para então poder realizar meus resgates com sucesso
    
@login @reg
Cenário: Validar login válido
    Dado que estou na tela de login
    Quando realizar login válido
    Então devo visualizar a página principal
    