const DOMHandler = function() {
    const content = document.getElementById("content");
    const appendBody = (element) => {document.body.appendChild(element)};
    const unappendBody = (element) => {document.body.removeChild(element)};
    const appendContent = (element) => {content.appendChild(element)};
    const unappendContent  = (element) => {content.removeChild(element)};

    return {
        appendBody,
        appendContent,
        unappendBody,
        unappendContent,
    }
}();

export { DOMHandler };