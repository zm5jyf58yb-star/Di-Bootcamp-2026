# 1
board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
# 2
def display_board():
    print("\nTIC TAC TOE")

    print("<<<<<< row >>>>>>")
    for i in range(3):
        print("*   " + board[i][0] + " | " + board[i][1] + " | " + board[i][2] + "   *")    
        if i < 2:
            print("*  ---|---|---  *")            
    print("<<<<<< row >>>>>>")
# 3
def player_input(player):
    print("\nPlayer " + player + "'s turn...")
    while True:        
        row = int(input("Enter row: ")) - 1
        col = int(input("Enter column: ")) - 1

        if row >= 0 and row <= 2 and col >= 0 and col <= 2:
            if board[row][col] == " ":
                board[row][col] = player
                break 
            else:
                print("That spot is taken!")
        else:
            print("Invalid input! Use numbers 1, 2, or 3.")
# 4
def check_win(board, player):
    for i in range(3):
        # for rows
        if board[i][0] == player and board[i][1] == player and board[i][2] == player:
            return True
        # for colus
        if board[0][i] == player and board[1][i] == player and board[2][i] == player:
            return True
    # for diagonsis
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False
# 5
def check_tie(board):       # space for sport
    for row in range(3):
        for col in range(3):
            if board[row][col] == " ":
                return False
    return True
# 6
print("Welcome to TIC TAC TOE!")
current_player = "X"

while True:
    display_board()
    player_input(current_player)

    if check_win(board, current_player):
        display_board()
        print("\nPlayer " + current_player + " wins!")
        break 

    if check_tie(board):
        display_board()
        print("\nIt's a tie!")
        break 

    if current_player == "X":
        current_player = "O"
    else:
        current_player = "X"
