(function(wysihtml5) {
    var CLASS_NAME  = "wysiwyg-float-right",
        REG_EXP     = /wysiwyg-float-[0-9a-z]+/g;
	// adds a float right
	wysihtml5.commands.floatRight = {
	    exec: function(composer, command) {
	      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", null, CLASS_NAME, REG_EXP);
	    },
	    state: function(composer, command) {
	      return wysihtml5.commands.formatBlock.state(composer, "formatBlock", null, CLASS_NAME, REG_EXP);
	    }
    };
})(wysihtml5);

(function(wysihtml5) {
    var CLASS_NAME  = "wysiwyg-float-left",
        REG_EXP     = /wysiwyg-float-[0-9a-z]+/g;
	// adds a float left
	wysihtml5.commands.floatLeft = {
	    exec: function(composer, command) {
	      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", null, CLASS_NAME, REG_EXP);
	    },
	    state: function(composer, command) {
	      return wysihtml5.commands.formatBlock.state(composer, "formatBlock", null, CLASS_NAME, REG_EXP);
	    }
    };
})(wysihtml5);