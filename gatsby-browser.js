exports.onRouteUpdate = ({ location, prevLocation }) => {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("noscroll");
}