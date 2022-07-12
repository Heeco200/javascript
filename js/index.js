const input = document.getElementById('inp');

const ey = document.getElementById('eye');

function ye() {
    let pass = input.getAttribute('type');
    if (pass == "password") {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

ey.addEventListener("click", ye);