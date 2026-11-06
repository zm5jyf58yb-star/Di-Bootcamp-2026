# Exercise 1
def display_message():
    print("I am learning about functions in python.")
display_message()

# Exercise 2
def favourite_book(title):
    print(f"One of my favourite book is {title}.")

favourite_book("Everythings come back to you")
favourite_book("Alice in wonderland")

# Exercise 3
def describe_city(city, country= "Unknown"):
    print(f" {city} is in {country}. ")
describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# Exercise 4
import random
def check_gest(user_number):
    secret_number = random.randint(1, 100)
    if user_number == secret_number:
        print("You are winner .")
    else:
         print("Try again. ")
         print(f" Your guess: {user_number}.")
         print(f"The secret number was: {secret_number}")
check_gest(57)

# Exercise 5
def make_shirt(size, text= "I Love Python"):
    print(f" The shirt's size is: {size} and {text}. ")
    return make_shirt
my_love = "I love Coding"
make_shirt("Large")
make_shirt("Medium")
make_shirt("Small", my_love)
make_shirt(size="small", text="Hello! ")

# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    great_list = []
    for magician in magicians:
        great_list.append("The great " + magician)
    return great_list

magician_names = make_great(magician_names)
show_magicians(magician_names)

# Ecercise 7
import random

def get_random_temp(season):
    if season == "Winter":
        return random.uniform(-10, 5) 
    elif season == "Spring":
        return random.uniform(6, 23) 
    elif season == "Summer":
        return random.uniform(24, 40) 
    else: # Autumn
        return random.uniform(10, 23)  

def main():

    month = int(input("Enter a month number (1-12): "))
    
   
    if month:
        season = "Winter"
    elif month :
        season = "Spring"
    elif month :
        season = "Summer"
    else:
        season = "Autumn"
        
    print(f"The season is {season}.")

    current_temp = get_random_temp(season)
 
    print(f"The temperature right now is {current_temp:.1f} degrees Celsius.")
 
    if current_temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= current_temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= current_temp < 24:
        print("Nice weather.")
    elif 24 <= current_temp < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

main()
