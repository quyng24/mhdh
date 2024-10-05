function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    flipDigit(document.getElementById('hourTens'), hours[0]);
    flipDigit(document.getElementById('hourOnes'), hours[1]);
    flipDigit(document.getElementById('minuteTens'), minutes[0]);
    flipDigit(document.getElementById('minuteOnes'), minutes[1]);
    flipDigit(document.getElementById('secondTens'), seconds[0]);
    flipDigit(document.getElementById('secondOnes'), seconds[1]);
}

function flipDigit(digitElement, newValue) {
    if (digitElement.innerText !== newValue) {
        digitElement.innerText = newValue;
        digitElement.classList.add('flip');
        setTimeout(() => {
            digitElement.classList.remove('flip');
        }, 600);
    }
}

// Cập nhật mỗi giây
setInterval(updateClock, 1000);
// Khởi tạo đồng hồ khi tải trang
updateClock();
