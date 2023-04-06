const b6 = 65;  //глобальна зміна
if(true){
    console.log(b6);
    const c95 = 548;   //локальна зміна
}

console.log(c95)  //<-- 

// console.log зверху не зреагує на локальну зміну бо вона не в полі його зору бо const в іфі