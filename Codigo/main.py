numero1 = 15
numero2 = 16
resultado = 0

resultado = numero1 + numero2


print("Vea el resultado es el siguiente: ", resultado)



numero3 = 60

# % es para guardar en memoria el resultado
# / es para guardar en memoria el cociente

if(numero3 % 2 == 0):
    print("Ese numero es par")
else:
    print("Ese numero es impar")


if numero3 != 40:
    print("SI es diferente. El numero comparado es: ", numero3)
else:
    print("Son los mismos numeros")

if (numero3 > 60):
    print("Si es mayor a 60 ")
else:
    print("No es mayor que 60")

if (numero3 >= 60):
    print("Si es mayor e igual 60 ")
else:
    print("No es mayor que 60")




# La discoteca solo acepta jovenes que esten vestidos de negro y tengan 18años

ropa = 'verde'
edad = 18

if(ropa == 'negro' and edad == 18):
    print("Cumple con las reglas de la discoteca")
else:
    print("No cumple con las reglas de la discoteca")


if(ropa == 'negro' or edad == 18):
    print("Cumple con las reglas de la discoteca ..")
else:
    print("No cumple con las reglas de la discoteca ..")


#Queremos recibir datos por consola
print("Hola mucho como te llamas ?")
nombre = input()
print("Mucho en conocerte", nombre)
