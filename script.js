//Question 1

const cat={
    complain:function(){
        console.log("Meow")
    }
};
cat.complain();

//Question 2

const heading = document.querySelector("h3")
heading.innerHTML = "Updated heading"

//Question 3

heading.style.fontSize = "2em"

//Question 4

heading.className = "subHeading";

//Question 5

const paragraphs = document.querySelectorAll("p"), i;
for(i = 0; i < paragraphs.length; ++i){
    paragraphs[i].innerHTML.style.color = "red";
}

//Question 6 

const resultContainer = document.querySelector("div.results");
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.color = "yellow";

//Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function list (cats);
console.log(cats.name);

cats.forEach(function(item) {
    console.log("Name of the cat" + ": " + item.name);
});

function allCats(list) {

    for (let i = 0; i < list.length; i++) {

        console.log(list[i].name);
    }
};

allCats(cats);

//Question 8

function createCats(cats) {

    let catList = "";
    for (let i = 0; i < cats.length; i++) {

        if (!cats[i].age) {
            cats[i].age = "Age unknown";
        }
        catList += `<h5>${cats[i].name}<h5>
        <p>${cats[i].age}</p>`
    }
    const finalHtml = "<div>" + catList + "</div>";
    return finalHtml;
}
