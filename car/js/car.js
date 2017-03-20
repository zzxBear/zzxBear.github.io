
var  mod=angular.module('mod',[])
mod.controller('ctr',($scope,$http)=>{
    $http.get('Az.txt').then((r)=>{
        console.log(r.data);
        $scope.arr=r.data;
    },(r)=>{
        alert('失败了'+r);
    })
})