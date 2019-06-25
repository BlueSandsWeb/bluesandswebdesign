let textarea = document.getElementsByTagName("textarea")[0];

let textareaAdjust = function(textarea) {
	// textarea.style.height = "1px";
	textarea.style.height = (textarea.scrollHeight)+"px";
}

textarea.addEventListener("input", function() {
	textareaAdjust(textarea);
});