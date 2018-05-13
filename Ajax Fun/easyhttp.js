function easyHTTP() {
    this.http = new XMLHttpRequest;
} 

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('error: ' + self.http.status);
        }
    }

    this.http.send();
}

// Make HTTP POST request


// Make HTTP PUT request


// Make HTTP DELETE request