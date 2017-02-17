$(function() {

    $('.winner').on('click', function() {
        event.stopPropagation();
        $(this).fadeOut()
        $('h2').fadeIn()
        $('.square').fadeIn()
        $('.square').text(' ')
    })

    $('.draw').on('click', function() {
        event.stopPropagation();
        $(this).fadeOut()
        $('h2').fadeIn()
        $('.square').fadeIn()
        $('.square').text(' ')
    })

    $('.square').on('click', function() {

        var text = $(this).text()
        var letter = $('.turn-letter').text().replace(/\s/g, '')

        if (text === " ") {

            $('<p class="x">' + letter + '</p>').appendTo(this);

            if (letter == "X") {
                $('.turn-letter').text("O");
            } else {
                $('.turn-letter').text("X");
            }
            winner()
        } else {

        }
    })

    function winner() {

        var top = $('.top').text().replace(/\s/g, '')
        var mid = $('.mid').text().replace(/\s/g, '')
        var bottom = $('.bottom').text().replace(/\s/g, '')
        var left = $('.left').text().replace(/\s/g, '')
        var centre = $('.centre').text().replace(/\s/g, '')
        var right = $('.right').text().replace(/\s/g, '')
        var rightdiag = $('.top.right').text().replace(/\s/g, '') + $('.mid.centre').text().replace(/\s/g, '') + $('.bottom.left').text().trim()
        var leftdiag = $('.top.left').text().replace(/\s/g, '') + $('.mid.centre').text().replace(/\s/g, '') + $('.bottom.left').text().replace(/\s/g, '')


        function win(){
          $('.winner').fadeIn()
          $('.square').fadeOut()
          $('.winner-letter').text(winner)
        }

        if (top === "XXX" || mid === "XXX" || bottom === "XXX" || left === "XXX" || centre === "XXX" || right === "XXX" || rightdiag === "XXX" || leftdiag === "XXX" ) {
            var winner = "X"
            win()
        } else if (top === "OOO" || mid === "OOO" || bottom === "OOO" || left === "OOO" || centre === "OOO" || right === "OOO" || rightdiag === "OOO" || leftdiag === "OOO") {
            var winner = "O"
            win()
        } else if ($('.square').text().replace(/\s/g, '').length === 9 ) {
            $('.draw').fadeIn()
            $('.square').fadeOut()
        }
    }

});
