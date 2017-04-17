/**
 * Created by Mak on 4/16/17.
 */
var resume =angular.module('resume',[]);

resume.controller('rootCtrl', function($scope){

    $scope.test="hello";

});

resume.directive('scroll',function ($window) {

    return function(scope, element, attrs)
    {
        angular.element($window).bind("scroll", function(){
            //
            if(this.pageYOffset>650)
            {
                scope.boolChangeClass=true;
            }
            else
            {
                scope.boolChangeClass=false;
            }
            scope.$apply();
        });

    }
});

resume.directive('scrollSkill',function ($window) {

    return {
        scope:{},
        link:function(scope, element, attrs)
    {
        angular.element($window).bind("scroll", function(){
            if(element.offset().top>$window.pageYOffset+$window.innerHeight*0.8)
            {
                if(!element.find('.cd-timeline-img','.cd-timeline-content').hasClass('is-hidden'))
                    element.find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');


            }
            else if(element.offset().top<=$window.pageYOffset+$window.innerHeight*0.8)
            {
                if(element.find('.cd-timeline-img').hasClass('is-hidden'))
                {
                    element.find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
                }
            }
            scope.$apply();
        });

    }
    }
});