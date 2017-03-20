/**
 * Created by zzx on 2017/3/20.
 */

var app=angular.module('app',[]);
app.controller('con',($scope,$http,$q)=>{
    $q.all([
        $http.get('data/a.txt'),
        $http.get('data/b.txt'),
        $http.get('data/c.txt'),
        $http.get('data/d.txt'),
        $http.get('data/che.txt'),
        $http.get('data/dd.txt'),

    ]).then((r)=>{


        let [a1,a2,a3,a4,a5,a6]=r;
        //console.log(a2.data);
        $scope.arr1=a1.data;
        $scope.arr2=a2.data;
        $scope.arr3=a3.data;
        $scope.arr4=a4.data;
        $scope.arr5=a5.data;
        $scope.arr6=a6.data;


    },(r)=> {
        alert('失败了' + r);
    })
})
app.controller('ctr',($scope,$http,$q)=>{
    $q.all([ $http.get('data/Az.txt'),
        $http.get('data/safe.txt'),
    ]).then((r)=>{
        let [b1,b3]=r;
        $scope.arr=b1.data;

        $scope.arr2=b3.data;
    },(r)=>{
        alert('失败了'+r);
    })
})
app.controller('gita',($scope,$http,$q)=>{
    $q.all([

        $http.get('data/saleCar.txt'),
        $http.get('data/Miblo.txt'),
        $http.get('data/We.txt'),
        $http.get('data/mod.txt')
    ]).then((r)=>{
        let [c1,c2,c3,c4]=r;
        //console.log(c4);
        $scope.c1=c1.data;
        $scope.c2=c2.data;
        $scope.c3=c3.data;
        $scope.c4=c4.data;
    },(r)=>{
        alert('失败了'+r);
    })
})
app.controller('mod',($scope,$http,$q)=>{
    $q.all([
        $http.get('data/mod.txt'),
        $http.get('data/down.txt'),
        $http.get('data/up.txt')
    ]).then((r)=>{

        let [d1,d2,d3]=r;
        $scope.d1=d1.data;
        $scope.d2=d2.data;
        $scope.d3=d3.data;
        //console.log(d2);
    },(r)=>{
        alert('失败了'+r);
    })
})
app.controller('bod',($scope,$http,$q)=>{
    $q.all([
        $http.get('data/men.txt'),
        $http.get('data/women.txt')
    ]).then((r)=>{
        let [e1,e2]=r;
        $scope.e1=e1.data;
        $scope.e2=e2.data;
        console.log(e2.data);
    },(r)=>{
        alert('失败了'+r);
    })
})
app.controller('nav',($scope,$http,$q)=>{
       $q.all([
           $http.get('data/nav.txt'),
           $http.get('data/nav1.txt'),
           $http.get('data/nav2.txt')
       ]).then((r)=>{
           let [a1,a2,a3]=r;
           $scope.a1=a1.data;
           $scope.a2=a2.data;
           $scope.a3=a3.data;
           console.log(a3);
       },r=>{
           alert('失败了'+r);
       })
})
