# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
print(dict(zip(keys, values)))

# Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
print("----Ticlets price person----")

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    print(name.capitalize() + " (Age " + str(age) + "): $" + str(price))
    total_cost = total_cost + price

print("-----------------------")
print(f" Total cost for family: $ { total_cost}")

print("--------------------------------------------------------------------------")
# Exercise 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio, Ortega, Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]
}
}
brand["number_stores"] = 2
print(brand)

zara_client = brand["type_of_clothes"]
print("zara sell clothes for:", zara_client)

brand.update({"Country_cretion": "Spain", })
print(brand)

if "international_competitors" in brand:
   brand["international_competitors"].append("Desigual")
   print(brand)

del brand["creation_date"]
print(brand)

competitors = brand["international_competitors"]
print(f" The last item of international_competitors is", competitors[-1])

colour = brand["major_color"]["US"]
print(f"Major colours in the US are", colour)

number_of_keys = len(brand)
print("Number of keys are", number_of_keys)

all_keys = brand.keys()
print("All key in dict are", all_keys)

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print("\n Merged dictionary:")
print(brand)

# Exercise 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

dictionary_1 = {character: index for index, character in enumerate(users)}
print("Result 1:", dictionary_1)

dictionary_2 = {index: character for index, character in enumerate(users)}
print("Result 2:", dictionary_2)

dictionary_3 = {character: index for index, character in enumerate(sorted(users))}
print("Result 3:", dictionary_3)
