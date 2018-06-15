
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        animals1 = JSON.parse(this.responseText);
        console.log(animals1);

        var divInsert = document.getElementById('animal-info');
        var myAnimals = '';

        var i = 0;
        while (i != animals1.length) {
            myAnimals += '<br><strong>' + animals1[i].name + '</strong><br>';
            myAnimals += 'is a ' + animals1[i].species + '<br>';
            myAnimals += 'Dislikes : ';
            var d = 0;
            while (d != animals1[i].foods.dislikes.length) {
                myAnimals += animals1[i].foods.dislikes[d] + ', ';
                d = d + 1
                if (d >= 5) {break;}
            }
            myAnimals += '<br>Likes : ';
            var k = 0;
            while (k != animals1[i].foods.likes.length) {
                myAnimals += animals1[i].foods.likes[k] + ', ';
                k = k + 1
                if (k >= 5) {break;}
            }
            i = i + 1;
        }

        document.getElementById("animal-info").innerHTML = myAnimals;

    }
};
xhttp.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json", true);
xhttp.send();
