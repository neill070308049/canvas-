function Explotion(x, y) {
    this.x = x;
    this.y = y;
    this.step = 0;
    this.f= f;
    explode.push(this)
}
Explotion.prototype.update = function () {
    if (f % 10 == 0) {
        this.step++;
    }
    if(f-this.f > 10){
        for(var i = 0; i < explode.length; i++){
            if(explode[i] == this){
                explode.splice(i,1);
            }
        }
    }
    this.step = this.step > 5 ? 0 : this.step;
}
Explotion.prototype.render = function () {
    context.drawImage(R['exp'], 896, 128*this.step, 128, 128, this.x, this.y, 180, 180);
}