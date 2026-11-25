# Exercise 1:
print("Hello world\n" * 4)

# Exercise 2
print((99 ** 3)* 8)

# Exercise 3
#False
print(15 < 8 )
#False
print(5 < 3 )
#True
print(3 == 3 )
#False
print(3 == "3") 
#TypeError
#print("3" > 3)
#False
print("Hello" == "hello" )

# Exercise 4
computer_brand = "macbook pro"
print(f" I have a {computer_brand} computer")

# Exercise 5
name = "thant zin win"
age = 29
shoe_size = 42
info = "I am from myanmar"
print(f" {info} ,My name is {name}, i am {age} year old and my shoe_size is {shoe_size} .")

# Exercise 6
a = 21
b = 15
if a > b:
    print("Hello World")

# Exercise 7
user_number = int(input("Please enter a integer number "))
if user_number % 2 == 0:
    print("Your number is Even .")
elif user_number % 2 == 1 or user_number % 2 == -1:
    print("Your number is Odd .")

# Exercise 8
name = input("Enter your name ")
print(f" You are welcome {name}, you have a good name. ")

# Exercise 9
user_height = int(input("Please enter your height in cm "))
if user_height > 145:
    print("You are tall enough to ride the roller coaster.")
else:
    print("You need to grow taller before you can ride.")  

 


