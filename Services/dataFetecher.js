/**
 * Created by Mak on 4/18/17.
 */
resume.factory('dataFetcher', function($http){

    console.log("factory is called");
    return {

        getData : function (url){
            return $http.get(url);
        }

    }

});