var lectures = [
	{ title: "Week 1: Syllabus & Overview of Computer Graphics", img: "./art/week1.png", slideshow: "./file/20170920 Syllabus.pdf", video: "https://goo.gl/m8Hb5m" },
    { title: "Week 2: Introduction to Graphics Pipeline", img: "./art/week2.jpg", slideshow: "https://drive.google.com/drive/folders/0B1MjmqsA2djEb3dQT0dxdW1vbjQ?usp=sharing", video: "https://youtu.be/yFvGRQvUTgU" },
    { title: "Week 3: Introduction to Game Development and VR Applications", img: "./art/week3.jpg", slideshow: "https://goo.gl/FXbyfk", video: "https://youtu.be/MM93V1dOldE" },
    { title: "Week 5: Basic_Shading", img: "./art/week5.png", slideshow: "./file/20171017-Basic_Shading.pdf", video: "https://youtu.be/5FW1zOuPIoA" },
    { title: "Week 6: OpenGL Implementation Tutorials", img: "./art/week6.png", video: "https://youtu.be/4atnkdxQKAU" },
    { title: "Week 8: Marching Cube, Texture Mapping, PBR, & Disney Principled BRDF", img: "./art/week8.png", slideshow: "https://goo.gl/8qB3us", video: "https://goo.gl/m8Hb5m" },
    { title: "Week 10: Marching Cube and Shading Discussion", img: "./art/week10.png", video: "https://youtu.be/kRhLhnIeKQU" },
    { title: "Week11 : Global Illumination and Light Transport Techniques", img: "./art/week11.png", slideshow: "./file/20171202 Global_Illumination.pdf", video: "https://youtu.be/xSiRUaTTIuo" },
    { title: "Week12 : 3D Surface Reconstruction", img: "./art/week12.jpeg", slideshow: "./file/20171205-Surface-Reconstruction.pdf", video: "https://youtu.be/KPXuODaiIwY" },
    { title: "Week13 : Camera Calibration, Structure from Motion & Bundle Adjustment", img: "./art/week13.jpg", slideshow: "./file/20171212-SfM.pdf", video: "https://youtu.be/1dFMhYbbUdY" },
    { title: "Week14 : Industry Visiting", img: "./art/week14.PNG" },
    { title: "Week15 : Computer Animation", img: "./art/week15.PNG", slideshow: "./file/1226_Computer_Animation.pdf", video: "https://youtu.be/AmtsRPnyxGg" },
]

var Lecture = React.createClass({
	render: function () {
		var slideshowTemp;
		var videoTemp;
		var buttonCount = 0;
		if (this.props.slideshow != undefined) {
			buttonCount++;
		}
		if (this.props.video != undefined) {
			buttonCount++;
		}
		var buttonEle = [];
		if (this.props.slideshow != undefined) {
			buttonEle.push(React.createElement("a", { className: "slideshowB buttonCount" + buttonCount, href: this.props.slideshow, target: "_blank" }));
		}
		if (this.props.video != undefined) {
			buttonEle.push(React.createElement("a", { className: "videoB buttonCount" + buttonCount, href: this.props.video, target: "_blank" }));
		}
		return React.createElement(
			"div",
			{ className: "lecture" },
			React.createElement(
				"div",
				{ style: { "background-image": "url(" + this.props.img + ")" }, className: "lectureImg" }
			),
			React.createElement(
				"div",
				{ className: "lectureTitle" },
				this.props.title
			),
			React.createElement(
				"div",
				{ className: "cardButton" },
				buttonEle
			)
		);
	}
});

var Main = React.createClass({
	render: function () {
		var lecturesEle = [];
		for (var a in lectures) {
			lecturesEle.push(React.createElement(Lecture, { title: lectures[a].title, img: lectures[a].img, slideshow: lectures[a].slideshow, video: lectures[a].video }));
		}
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				"div",
				{ id: "lectureBody" },
				lecturesEle
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.lecture = "currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));