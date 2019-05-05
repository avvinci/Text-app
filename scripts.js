let quotes = [
"I am saying, I am the proof that you can ask the universe for it - Jim Carrey", 
"Set small goals and succed in them",
"Perfect is the enemy of the good ",
"Nothing will work unless you do." , 
"There’s a well-said rule that we either win, or we learn. We lose only when we do not learn." ,
"The hunt is sweeter than the kill.",
"No matter how big you think you are, there is always someone bigger. Be humble it costs nothing-Amitabh bachan",
"He who has a why to live can bear with almost any how.",
"To live is to suffer, to survive is to find meaning in the suffering. If there is a purpose in life at all, there must be a purpose in suffering and in dying",					
"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
"A startup is a human institution designed to deliver a new product or service under conditions of extreme uncertainty.",
"I always do that, get into something and see how far I can go.",
"All the time you're saying to yourself, 'I could do that, but I won't,' — which is just another way of saying that you can't.",
"Habits do not restrict freedom. They create it. Building habits in the present allows you to do more of what you want in the future",
"True leaders aren't made by business schools-they make themselves, seeking out the knowledge, skills, and experiences they need to succeed.",
"Routine in an intelligent man is a sign of ambition.",
"If you cant generate 10 ideas, generate 20.",
"A combination of mediocre skills can make you surprisingly valuable.",
"The Success Formula: Every Skill You Acquire Doubles Your Odds of Success",
]

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


  function createCardDesc(){
    let len = quotes.length; 
    let index = Math.floor(Math.random() * len) ; 
    let text = quotes[index] ;
    let desc = document.createElement('div') ;
    desc.classList.add('card-description') ; 
    desc.innerText = text ; 
    return desc ; 
  }

  function addCard(){
    let elem  = document.createElement('div') ; 
    elem.classList.add('container') ;
 
    for(let i = 0; i < 2 ;i++ ){
      let cardElem = document.createElement('div');
      cardElem.classList.add('card') ;
      let desc = createCardDesc() ;  
      cardElem.appendChild(desc) ; 
      elem.appendChild(cardElem); 
    }
  
    let par = document.getElementsByClassName('body-container') ; 
    par[0].appendChild(elem) ; 
    console.log('adding'); 
  }

  function toggleDisplay(){
    switch_style(); 
    console.log('toggling');
     

  }


let global_title = 'main';  
function switch_style ( )
{

  if(global_title === 'main' ){
    global_title = 'dark' ; 
  }
  else{
    global_title = 'main' ; 
  }

  
  let link_tag =  document.getElementsByTagName("link");
  for (let i = 0; i < link_tag.length ; i++ ) {
  
      if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) && link_tag[i].title) {
          link_tag[i].disabled = true ;
          if (link_tag[i].title == global_title) {
             link_tag[i].disabled = false ;
          }
       }
    }
}


// window.onload = setTheme ; 
