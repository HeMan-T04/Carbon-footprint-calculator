var carbon;
var x;
carbon = 0;
function person(x) {
    if (x == 'alone') {
        carbon = carbon + 14;
    }
    else if (x == 'one') {
        carbon = carbon + 12;
    }
    else if (x == 'two') {
        carbon = carbon + 10;
    }
    else if (x == 'three') {
        carbon = carbon + 8;
    }
    else if (x == 'four') {
        carbon = carbon + 6;
    }
    else if (x == 'five') {
        carbon = carbon + 4;
    }
    else if (x == 'more') {
        carbon = carbon + 2;
    }

    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q2.What is size of your home :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="house(1);">a) You have a large house.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="house(2)">b) You have a medium-sized house.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="house(3)">c) You have a small house.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="house(4)">d) You have an apartment house.</button></div>';
}
function house(x){
    if(x==1){
        carbon=carbon+10;
    }
    else if(x==2){
        carbon=carbon+7;
    }
    else if(x==3){
        carbon=carbon+4;
    }
    else if(x==4){
        carbon=carbon+2;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q3.What are your food choices :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(1);">a) Domestic meat on a daily basis.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(2)">b) Domestic meat a few times per week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(3)">c) You are a vegitarian.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(4)">d) You are a vegan or only eat wild meat.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(5)">e) Prepackaged convenience food mostly.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(6)">f) You have good balance of fresh and convenience food.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="food(7)">g) You eat fresh,locally grown only.</button></div>';
}
function food(x){
    if(x==1){
        carbon=carbon+10;
    }
    else if(x==2){
        carbon=carbon+8;
    }
    else if(x==3){
        carbon=carbon+4;
    }
    else if(x==4){
        carbon=carbon+2;
    }
    else if(x==5){
        carbon=carbon+12;
    }
    else if(x==6){
        carbon=carbon+6;
    }
    else if(x==7){
        carbon=carbon+2;
    }
    
}
