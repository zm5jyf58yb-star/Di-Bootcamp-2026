def sum_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total
print(sum_list([1, 2, 3, 4]))
print(sum_list([5, 5, 5]))