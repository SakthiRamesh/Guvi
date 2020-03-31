#Write a program to print all even numbers between 1 to 100.


minimum = input("enter the min")
maximum = input("enter the max")
for even in range(minimum, maximum):
    if even % 2 == 0:
        print even
