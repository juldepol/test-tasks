//TODO reconsider solution
function solution(S, K) {
    let s = S.split(' ');
    let messages = [''];
    let amount = 0;
    while (s.length !== 0){
        if (s[0].length <= K){
            if (messages[amount].length === 0){
                messages[amount] = s.shift();    
            } else if ((messages[amount].length + 1 + s[0].length) <= K) {
                messages[amount] = messages[amount] + ' '+s.shift();
                if (s.length !== 0 && messages[amount].length !== 0) {
                    amount++;
                    messages[amount] = Array();    
                }
            }
        } else {
            amount = -1;
            break;
        }
    }
    return (amount === -1) ? amount : messages.length;
}