/*
window.onload=function() {
    Particles.init({
        selector: '.background'
    });
};
*/

//jquery smooth scroll 
$('.nav').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800
        );
    }
});