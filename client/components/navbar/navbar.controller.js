'use strict';

class NavbarController {

  constructor(AuthService){
    this.AuthService = AuthService;
    this.isCollapsed = true;
  }
}

angular.module('videoClubApp')
  .component('navbar',{
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });
