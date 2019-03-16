function solution(A, B) {
    let res = '';
    let item = '';
    while (A > 0 || B > 0){
        if (A > 0 && B > 0){
            if (A > B){
                item = 'aab';
                A -= 2;
                B--;
            } else if (A < B) {
                item = 'bba';
                A--;
                B -= 2;
            } else {
                if (B > 1){
                    item = 'abab';
                    A -= 2;
                    B -= 2;
                } else {
                    item = 'ab';
                    A--;
                    B--;
                }
            }
        } else {
            if (A > 0){
                item = ('a').repeat(A);
                A = 0;
            } else {
                item = ('b').repeat(B);
                B = 0
            }   
        }
        res = res + item;
    }
    return res;
}