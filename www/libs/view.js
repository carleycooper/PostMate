// view
var app = function(app) {

    app.View = function(model, layoutManager) {

        var v = this;
        zog(model.colors);

        var page1 = v.page1 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page1);
        var logo = new Label("PostMate🎉").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page1);



        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs1 = new Tabs({
            tabs:["Start", "Post it"]
        }).addTo(page1);

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~


        var layout1 = v.layout1 = new Layout(page1,[
            {object:header, marginTop:5, backgroundColor:frame.blue},
            {object:content, marginTop:5, backgroundColor:frame.brown},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, frame.white, null, new Shape(), stage);
        layoutManager.add(layout1);

        var content = new Container(500,500).addTo(page1);
        var title = "Emoji Lovers IOS";
	      var label = new Label(title, 20, null, "#FFF")
		      .addTo(stage)
          .center(content)
          .mov(-160,-40)

        var title = "Collect and store your favourite emojis on colorful \nsticky notes.";
  	     var label = new Label(title, 12, null, "#FFF")
  		     .addTo(stage)
          .center(content)
          .mov(-100,20)

        var title = "Click the + icon and pick a colour from the\n yellow box.";
        var label = new Label(title, 12, null, "#FFF")
        .addTo(stage)
        .center(content)
        .mov(-121,60)

        var title = "Then click the box in the right bottom corner to \nadd an emoji. Arrange and add more to \nyour collection!";
      	   var label = new Label(title, 12, null, "#FFF")
      		   .addTo(stage)
          .center(content)
          .mov(-105,100)


        // PAGE 2

        var page2 = v.page2 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page2);
        var logo = new Label("PostMate🎉").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page2);





// New Button
	var button = new Button(200, 70, "+")

		// Add the button to the stage
		.addTo(stage)
		.pos(300, 700);

    // Button to Make new Post It Notes
    	var button2 = new Button({
    		width:70, height:60,
    		label:"+",
    		color:frame.blue,
    		gloss:.1,
    		corner:30,
    		borderColor:"#fff", borderWidth:3
    	})
    		.center(content)
    		.mov(15, -68);



// Post It Notes on Button Click
	button2.on("click", function() {
    var rectangle = v.rectangle = new Rectangle(100, 100, model.colors[0])
        //.Shadow("#000000", 5, 5, 10)
        .center(content)
        .mov(-211, -75)
        .cur();
    rectangle.drag();
    var textArea = new TextArea(frame, 50, 10);
textArea.center(stage).mov(10,100);

var label = new Label({text:""}).addTo(v.rectangle).pos(30,20);
textArea.on("input", function() {
   label.text = textArea.text;
   stage.update();
});
	});




// Change Color of Notes
        var rectangle = v.rectangle = new Rectangle(40, 40, model.colors[0])
            .center(content)
            .mov(-210, -75)
            .cur();
        rectangle.drag();




        var content = new Container(500,500).addTo(page2);




        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs2 = new Tabs({
            tabs:["Start", "Post it"]
        }).addTo(page2);
        footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout2 = v.layout2 = new Layout(page2,[
            {object:header, marginTop:5, backgroundColor:frame.blue},
            {object:content, marginTop:5, backgroundColor:frame.brown},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, frame.white, null, new Shape(), stage);
        layoutManager.add(layout2);


    }

    return app;
}(app || {});
