'use strict';

/**
 * @ngdoc service
 * @name movieAppApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the movieAppApp.
 */
angular.module('movieAppApp')
  .factory('serviceAjax', function ($http) {
    // Service logic
    var slides = [
      {
        dataTransition: 'fade',
        dataSlotAmount: '7',
        dataMasterSpeed: '500',
        dataImgSrc: 'img/slider/1.jpg',
        dataBgFit: 'cover',
        dataBgPosition: 'center center',
        dataBgRepeat: 'no-repeat',
        layers: [
          {
            class: 'tp-caption very_large_text sft heading',
            dataX: 'center',
            dataY: 'top',
            dataVOffset: '60',
            dataSpeed: '700',
            dataStart: '1200',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' Welcome To Sheldon'
          },
          {
            class: 'tp-caption lft',
            dataX: 'center',
            dataY: 'center',
            dataVOffset: '20',
            dataSpeed: '500',
            dataStart: '2000',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <img src="img/slider/s1.png" class="img-responsive" alt="" />'
          },
          {
            class: 'tp-caption sfl circle-left',
            dataX: 'center',
            dataHOffset: '-350',
            dataY: 'center',
            dataVOffset: '-70',
            dataSpeed: '1000',
            dataStart: '2500',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <div class="caption-item"><i class="fa fa-globe"></i></div>'
          },
          {
            class: 'tp-caption sfl circle-left',
            dataX: 'center',
            dataHOffset: '-250',
            dataY: 'center',
            dataVOffset: '-120',
            dataSpeed: '500',
            dataStart: '2800',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <img src="img/slider/arrow-top-left.png" class="img-responsive arrow" alt="" />'
          },
          {
            class: 'tp-caption sfr circle-right',
            dataX: 'center',
            dataHOffset: '350',
            dataY: 'center',
            dataVOffset: '-70',
            dataSpeed: '1000',
            dataStart: '3500',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <div class="caption-item"><i class="fa fa-user"></i></div>'
          },
          {
            class: 'tp-caption sfr',
            dataX: 'center',
            dataHOffset: '250',
            dataY: 'center',
            dataVOffset: '-120',
            dataSpeed: '500',
            dataStart: '3800',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <img src="img/slider/arrow-top-right.png" class="img-responsive arrow" alt="" />'
          },
          {
            class: 'tp-caption sfr circle-right',
            dataX: 'center',
            dataHOffset: '350',
            dataY: 'center',
            dataVOffset: '120',
            dataSpeed: '1000',
            dataStart: '4500',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <div class="caption-item"><i class="fa fa-suitcase"></i></div>'
          },
          {
            class: 'tp-caption sfr',
            dataX: 'center',
            dataHOffset: '240',
            dataY: 'center',
            dataVOffset: '160',
            dataSpeed: '500',
            dataStart: '4800',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <img src="img/slider/arrow-bottom-right.png" class="img-responsive arrow" alt="" />'
          },
          {
            class: 'tp-caption sfl circle-left',
            dataX: 'center',
            dataHOffset: '-350',
            dataY: 'center',
            dataVOffset: '120',
            dataSpeed: '1000',
            dataStart: '5500',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: ' <div class="caption-item"><i class="fa fa-gift"></i></div>'
          },
          {
            class: 'tp-caption sfl',
            dataX: 'center',
            dataHOffset: '-240',
            dataY: 'center',
            dataVOffset: '160',
            dataSpeed: '500',
            dataStart: '5800',
            dataEasing: 'Power4.easeOut',
            dataEndSpeed: '300',
            dataEndEasing: 'Power1.easeIn',
            dataCaptionHidden: 'on',
            content: '<img src="img/slider/arrow-bottom-left.png" class="img-responsive arrow" alt="" />'
          }
        ]
      }
    ];
    // Public API here
    return {
      info: function(type, id){
        return $http.get('http://localhost:3000/'+type+'/info/' + id);
      },
      search: function(type, query, page){
        return $http.get('http://localhost:3000/'+type+'/search?q=' + query + '&page=' + page);
      },
      popular: function(type, page){
        return $http.get('http://localhost:3000/'+type+'/popular?page=' + page);
      },
      slider: function(){
        return slides;
      }
    };
  });
