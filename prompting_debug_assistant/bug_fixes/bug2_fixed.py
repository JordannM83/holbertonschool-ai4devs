#!/usr/bin/python3
def findPairNum():
    verif = 0
    i = 1
    while verif == 0:
        if i % 2 == 0:
            verif = 1
            print(i)
        i += 1


findPairNum()
