let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((bt) => {
    bt.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string)+"";
                document.querySelector('input').value = string;             
            } catch (error) {
                string="Invalid Input";
                document.querySelector('input').value = string;             
            }
        }
        else if (e.target.innerHTML == 'C') {
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string; 
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string; 
        }
        else {
            string = string + e.target.innerHTML;
            console.log(e.target);
            document.querySelector('input').value = string;
        }
    }
    )

});