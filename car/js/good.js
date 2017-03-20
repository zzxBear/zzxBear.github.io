/**
 * Created by zzx on 2017/3/9.
 */
  let  type=angular.module('mod2',[]);
        type.controller('price',($scope)=>{
            $scope.prices=[{a:"3万以下"},{a:"3-5万"},
        {a:"5-10"},{a:"10-15万"},{a:"15-20万"},
        {a:"20-30万"},{a:"30-60万"},{a:"60万以上"}];
  });