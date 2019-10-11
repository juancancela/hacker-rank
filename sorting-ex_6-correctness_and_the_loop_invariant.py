"""
/**
* @title Correctness and the loop invariant
* @statement check sorting-ex_6-correctness_and_the_loop_invariant.pdf
* @author Juan Carlos Cancela < cancela.juancarlos@gmail.com >
*/
"""


def insertion_sort(l):
    for i in range(1, len(l)):
        j = i-1
        key = l[i]
        while (j >= 0) and (l[j] > key):
            l[j+1] = l[j]
            j -= 1
        l[j+1] = key


m = int(input().strip())
ar = [int(i) for i in input().strip().split()]
insertion_sort(ar)
print(" ".join(map(str, ar)))
