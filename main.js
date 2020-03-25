document.getElementById('submit').addEventListener("click", displayData);

function displayData() {
    document.getElementById('name').innerHTML += document.getElementById('enter-name').value;
    document.getElementById('surname').innerHTML += document.getElementById('enter-surname').value;
    document.getElementById('phone').innerHTML += document.getElementById('enter-phone').value;

    document.getElementById('enter-name').value = '';
    document.getElementById('enter-surname').value = '';
    document.getElementById('enter-phone').value = '';
}