async function GetQuote() {
  await fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let i = Math.floor(Math.random() * 10);
      let quote1 = data["data"][i]["quoteText"];
      let author = data["data"][i]["quoteAuthor"];

      document.getElementById("quote").innerHTML = '"' + quote1 + '"';
      document.getElementById("author").innerHTML = `~` + author;
    });
}
