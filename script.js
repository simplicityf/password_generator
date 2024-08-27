
function generatePassword(lenght, strenght) {
    let characters = "";
    if (strenght === 'low') {
        characters =  "abcdefghijklmnopqrstuvwxyz";
    } else if(strenght === 'medium') {
        characters +=  "abcdefghijklmnopqrstuvwxyz";
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        characters +=  '1234567890';

    } else if (strenght === 'high') {
        characters +=  "abcdefghijklmnopqrstuvwxyz";
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        characters +=  '1234567890';
        characters +=  "~!@#$[%^}'/.,?<>&*]{()_+{}|";
    } 

    let password = '';
    for (let i = 0; i < lenght; i++) {
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password;
}

document.getElementById("generate").addEventListener('click', () => {
    const lenght = document.getElementById('lenght').value;
    const strenght = document.getElementById('strenght').value;
    const password = generatePassword(lenght, strenght);
    document.getElementById('password').innerHTML = password;
});

/*const lenght = document.getElementById('length').value;
const strenght = document.getElementById('strenght').value;
const password = generatePassword(lenght, strenght);
document.getElementById('password').innerHTML = password; */