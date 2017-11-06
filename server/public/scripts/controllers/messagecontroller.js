myApp.controller('MessageController', function($http){
    console.log('New Controller Created');
    var self = this;


    self.get = function () {
        $http.get('/messages').then(function (response) {
            self.sales.data = response.data;
            console.log(self.sales.data);
        }).catch(function (error) {
            console.log('error getting messages');
        });
    }

    self.submit = function(object) {
        console.log(object);
        $http.post('/messages', object).then(function(response){
           console.log('sent message');
           self.get();
        }).catch(function(error){
           console.log('message not sent');
        });
    }

    self.get();

});

