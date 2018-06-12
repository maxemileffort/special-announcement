let goBtn = $('.btn-go');
let backBtn = $('.btn-back');

function changeImg() {
    $('.ready').addClass('hidden');
    goBtn.addClass('hidden');
    $('.not-ready').removeClass('hidden');
    backBtn.removeClass('hidden');
}

function goBack(){
    $('.not-ready').addClass('hidden');
    backBtn.addClass('hidden');
    $('.ready').removeClass('hidden');
    goBtn.removeClass('hidden'); 
}

goBtn.on('click', function () {
    changeImg();
})

backBtn.on('click', function(){
    goBack();
})