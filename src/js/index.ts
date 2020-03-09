
let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("bt1");
let input: HTMLInputElement = <HTMLInputElement> document.getElementById("inputField1");
let select: HTMLSelectElement = <HTMLSelectElement> document.getElementById("manipulator");
let selected: string = select.value;
let outputArea: HTMLDivElement = <HTMLDivElement> document.getElementById("result");

button.addEventListener("click", doMagic);
select.addEventListener("change", changeSelected);

function changeSelected(): void{
    selected = select.value;
}

function doMagic(): void{
    let output: string = "";
    
    if (selected == "1") output = input.value.toUpperCase();
    else if (selected == "2") output = input.value.toLowerCase();
    else if (selected == "3"){
        let chars: string[] = input.value.split("");
        chars.forEach(e => {
            let number: number = Math.random() * 100;
            if (e == " ") output += " ";
            else if ((number) > 70) output += e.toUpperCase();
            else if(number > 40) output += e.toLowerCase();
            else if(number > 15) output += e;
            else output += "?";
        });
    }
    outputArea.innerHTML = output;
}