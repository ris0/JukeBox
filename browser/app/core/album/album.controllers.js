(function() {
  'use strict';

  angular
      .module('app.core')
      .controller('AlbumController', AlbumController);

  AlbumController.$inject = ['theAlbum','allAlbums'];

  function AlbumController (theAlbum, allAlbums) {
      var vm = this;
      vm.album = theAlbum;
      vm.albums = allAlbums;
  }

})();
