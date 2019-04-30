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

  let togglebutton = document.getElementsByClassName('toggle-button') ; 
  togglebutton[0].onclick = toggleDisplay ; 

  function addCard(){
    console.log('adding'); 
  }

  function toggleDisplay(){
    console.log('toggling');
     

  }


function switch_style ( css_title )
{

  let link_tag =  document.getElementsByTagName("link");
  for (let i = 0; i < link_tag.length ; i++ ) {
  
      if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) && link_tag[i].title) {
          link_tag[i].disabled = true ;
          if (link_tag[i].title == css_title) {
             link_tag[i].disabled = false ;
          }
       }
    }
}


