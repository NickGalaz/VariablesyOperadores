Algoritmo M2_Desafio
	// Ejercicio 1 y 2
	Escribir 'Ingrese el primer número diferente a 0:'
	Leer num1
	Escribir 'Ingrese el segundo número diferente a 0:'
	Leer num2
	Suma <- num1+num2
	Resta <- num1-num2
	Multiplicación <- num1*num2
	División <- num1/num2
	Escribir 'El resultado es: ',Suma
	Escribir 'El resultado es: ',Resta
	Escribir 'El resultado es: ',Multiplicación
	Escribir 'El resultado es: ',División
	Si num1 MOD num2=0 Entonces
		Escribir num1,' es divisor exacto de ',num2,'.'
	SiNo
		Escribir 'El resto de dividir ',num2,' por ',num1,' es: ',num2 MOD num2
	FinSi
	// Ejercicio 3
	Escribir 'Ingrese la temperatura en grados celsius:'
	Leer celsius
	// transforma a Kelvin
	Kelvin <- celsius+273.15
	// Transforma a farenheith
	Faren <- (celsius*9/5)+32
	// Mostrar la conversion de unidades
	Escribir 'La temperatura celsius a kelvin es: ',Kelvin
	Escribir 'La temperatura celsius a farenheith es: ',Faren
	// Ejercicio 4
	Escribir 'Ingrese la cantidad de dias:'
	Leer cantdias
	anyos <- TRUNC(cantdias/365)
	restoanyos <- TRUNC(cantdias MOD 365)
	semanas <- TRUNC(restoanyos/7)
	dias <- TRUNC(semanas MOD 7)
	Escribir cantdias,' dia(s) equivalen a ',anyos,' año(s),',semanas,' semana(s) y ',dias,' dia(s)'
	// Ejercicio 5
	Escribir 'Ingrese el primer número:'
	Leer numero1
	Escribir 'Ingrese el segundo número:'
	Leer numero2
	Escribir 'Ingrese el tercer número:'
	Leer numero3
	Escribir 'Ingrese el cuarto número:'
	Leer numero4
	Escribir 'Ingrese el quinto número:'
	Leer numero5
	Sumatotal <- numero1+numero2+numero3+numero4+numero5
	Promedio <- Sumatotal/5
	Escribir 'El promedio es: ',Promedio
FinAlgoritmo
