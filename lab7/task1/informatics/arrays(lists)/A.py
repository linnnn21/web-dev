n = int(input())

arr = []
while len(arr) < n:
    arr += list(map(int, input().split()))

for i in range(0, n, 2):
    print(arr[i], end=" ")