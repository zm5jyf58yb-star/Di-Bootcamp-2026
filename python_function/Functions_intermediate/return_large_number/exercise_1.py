def find_largest_number(numbers):
    largest = numbers[0]
    for number in numbers:
        if number > largest:
            largest = number
    return largest
print(find_largest_number([1, 2, 3, 4]))  # Output: 4
print(find_largest_number([10, 20, 5]))  # Output: 20