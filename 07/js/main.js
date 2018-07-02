//попадание в окружность
    let x = prompt('Введите Х');
    let y = prompt('Введите Y');
    let i = (Math.pow(x, 2) + Math.pow(y, 2));
    if (x <= 0 && y <= 0 && y >= -x - 2 || i <= Math.pow(1, 2)) {
        alert("Точка попадает в область")
    }
    else {
        alert("Точка НЕ попадает в область")
    }


document.getElementById('coordinate_x_y').addEventListener('click', area);