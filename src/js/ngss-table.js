(function(){
  'use strict';

  angular.module('ngssTable', [])
  .directive('ngssTable', function(){
    return {
      restrict: 'E',
      scope: {
          keys: '=',
          data: '=',
          totalCount: '=',
          pagerows: '=',
          pagingFunc: '&'
      },
      link: function(scope, element, attr){
        scope.$watch('data', function(){
          scope.wData = scope.data;
          if(angular.isUndefined(scope.data)){
            scope.wData = [];
          }
        });
      },
      templateUrl: 'html/ngss-table.html'
    }
  })
  .directive('onFinishRepeatRender', function($timeout){
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
          if (scope.$last === true) {
              $timeout(function () {
                  scope.$emit('onFinishRowsRepeat');
              });
          }
      }
    }
  })
  .directive('pagination', function(){
    return {
      restrict: 'E',
      replace: true,
      link: function(scope, element, attrs){
        var cloneData = [];
        var pagingfunc;
        var pagerows = 20;         //1ページの行数はデフォルト20行
        if(scope.pagerows){        //ページの行数が指定された場合はその値で上書きする。
          pagerows = scope.pagerows;
        }
        scope.$watch('data', function(){
          if(scope.wData.length == 0){
            scope.page = '-';
            scope.pages= '-';
            scope.isFirstPage = true;
            scope.isLastPage = true;
          }else{
            if(scope.pagingFunc()){
              pagingfunc = scope.pagingFunc();
              scope.total = scope.totalCount
            }else{
              //ページング関数がユーザで定義されていない場合のデフォルト関数です。
              //渡されたデータの配列から1ページに表示するデータを切り出します。
              pagingfunc = function(s,o){
                return cloneData.filter(function(v,i,e){
                  return (i>=s-1 && i < s+o-1) ;
                });
              }
              cloneData = scope.wData;
              scope.total = scope.data.length;
            }
            scope.page = 1;
            scope.pages = Math.ceil(scope.total/pagerows);
            scope.wData = pagingfunc(pageStartCount(scope.page, pagerows), pagerows);
            scope.isFirstPage = true;
            scope.isLastPage = false;
            if(scope.page == scope.pages){
              scope.isLastPage = true;
            };
            setCount(scope.page, pagerows, scope.total);
          }
        });
        //最初のページを表示します。
        scope.first = function(){
          scope.page = 1;
          scope.wData = pagingfunc(pageStartCount(scope.page, pagerows), pagerows);
          scope.isLastPage = false;
          scope.isFirstPage = true;
          setCount(scope.page, pagerows, scope.total);
        }
        //前のページを表示します。
        scope.prev = function(){
          scope.page -= 1;
          scope.wData = pagingfunc(pageStartCount(scope.page, pagerows), pagerows);
          if(scope.page == 1){
            scope.isFirstPage = true;
          }
          scope.isLastPage = false;
          setCount(scope.page, pagerows, scope.total);
        }
        // //次のページを表示します
        scope.next = function(){
          scope.page += 1;
          scope.wData = pagingfunc(pageStartCount(scope.page, pagerows), pagerows);
          if(scope.page == scope.pages){
            scope.isLastPage = true;
          }
          scope.isFirstPage = false;
          setCount(scope.page, pagerows,scope.total);
        }
        //最後のページを表示します。
        scope.last = function(){
          scope.page = scope.pages;
          scope.wData = pagingfunc(pageStartCount(scope.page, pagerows), pagerows);
          scope.isLastPage = true;
          scope.isFirstPage = false;
          setCount(scope.page, pagerows,scope.total);
        }
        var setCount = function(np, nr, total){
          scope.startCount = pageStartCount(np, nr);
          scope.endCount = pageEndCount(np,nr, total);
        }
        //ページ番号と表示件数からページの最初のデータインデックスを取得します。
        var pageStartCount = function(np, nr){
          return np === 0 ? 0 : (np-1)*nr +1;
        }
        var pageEndCount = function(np, nr, total){
          return np === 0 ? 0 : ((np*nr) > total ? total : (np*nr));
        }
      },
      templateUrl: 'html/pagination.html'
    }
  })
  .directive('ssTable', function(){
    return {
      restrict: 'E',
      replace: true,
      link: function (scope, element, attrs) {
        var children = element.children('div');
        var header = children[0]
        var body = children[1];

        body.addEventListener('scroll', function(){
          header.scrollLeft = body.scrollLeft;
        })

        //カラム幅のスタイルオブジェクトを返す
        scope.columnWidth = function(k){
          return {width: calcColumnWidth(k) + "px"};
        }
        //列幅（カラム幅の足し算）のスタイルオブジェクトを返す
        scope.tableWidth = function(){
          return {width: calcTableWidth() + "px"};
        }
        //ngRepeatが完了した後のイベントを待ち受け
        //スクロールバーの有無でデザインを変更する
        scope.$on('onFinishRowsRepeat',function(onFinishRepeatEvent){
          if(body.scrollHeight > body.offsetHeight){
            header.style.width = 'calc(100% - 17px)';
          }else{
            header.style.width = '';
          }
        });

        //文字幅を計算します現在暫定対応中
        var calcStrLength = function(d){
          //データの長さの16倍
          return d.length * 25;
        }
        var calcColumnWidth = function(k){
          //キーに指定されていたら指定されている方を返す
          if(k.width){
            return parseInt(k.width);
          }
          //キーに幅が指定されていない場合は，ラベルかデータの長い方を返す
          //ラベルの長さを調べる
          var keyLength = calcStrLength(k.label);
          //データの長さを調べる
          var dataLength = scope.wData.length == 0 ? 0 : calcStrLength(_.max(scope.wData, function(d){
            return d[k.key].length
          })[k.key]);
          //キーとデータで長い方を返す
          return keyLength > dataLength ? keyLength : dataLength ;
        }
        //テーブル（スクロール部分）の幅を計算する（カラム幅の積算）
        var calcTableWidth = function() {
          var sum = 0;
          scope.keys.forEach(function(k) {
              sum += calcColumnWidth(k);
          });
          return sum;
        }
      },
      templateUrl: 'html/table.html'
    };
  });
})();
