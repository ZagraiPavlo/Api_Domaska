function getRandomText () {
    document.getElementById('loader').style.visibility = "visible";
    fetch('https://api-sturdy.herokuapp.com/getPhrase?count=1')
        .then(result => {
            return result.json();
        })
        .then(data => {
            document.getElementById('loads').innerHTML = data[0].text;
            document.getElementById('loader').style.visibility = "hidden";
        })
}

getRandomText();

document.querySelector('button').addEventListener('click', getRandomText);
