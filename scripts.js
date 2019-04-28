var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      var node = document.getElementById('output');
      node.innerText = text;
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  };

  let addbutton = document.getElementsByClassName('add-button') ; 
  addbutton[0].onclick = addCard ; 

  function addCard(){
    console.log('adding'); 
    
  }

  // console.log(addbutton[0]) ;''