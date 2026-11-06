import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

HANGMAN_STAGES = [
    """
       --------

       |      |
       |      
       |    
       |      
       |     
    - - - - - - -
    """,
    """
       --------

       |      |
       |      O
       |    
       |      
       |     
    - - - - - - -
    """,
    """
       --------

       |      |
       |      O

       |      |
       |      
       |     
    - - - - - - -
    """,
    """
       --------

       |      |
       |      O

       |     /|
       |      
       |     
    - - - - - - -
    """,
    """
       --------

       |      |
       |      O

       |     /|\\
       |      
       |     
    - - - - - - -
    """,
    """
       --------

       |      |
       |      O

       |     /|\\
       |     / 
       |     
    - - - - - - -
    """,
    """
       --------

       |      |
       |      O

       |     /|\\
       |     / \\
       |     
    - - - - - - -
    """
]

guessed_letters = set()
wrong_guesses = 0
max_wrong_guesses = 6

while wrong_guesses < max_wrong_guesses:
    print(HANGMAN_STAGES[wrong_guesses])

    display_word = ""
    for char in word:
        if char == " ":
            display_word += "  "
        elif char in guessed_letters:
            display_word += char + " "
        else:
            display_word += "* "
            
    print("Word: " + display_word.strip())
    print("Guessed letters: " + ", ".join(sorted(list(guessed_letters))))
    
    if "*" not in display_word:
        print("\n🎉 Congratulations! You guessed the word: " + word)
        break

    guess = input("Guess a letter: ").lower().strip()
    
    if len(guess) != 1 or not guess.isalpha():
        print("\n❌ Invalid input! Please enter a single alphabetical letter.")
        continue
    if guess in guessed_letters:
        print("\n⚠️ You already guessed the letter '" + guess + "'. Try a different one!")
        continue
        
    guessed_letters.add(guess)
    
    if guess in word:
        print("\n✅ Good job! '" + guess + "' is in the word.")
    else:
        wrong_guesses += 1
        print("\n❌ Incorrect! '" + guess + "' is not in the word.")
        print("Remaining attempts: " + str(max_wrong_guesses - wrong_guesses))

if wrong_guesses == max_wrong_guesses:
    print(HANGMAN_STAGES[wrong_guesses])

    print("\n💀 Game Over! You have been hanged.")
    print("The correct word was: '" + word + "'")
