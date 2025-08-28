// ----- like and like count js start --------
let likeCount = parseInt(document.getElementById('like-count').innerText);

document.getElementById('like-1').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-2').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-3').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-4').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-5').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-6').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-7').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-8').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');
});

document.getElementById('like-9').addEventListener('click', function () {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    const color = this.classList.add('text-red-600');

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
