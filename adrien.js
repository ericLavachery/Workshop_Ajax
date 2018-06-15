var pageCounter = 1;
var ourData = "";
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest;
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function() {
        ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add('hide-me');
    }
});

function renderHTML(data){
    var htmlString = '';
    var i = 0;
    while (i != ourData.length) {
        htmlString += '<strong>' + ourData[i].name + '</strong>';
        htmlString += ' is a ' + ourData[i].species + ' that';
        htmlString += ' dislikes ';
        var d = 0;
        while (d != ourData[i].foods.dislikes.length) {
            if (d == 0) {
                htmlString += ourData[i].foods.dislikes[d] + ' ';
            } else {
                htmlString += 'and ' + ourData[i].foods.dislikes[d] + ' ';
            }
            d = d + 1
        }
        htmlString += 'but likes ';
        var k = 0;
        while (k != ourData[i].foods.likes.length) {
            if (k == 0) {
                htmlString += ourData[i].foods.likes[k] + ' ';
            } else {
                htmlString += 'and ' + ourData[i].foods.likes[k] + ' ';
            }
            k = k + 1
        }
        htmlString += '<br>';
        i = i + 1;
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
};
