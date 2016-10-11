(function(){
  'use strict';

  angular.module('app04', ['ryTable'])
  .controller('MainController', ['$scope',　'$document',  function ($scope, $document) {
   var d2 =
     [
      {"id": "1", "time": "2016/9/8 9:10", "status": "INFO", "class": "com.mazda.example.Example01", "data": "テストデータです。ああああああああああああああ", "user": "v0000001"},
      {"id": "2", "time": "2016/9/9 9:10", "status": "INFO", "class": "com.mazda.example.Example02", "data": "テストデータです。ああああああああああああああ", "user": "v0000002"},
      {"id": "3", "time": "2016/9/10 9:10", "status": "INFO", "class": "com.mazda.example.Example03", "data": "テストデータです。ああああああああああああああ", "user": "v0000003"},
      {"id": "4", "time": "2016/9/11 9:10", "status": "INFO", "class": "com.mazda.example.Example04", "data": "テストデータです。ああああああああああああああ", "user": "v0000004"},
      {"id": "5", "time": "2016/9/12 9:10", "status": "INFO", "class": "com.mazda.example.Example05", "data": "テストデータです。ああああああああああああああ", "user": "v0000005"},
      {"id": "6", "time": "2016/9/13 9:10", "status": "INFO", "class": "com.mazda.example.Example06", "data": "テストデータです。ああああああああああああああ", "user": "v0000006"},
      {"id": "7", "time": "2016/9/14 9:10", "status": "INFO", "class": "com.mazda.example.Example07", "data": "テストデータです。ああああああああああああああ", "user": "v0000007"},
      {"id": "8", "time": "2016/9/15 9:10", "status": "INFO", "class": "com.mazda.example.Example08", "data": "テストデータです。ああああああああああああああ", "user": "v0000008"},
      {"id": "9", "time": "2016/9/16 9:10", "status": "INFO", "class": "com.mazda.example.Example09", "data": "テストデータです。ああああああああああああああ", "user": "v0000009"},
      {"id": "10", "time": "2016/9/17 9:10", "status": "INFO", "class": "com.mazda.example.Example10", "data": "テストデータです。ああああああああああああああ", "user": "v0000010"},
      {"id": "11", "time": "2016/9/18 9:10", "status": "INFO", "class": "com.mazda.example.Example11", "data": "テストデータです。ああああああああああああああ", "user": "v0000011"},
      {"id": "12", "time": "2016/9/19 9:10", "status": "INFO", "class": "com.mazda.example.Example12", "data": "テストデータです。ああああああああああああああ", "user": "v0000012"},
      {"id": "13", "time": "2016/9/20 9:10", "status": "INFO", "class": "com.mazda.example.Example13", "data": "テストデータです。ああああああああああああああ", "user": "v0000013"},
      {"id": "14", "time": "2016/9/21 9:10", "status": "INFO", "class": "com.mazda.example.Example14", "data": "テストデータです。ああああああああああああああ", "user": "v0000014"},
      {"id": "15", "time": "2016/9/22 9:10", "status": "INFO", "class": "com.mazda.example.Example15", "data": "テストデータです。ああああああああああああああ", "user": "v0000015"},
      {"id": "16", "time": "2016/9/23 9:10", "status": "INFO", "class": "com.mazda.example.Example16", "data": "テストデータです。ああああああああああああああ", "user": "v0000016"},
      {"id": "17", "time": "2016/9/24 9:10", "status": "INFO", "class": "com.mazda.example.Example17", "data": "テストデータです。ああああああああああああああ", "user": "v0000017"},
      {"id": "18", "time": "2016/9/25 9:10", "status": "INFO", "class": "com.mazda.example.Example18", "data": "テストデータです。ああああああああああああああ", "user": "v0000018"},
      {"id": "19", "time": "2016/9/26 9:10", "status": "INFO", "class": "com.mazda.example.Example19", "data": "テストデータです。ああああああああああああああ", "user": "v0000019"},
      {"id": "20", "time": "2016/9/27 9:10", "status": "INFO", "class": "com.mazda.example.Example20", "data": "テストデータです。ああああああああああああああ", "user": "v0000020"},
      {"id": "21", "time": "2016/9/28 9:10", "status": "INFO", "class": "com.mazda.example.Example21", "data": "テストデータです。ああああああああああああああ", "user": "v0000021"},
      {"id": "22", "time": "2016/9/29 9:10", "status": "INFO", "class": "com.mazda.example.Example22", "data": "テストデータです。aaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああ", "user": "v0000022"},
      // {"id": "23", "time": "2016/9/30 9:10", "status": "INFO", "class": "com.mazda.example.Example23", "data": "テストデータです。ああああああああああああああ", "user": "v0000023"},
      // {"id": "24", "time": "2016/10/1 9:10", "status": "INFO", "class": "com.mazda.example.Example24", "data": "テストデータです。ああああああああああああああ", "user": "v0000024"},
      // {"id": "25", "time": "2016/10/2 9:10", "status": "INFO", "class": "com.mazda.example.Example25", "data": "テストデータです。ああああああああああああああ", "user": "v0000025"},
      // {"id": "26", "time": "2016/10/3 9:10", "status": "INFO", "class": "com.mazda.example.Example26", "data": "テストデータです。ああああああああああああああ", "user": "v0000026"},
      // {"id": "27", "time": "2016/10/4 9:10", "status": "INFO", "class": "com.mazda.example.Example27", "data": "テストデータです。ああああああああああああああ", "user": "v0000027"},
      // {"id": "28", "time": "2016/10/5 9:10", "status": "INFO", "class": "com.mazda.example.Example28", "data": "テストデータです。ああああああああああああああ", "user": "v0000028"},
      // {"id": "29", "time": "2016/10/6 9:10", "status": "INFO", "class": "com.mazda.example.Example29", "data": "テストデータです。ああああああああああああああ", "user": "v0000029"},
      // {"id": "30", "time": "2016/10/7 9:10", "status": "INFO", "class": "com.mazda.example.Example30", "data": "テストデータです。ああああああああああああああ", "user": "v0000030"},
      // {"id": "31", "time": "2016/10/8 9:10", "status": "INFO", "class": "com.mazda.example.Example31", "data": "テストデータです。ああああああああああああああ", "user": "v0000031"},
      // {"id": "32", "time": "2016/10/9 9:10", "status": "INFO", "class": "com.mazda.example.Example32", "data": "テストデータです。ああああああああああああああ", "user": "v0000032"},
      // {"id": "33", "time": "2016/10/10 9:10", "status": "INFO", "class": "com.mazda.example.Example33", "data": "テストデータです。ああああああああああああああ", "user": "v0000033"},
      // {"id": "34", "time": "2016/10/11 9:10", "status": "INFO", "class": "com.mazda.example.Example34", "data": "テストデータです。ああああああああああああああ", "user": "v0000034"},
      // {"id": "35", "time": "2016/10/12 9:10", "status": "INFO", "class": "com.mazda.example.Example35", "data": "テストデータです。ああああああああああああああ", "user": "v0000035"},
      // {"id": "36", "time": "2016/10/13 9:10", "status": "INFO", "class": "com.mazda.example.Example36", "data": "テストデータです。ああああああああああああああ", "user": "v0000036"},
      // {"id": "37", "time": "2016/10/14 9:10", "status": "INFO", "class": "com.mazda.example.Example37", "data": "テストデータです。ああああああああああああああ", "user": "v0000037"},
      // {"id": "38", "time": "2016/10/15 9:10", "status": "INFO", "class": "com.mazda.example.Example38", "data": "テストデータです。ああああああああああああああ", "user": "v0000038"},
      // {"id": "39", "time": "2016/10/16 9:10", "status": "INFO", "class": "com.mazda.example.Example39", "data": "テストデータです。ああああああああああああああ", "user": "v0000039"},
      // {"id": "40", "time": "2016/10/17 9:10", "status": "INFO", "class": "com.mazda.example.Example40", "data": "テストデータです。ああああああああああああああ", "user": "v0000040"},
      // {"id": "41", "time": "2016/10/18 9:10", "status": "INFO", "class": "com.mazda.example.Example41", "data": "テストデータです。ああああああああああああああ", "user": "v0000041"},
      // {"id": "42", "time": "2016/10/19 9:10", "status": "INFO", "class": "com.mazda.example.Example42", "data": "テストデータです。ああああああああああああああ", "user": "v0000042"},
      // {"id": "43", "time": "2016/10/20 9:10", "status": "INFO", "class": "com.mazda.example.Example43", "data": "テストデータです。ああああああああああああああ", "user": "v0000043"},
      // {"id": "44", "time": "2016/10/21 9:10", "status": "INFO", "class": "com.mazda.example.Example44", "data": "テストデータです。ああああああああああああああ", "user": "v0000044"},
      // {"id": "45", "time": "2016/10/22 9:10", "status": "INFO", "class": "com.mazda.example.Example45", "data": "テストデータです。ああああああああああああああ", "user": "v0000045"},
      // {"id": "46", "time": "2016/10/23 9:10", "status": "INFO", "class": "com.mazda.example.Example46", "data": "テストデータです。ああああああああああああああ", "user": "v0000046"},
      // {"id": "47", "time": "2016/10/24 9:10", "status": "INFO", "class": "com.mazda.example.Example47", "data": "テストデータです。ああああああああああああああ", "user": "v0000047"},
      // {"id": "48", "time": "2016/10/25 9:10", "status": "INFO", "class": "com.mazda.example.Example48", "data": "テストデータです。ああああああああああああああ", "user": "v0000048"},
      // {"id": "49", "time": "2016/10/26 9:10", "status": "INFO", "class": "com.mazda.example.Example49", "data": "テストデータです。ああああああああああああああ", "user": "v0000049"},
      // {"id": "50", "time": "2016/10/27 9:10", "status": "INFO", "class": "com.mazda.example.Example50", "data": "テストデータです。ああああああああああああああ", "user": "v0000050"},
      // {"id": "51", "time": "2016/10/28 9:10", "status": "INFO", "class": "com.mazda.example.Example51", "data": "テストデータです。ああああああああああああああ", "user": "v0000051"},
      // {"id": "52", "time": "2016/10/29 9:10", "status": "INFO", "class": "com.mazda.example.Example52", "data": "テストデータです。ああああああああああああああ", "user": "v0000052"},
      // {"id": "53", "time": "2016/10/30 9:10", "status": "INFO", "class": "com.mazda.example.Example53", "data": "テストデータです。ああああああああああああああ", "user": "v0000053"},
      // {"id": "54", "time": "2016/10/31 9:10", "status": "INFO", "class": "com.mazda.example.Example54", "data": "テストデータです。ああああああああああああああ", "user": "v0000054"},
      // {"id": "55", "time": "2016/11/1 9:10", "status": "INFO", "class": "com.mazda.example.Example55", "data": "テストデータです。ああああああああああああああ", "user": "v0000055"},
      // {"id": "56", "time": "2016/11/2 9:10", "status": "INFO", "class": "com.mazda.example.Example56", "data": "テストデータです。ああああああああああああああ", "user": "v0000056"},
      // {"id": "57", "time": "2016/11/3 9:10", "status": "INFO", "class": "com.mazda.example.Example57", "data": "テストデータです。ああああああああああああああ", "user": "v0000057"},
      // {"id": "58", "time": "2016/11/4 9:10", "status": "INFO", "class": "com.mazda.example.Example58", "data": "テストデータです。ああああああああああああああ", "user": "v0000058"},
      // {"id": "59", "time": "2016/11/5 9:10", "status": "INFO", "class": "com.mazda.example.Example59", "data": "テストデータです。ああああああああああああああ", "user": "v0000059"},
      // {"id": "60", "time": "2016/11/6 9:10", "status": "INFO", "class": "com.mazda.example.Example60", "data": "テストデータです。ああああああああああああああ", "user": "v0000060"},
      // {"id": "61", "time": "2016/11/7 9:10", "status": "INFO", "class": "com.mazda.example.Example61", "data": "テストデータです。ああああああああああああああ", "user": "v0000061"},
      // {"id": "62", "time": "2016/11/8 9:10", "status": "INFO", "class": "com.mazda.example.Example62", "data": "テストデータです。ああああああああああああああ", "user": "v0000062"},
      // {"id": "63", "time": "2016/11/9 9:10", "status": "INFO", "class": "com.mazda.example.Example63", "data": "テストデータです。ああああああああああああああ", "user": "v0000063"},
      // {"id": "64", "time": "2016/11/10 9:10", "status": "INFO", "class": "com.mazda.example.Example64", "data": "テストデータです。ああああああああああああああ", "user": "v0000064"},
      // {"id": "65", "time": "2016/11/11 9:10", "status": "INFO", "class": "com.mazda.example.Example65", "data": "テストデータです。ああああああああああああああ", "user": "v0000065"},
      // {"id": "66", "time": "2016/11/12 9:10", "status": "INFO", "class": "com.mazda.example.Example66", "data": "テストデータです。ああああああああああああああ", "user": "v0000066"},
      // {"id": "263", "time": "2017/5/28 9:10", "status": "INFO", "class": "com.mazda.example.Example263", "data": "テストデータです。ああああああああああああああ", "user": "v0000263"},
      //{"id": "264", "time": "2017/5/29 9:10", "status": "INFO", "class": "com.mazda.example.Example264", "data": "テストデータです。ああああああああああああああああああああ", "user": "v0000264"}
    ]
    //キーリストを作ります。

    var dx =
         [
          {"id": "01", "time": "2016/9/8 9:10", "status": "INFO", "class": "com.mazda.example.Example01", "data": "テストデータです。ああああああああああああああ", "user": "v0000001"},
          {"id": "02", "time": "2016/9/9 9:10", "status": "INFO", "class": "com.mazda.example.Example02", "data": "テストデータです。ああああああああああああああ", "user": "v0000002"},
          {"id": "03", "time": "2016/9/10 9:10", "status": "INFO", "class": "com.mazda.example.Example03", "data": "テストデータです。ああああああああああああああ", "user": "v0000003"},
          {"id": "04", "time": "2016/9/11 9:10", "status": "INFO", "class": "com.mazda.example.Example04", "data": "テストデータです。ああああああああああああああ", "user": "v0000004"},
          {"id": "05", "time": "2016/9/12 9:10", "status": "INFO", "class": "com.mazda.example.Example05", "data": "テストデータです。ああああああああああああああ", "user": "v0000005"},
          {"id": "06", "time": "2016/9/13 9:10", "status": "INFO", "class": "com.mazda.example.Example06", "data": "テストデータです。ああああああああああああああ", "user": "v0000006"},
          {"id": "7", "time": "2016/9/14 9:10", "status": "INFO", "class": "com.mazda.example.Example07", "data": "テストデータです。ああああああああああああああ", "user": "v0000007"},
          {"id": "8", "time": "2016/9/15 9:10", "status": "INFO", "class": "com.mazda.example.Example08", "data": "テストデータです。ああああああああああああああ", "user": "v0000008"},
          {"id": "9", "time": "2016/9/16 9:10", "status": "INFO", "class": "com.mazda.example.Example09", "data": "テストデータです。ああああああああああああああ", "user": "v0000009"},
          {"id": "10", "time": "2016/9/17 9:10", "status": "INFO", "class": "com.mazda.example.Example10", "data": "テストデータです。ああああああああああああああ", "user": "v0000010"},
          {"id": "11", "time": "2016/9/18 9:10", "status": "INFO", "class": "com.mazda.example.Example11", "data": "テストデータです。ああああああああああああああ", "user": "v0000011"},
          {"id": "12", "time": "2016/9/19 9:10", "status": "INFO", "class": "com.mazda.example.Example12", "data": "テストデータです。ああああああああああああああ", "user": "v0000012"},
          {"id": "13", "time": "2016/9/20 9:10", "status": "INFO", "class": "com.mazda.example.Example13", "data": "テストデータです。ああああああああああああああ", "user": "v0000013"},
          {"id": "14", "time": "2016/9/21 9:10", "status": "INFO", "class": "com.mazda.example.Example14", "data": "テストデータです。ああああああああああああああ", "user": "v0000014"},
          {"id": "15", "time": "2016/9/22 9:10", "status": "INFO", "class": "com.mazda.example.Example15", "data": "テストデータです。ああああああああああああああ", "user": "v0000015"},
          {"id": "16", "time": "2016/9/23 9:10", "status": "INFO", "class": "com.mazda.example.Example16", "data": "テストデータです。ああああああああああああああ", "user": "v0000016"},
          {"id": "17", "time": "2016/9/24 9:10", "status": "INFO", "class": "com.mazda.example.Example17", "data": "テストデータです。ああああああああああああああ", "user": "v0000017"},
          {"id": "18", "time": "2016/9/25 9:10", "status": "INFO", "class": "com.mazda.example.Example18", "data": "テストデータです。ああああああああああああああ", "user": "v0000018"},
          {"id": "19", "time": "2016/9/26 9:10", "status": "INFO", "class": "com.mazda.example.Example19", "data": "テストデータです。ああああああああああああああ", "user": "v0000019"},
          {"id": "20", "time": "2016/9/27 9:10", "status": "INFO", "class": "com.mazda.example.Example20", "data": "テストデータです。ああああああああああああああ", "user": "v0000020"},
          {"id": "21", "time": "2016/9/28 9:10", "status": "INFO", "class": "com.mazda.example.Example21", "data": "テストデータです。ああああああああああああああ", "user": "v0000021"},
          {"id": "22", "time": "2016/9/29 9:10", "status": "INFO", "class": "com.mazda.example.Example22", "data": "テストデータです。aaaaaaaaaaaaaaaaaaaaaaaaaああああああああああああああ", "user": "v0000022"}
        ]
    var k2 =
    [
      {"key": "id", "label": "ID", "width": "100"},
      {"key": "time", "label": "日時"},
      {"key": "status", "label": "ステータス", "width": "200"},
      {"key": "class", "label": "クラス名"},
      {"key": "data", "label": "データ"},
      {"key": "user", "label": "ユーザー"}
    ]
    $scope.pagingfunction = function(o,l){
      console.log("server side paging");
      return d2.filter(function(v,i,e){
        return (i>=o-1 && i < o+l-1) ;
      });
    };
    $scope.d2;// = $scope.pagingfunction(1,10); //= d2;
    $scope.k2 = k2;
    $scope.totalCount = 22;
    $scope.change = function(){
      d2 = dx;
      $scope.d2 = dx;
      $scope.totalCount = d2.length;
    }
  }])
})();
