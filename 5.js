var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var sci = document.getElementById('sci');

var c_r = document.getElementById('c_r');
var c_p = document.getElementById('c_p');
var c_s = document.getElementById('c_s');
var image = document.getElementById('image');
var message = document.getElementById('text');
var btn = document.getElementById('btn');
var greet = document.getElementById('greet');

rock.addEventListener('click',function(){
    image.classList.add('hide');
    var random = Math.floor(Math.random()*3);
    if(random == 0){
        c_r.classList.remove('hide');
        c_r.classList.add('show');
        c_r.classList.add('draw');
        rock.classList.add('draw');
        greet.innerText = "Draw"
    }else if(random == 1){
        c_p.classList.remove('hide');
        c_p.classList.add('show');
        c_p.classList.add('win');
        rock.classList.add('loose')
        greet.innerText = "You Loose"
    }else{
        c_s.classList.remove('hide');
        c_s.classList.add('show');
        c_s.classList.add('loose');
        rock.classList.add('win')
        greet.innerText = "You Win";
    }
    setTimeout(function(){
        message.style.display = "flex";
    },400);
});
paper.addEventListener('click',function(){
    image.classList.add('hide');
    var random = Math.floor(Math.random()*3);
    if(random == 0){
        c_r.classList.remove('hide');
        c_r.classList.add('show');
        c_r.classList.add('loose');
        paper.classList.add('win')
        greet.innerText = "You Win";
    }else if(random == 1){
        c_p.classList.remove('hide');
        c_p.classList.add('show');
        c_p.classList.add('draw');
        paper.classList.add('draw')
        greet.innerText = "Draw"
    }else{
        c_s.classList.remove('hide');
        c_s.classList.add('show');
        c_s.classList.add('win');
        paper.classList.add('loose')
        greet.innerText = "You Loose"
    }
    setTimeout(function(){
        message.style.display = "flex";
    },400);
});
sci.addEventListener('click',function(){
    image.classList.add('hide');
    var random = Math.floor(Math.random()*3);
    if(random == 0){
        c_r.classList.remove('hide');
        c_r.classList.add('show');
        c_r.classList.add('win');
        sci.classList.add('loose')
        greet.innerText = "You Loose"
    }else if(random == 1){
        c_p.classList.remove('hide');
        c_p.classList.add('show');
        c_p.classList.add('loose');
        sci.classList.add('win')
        greet.innerText = "You Win";
    }else{
        c_s.classList.remove('hide');
        c_s.classList.add('show');
        c_s.classList.add('draw');
        sci.classList.add('draw')
        greet.innerText = "Draw"
    }
    setTimeout(function(){
    message.style.display = "flex";},400);
    }
);
btn.addEventListener('click',function(){
    rock.classList.remove('draw');
    rock.classList.remove('win');
    rock.classList.remove('loose');
    paper.classList.remove('draw');
    paper.classList.remove('win');
    paper.classList.remove('loose');
    sci.classList.remove('draw');
    sci.classList.remove('win');
    sci.classList.remove('loose');
    image.classList.remove('hide');
    c_r.classList.remove('show');
    c_r.classList.add('hide');
    c_p.classList.remove('show');
    c_p.classList.add('hide');
    c_s.classList.remove('show');
    c_s.classList.add('hide');
    text.style.display = 'none';
});