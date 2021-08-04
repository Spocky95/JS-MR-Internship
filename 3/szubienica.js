var things = ['Bez pracy nie ma kołaczy',
 'Fortuna kołem się toczy',
  'Apetyt rośnie w miarę jedzenia',
  'Co ma wisieć nie utonie',
  'Dzieci i ryby głosu nie mają',
  'Lepszy wróbel w garści niż gołąb na dachu'];/*lista mozliwych haseł*/
var random = things[Math.floor(Math.random()*things.length)];/*wylosowanie przysłowia*/
alert('wylosowano:' + random); /*wyswietla wylosowane przyslowie dla testu*/
var haslo = random; /*nadpisuje haslo wylosowanym przysłowiem*/
var haslo = haslo.toUpperCase();/*przekształca hasło na duze litery*/

var dlugosc = haslo.length;/*pobiera dlugosc hasła*/

var haslo1 = "";/*zmienna/pole dla hasła wyswietlanego*/
var topka = "Hasło: "/*przedrostek dla hasła*/
var fails = 0;/*counter dla błędów*/

/*zamiana hasla na ukryte znaki do zmiennej haslo1 */
for(i=0;i<dlugosc;i++)/*od i rownego zero; powtarzaj dopóki i jest mniejsze niz dlugosc; inkrementuj*/
{
    if(haslo.charAt(i)==" ")
    {
        haslo1 = haslo1 + " ";
    }
    else haslo1 = haslo1 + "_";
} 
haslo1 = haslo1.toUpperCase();/*zamiana na duze litery*/
function wypisz_haslo()/*funkcja wyswietla hasło*/
{
    document.getElementById("plansza").innerHTML = topka + haslo1;
}

/*Utworzenie tablicy, recznie*/
var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
/**/



function start()
{   
    var tresc_diva = ""; /* zmienna lokalna*/

    for(i=0;i<35;i++)
    {   
        var element = "lit" + i; /*tworzymy indeksy liter*/
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';

        if((i+1) % 7 == 0)
        {
            tresc_diva = tresc_diva + '<div style="clear: both;"></div>';
        }

    }
    
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}


window.onload = start;  /*wywolanie zdarzenia przez zaladowanie programu |onload > wypisz_haslo|*/

/*alert("Witaj w grze wisielec, wygraj odgadujac haslo!")*/

String.prototype.ustawZnak = function(miejsce,znak)/*ustawZnak(x,y) | ustawZnak() zmienia znak z pozycji x na znak y*/
{
    if(miejsce > this.length - 1){
        return this.toString();
    }/*jesli funkcja otrzyma x wieksze niz liczba znakow*/  /*zwroc stringa*/
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{

    var trafiona = false; /*flaga true of false dla litery*/

    for(i=0;i<dlugosc;i++)
    {
        if(haslo.charAt(i) == litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr])
            trafiona = true;
        }
    }
    if(trafiona == true)
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#005500";
        
        wypisz_haslo();
    }
    else
    {   
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#550000";
        document.getElementById(element).setAttribute("onclick",";");
        fails++;
        alert(fails);
        var obraz = "img/s"+ fails +".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"/>';
    }

    if (haslo == haslo1)
    {
        document.getElementById("alfabet").innerHTML = "You Win! " + haslo + " to prawidlowe haslo!"+'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze Raz!</span>';

    }
    else if (fails == 9)
    {
        document.getElementById("alfabet").innerHTML = "Game Over! " + haslo + " to prawidlowe haslo!"+'<br/><br/><span class="reset" onclick="location.reload()">Jeszcze Raz!</span>';
    }
}

