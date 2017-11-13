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
				"Homework 3: Marching Cube"
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
					"3D Reconstruction with Marching cube techique",					
					React.createElement(
						"br",
						null
					),
					"Computing shader usage"
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
					"Marching cubes is a computer graphics algorithm for extracting a polygonal mesh of an isosurface from a three-dimensional discrete scalar field.",
					React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"div",
							{id: "img2", className:"exImg",style:{"background-image":"url(./art/hw3_1.jpg)"}}
						)
					),
                    React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"div",
							{id: "img2", className:"exImg",style:{"background-image":"url(./art/hw3_2.png)"}}
						)
					),
					React.createElement(
						"p",
						null,
						"In this homework, you should learn how to contruct a mesh with vertices (point cloud). Furthermore, you should implement an editting UI to edit the vertices informations(Adding, Deleting, and Re-position Vertices)."
					)
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
					"Include your well-commented source code and a document explains your program",
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"span",
						{className:"alert"},
						"Deadline: 2017/12/4 22:00"
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
					"Static Marching Cube(80%)",						
					React.createElement(
						"br",
						null
					),
					"Dynamic Editing UI(20%)",
					React.createElement(
						"br",
						null
					)
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
					{filename:"Hackpad", img: "./art/hackpad.png", file:"https://hackpad.com/CGHW3-mg9JmVySCVp"}
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
			),
			React.createElement(
				"div",
				{id:"entryScene"},
				React.createElement(
					"iframe",
					{id:"entryIframe", src:"./shading/index.html"}
				),
				React.createElement(
					"div",
					{id:"entryTitleDiv"},
					React.createElement(
						"div",
						{id:"entryMainTitle"},
						"Homework 3"
					),
					React.createElement(
						"div",
						{id:"entrySubTitle"},
						"Shading"
					)
				)
			)
		)
	}
});
currentPage.homework="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));
setTimeout(function(){
	var scene=document.getElementById("entryScene");
	var sceneTitle=document.getElementById("entryMainTitle");
	var sceneSubTitle=document.getElementById("entrySubTitle");
	scene.style.transform="scale(1.2, 1.2)";
	scene.style.opacity="0";
	sceneTitle.style.transform="scale(1.2, 1.2)";
	sceneSubTitle.style.transform="scale(1.2, 1.2)";
	setTimeout(function(){
		scene.remove();
	}, 1000);
}, 2000);