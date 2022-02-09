let userName = prompt("Adınız nedir?") //Kullanıcıdan ismini alarak bir "userName" değişkenine atarız.

let myName = document.querySelector('#myName') //myName adında bir değişken oluşturup "querySelector" özelliği ile html içerisindeki "myName" id'li element ile eşleştiririz.


myName.innerHTML = `${userName}` //myName id'li elementimize innerHTML ile kullanıcıdan promt ile aldığımız değeri yazdırırız.



function showTime() {
    let d = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let time = document.querySelector('#myClock')

    time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
    setTimeout(showTime, 1000); // setTimeout alternatifi => setInterval(tarihSaat, 1000); 
}
showTime(); //Fonksiyonu çağırırız.

