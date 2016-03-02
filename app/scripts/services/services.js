'use strict'

angular.module('routerApp')
 .service('service',function service($http,$q,$rootScope,$cookies){ 
  var URL = 'http://fabfresh.elasticbeanstalk.com';
  $http.defaults.headers.common.Authorization = 'Bearer '+ $cookies.get('token');
  $http.defaults.headers.post["Content-Type"] = "application/json";
  $http.defaults.headers.patch["Content-Type"] = "application/json";
  var service = this;
      service.taskList = {};


  service.getOrder= function(id){

    var deferOrder = $q.defer();
     $http({
      method  : 'GET',
      url     : URL+'/orders/'+id+'/',
     })
    .success(function(response){
        deferOrder.resolve(response);
    })
    .error(function(error,status){
      deferOrder.reject(error);
    })

   return deferOrder.promise
  };

  service.getOrderByStatus= function(status){
    var deferotp = $q.defer();
    $http({
        url : URL + '/orders/?status='+status,
        method : 'GET'
    })
    .success(function(response){
        //console.log(response);
        deferotp.resolve(response);
    })
    .error(function(error){
      deferotp.reject(error);
    })

   return deferotp.promise;
  };

    service.getLiveOrders= function(){
      $http.defaults.headers.common.Authorization = 'Bearer '+ $cookies.get('token');
    var deferOrder = $q.defer();
     $http({
      method  : 'GET',
      url     : URL+'/order/live/'
      //headers : {'Authorization': 'Bearer '+$cookies.get('token')} 
     })
    .success(function(response){
        deferOrder.resolve(response);
    })
    .error(function(error,status){
      deferOrder.reject(error);
    })

   return deferOrder.promise;
  };

  service.getFinanceOrders= function(){
    var deferOrder = $q.defer();
     $http({
      method  : 'GET',
      url     : URL+'/v1/order/finance/'
      //headers : {'Authorization': 'Bearer '+$cookies.get('token')} 
     })
    .success(function(response){
        deferOrder.resolve(response);
    })
    .error(function(error,status){
      deferOrder.reject(error);
    })

   return deferOrder.promise;
  };

  service.getFinanceOrdersByDate= function(min_date1,max_date1){
    //console.log(min_date1);
    //console.log(max_date1);
    var deferOrder = $q.defer();
     $http({
      method  : 'GET',
      url     : URL+'/v1/order/finance/',
      params : {min_date:min_date1,max_date:max_date1},
      //headers : {'Authorization': 'Bearer '+$cookies.get('token')} 
     })
    .success(function(response){
        deferOrder.resolve(response);
    })
    .error(function(error,status){
      deferOrder.reject(error);
    })

   return deferOrder.promise;
  };

  service.updateOrder= function(id,status1){
    var deferotp = $q.defer();
    var order = {
        "status": status1
    };
    $http({
      method  : 'PATCH',
      url     : URL+'/orders/'+id+'/',
      data    : order
     })
    .success(function(response){
        deferotp.resolve(response);
    })
    .error(function(error){
      deferotp.reject(error);
    })

   return deferotp.promise
  };

  service.cancelOrder= function(id,remark1){
    var deferotp = $q.defer();
    var order = {
        "status": "0",
        "remark":remark1
    };
    $http({
      method  : 'PATCH',
      url     : URL+'/orders/'+id+'/',
      data    : order
     })
    .success(function(response){
        deferotp.resolve(response);
    })
    .error(function(error){
      deferotp.reject(error);
    })

   return deferotp.promise
  };

  service.reassign= function(id,chr){
    var deferotp = $q.defer();
    $http({
      method  : 'GET',
      url     : URL+'/v1/reassign/'+id+chr+'/'
     })
    .success(function(response){
        deferotp.resolve(response);
    })
    .error(function(error){
      deferotp.reject(error);
    })

   return deferotp.promise
  };





    service.login = function(us){
      var deferl = $q.defer();
      $http({
      method  : 'POST',
      url     : URL+'/users/login/',
      data    : us,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(response){
        deferl.resolve(response);
    })
    .error(function(error,status){
      deferl.reject(error);
    })

    return deferl.promise

    };








    return service;
 });



// routerApp.factory('userService', ['$rootScope', function ($rootScope) {

//     var service = {
      
//         model: {
//             name: '',
//             email: ''
//         },

//         SaveState: function () {
//             sessionStorage.userService = angular.toJson(service.model);
//         },

//         RestoreState: function () {
//             service.model = angular.fromJson(sessionStorage.userService);
//         }
//     }

//     $rootScope.$on("savestate", service.SaveState);
//     $rootScope.$on("restorestate", service.RestoreState);

//     return service;
// }]);