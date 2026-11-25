# Challenge 1

word = input("Please enter a word: ")
letter_indices = {}

for index in range(len(word)):
    character = word[index]

    if character in letter_indices:
        letter_indices[character].append(index)
    else:
        letter_indices[character] = [index]
print(letter_indices)


# Challenge 2

items_purchase = {
    "Water": "$1", 
    "Bread": "$3", 
    "TV": "$1,000", 
    "Fertilizer": "$20"
}
wallet = "$300"

wallet_clean = wallet.replace("$", "")
wallet_clean = wallet_clean.replace(",", "")
wallet_money = int(wallet_clean)

basket = []
for item in items_purchase:
    price_string = items_purchase[item]
    price_clean = price_string.replace("$", "")
    price_clean = price_clean.replace(",", "")
    price_money = int(price_clean)

    if wallet_money >= price_money:
        basket.append(item)

        wallet_money = wallet_money - price_money

if len(basket)  == 0:
    print("Nothing")
else:
    basket.sort()
    print(basket)

# Challenge 3
