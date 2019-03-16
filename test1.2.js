function solution(D, T) {
    // get data from HTML
    var table = [];
    $("tr").each(function(index, elem){
        var bg = $(elem).css("background-color");
        var item = {
            d1: null,
            d2: null,
            isOverdue: (bg === 'red') ? true : false  
        };
        var items = $(elem).children();
        item.d1 = new Date($(items[1]).text());
        var d2temp = $(items[2]).text();
        item.d2 = new Date((d2temp === '') ? D : d2temp); 
        table.push(item);
    });
    // check for mistakes
    var mistakes = 0;
    table.forEach(function(elem, id, arr){
        var daysMs = T * 1000 * 60 * 60 * 24;
        if (elem.isOverdue){
            if ((elem.d2.getTime() - daysMs) > elem.d1.getTime()){
            } else {
                mistakes++;
            }
        } else {
            if ((elem.d2.getTime() - daysMs) <= elem.d1.getTime()){
            } else {
                mistakes++;
            }
        }
    });
    return mistakes;
}