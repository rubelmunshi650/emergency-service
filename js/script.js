// ----- like and like count js start --------
let likeCount = parseInt(document.getElementById('like-count').innerText);

document.getElementById('like-1').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-2').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-3').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-4').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-5').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-6').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-7').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-8').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');
});

document.getElementById('like-9').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('fa-solid', 'text-red-600');

});

// ----- like and like count js end --------


// ------------ number copy and copy count js start ----------------

let copyCount = parseInt(document.getElementById('copy-count').innerText);

document.getElementById('copy-btn-1').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-1').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-2').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-2').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-3').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-3').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-4').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-4').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-5').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-5').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-6').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-6').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-7').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-7').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-8').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-8').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});

document.getElementById('copy-btn-9').addEventListener('click', function () {
    const copyArea = document.getElementById('copy-text-9').innerText;
    navigator.clipboard.writeText(copyArea)
        .then(() => {
            alert('Copied this service number : ' + copyArea);
        })
        .catch(err => {
            alert('❌ Failed to copy!');
            console.error(err);
        });
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;


});


// ------------ number copy and copy count js end ----------------

// ---------------------- call and call history add js start ------------------------

let totalCoin = parseInt(document.getElementById('coin').innerText);
const costPerCall = 20;
const callHistoryContainer = document.getElementById('call-history-container');

document.getElementById('call-btn-1').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-1').innerText;
    const helplineNumber = document.getElementById('copy-text-1').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-2').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-2').innerText;
    const helplineNumber = document.getElementById('copy-text-2').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-3').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-3').innerText;
    const helplineNumber = document.getElementById('copy-text-3').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-4').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-4').innerText;
    const helplineNumber = document.getElementById('copy-text-4').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-5').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-5').innerText;
    const helplineNumber = document.getElementById('copy-text-5').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-6').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-6').innerText;
    const helplineNumber = document.getElementById('copy-text-6').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-7').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-7').innerText;
    const helplineNumber = document.getElementById('copy-text-7').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-8').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-8').innerText;
    const helplineNumber = document.getElementById('copy-text-8').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

document.getElementById('call-btn-9').addEventListener('click', function () {

    // ---------- clock js start --------------

    const clock = new Date();
    let clockHours = clock.getHours();
    let clockMinutes = clock.getMinutes();
    let clockSeconds = clock.getSeconds();
    let amPm = "AM";
    if (clockHours >= 12) {
        amPm = 'PM';
    }
    if (clockHours > 12) {
        clockHours = clockHours - 12;
    }
    if (clockHours === 0) {
        clockHours += 12; 
    }
    if (clockHours < 10) {
        clockHours = '0' + clockHours;
    }
    if (clockMinutes < 10) {
        clockMinutes = '0' + clockMinutes;
    }
    if (clockSeconds < 10) {
        clockSeconds = '0' + clockSeconds;
    }

    // ---------- clock js end --------------

    const helpline = document.getElementById('helpline-9').innerText;
    const helplineNumber = document.getElementById('copy-text-9').innerText;
    if (totalCoin >= 20) {
        alert('Calling ' + helpline + ' ' + helplineNumber);
        totalCoin -= costPerCall;
        document.getElementById('coin').innerText = totalCoin;

        const dataContainer = document.createElement('div');
        dataContainer.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f2f2f2]', 'p-2.5', 'rounded-[8px]', 'my-2.5');

        const dataLeftDiv = document.createElement('div');
        const dataLeftTop = document.createElement('div');
        dataLeftTop.classList.add('font-medium', 'text-base', 'leading-[18px]', 'text-[#111]')
        dataLeftTop.innerText = helpline;
        const dataLeftBottom = document.createElement('div');
        dataLeftBottom.classList.add('text-[#5c5c5c]')
        dataLeftBottom.innerText = helplineNumber;
        dataLeftDiv.appendChild(dataLeftTop);
        dataLeftDiv.appendChild(dataLeftBottom);

        const dataRightDiv = document.createElement('p');
        dataRightDiv.classList.add('text-[#5c5c5c]', 'text-[14px]')
        dataRightDiv.innerText = clockHours + ':' + clockMinutes + ':' + clockSeconds + ' ' + amPm;

        dataContainer.appendChild(dataLeftDiv);
        dataContainer.appendChild(dataRightDiv);

        callHistoryContainer.appendChild(dataContainer);

    } else {
        alert('A minimum of 20 coins is required to make a call.');
        return;
    }

});

// ---------------------- call and call history add js end ------------------------

