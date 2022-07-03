var carbon;
var x;
carbon = 0;
document.getElementById("ques").style.display = "none";
document.getElementById("options").style.display = "none";

function start(){
    document.getElementById("start").style.display = "none";
    document.getElementById("START").style.display = "none";
    document.getElementById("ques").style.display = "block";
    document.getElementById("options").style.display = "block";
}
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
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q4.Examine Your Water Consumption :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="water(1);">a) You run you washing machine more than 9 times per week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="water(2)">b) You run it 4 to 9 times per week .</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="water(3)">c) If you run it 1 to 3 times per week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="water(4)">d) You do not have washing machine and wash clothes by yourself.</button></div>';
}
function water(x){
    if(x==1){
        carbon=carbon+3;
    }
    else if(x==2){
        carbon=carbon+2;
    }
    else if(x==3){
        carbon=carbon+1;
    }
    else if(x==4){
        carbon=carbon+4;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q5.How many household purchases you make each year:</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="purchase(1);">a) You buy more than 7 new pieces of furniture, electronics, or other household gadgets per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="purchase(2)">b) You purchase between 5 and 7 items.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="purchase(3)">c) You purchase between 3 and 5 items.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="purchase(4)">d) You purchase less than 3 items.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="purchase(5)">e) You purchase almost nothing or only secondhand items.</button></div>';
}
function purchase(x){
    if(x==1){
        carbon=carbon+10;
    }
    else if(x==2){
        carbon=carbon+8;
    }
    else if(x==3){
        carbon=carbon+6;
    }
    else if(x==4){
        carbon=carbon+4;
    }
    else if(x==5){
        carbon=carbon+2;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q6.How much waste you produce :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="garbage(1);">a) You fill 4 garbage cans each week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="garbage(2)">b) You fill 3 garbage cans each week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="garbage(3)">c) You fill 2 garbage cans per week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="garbage(4)">d) You fill 1 garbage can per week.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="garbage(5)">e) You fill half of a garbage can or less per week.</button></div>';
}
function garbage(x){
    if(x==1){
        carbon=carbon+50;
    }
    else if(x==2){
        carbon=carbon+40;
    }
    else if(x==3){
        carbon=carbon+30;
    }
    else if(x==4){
        carbon=carbon+20;
    }
    else if(x==5){
        carbon=carbon+5;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q7.How much waste you recycle :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="rec();">a) You do not recycle.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;">b) You recycle the following.</button></div><div class="row-2 container input-group" style="color:#242582; text-align: left; margin-left:3rem;"><input class="form-check-input"  id="glass"  style="margin-right:.5rem;"type="radio">Glass</input></div><div class="row-2 container input-group" style="color:#242582; text-align: left; margin-left:3rem;"><input class="form-check-input"  id="plastic" style="margin-right:.5rem;"type="radio">Plastic</input></div><div class="row-2 container input-group" style="color:#242582; text-align: left; margin-left:3rem;"><input class="form-check-input"  id="paper"  style="margin-right:.5rem;"type="radio">Paper</input></div><div class="row-2 container input-group" style="color:#242582; text-align: left; margin-left:3rem;"><input class="form-check-input"  id="alum" style="margin-right:.5rem;"type="radio">Aluminium</input></div><div class="row-2 container input-group" style="color:#242582; text-align: left; margin-left:3rem;"><input class="form-check-input"  id="steel" style="margin-right:.5rem;"type="radio">Steel</input></div><div class="row-2 container input-group" style="color:#242582; text-align: left; margin-left:3rem;"><input class="form-check-input"  id="compost" style="margin-right:.5rem;"type="radio">Food Waste(Composting)</input></div><input type="reset" class="btn btn-outline rounded-5" style="color:#242582;margin-left:5rem;" onclick="garbage(1);" ><button name="submit" class="btn btn-outline rounded-5" style="color:#242582;" onclick="rec()">Submit</button>';
}

function rec(){
    carbon=carbon+24;
    if (document.getElementById('glass').checked == true){
        carbon=carbon-4;
    }
    if (document.getElementById('plastic').checked == true){
        carbon=carbon-4;
    }
    if (document.getElementById('paper').checked == true){
        carbon=carbon-4;
    }
    if (document.getElementById('alum').checked == true){
        carbon=carbon-4;
    }
    if (document.getElementById('steel').checked == true){
        carbon=carbon-4;
    }
    if (document.getElementById('compost').checked == true){
        carbon=carbon-4;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q8.What is your personal vehicle usage :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="personal(1);">a) You travel more than 24,140 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="personal(2)">b) You travel 16,100 to 24,140 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="personal(3)">c) You travel 1,610 to 16,100 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="personal(4)">d) You travel less than 1,610 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="personal(5)">e) You do not have a car.</button></div>';
}
function personal(x){
    if(x==1){
        carbon=carbon+12;
    }
    else if(x==2){
        carbon=carbon+10;
    }
    else if(x==3){
        carbon=carbon+6;
    }
    else if(x==4){
        carbon=carbon+4;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q9.How much you travel in public transportation :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="public(1);">a) You travel more than 32,190 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="public(2)">b) You travel 24,140 to 32,190 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="public(3)">c) You travel 16,100 to 24,140 km per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="public(4)">d) You travel 1,610 to 16,100 miles per year.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="public(5)">e) You travel less than 1,610 km.</button></div>';
}
function public(x){
    if(x==1){
        carbon=carbon+12;
    }
    else if(x==2){
        carbon=carbon+10;
    }
    else if(x==3){
        carbon=carbon+6;
    }
    else if(x==4){
        carbon=carbon+4;
    }
    else if(x==5){
        carbon=carbon+2;
    }
    document.getElementById("ques").innerHTML = '<p class="display-6 text-center blockqoute" style="color:#242582" id="ques">Q10.Flights distances you travel within a year :</p>';
    document.getElementById("options").innerHTML = '<div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="flight(1);">a) You only travel short distances in 1 year, such as within your state.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="flight(2)">b) You travel further distances, such as to a nearby state or country.</button></div><div class="row container"><button class="btn btn-lg btn-outline rounded-5" style="color:#242582; text-align: left;margin-left:1rem;" onclick="flight(3)">c) You     travel far, such as to another continent.</button></div>';
}
function flight(x){
    if(x==1){
        carbon=carbon+2;
    }
    else if(x==2){
        carbon=carbon+6;
    }
    else if(x==3){
        carbon=carbon+20;
    }
}