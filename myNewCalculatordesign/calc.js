const  container = document.querySelector(".container");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.body;
container.addEventListener("click",()=> {
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");
  body.classList.toggle("dark-mode"); 
});
const displayScreen = document.getElementById("screenDisplay");
const output = document.getElementById('answerField');
const onButton = document.getElementById('onButton');
const welcomeMessage = document.getElementById('WelcomeMessage');
const farewellMessage = document.getElementById('farewellMessage');
const rIcon = document.querySelector('.rIcon');
const degIcon = document.querySelector('.degIcon');
const thetaIcon = document.querySelector('.thetaIcon');
const fxIcon = document.querySelector('.fxIcon');
const dIcon = document.querySelector('.dIcon');
const bIcon = document.querySelector('.bIcon');
const inResult = document.querySelector('.inResult');
const rooter = document.querySelector('.rooter');
const answerField = document.getElementById("answerField");
const homeButton = document.getElementById("homeButton");
const iIcon = document.querySelector(".iIcon");
const eIcon = document.querySelector(".eIcon");
const exponentField =document.getElementById('exponetial');

let calculatorOn = false;
let isCalculating = false;
let calculatorMode = 1;
onButton.addEventListener('click', () => {
 if(!calculatorOn || !isCalculating){
  toggleCalculator();
 }
 function toggleCalculator(){
  if(!calculatorOn){
   calculatorOn = true ;
   welcomeMessage.classList.remove('dragQ');
   welcomeMessage.classList.add('slideFromRight');
			homeButton.removeAttribute("disabled","disabled");
   onButton.disabled =  true;
   onButton.textContent = 'OFF';
   output.classList.remove('dragQ');
   output.classList.remove('answerFieldPopDown');
   output.classList.remove('answerFieldPopUp');
			rooter.classList.add('effect02');
			bIcon.classList.remove('effect02');
			eIcon.classList.remove('effect02');
			if (calculatorMode === 1 || calculatorMode === 2 || calculatorMode === 3) {
				answerField.textContent = "";
				inputElement.placeholder = "0";
				inputElement.value = "";
				calculatorMode=1;
				dIcon.classList.remove('effect02');
				rIcon.classList.remove('effect02');
				iIcon.classList.remove('effect02');
				eIcon.classList.remove('effect02');
			}
			homeButton.removeAttribute("disabled","disabled");
   output.value = '';
			exponentField.value = "";
   inResult.value = '';
   inResult.classList.remove('dragQ');
   inResult.classList.remove('inResultAnieLtr');
   inResult.classList.add('inResultAnieRtl');
   welcomeMessage.addEventListener('animationend', () => {
    welcomeMessage.classList.add('dragQ');
    inResult.classList.remove('dragQ');
    inResult.classList.remove('inResultAnieLtr');
    inResult.classList.remove('inResultAnieRtl');
    output.classList.remove('dragQ');
    output.classList.remove('answerFieldPopDown');
    output.classList.add('answerFieldPopUp');
				if (calculatorMode === 1 || calculatorMode === 2 || calculatorMode === 3 || calculatorMode === 0) {
					answerField.textContent = "";
					inputElement.placeholder = "0";
					inputElement.value = "";
					calculatorMode=1;
					dIcon.classList.remove('effect02');
					rIcon.classList.remove('effect02');
					iIcon.classList.remove('effect02');
					eIcon.classList.remove('effect02');
				}
				rooter.classList.remove('effect02')
    output.value = '';
				exponentField.value = "";
    inResult.value = '';
    onButton.disabled = false;
    output.classList.remove('dragQ');
    output.style.display = 'block';
  }, { once: true });
  }else{
   farewellMessage.classList.remove('dragQ');
   inResult.classList.remove('dragQ');
   inResult.classList.remove('inResultAnieRtl');
   inResult.classList.add('inResultAnieLtr');
   inResult.classList.add('inResultAnieLtr2');
   output.classList.remove('dragQ');
   output.classList.add('answerFieldPopDown');
   output.classList.remove('answerFieldPopUp');
   farewellMessage.classList.remove('typingAnimation');
			bIcon.classList.add('effect02');
			rooter.classList.remove('effect02');
   onButton.textContent = 'ON';
			homeButton.removeAttribute("disabled","disabled");
			dIcon.classList.remove('effect02');
			rIcon.classList.remove('effect02');
			iIcon.classList.remove('effect02');
			fxIcon.classList.remove("effect02");
			eIcon.classList.remove('effect02');
   output.value = '';
			exponentField.value = "";
   output.setAttribute('disabled', 'disabled');
   calculatorOn = false ;
   isCalculating = false;
   onButton.disabled =  true;
   farewellMessage.addEventListener('animationend', () => {
    farewellMessage.classList.add('dragQ');
    inResult.classList.remove('inResultAnieLtr');
    inResult.classList.remove('inResultAnieRtl');
    inResult.classList.add('dragQ');
    output.classList.remove('dragQ');
				bIcon.classList.remove('effect02');
				eIcon.classList.remove('effect02');
    output.classList.remove('answerFieldPopDown');
    output.classList.remove('answerFieldPopUp');
    output.style.display = 'none';
    output.value = '';
				exponentField.value = "";
    inResult.value = '';
    output.setAttribute('disabled', 'disabled');
    onButton.disabled = false;
  }, { once: true });
  }
 }
});
function buttonMode(){
	if(calculatorMode === 1){
		answerField.textContent = "1;d     2;r    3;i";
		inputElement.placeholder = "Enter 1,2 or 3";
		inputElement.value = "";
		exponentField.value = "";
		calculatorMode=2;
		
	}else if(calculatorMode === 2){
		answerField.textContent = "D≈P ; n"
		inputElement.placeholder = "Enter decimal placesnumber";
		inputElement.value = "";
		exponentField.value = "";
		calculatorMode = 3;
	}else if(calculatorMode === 3){
  answerField.textContent = "C≈H;1  R≈M;2";
		inputElement.placeholder = "Enter 1 or 2";
		inputElement.value = "";
		calculatorMode = 0;
	}else if(calculatorMode === 0){
		answerField.textContent = "";
		inputElement.placeholder = "0";
		inputElement.value = "";
		exponentField.value = "";
		calculatorMode=1;
	}
}
let previousResult = 0;
function calculate(){
	if(calculatorMode === 2){
		if(inputElement.value === "1"){
			dIcon.classList.add('effect02');
			rIcon.classList.remove('effect02');
			iIcon.classList.remove('effect02');
			inputElement.value = "";
			inputElement.placeholder = "0";
			answerField.textContent = "";
			calculatorMode=1;
		}else if(inputElement.value === "2"){
			dIcon.classList.remove('effect02');
			rIcon.classList.add('effect02');
			iIcon.classList.remove('effect02');
			inputElement.value = "";
			inputElement.placeholder = "0";
			answerField.textContent = "";
			calculatorMode=1;
		}else if(inputElement.value === "3"){
			dIcon.classList.remove('effect02');
			rIcon.classList.remove('effect02');
			iIcon.classList.add('effect02');
			inputElement.value = "";
			inputElement.placeholder = "0";
			answerField.textContent = "";
			calculatorMode=1;
		}else{
			dIcon.classList.remove('effect02');
			rIcon.classList.remove('effect02');
			iIcon.classList.remove('effect02');
			answerField.textContent = "Invalid";
			inputElement.value = "";
		}
		inputElement.value = "";
	}else if(calculatorMode === 3){
   if(/^\d+$/.test(inputElement.value) && parseInt(inputElement.value) >= "0"){
				decimalPlaces = parseInt(inputElement.value);
				answerField.textContent = `to;${inputElement.value}`;
				setTimeout(function () {
					answerField.textContent = "";
				},1500);
				fxIcon.classList.add("effect02");
			 inputElement.value = "";
			 inputElement.placeholder = "0";
			 calculatorMode=1;
			}else{
				fxIcon.classList.remove("effect02");
				answerField.textContent = "Invalid";
				inputElement.placeholder = "Enter a number";
				inputElement.value = "";
			}
	}else if(calculatorMode === 0){
		if(inputElement.value === "1"){
			answerField.textContent = "History cleared!";
			setTimeout(function () {
				answerField.textContent = "";
			},1200);
			dIcon.classList.remove('effect02');
			fxIcon.classList.remove("effect02");
			rIcon.classList.remove('effect02');
			iIcon.classList.remove('effect02');
			eIcon.classList.remove('effect02');
			inputElement.value = "";
			inputElement.placeholder = "0";
			calculatorMode=1;
		}else if(inputElement.value === "2"){
			answerField.textContent = "Reset complete!";
			setTimeout(function () {
				answerField.textContent = "";
			},1200);
			dIcon.classList.remove('effect02');
			fxIcon.classList.remove("effect02");
			rIcon.classList.remove('effect02');
			iIcon.classList.remove('effect02');
			eIcon.classList.remove('effect02');
			inputElement.value = "";
			inputElement.placeholder = "0";
			calculatorMode=1;
		}else{
			answerField.textContent = "Invalid input!";
			inputElement.value = "";
		}
	}else if(calculatorMode === 1){
		try{
			const expression = inputElement.value;
			const exponentField = document.getElementById('exponetial')
			const expressionWithReplacements = expression
        .replace(/π/g, Math.PI)
        .replace(/³√/g, 'cbrt')
        .replace(/√/g, 'sqrt')
								.replace(/²/g, '^2')
								.replace(/³/g, '^3')
								.replace(/Ans/g, previousResult)
								.replace(/e/g, 'e^')
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/ln\(([^)]+)\)/g, 'log($1,e)');
      const result = math.evaluate(expressionWithReplacements);
						if (!isNaN(result)){
							addToHistory(currentInput, result);
							previousResult = result;
							const resultStr = result.toString();
							const [mantissa, exponent] = resultStr.includes('e')
							? resultStr.split('e')
       : [resultStr, '0'];
							answerField.textContent = `${mantissa}`;
							exponentField.value = exponent;
       eIcon.classList.add('effect02');
						}else{
							answerField.textContent = "Error";
       exponentField.value = "";
						}	
		 }catch(error){
				answerField.textContent = "Error";
				exponentField.value = "";
		 }
 }
};
let currentInput = '';
let history = [];
let historyIndex = -1;
function addToHistory(expression, result) {
	history.push({ expression, result });
	historyIndex = history.length - 1; 
}
function navigateUpHistory() {
	if (historyIndex > 0) {
			historyIndex--;
			displayHistoryCalculation();
	}
}
function navigateDownHistory() {
	if (historyIndex < history.length - 1) {
			historyIndex++;
			displayHistoryCalculation();
	}
}
function displayHistoryCalculation() {
	if (historyIndex >= 0 && historyIndex < history.length) {
			inputElement.value = history[historyIndex].expression;
			answerField.textContent = history[historyIndex].result;
	}
}
function usePreviousResult() {
	inputElement.value = `Ans + ...`;
}
function appendToDisplay(value) {
	const cursorPosition = inResult.selectionStart;
 const inputElement = document.querySelector(".inResult");
	const text = inputElement.value;
	const newText = text.slice(0,cursorPosition) + value +text.slice(cursorPosition);
	inputElement.value = newText;
	rooter.classList.remove('effect02');
	bIcon.classList.add('effect02');
	inputElement.focus();
	inputElement.selectionStart = cursorPosition + value.length;
	inputElement.selectionEnd = cursorPosition + value.length;
}
let inputElement = document.querySelector('.inResult');
function moveCursorLeft(){
	const inputElementValue = inputElement.value;
	const specialFunctions = ["sin(","cos(", "ᵈ√(","³√(","√(" ,"e^(", "^(", "log(" , "ln(" , "tan(" ,"Ans"];
	if ( inputElementValue.length > 0 ){
		let cursorPosition = inputElement.selectionStart;
		if (cursorPosition > 0){
			let found = false;
			for(const func of specialFunctions){
				if(cursorPosition >= func.length && inputElementValue.substring( cursorPosition - func.length,cursorPosition) === func){
					cursorPosition -= func.length;
					rooter.classList.add('effect02');
					bIcon.classList.remove('effect02');
					found = true;
					inputElement.focus();
					break;
				} 
			}
			if (!found){
				cursorPosition--;
				rooter.classList.add('effect02');
				bIcon.classList.remove('effect02');
				inputElement.focus();
			}
			inputElement.selectionStart = cursorPosition;
			inputElement.selectionEnd = cursorPosition;
			inputElement.focus();
		}
	}
}
function moveCursorRight(){
	const inputElementValue = inputElement.value;
	const specialFunctions = ["sin(","cos(","ᵈ√(" , "³√(","√(" ,"e^(" , "^(" , "log(" , "ln(" , "tan(" , "Ans"];
	if(inputElementValue.length > 0){
		let cursorPosition = inputElement.selectionEnd;
		if(cursorPosition < inputElementValue.length){
			let found = false ;
			for(const func of specialFunctions){
				if ( cursorPosition + func.length <= inputElementValue.length && inputElementValue.substring(cursorPosition,cursorPosition + func.length) === func){
					cursorPosition += func.length;
					rooter.classList.remove('effect02');
					bIcon.classList.add('effect02');
					found = true;
					inputElement.focus();
					break;
				}
			}
			if (!found){
				cursorPosition ++;
				rooter.classList.remove('effect02');
				bIcon.classList.add('effect02');
				inputElement.focus();
			}
			inputElement.selectionStart = cursorPosition;
			inputElement.selectionEnd = cursorPosition;
			inputElement.focus();
		}
	}
}
function insertAtCursor(value){
	const cursorPosition = inputElement.selectionStart;
	const inputElementValue = inputElement.value;
	inputElement.value = inputElementValue.slice(0, cursorPosition) + value + inputElementValue.slice(cursorPosition);
	inputElement.selectionStart = inputElement.selectionEnd = cursorPosition + 1;
	inputElement.dispatchEvent(new Event('input'));
}
function backspace(){
	const cursorPosition = inputElement.selectionStart;
	const inputElementValue = inputElement.value;
	const specialFunctions = ["sin(","cos(", "ᵈ√(","³√(","√(" ,"e^(", "^(" , "log(" , "ln(" , "tan(" , "Ans"];
	for ( const func of specialFunctions){
		if (inputElementValue.slice(cursorPosition - func.length,cursorPosition) === func){
				inputElement.value = inputElementValue.slice(0,cursorPosition -func.length) + inputElementValue.slice(cursorPosition);
				inputElement.selectionStart = inputElement.selectionEnd = cursorPosition - func.length;
				bIcon.classList.remove('effect02');
				rooter.classList.remove('effect02');
				inputElement.dispatchEvent(new Event('input'));
				inputElement.focus();
				return;
			}
		}
		if ( cursorPosition > 0){
			inputElement.value = inputElementValue.slice(0,cursorPosition - 1) + inputElementValue.slice(cursorPosition);
			inputElement.selectionStart = inputElement.selectionEnd = cursorPosition - 1;
			bIcon.classList.remove('effect02');
			rooter.classList.remove('effect02');
			inputElement.dispatchEvent(new Event('input'));
			inputElement.focus();
		}
}
function clearDisplay() {
  inputElement.value = "";
		answerField.value = "";
		exponentField.value = "";
		bIcon.classList.remove('effect02');
		eIcon.classList.remove('effect02');
		rooter.classList.remove('effect02');
}
