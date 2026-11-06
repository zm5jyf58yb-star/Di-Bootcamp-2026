MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%''' 

matrix = [list(line) for line in MATRIX_STR.strip().split('\n') if line]
print(matrix)
num_rows = len(matrix)
num_cols = len(matrix[0])
print(num_rows)
print(num_cols)

raw_column_chars = []
for col in range(num_cols):
    for row in range(num_rows):    
        raw_column_chars.append(matrix[row][col])
print(raw_column_chars)

decoded_message = ""
for char in raw_column_chars:
    if char.isalpha():
        decoded_message += char
    else:    
        
            decoded_message += " "

print(decoded_message)