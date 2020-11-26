function RajoutVideo(){
	let videoDiv=createElement("div");
	let VideoParagraphe=querySelector('.ie3P');
	videoDiv.innerHTML = "<br/><video src="../img/videosurprise.mp4" controls poster="../pge/m3.jpg" autoplay width="600"></video><br/>";
	VideoParagraphe.appendChild(videoDiv);
}