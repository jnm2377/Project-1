$( () => {

  /******************************
        GENERATE BOARD
  *******************************/
const $container = $('.container');


const generateBoards = ($numberOfPlayers) => {
  $('.default').remove();
  for (let i = 0; i < $numberOfPlayers; i++){
    let $grid = $('<div>').addClass('grid').attr('id', i);
    let $board = $('<div>').addClass('board');
      for (let r=0; r<4; r++){
        let $row = $('<div>').addClass('row');
          for (let img=0 ; img<4; img++){
            let $img = $('<img>').attr('src', '#');
            $row.append($img);
          }
        $board.append($row);
      }
    $grid.append($board);
    $container.append($grid);
  }
}



const generateBoardsDefault = () => {
  for (let i = 0; i < 2; i++){
    let $grid = $('<div>').addClass('grid').attr('id', i);
    let $board = $('<div>').addClass('board');
      for (let r=0; r<4; r++){
        let $row = $('<div>').addClass('row');
          for (let img=0 ; img<4; img++){
            let $img = $('<img>').attr('src', '#');
            $row.append($img);
          }
        $board.append($row);
      }
    $grid.addClass('default').append($board);
    $container.append($grid);
  }
}

generateBoardsDefault();






/******************************
      MODAL EVENT LISTENERS
*******************************/
const closeStart= () => {
  // $('#modal-start').css('display', 'none');
  $('#modal-start').hide('slow');
  let $numberOfPlayers = $('#player-input').val();
  if ($numberOfPlayers > 1){
    generateBoards($numberOfPlayers);
  }
}

const openNav= () => {
  $('#modal-instructions').css('display', 'block');
}

const closeNav= () => {
  // $('#modal-instructions').css('display', 'none');
  $('#modal-instructions').hide('slow');
}


$('#submit').on('click', closeStart);
$('#hearts').on('click', openNav);
$('#close').on('click', closeNav);









});
