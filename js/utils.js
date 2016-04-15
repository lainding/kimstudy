var clearContainer = function() {
    var container = document.getElementById('container');
    if (container) {
        var count = container.childElementCount;
        while (0 !== count) {
            container.removeChild(container.children[0]);
            count -= 1;
        }
    }
}
var shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var insertImages = function(array) {
    var container = document.getElementById('container');
    for (var i = 0; i < array.length; i++) {
        var element = document.createElement('img');
        element.className = "letter";
        element.src = "../images/" + array[i];
        container.appendChild(element);
    }
}


var arrangeDanYunMu = function() {
    clearContainer();
    var items = ['a.png', 'o.png', 'e.png', 'i.png', 'u.png', 'v.png'];
    insertImages(shuffle(items));
}

var arrangeShengMu = function() {
    clearContainer();
    var items = ['b.png', 'p.png', 'm.png', 'f.png', 'd.png', 't.png', 'n.png', 'l.png', 'g.png', 'k.png', 'h.png',
        'j.png', 'q.png', 'x.png', 'zh.png', 'ch.png', 'sh.png', 'r.png', 'z.png', 's.png', 'y.png', 'w.png'];
    insertImages(shuffle(items));
}

var arrangeFuYunMu = function() {
    clearContainer();
    var items = ['ai.png', 'ei.png', 'ui.png', 'ao.png', 'ou.png', 'iu.png', 'ie.png', 've.png', 'er.png'];
    insertImages(shuffle(items));
}

var arrangeQianBiYunMu = function() {
    clearContainer();
    var items = ['an.png', 'en.png', 'in.png', 'un.png', 'vn.png'];
    insertImages(shuffle(items));
}

var arrangeHouBiYunMu = function() {
    clearContainer();
    var items = ['ang.png', 'eng.png', 'ing.png', 'ong.png'];
    insertImages(shuffle(items));
}

var arrangeZhengTi = function() {
    clearContainer();
    var items = ['zhi.png', 'chi.png', 'shi.png', 'ri.png', 'zi.png', 'ci.png', 'si.png', 'yi.png', 'wu.png', 'yu.png',
        'ye.png', 'yue.png', 'yuan.png', 'yin.png', 'yun.png', 'ying.png'];
    insertImages(shuffle(items));
}

ver arrangeLetter = function() {
    clearContainer();
    var items = ['e_a.png', 'e_b.png', 'e_c.png', 'e_d.png', 'e_e.png', 'e_f.png', 'e_g.png', 'e_h.png', 'e_i.png', 'e_j.png', 'e_k.png', 'e_l.png',
        'e_m.png', 'e_n.png', 'e_o.png', 'e_p.png', 'e_q.png', 'e_r.png', 'e_s.png', 'e_t.png', 'e_u.png', 'e_v.png', 'e_w.png', 'e_x.png', 'e_y.png', 'e_z.png'];
    insertImages(shuffle(items));
}
