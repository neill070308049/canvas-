function Hp(){

};

Hp.prototype.update=function(){

};

Hp.prototype.render=function(){
    var myHp_str=myHp.toString();
    for(var i = 0; i < myHp_str.length; i++){
        var char=myHp_str[i];
        context.drawImage(R[char], 170+22*i, 65, 43 / 2, 64 / 2);  
    };
    context.drawImage(R['hp_3'], 0, 0, 41, 22, 110, 70, 41, 22);  
};