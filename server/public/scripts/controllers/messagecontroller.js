myApp.controller('MessageController', function($http){
    console.log('New Controller Created');
    var self = this;
    self.results= {};

    self.get = function () {
        $http.get('/messages').then(function (response) {
            self.results.data = response.data;
            console.log(self.sales.data);
        }).catch(function (error) {
            console.log('error getting messages');
        });
    }

    self.submit = function(object) {
        console.log(object);
        $http.post('/messages', object).then(function(response){
           console.log('sent message');
           self.name = "";
           self.message="";
           self.get();
        }).catch(function(error){
           console.log('message not sent');
        });
    }

    self.get();

});

