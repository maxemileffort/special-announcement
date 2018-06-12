let btn = $('.btn');

function changeImg() {
    $('.ready').addClass('hidden');
    $('.btn').addClass('hidden');
    $('.not-ready').removeClass('hidden');

}

btn.on('click', function () {
    changeImg();
})