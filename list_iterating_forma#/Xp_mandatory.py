## Exercise 1 : Set

from itertools import count


my_fav_number = {5, 6, 7, 8, 9}
my_fav_number.add(10)
my_fav_number.add(11)
my_fav_number.remove(11)
friend_fav_number = {1, 2, 3, 4, 5}
our_fav_numbers = my_fav_number.union(friend_fav_number)
print(our_fav_numbers)

# Exercise 2 : Tuple

my_tuple = (1, 2, 3, 4, 5)

my_list = list(my_tuple)
my_list.append(6)
print(my_list)

# Exercise 3 : List
my_list = ["Banana", "Apple", "Orange", "Blueberry"]
my_list.remove("Banana")
print(my_list)
my_list.remove("Blueberry")
print(my_list)
my_list.append("Kiwi")
print(my_list)
my_list.append("Apples")
print(my_list)
print(my_list.count("Apples"))

# Exercise 4 : Floats
mixed_list = []
for i in range(2, 11):
    value = i / 2
    if value.is_integer():
        mixed_list.append(int(value))
    else:
        mixed_list.append(value)
print(mixed_list)

# Exercise 5 : For Loop
for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# Exercise 6 : While Loop



while True:       # Start an infinite loop
    name = input("Please enter your name: ")
    
    # 2. Check if the name contains digits or is too short
    if name.isdigit():
        print("Please give the correct name. ")
    elif len(name) < 3 or not name.isalpha():
        print("Your name should be at least 3 characters long and contain only letters. ")
    else:
        # 3. If the name is correct, say thank you and exit the loop
        print("thank you")
        break

# Exercise 7 : Favorite Fruits

fruits_input = input("Enter your favorite fruits (separated by spaces): ")

favorite_fruits = fruits_input.split()

chosen_fruit = input("Enter the name of any fruit: ")

if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# ----- Exercise 8 ----: Who Ordered A Pizza?

toppings = []       # 1. Set up the starting values
total_cost = 10.00  # Base price

print("Welcome to the Pizza Maker!")
print("Enter your toppings one by one. Type 'quit' when you are finished.\n")

while True:   # 2. Start the loop to collect toppings
    topping = input("Enter a topping: ")
    
   
    if topping.lower() == 'quit':   # Check if the user wants to stop
        break
        
    
    toppings.append(topping)   # Add the topping to our list and update the cost
    total_cost += 2.50
    print(f"Adding {topping} to your pizza.")

print("\n--- Your Order Summary ---")   # 3. Print the final summary after the loop finishes
if toppings:
    
    print(f"Toppings: {', '.join(toppings)}")   # Joins the list items into a single string separated by commas
else:
    print("Toppings: Plain Cheese (No extra toppings)")

print(f"Total Cost: ${total_cost:.2f}")   # Format the cost to always show 2 decimal places for money

# ----- Exercise 9 ----: Cinemax Ticket
total_cost = 0            # 1. Initialize the total cost to 0
num_people = int(input("How many people are buying tickets? "))  # 2. Ask how many family members need tickets
print("\nPlease enter the age for each person:")

for i in range(1, num_people + 1):   # 3. Loop through each person to check their age
    age = int(input(f"Age of person #{i}: "))
    
    if age < 3:     # 4. Check the age rules and add to total cost
        ticket_price = 0
        print("Ticket: Free")
    elif 3 <= age <= 12:
        ticket_price = 10
        print("Ticket: $10")
    else:
        ticket_price = 15
        print("Ticket: $15")
        
    total_cost += ticket_price

print(f"\nTotal ticket cost for the family: ${total_cost}")   # 5. Print the final total
