
function MainController($scope, SERVER, $http){
  $scope.infos = [];

  init();

  function init(){
    $http.get(SERVER.URL).then(function(res){
      $scope.infos = res.data;
    });
  }

  $scope.addInfo = function(info){
    $http.post(SERVER.URL, info).then(function(res){
      $scope.infos.push(res.data);
      $scope.info = {};
    });
  }

  $scope.deleteMe = function(id){
    $http.delete(SERVER.URL + id).then(function(res){
      $scope.infos = $scope.infos.filter(function(info){
        return info._id !== id;
      });
    });
  };

}


MainController.$inject = ['$scope', 'SERVER', '$http'];
export {MainController};
