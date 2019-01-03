var app = angular.module('numericOperation', []);
app.directive('mathOperation', function () {
    return {
        restrict: 'E',
        compile: function (element, attrs) {
            var type = attrs.type || 'text';
            var htmlText = '<div class="control-group">' +
                '<label class="control-label" for="lblInput"</label>' +
                    '<div class="controls">' +
                    '<input type="' + type + '" class="input-xlarge" id="lblInput" name="lblInput" placeholder="Enter Value"><br/><br/>' +
                    '<input type="' + type + '" class="input-xlarge" id="lblResult" name="lblResult" placeholder="Result">' +
                    '</div>' +
                '</div>';
            element.replaceWith(htmlText);
            var numInput = document.getElementById('lblInput');
            numInput.addEventListener('input', function () {
                var num = this.value.match(/[0-9\+\-\*\/]+$/);
                if (num === null) {
                    this.value = this.value.substring(0, this.value.length - 1);
                }
                if (this.value) {                                                            
                    document.getElementById('lblResult').value = eval(document.getElementById('lblInput').value);
                }
            });
        }
    }
});
