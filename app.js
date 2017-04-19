/**
 * Created by Mak on 4/16/17.
 */
var resume =angular.module('resume',['ngAnimate']);

resume.controller('rootCtrl', function($scope,dataFetcher){
    $scope.test="hello";
    dataFetcher.getData('data.json').success(function(data){
        console.log(data);
        $scope.projects= data.projects;
    });

    $scope.filter =function (data){

        $scope.filterOn= '';
        console.log("I am clicked");
        if(data==='all')
        {
            console.log("I am clicked");
            $scope.filterOn= '';
            $scope.allClass='activeSkill';
        } else if(data=='back')
        {
            $scope.filterOn= 'Backend';
            $scope.backClass='activeSkill';
            $scope.allClass='';
            $scope.frontClass='';
        } else if(data=='front')
        {
            $scope.filterOn= 'frontend';
            $scope.backClass='';
            $scope.allClass='';
            $scope.frontClass='activeSkill';
        }

    };
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

resume.directive('scrollProgress',function ($window) {

    return {
        scope:{},
        link:function(scope, element, attrs)
        {
            angular.element($window).bind("scroll", function(){
                if(element.offset().top<=$window.pageYOffset+$window.innerHeight*0.8)
                {
                    if(element.find('svg').length<=0) {

                        var bar = new ProgressBar.Circle('#progress', {
                            color: '#aaa',
                            // This has to be the same size as the maximum width to
                            // prevent clipping
                            strokeWidth: 5,
                            trailWidth: 1,
                            easing: 'easeInOut',
                            duration: 1400,
                            text: {
                                autoStyleContainer: false
                            },
                            from: { color: '#20b2aa', width: 1 },
                            to: { color: '#238982', width: 4 },
                            // Set default step function for all animate calls
                            step: function(state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                                circle.path.setAttribute('stroke-width', state.width);
                                var value = Math.round(circle.value() * 100);
                                if (value === 0) {
                                    circle.setText('');
                                } else {
                                    circle.setText(value+"%");
                                }
                            }
                        });
                        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
                        bar.text.style.fontSize = '30px';
                        bar.animate(0.7);  // Number from 0.0 to 1.0
                    }
                }
                scope.$apply();
            });

        }
    }
});