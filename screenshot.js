document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        console.log("hello")
    }
}, false)