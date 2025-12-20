// external js: isotope.pkgd.js, imagesloaded.pkgd.js

  var j$ = jQuery,
      $mContainer = j$("#mnsry_container"),
      $filterButton = j$(".button"),
      $loadingMessage = j$("#loading_msg");

window.onload = function(){
    // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  // Show articles with fadein
  $mContainer.animate({
      "opacity":1
  }, 1200);
  // Hide loading message
  $loadingMessage.fadeOut();
};

$('.filter a').click(function(){
	$('.filter .current').removeClass('current');
	$(this).addClass('current');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter: selector,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
  $grid.isotope({ sortBy: '.number parseInt' });
	return false;
});

// **
// 画像モーダル表示

// モーダルウィンドウ全体を指す要素
const modal = document.getElementById('modal');
// モーダル内で拡大表示される画像を指す要素
const modalImg = document.getElementById('modalImage');
// .popupクラスを持つ画像のリストです。これらの画像をクリックすると、モーダルが表示されます
const imgs = document.querySelectorAll('.popup');
// モーダルを閉じるためのボタン
const closeSpan = document.getElementById('close');

// 画像クリックでモーダルを表示するイベント
for( let img of imgs) {
    img.onclick = function(){

        // モーダルを表示する
        modal.style.opacity = "1";
        modal.style.visibility = "visible";

        // モーダルで表示する画像に、クリックした画像のパスを設定する
        modalImg.src = this.src;
        modalImg.muted = false;
    }
}
// クローズボタンを押したらモーダルを閉じる
// closeSpan.onclick = function() {
//     modal.style.opacity = "0";
//     modal.style.visibility = "hidden";
// }
// 画像以外の部分をクリックしたらモーダルを閉じる
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        modalImg.muted = true;
    }
}
