void print_count_num (int a) {
    for (int i = 0; i <= a; i++) {
        printf("%d", i);
    };
    printf("\n");
}

int main (void) {
    int num = 10;
    print_count_num(num);
}