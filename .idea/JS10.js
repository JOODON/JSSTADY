//메소드
let boy={
    name:`Mike`,
    showName:function (){
        console.log(this.name)
    }
};

let man=boy;
boy=null;
//위에 메소드를 boy로 지정해둘 경우에는 실행이 안됨
man.showName();
