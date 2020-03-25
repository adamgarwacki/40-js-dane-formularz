document.getElementById('submit').addEventListener("click", displayData);

function displayData() {
    document.getElementById('name').innerHTML = document.getElementById('enter-name').value;
    document.getElementById('surname').innerHTML = document.getElementById('enter-surname').value;
    document.getElementById('phone').innerHTML = document.getElementById('enter-phone').value;
}


// displayData(name, surname, phone);
// let name = document.getElementById('enter-name');
    // let surname = document.getElementById('enter-surname');
    // let phone = document.getElementById('enter-phone');

    // console.log(name.value);