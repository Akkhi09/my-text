# def encontrar_maior_numero(lista):
#     if not lista:
#         return None
#     maior = lista[0]
#     for numero in lista:
#         if numero > maior:
#             maior = numero
#     return maior

# def maior(lista):
#     return max(list) if lista else None

# def validar_senha(senha):
#     caracteres_especiais = "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?"
#     lenght = False
#     maiuscula = False
#     number = False
#     caracter = False
#     if len(senha)>= 8:
#         lenght = True
#     for s in senha:
#         if s.isupper():
#             maiuscula =True
#         if s.isdigit():
#             number = True
#     for c in caracteres_especiais:
#         if c in senha:
#             caracter = True
#     print(number, caracter)
# #validar_senha("Antonio")

def contar_bugs(lista):
    if not lista:
        return "digite a lista de bugs"
    q_bug=0
    for bug, i in lista:
        bug= bug
        if bug != bug:
            list_bug= bug
        else:
            q_bug=i;
contar_bugs(["Erro no login",  "Erro na API de pagamento", "Erro no login",  "Bug visual no dashboard",  "Erro no login"])
print()

"""

/frontend/ em React.js

/backend/ em Django REST

/mobile/ (Flutter, tu não mexe por enquanto)

/docs/ com documentação interna
"""