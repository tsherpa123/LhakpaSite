var heightToSet = document.getElementById('row-1');
$('#glyphicons').hide();
heightToSet.addEventListener('mouseover', function(){
    $('#glyphicons').show();
});
heightToSet.addEventListener('mouseleave', function(){
    $('#glyphicons').hide();
});


/**
 * get the list of small painting to set the height dynamically
 */
/**/ 
$('.item-1').find("div").hide();

$('.item-1').mouseover(function(){
    $(this).find("div").slideDown();
});$('.item-1').mouseleave(function(){
    $(this).find("div").slideUp();
});

// $('.item-1').find("button").click(function(){ 
//      $('.modal-body').find("img").attr('src',$(this).parent().parent().find("img").attr('src')); 
//      $('.modal-header').find("h4").text($(this).parent().parent().find("img").attr('alt'));
// });


var $carousel = $('#carousel');
$carousel.carousel();
$carousel.bind('slide.bs.carousel', function (e) {
    var currentIndex_1 = $('div.active').index()+1 ;
    switch(currentIndex_1)
    {
        
        case 1:
                $('#details').find("p").text('Painting of Mount Everest');
                $('#details').find("h2").text('CA$ 75');
                $('#details').find('.height').text('Height : 25 cm');
                $('#details').find('.width').text('Height : 45 cm');
                $('#details').find('.time').text('Time : 5 days');
                break;

        case 2:
                $('#details').find("p").text('Painting of Mount Makalu');
                $('#details').find("h2").text('CA$ 55.99');
                $('#details').find('.height').text('Height : 25 cm');
                $('#details').find('.width').text('Height : 45 cm');
                $('#details').find('.time').text('Time : 3 days');
                break;

        case 3:
                $('#details').find("p").text('Painting of Mount Lhotse');
                $('#details').find("h2").text('CA$ 39.99');
                $('#details').find('.height').text('Height : 25 cm');
                $('#details').find('.width').text('Height : 45 cm');
                $('#details').find('.time').text('Time : 2 days');
                break;

        case 4:
                $('#details').find("p").text('Painting of Mount Manasalu');
                $('#details').find("h2").text('CA$ 22.99');
                $('#details').find('.height').text('Height : 45 cm');
                $('#details').find('.width').text('Height : 23 cm');
                $('#details').find('.time').text('Time : 1 day');
                break;
        default:
                $('#details').find("p").text('Painting of Mount Everest');
                $('#details').find("h2").text('CA$ 75');
                $('#details').find('.height').text('Height : 25 cm');
                $('#details').find('.width').text('Height : 45 cm');
                $('#details').find('.time').text('Time : 5 days');
                break;

    }
});

/*use of Vue.js to make it more dynamic and eventually load data from a database*/



  'use strict';

  const e = React.createElement;
  
  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      
    }
  
    render() {
      if (this.state.liked) {
    
      alert(this.props.name);
      return 'you liked this asdfasdfasdf';
      // return <h1>Hello, {this.props.name}</h1>;
      }
  
      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    }
  }

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


