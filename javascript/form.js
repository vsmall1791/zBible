function showOutput(event)
{
	event.preventDefault();
	fetch("https://vsmall1791.github.io/zBible/books/Bible_ESV.xml")
	.then(response => response.text())
	.then(text =>
	{
		let xmlText;
		let booksList;
		xmlText = text;
		let xmlDoc = new DOMParser().parseFromString(xmlText, "text/xml");
		let desiredBook = document.getElementById("book").value;
		let desiredChapter = eval(document.getElementById("chapter").value);
		let desiredVerse = eval(document.getElementById("verse").value);
		let output = "";
		booksList = xmlDoc.getElementsByTagName("BIBLEBOOK");

		for (let i = 0; i < booksList.length; i++)
		{
			let book = booksList[i];
			let bname = book.getAttribute("bname");
			if (desiredBook == bname)
			{
				let chapterList = book.getElementsByTagName("CHAPTER");
				if (desiredChapter == null && desiredVerse == null)
				{
					for (let j = 0; j < chapterList.length; j++)
					{
						let chapter = chapterList[j];
						let cnumber = eval(chapter.getAttribute("cnumber"));
						let versList = chapter.getElementsByTagName("VERS");
						for (let l = 0; l < versList.length; l++)
						{
							let verse = versList[l];
							let vnumber = verse.getAttribute("vnumber");
							output += `<p><b>${cnumber}:${vnumber}</b> ${verse.textContent}</p>`;
						}
					}
					break;
				}
				else
				{
					for (let j = 0; j < chapterList.length; j++)
					{
						let chapter = chapterList[j];
						let cnumber = eval(chapter.getAttribute("cnumber"));
						if (cnumber == desiredChapter)
						{
							let versList = chapter.getElementsByTagName("VERS");
							for (let l = 0; l < versList.length; l++)
							{
								let verse = versList[l];
								let vnumber = verse.getAttribute("vnumber");
								if (desiredVerse == null)
								{
									output += `<p><b>${cnumber}:${vnumber}</b> ${verse.textContent}</p>`;
								}
								else if (vnumber == desiredVerse)
								{
									output += `<p><b>${cnumber}:${vnumber}</b> ${verse.textContent}</p>`;
								}
							}
							break;
						}
					}
				}
			}
		}
		document.getElementById("output").innerHTML = output;
	});
}
