var File=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"file", href:this.props.file, target:"_blank"},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"fileImg"}
			),
			React.createElement(
				"div",
				{className:"filename"},
				this.props.filename
			)
		);
	}
});


var Tutorial=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"tutorialBody"},
			React.createElement(
				"h1",
				null,
				"Homework 2: Basic Rendering system"
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Learning Objectives"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Rendering pipeline",					
					React.createElement(
						"br",
						null
					),
					"OpenGL function call",
					React.createElement(
						"br",
						null
					),
					"Shader",
                    React.createElement(
						"br",
						null
					),
                    "Learning shading algorithms"
				)
			),
			React.createElement(
				"div",
				{className:"paragraph",id:"intro"},
				React.createElement(
					"h2",
					null,
					"Introduction"
				),
				React.createElement(
					"p",
					null,
					"In this homework, we have finished most of the code for you. All you need to do is to complete the requirement.",
					React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"p",
							null,
							"What we have done for you. The Sun and the Earth are at the origin point. The following image is the normal of the meshes"
						),
						React.createElement(
							"div",
							{className:"exImg",style:{"background-image":"url(./art/hw2_pic1.jpg)"}}
						)
					),
					React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"p",
							null,
							"First, you need to modify the code so that the Earth can rotate( 自轉 ), revolve( 公轉 ) around the Sun, and rotation about an arbitrary axis(任意軸旋轉)."
						),
						React.createElement(
							"div",
							{className:"exImg",style:{"background-image":"url(./art/hw2_pic2.jpg)"}}
						)
					),
                    React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"p",
							null,
							"Second, you have to implement three kinds of shading models with three interpolation techniques. These three shading models are Phong, Blinn-Phong, Lambert. And the three interpolation techniques are Flat, Gouraud, and Phong."
						),
						React.createElement(
							"div",
							{className:"exImg",style:{"background-image":"url(./art/hw2_requests.png)"}}
						)
					)
				),
				React.createElement(
					"p",
					null,
					"Don't be scared by the complex code. You only need to focus on ",
					React.createElement(
						"span",
						{className:"strong"},
						"main.cpp"
					),
					", ",
					React.createElement(
						"span",
						{className:"strong"},
						"vs.txt"
					),
					" and ",
					React.createElement(
						"span",
						{className:"strong"},
						"fs.txt"
					)
				)
			),
            React.createElement(
				"div",
				{className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Tutorial for Building OpenGL Environment"
				),
				React.createElement(
					File,
					{filename:"Tutorial Video", img:"./art/opengl.png", file:"https://youtu.be/GnuoVEwr338"}
				)
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Homework Submission"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Submit \"Student ID.zip\" to Moodle.",
					React.createElement(
						"br",
						null
					),
                    "In the zip file, there should be your source code and txt file with your HackMD Link.",
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"span",
						{className:"alert"},
						"Deadline: 2017/10/30 22:00"
					)
				)

			),
			React.createElement(
				"div",
				{id:"score", className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Scoring"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Transformation(30%): Rotation(10%) + Revolution(10%) + Rotation about an arbitrary axis(10%)",
					React.createElement(
						"br",
						null
					),
					"Shading in Camera Space(45%, 5% for each result)",
					React.createElement(
						"br",
						null
					),
					"Homework notes on hackpad(20%)",
					React.createElement(
						"br",
						null
					),
				)
			),
			React.createElement(
				"div",
				{id:"example", className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Links"
				),
				React.createElement(
					File,
					{filename:"Source Code", img: "./art/sourceCode.png" , file:"https://github.com/tim37021/CGHW2_2017"}
				),
				React.createElement(
					File,
					{filename:"HackMD", img: "./art/hackmd.png", file:"https://hackmd.io/MYZgrAhg7AbDYFooFMAsIGuBAnAnwAZgIwIBGIUUY1xkxqQA?both"}
				),
				React.createElement(
					File,
					{filename:"Fun Facts: If the Moon Were Only 1 Pixel", img:"./art/hw2_funFact.png", file:"http://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}
				),
                React.createElement(
					File,
					{filename:"Demo Time Appointment", img:"./art/demo_appointment.png", file:"https://docs.google.com/spreadsheets/d/1vXdILBgB7MKFy3abvirwdDxUXZ7OWW8yDdE-Vaq7L04/edit?usp=sharing"}
				)
			)
		)
	}
});

var Main = React.createClass({
	render: function() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				Tutorial,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.homework="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));