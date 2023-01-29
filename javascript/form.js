function showOutput(event)
{
    event.preventDefault();
    var book = document.getElementById("book").value;
    var chapter = document.getElementById("chapter").value;
    var verse = document.getElementById("verse").value;
    var output = "Book: " + book + "<br>" + "Chapter: " + chapter + "<br>" + "Verse: " + verse;
    document.getElementById("output").innerHTML = output;
}
