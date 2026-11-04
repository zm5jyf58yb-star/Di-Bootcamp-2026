import random

def guess_number():
    number = random.randint(1, 100)
    attempts = 7

    while attempts > 0:
        try:
            guess = int(input("Guess the number (1-100): "))
            attempts -= 1

            if guess < number:
                print("Too low!")
            elif guess > number:
                print("Too high!")
            else:
                print(f"Congratulations! You guessed the number in {7 - attempts} attempts.")
                break
        except ValueError:
            print("Please enter a valid number.")

    if attempts == 0:
        print(f"Sorry, you've run out of attempts. The number was {number}.")

if __name__ == "__main__":
    guess_number()