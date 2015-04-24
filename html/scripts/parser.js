/**
 * Javascript parser from JSON to Jaxi functions
 * 
 * Documentation
 * 	- http://usejsdoc.org/
 * 
 * Programming language parser
 * 	- Acorn: https://github.com/marijnh/acorn
 * 		Javascript parser. Generates abstract syntax tree object as specified by the 
 * 		Mozilla Parser API ( AST format = https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API). 
 * 
 * References
 * 	- Other parser: http://esprima.org/demo/parse.html
 * 
 */

//Wait time between steps in milliseconds
var WAIT_TIME_BETWEEN_STEPS = 100;

/**
 * Create a new Parser.
 * 
 * @constructor
 */
var Parser = function(){
	//Stores the current processing position
	this.position = 0;
	//Stores the block code
	this.code = "";
};

/**
 * Init the paser.
 * 
 * @param {string} jsonCode The code in JSON format.
 */
Parser.prototype.init = function(code){	
	this.code = code;
	this.position = 0;
	//Starts processing the first line of code
	this.next();
};

/**
 * Process line by line of the block code
 */
Parser.prototype.next = function(){
	
	//Instruction that express some action,
	//for example jaxi.run
	var statement = "";
	
	//Asks if there are more lines of code to process
	if(this.position < this.code.length){
		
		//Asks if there's something in that code block position
		if(this.code[this.position]){
			
			//Asks what type of statement we are processing
			switch(this.code[this.position].type){
				case 'ExpressionStatement':			
					//Gets the current expression statement
					statement = this.getExpressionStatement(this.code[this.position].expression);
					this.wait(statement, 'ExpressionStatement');
				break;
				case 'IfStatement':
					//Gets the if expression statement
					statement = this.getExpressionStatement(this.code[this.position].test);
					this.wait(statement, 'IfStatement', this.code[this.position]);										
				break;
			}
		}
	}
}

/**
 * Wait until Jaxi stops to move, that indicates Jaxi is finished the
 * action and is ready to process the next one.
 * 
 * @param {string} statement The statement to run with eval().
 * @param {string} type The type of the statement.
 * @param {string} codeBlock The code block to process inside the statement. For example the code inside an "if"
 */
Parser.prototype.wait = function(statement, type, codeBlock){
		
	//Avoid collisions with object 'window' inside of "setTimeout"
	var that = this;
	
	//Waits until Jaxi current animation be "idol", this means the game
	//can continues processing the next instruction, then evaluate the 
	//statement
	if (gjaxi.currentAnimation != "idol") {
		window.setTimeout(function(){ that.wait(statement, type, codeBlock) }, WAIT_TIME_BETWEEN_STEPS);
	}else{
		this.evaluate(statement, type, codeBlock);		
	}
}

/**
 * Gets the expression statement, for example: jaxi.run(100);
 * 
 * @param {object} code Converted statement object from JSON .
 * @return {string} statement The final statement to evaluate.
 */
Parser.prototype.getExpressionStatement = function(code){
	
	var object 		= code.callee.object.name;
	var property 	= code.callee.property.name;
	var arguments = this.getArguments(code.arguments);
	var callee 		= object + '.' + property;
	var statement 	= callee + '(' + arguments + ')' + ';';
	
	//console.log(statement);
	
	return statement;
}

/**
 * Gets the values of the arguments
 * 
 * @param {array} arguments All the arguments.
 * @return {string} The arguments separated by comma.
 */
Parser.prototype.getArguments = function(arguments){
	
	//console.log(JSON.stringify(arguments,null,2));
	
	//Output array with the arguments
	var output = [];
	
	//Loops over all arguments and save them in the array
	for (var i = 0; i < arguments.length; i++) {
		
		if(arguments[i].type == "Literal"){
			output.push(arguments[i].raw);
		}else if(arguments[i].type == "UnaryExpression"){
			
			if(arguments[i].prefix == true){				
				value = arguments[i].operator + "" + arguments[i].argument.raw;
				output.push(value);
			}
		}
	}

	//Return the arguments separated by comma
	return output.join(', ');
}

/**
 * Parses the raw code string to JSON format (AST format)
 * 
 * @param {string} code All the code to convert in JSON format.
 * @return {string} The coverted code in JSON format.
 */
Parser.prototype.parseFromJavascript = function(code){
	
	var parsedCode = acorn.parse(code);
	
	return parsedCode.body;
}

/**
 * Evaluates the statement with the core function "eval".
 * 
 * @param {string} statement The statement to run with eval().
 * @param {string} type The type of the statement.
 * @param {string} codeBlock The code block to process inside the statement. For example the code inside an "if"
 */
Parser.prototype.evaluate = function(statement, type, codeBlock){
		
	try {
		
		this.position++;
		var flag = eval(statement);
		
		switch(type){
			case 'ExpressionStatement': 
				this.next();
			break;
			case 'IfStatement':
				
				//Runs another parser to evaluate the "if" code block.
				//Depending of the eval returning we will run the consecuent (true)
				//or alternate (false)
				var parserIfStatement = new Parser(); 
			
				if(flag){
					parserIfStatement.init(codeBlock.consequent.body);
				}else{
					parserIfStatement.init(codeBlock.alternate.body);
				}
				
				//Intenal next call
				parserIfStatement.next();
				
				//Global next call
				this.next();
			
			break;
		}

	} catch (err) {
		alert(err.message);
	}		
}
