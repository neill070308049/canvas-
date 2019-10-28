function crash(a, b) {
    var t1 = a.y;
    var l1 = a.x;
    var r1 = a.x + a.width;
    var b1 = a.y + a.height;

    var t2 = b.y;
    var l2 = b.x;
    var r2 = b.x + b.width;
    var b2 = b.y + b.height;

    if (
        //1号顶大于二号底
        t1 > b2
        ||
        //1号左大于二号右
        l1 > r2
        ||
        //1号右小于二号左
        r1 < l2
        ||
        //1号大于二号下
        b1 < t2) {
        return false;
    }
    else {
        return true;
    }
}