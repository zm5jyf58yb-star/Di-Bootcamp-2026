import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

def check_pair_sum(num1, num2, target):
    """Conditional: Checks if two numbers equal the target."""
    if num1 + num2 == target:
        return True
    else:
        return False

def find_all_pairs(numbers, target):
    """Loops: Scans through the list to test combinations."""
    total_items = len(numbers)
    pairs_found_count = 0

    for i in range(total_items):
        first_num = numbers[i]

        for j in range(i + 1, total_items):
            second_num = numbers[j]
            
            if check_pair_sum(first_num, second_num, target):
                print("Found match: " + str(first_num) + " + " + str(second_num) + " = " + str(target))
                pairs_found_count = pairs_found_count + 1
                
    return pairs_found_count

total_pairs = find_all_pairs(list_of_numbers, target_number)

print("\n=========================================")
print("Total number of pairs found: " + str(total_pairs))
print("=========================================")
