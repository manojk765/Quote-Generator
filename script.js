document.querySelector('.myButton').addEventListener("click",quote);

function quote(){
const url = 'https://api.api-ninjas.com/v1/quotes' ;
const options = {
    method : 'GET',
    headers : { 'X-Api-Key': 'DUsk8Px3OjEsj0DSQIjCzQ==RHkwTwDlNFMgSkP3'},
}

fetch(url, options)
.then(result => result.json())
.then(data => {
    const y = data[0].quote ;
    const z = data[0].author;
    document.querySelector(".line").innerHTML=y;
    document.querySelector(".writer").innerHTML=z;
})

}
