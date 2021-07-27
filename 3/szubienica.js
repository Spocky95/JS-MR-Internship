



var haslo = "Bez pracy nie ma kołaczy";

var dlugosc = haslo.length;
var haslo1 = "";



    /*od i rownego zero; powtarzaj dopuki i jestmniejsze niz dlugosc; inkrementuj*/
for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ")
    {
        haslo1 = haslo1 + " ";
    }
    else haslo1 = haslo1 + "_";
}

var topka = "Haslo: ";
haslo1 = topka + haslo1;
haslo1 = haslo1.toUpperCase();/*zamiana na duze litery*/


function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
    
}

function start()
{   
    var tresc_diva = ""; /* zmienna lokalna*/

    for(i=0;i<34;i++)
    {
        tresc_diva = tresc_diva + '<div class="litera">A</div>';
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



