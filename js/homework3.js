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
					"Marching cube techique",					
					React.createElement(
						"br",
						null
					),
					"Computing shader usage (Optional)"
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
					),
                    React.createElement(
						"p",
						null,
						"We have build a source code contain Mesh loader and a marching cube look up table. Notice that the marching cube vertices index is assigned as figure below."
					),
                     React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"div",
							{id: "img2", className:"exImg",style:{"background-image":"url(./art/marching_cube_index.png)"}}
						)
					),React.createElement(
						"p",
						null,
						"The marching cube look up table is named in \"mctable.cpp\". In the file, the comments show which vertex should be enclosured. //00000001 means the 0th vertex should be enclosured, and //00000110 means both 1st and 2nd vertices are enclosured. The data below the comment helps you to construct the triangles. The first argument of the data shows how many triangles should be drawn. The rest of the arguments are endpoints of a triangle. If the first argument is 1, there will be three endpoints indices, and argument is 2, there will be six endpoints, ... etc. Beware that the endpoint index order is in clock-wise. The triangle's normal should point out of the enclosured vertex."
					),
                    React.createElement(
						"p",
						null,
						"If your hw2 code can controll camera to move, feel free to finish this homework based on the code you just finished for homework2. Moreover, in our github source code, there is a branch called \"develop_ogl45\". The branch is developed in OpenGL ver 4.5. If you are intrest in the latest usage of OpenGL, please modify the develop_ogl45 yourself and finish the homework based on it."
					),
                    React.createElement(
						"p",
						null,
						"The figure shown below and the screen shot is the result that you suppose to fulfill"
					),
                    React.createElement(
                        "div",
                        {className:"paragraph clear"},
                        React.createElement(
                            "h2",
                            null,
                            "Marching Cube Result"
                        ),
                        React.createElement(
                            File,
                            {filename:"marching cube result", img:"./art/hw3_result.png", file:"https://goo.gl/nB19Fc"}
                        )
                    ),
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
					"Dynamically Updating Marching Cube(20%)",
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
					{filename:"Source Code", img: "./art/sourceCode.png", file:"https://github.com/tim37021/CGHW2_2017"}
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
				/*React.createElement(
					"iframe",
					{id:"entryIframe", src:"./shading/index.html"}
				),*/
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
						"Marching Cube"
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