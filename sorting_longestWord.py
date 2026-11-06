# 1
user_input = input("Enter a list of items separated by commas: ")

word_list = [word.strip() for word in user_input.split(",")]
print(word_list)

word_list.sort()
print(word_list)

result_string = ",".join(word_list)
print(result_string)

# 2

def find_longest_word(sentence):
   
    words = sentence.split()

    longest = ""

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest

print(find_longest_word("Margaret's toy is a pretty doll.")) 
print(find_longest_word("A thing of beauty is a joy forever."))  
print(find_longest_word("Forgetfulness is by all means powerless!"))