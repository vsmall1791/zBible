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

function quiz1(event)
{
	let number1 = parseInt(prompt("Enter the first number:"));
	let number2 = parseInt(prompt("Enter the second number:"));
	let result = number1 * number2;
	document.getElementById("output").innerHTML = number1 + "*" + number2 + " = " + result;
	document.getElementById("output").style.color = "red";
}

function lab2(event)
{
	//TASK 1: Display the url of the current webpage
	document.getElementById("output").innerHTML = "URL:" + "<br>" + document.URL;


	//TASK 2: Display the largest number of a user created array
	let arrSize = parseInt(prompt("Enter size of your desired array"));
	let maxNum = -Infinity;
	const arr = new Array(arrSize);

	for(let i = 0; i < arr.length; i++)
	{
		arr[i] = parseInt(prompt("Enter int for arr["+i+"]"));
		if(arr[i] > maxNum)
		{
			maxNum = arr[i];
		}

	}
	document.getElementById("output").innerHTML += "<br><br>Max number of your arr [" + arr.toString() + "]:<br>" + maxNum;


	//TASK 3: Display a user created string in all caps
	let string = prompt("Enter some text");
	upperString = string.toUpperCase();
	document.getElementById("output").innerHTML += "<br><br>string \"" + string + "\" in caps:<br>" + upperString;
}

function quiz2(event)
{
}
