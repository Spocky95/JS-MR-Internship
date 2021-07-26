



var haslo = "Bez pracy nie ma kołaczy";

var dlugosc = haslo.length;
var haslo1 = "";
    /*od i rownego zero; powtarzaj dopuki i jestmniejsze niz dlugosc; inkrementuj*/
for(i=0;i<dlugosc;i++)
{
    if(haslo[i]==" ")
    {
        haslo1 = haslo1 + " ";
    }
    else haslo1 = haslo1 + "_";
}

var topka = "Haslo: ";/*test*/
haslo1 = topka + haslo1;/*test*/
haslo1 = haslo1.toUpperCase();/*zamiana na duze litery*/


function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
    
}
window.onload = wypisz_haslo  /*wywolanie zdarzenia przez zaladowanie programu |onload > wypisz_haslo|*/

/*alert("Witaj w grze wisielec, wygraj odgadujac haslo!")*/



