

def human_years_cat_dog_years(human_years):
    if human_years == 1:
        cat_years, dog_years = 15, 15
    elif human_years == 2:
        cat_years, dog_years = 24, 24
    else:
        cat_years = 24 + (human_years - 2) * 4
        dog_years = 24 + (human_years - 2) * 5
        
    return [human_years, cat_years, dog_years]

# Example usage:
print(human_years_cat_dog_years(10)) 
# Output: [10, 56, 64]
print(human_years_cat_dog_years(1))
# output: [1, 15, 15]
print(human_years_cat_dog_years(2))
# output: [2, 24, 24]
