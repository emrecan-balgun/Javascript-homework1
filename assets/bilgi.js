function hosgeldin()
{
    var x = document.getElementById("welcome")
    let name = prompt("Isminiz nedir?")
    x.innerHTML = `Merhaba, ${name}! Hosgeldiniz..`
}

function verSaat()
{
    var now = new Date();
    return now.toLocaleTimeString();
}

function verSaatBilgi()
{
    var final = new Array(3);
    var now = new Date();
    
    final[0] = now.getHours();
    final[1] = now.getMinutes();
    final[2] = now.getSeconds();
    
    // Saat, Dakika ve Saniye 10'dan ufaksa önlerine '0' ekleniyor.
    for(i = 0;i < 3;i++)
        final[i] = final[i] < 10 ? '0' + final[i] : final[i];
    
    return final;
}

function gunBilgisi() {
    var now = new Date();

    var days = ["Pazar","Pazartesi","Salı","Carsamba","Persembe","Cuma","Cumartesi"]
    var day = days[now.getDay()];

    return day;
}

function saatGoster()
{
    var saat = document.getElementById("clockTimer");
	saat.innerHTML = verSaat() + " " + gunBilgisi();
}

saatGoster();
setInterval("saatGoster()", 1000);