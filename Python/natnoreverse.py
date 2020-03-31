#Write a program to print all natural numbers in reverse (from n to 1). - using while loop 

num = input("reverse number")
for i in range(num, 0, -1):
    print i


reverse_number = input("Enter the number")
rev = reverse_number
while (rev >= 1):
    print rev
    rev -= 1
