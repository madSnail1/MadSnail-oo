/*轮播图*/ 
var data = {
    className:".loopbox1",
    autoPlayState:true,
    showPage: true,
    showArrow: false
}
slideshow(data);

function slideshow(data){

    var boxName = data.className;
    var autoPlayState = data.autoPlayState;
    var showPage = data.showPage;
    var showArrow = data.showArrow;

    var loopbox = document.querySelector(boxName);//最大盒子
    var box = document.querySelector(boxName+" .box");//装所有图片盒子的盒子
    var imgBox = document.querySelectorAll(boxName+" .box-item"); //每个图片盒子
    var btnLeft = document.querySelector(boxName+" .arrow-left"); //左按钮
    var btnRight = document.querySelector(boxName+" .arrow-right"); //右按钮
    var pageBtns = document.querySelectorAll(boxName+" .page li"); //下面按钮
    //console.log(loopbox)
    var boxWidth = loopbox.offsetWidth;  //最大盒子宽度
    var boxCount = imgBox.length   //图片盒子数量
    box.style.width = boxWidth * boxCount + "px"; // 所有图片盒子相加的宽度
    
    //初始化每个图片盒子的宽
    for(let i = 0; i < boxCount; i++ ){
        imgBox[i].style.width = boxWidth + "px";
        //console.log( imgBox[i].style.width);
    }

   //初始化
    var index = 0;
    imgBox[index].classList.add("box-show");
    pageBtns[index].classList.add("current");
    var  state = "right"; //当前点击哪个按钮

  
     //判断左右两边按钮是否存在
     if( showArrow === false){
        btnLeft.style.display = "none";
        btnRight.style.display = "none";
     }
    // 左右按钮绑定点击事件
    btnRight.onclick = function () {
        state = "right";
        cutRight();
    }
    btnLeft.onclick = function () {
        state = "left";
        cutLeft();
    }

    //判断底部按钮是否显示
    if(showPage === false ){
        for (let i = 0; i < pageBtns.length; i++) {
            pageBtns[i].style.display = "none";    
        }
    }
    //图片底部按钮点击
    for (let i = 0; i <  pageBtns.length; i++) {
        pageBtns[i].onclick = function(){

            goIndex(i);

        }   
    }

     //切换右边下标
     function cutRight(){
        // 把索引指到下一张图
        index++;
        // 处理下标越界
        if (index >= boxCount) {
            index = 0;
        }
        // 操作视图
        goIndex(index);
    }
    //切换左边下标
    function cutLeft(){
        // 把索引指到下一张图
        index--;
        // 处理下标越界
        if (index < 0) {
            index = boxCount - 1;
        }
        // 操作视图
        goIndex(index);
    }

    // 切换图片
    function goIndex(index) {
        //向左移动的距离 -800 -1600 -2400 0
        box.style.marginLeft = -1 * boxWidth * index + "px";

        for (let i = 0; i < imgBox.length; i++) {
            pageBtns[i].classList.remove("current");
        }
        pageBtns[index].classList.add("current");

    }

    //定时器 
    var timer;
    function autoPlay1(){
        function autoPlay () {
        timer = setInterval(function () {

            if(state == "right"){
                cutRight();

              }else if(state == "left"){
                cutLeft();
              }
             
            },2000);
        }

        autoPlay ();
        //鼠标在box里面 取消定时器
        loopbox.onmouseover = function(){
            clearInterval(timer);
        }
        //鼠标不在box里面 开启定时器
        loopbox.onmouseout = function(){
            autoPlay ();
        }
    }
   
   //是否自动播放
   if(autoPlayState == false){
        clearInterval(timer);
    }else{
        autoPlay1();
    }      

}  
