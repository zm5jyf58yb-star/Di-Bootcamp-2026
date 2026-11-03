def check_sign(num):
    if num >0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"
print(check_sign(10))  # Output: "Positive"
print(check_sign(-5))  # Output: "Negative"
print(check_sign(0))   # Output: "Zero"