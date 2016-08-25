angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.specialities = [
      { name: 'Pediatrics', id: 1},
      { name: 'Oncology', id: 2},
      { name: 'General Practitioner', id: 3},
      { name: 'Nutritionist', id: 4},
      { name: 'Dermatology', id: 5},
    ];

  $scope.profile = {};
  $scope.objSearch = {};
  $scope.countries = [
      { name: 'Argentina', id: 1},
    ];
  $scope.states = [
      { name: 'CABA', id: 1},
      { name: 'Santa Fe', id: 2},
      { name: 'Mendoza', id: 3},
      { name: 'San Martin de los Andes', id: 4},
      { name: 'Neuquén', id: 5},
    ];
  $scope.cities = [
      { name: 'Monte Grande', id: 1},
      { name: 'Avellaneda', id: 2},
      { name: 'Sarandí', id: 3},
      { name: 'Glew', id: 4},
      { name: 'Ezeiza', id: 5},
    ];

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.commentsData = {};

  $ionicModal.fromTemplateUrl('templates/comments.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.commentsView = modal
  });

  $scope.closeCommentsView = function() {
    $scope.commentsView.hide();
  };

  $scope.openCommentsPosView = function() {
    $scope.comments = [
      { name: 'Name', id: 3, comment: 'Excelente!', dateComment: '23/08/2016'},
      { name: 'Name', id: 4 , comment: 'Excelente médico, se preocupa por sus pacientes.', dateComment: '23/08/2016'},
    ];
    $scope.commentsView.show();
  };

  $scope.openCommentsNegView = function() {
    $scope.comments = [
      { name: 'Name', id: 1, comment: 'Malisimo!', dateComment: '23/08/2016'},
      { name: 'Name', id: 2 , comment: 'Brinda servicios de guardia, por ende, a veces no se respetan los turnos.', dateComment: '23/08/2016'},
    ];
    $scope.commentsView.show();
  };


  $scope.addCommentData = {};

  $ionicModal.fromTemplateUrl('templates/addComment.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.addCommentView = modal
  });

  $scope.closeAddCommentView = function() {
    //TODO GRABAR
    $scope.addCommentView.hide();
  };

  $scope.openAddCommentView = function() {
    $scope.selected = {name: 'Pepa' , speciality: 'Oncologycs'};
    $scope.addCommentView.show();
  };

  $scope.doAddCommentView = function() {
    console.log('doAddCommentView', $scope.addCommentData);
    $timeout(function() {
      $scope.closeAddCommentView();
    }, 1000);
  };

  $scope.doAddProfile = function() {
    //TODO AGREGAMOS PROFILE
  };


})

.controller('ResultsCtrl', function($scope) {
  $scope.results = [
    { name: 'Name', id: 1 , adress: 'abc', counterPos: 10, counterNeg: 1},
    { name: 'Name 2', id: 2 , adress: 'def', counterPos: 18, counterNeg: 10},
    { name: 'Name 3', id: 3 , adress: 'ghi', counterPos: 25, counterNeg: 5},
    { name: 'Name 4', id: 4 , adress: 'jkl', counterPos: 40, counterNeg: 9},
    { name: 'Name 5', id: 5 , adress: 'mnñ', counterPos: 10, counterNeg: 2},
    { name: 'Name 6', id: 6 , adress: 'opq', counterPos: 120, counterNeg: 11}
  ];
})
