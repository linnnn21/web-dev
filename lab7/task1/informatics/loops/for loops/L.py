x = input()

res = 0

for digit in x:
    res = res * 2 + int(digit)

print(res)