//Start with boolean variables that will determine if a field is valid set to FALSE.

var piq1_flag = false;	
var piq2_flag = false;	
var piq3_flag = false;
var piq4_flag = false;	
var piq5_flag = false;
var anonymous = false;

function loadData() 
{

	function change(){
		document.form.text.style.backgroundColor='#00FF00';
		document.form.text.style.color='#FF0000';
		document.form.area.style.backgroundColor='#DDDDDD';
	}

	function change2(){
		document.form.area.style.backgroundColor='#00FF00';
		document.form.text.style.backgroundColor='#DDDDDD';
	}

	document.myform.form_first_name.onblur = function()
	{
		validateData('first_name');
	}

	
	document.myform.form_last_name.onblur = function()
	{
		validateData('last_name');
	}

	
	document.myform.form_email_address.onblur = function() 
	{
		validateData('email_address');
	}

	
	document.myform.form_phone_number.onblur = function() 
	{
		validateData('phone_number');
	}

	
	document.myform.form_sulley_address.onblur = function() 
	{
		validateData('sulley_address');
	}

//If anonymous checkbox is clicked, disable all form boxes.
	document.myform.anonymous.onclick = function() 
	{
		if (document.myform.anonymous.checked) 
			{
				document.myform.form_first_name.disabled = true;
				document.myform.form_last_name.disabled = true ;
				document.myform.form_email_address.disabled = true;
				document.myform.form_phone_number.disabled = true;
				document.myform.form_sulley_address.disabled = true;
				anonymous = true;	
				piq1_flag = true;
				piq2_flag = true;
				piq3_flag = true;
				piq4_flag = true;
				piq5_flag = true;
			
		} else {

				anonymous = false;
				piq1_flag = false;
				piq2_flag = false;
				piq3_flag = false;
				piq4_flag = false;
				piq5_flag = false;

				document.myform.form_first_name.disabled = false;
				document.myform.form_last_name.disabled = false;
				document.myform.form_email_address.disabled = false;
				document.myform.form_phone_number.disabled = false;
				document.myform.form_sulley_address.disabled = false;
			}	
	}

	document.myform.onsubmit = function() 
		{
			var survey_Q1_flag = false;
			var survey_Q2_flag = false;
			var survey_Q3_flag = false;
			var survey_Q4_flag = false;
			var survey_Q5_flag = false;
			var survey_Q1_radio = document.myform.elements['info1'];
			var survey_Q2_radio = document.myform.elements['driver'];
			var survey_Q3_radio = document.myform.elements['tire'];
			var survey_Q4_radio = document.myform.elements['car'];
			var survey_Q5_radio = document.myform.elements['race'];
			var load_check = 0;

		for(var x=0; x<survey_Q1_radio.length; x++)
			{
				if(survey_Q1_radio[x].checked)
				{
					survey_Q1_flag = true;
					//load_check++;
				}
			}
		for(var x=0; x<survey_Q2_radio.length; x++)
			{
				if(survey_Q2_radio[x].checked)
				{
					survey_Q2_flag = true;
					//load_check++;
				}
			}	
		for(var x=0; x<survey_Q3_radio.length; x++)
			{
				if(survey_Q3_radio[x].checked)
				{
					survey_Q3_flag = true;
					//load_check++;
				}
			}
		for(var x=0; x<survey_Q4_radio.length; x++)
			{
				if(survey_Q4_radio[x].checked)
				{
					survey_Q4_flag = true;
					//load_check++;
				}
			}
		for(var x=0; x<survey_Q5_radio.length; x++)
			{
				if(survey_Q5_radio[x].checked)
				{
					survey_Q5_flag = true;
					//load_check++;
				}
			}
		prepareForm(piq1_flag, piq2_flag, piq3_flag, piq4_flag, piq5_flag, survey_Q1_flag, survey_Q2_flag, survey_Q3_flag, survey_Q4_flag, survey_Q5_flag);	
		return false;
	}
}

function validateData(textData)
{
	var myNameRE = /^[A-Za-z]+$/;
	// ^ beginning of string,
	// any letters.
	var myEmailRE = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	// ^ beginning  of string
	// ([\w-]+)* any word character or hyphen (= [a-zA-Z0-9_-])
	//  one or more times occurring zero or more,
	// \. dot, @ at, ([\w-]+\.) same as above,
	// any letters, at least two but no more than seven, at end of string
	var myPhoneRE = /^\(\d{3}\) \d{3}-\d{4}$/;
	// ^ beginning of string,
	// three #'s in the range between 0-9 inside (),
	// three #'s in the range between 0-9,
	// dash,
	// four #'s in the range between 0-9.
	var mySulleyRE = /^[hH][tT]{2}[pP][:]\/\/[a-zA-Z]+[.][cC][aA][hH][.][uU][cC][fF][.][eE][dD][uU]\/[~][0-9a-zA-Z]+$/;
	// ^ beginning of string,
	// letter hH, two letter tT, letter pP,
	// colon and two backslashes,
	// letters a-zA-Z,
	// "." + letters cC,aA,hH,
	// "." + letters uU,cC,fF,
	// "." + letters eE,dD,uU,
	// backslash + tilde + any number or letter 0-9a-zA-Z.
	//When onblur validation determines that field is valid, switch the flag variable to true.
	var error_counter = 0;
	var valid_counter = 0;

	/*Book
	function isFilled(field){
		if(field.value.length < 1 || field.value == field.defaultValue){
			return false;
		} else {
			return true;
		}
	}

	function isEmail(field){
		if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1)
		{
			return false;
		} else {
			return true;
		}
	}*/

	if (textData=='first_name')
		{
		var createNew = document.getElementById('form_first_check_status');
		while (createNew.hasChildNodes())
			{
				createNew.removeChild(createNew.lastChild);
			}
			var valid_img = document.createElement('img');
			if(document.myform.form_first_name.value.length > 0 && document.myform.form_first_name.value !== " " && document.myform.form_first_name.value.match(myNameRE)) 
				{
					var valid_img = document.createElement('img');
					valid_img.style.width = "25px";
					valid_img.setAttribute('src','img/validIMG.png');
					valid_img.setAttribute("alt","Valid Image");
					createNew.appendChild(valid_img);
					piq1_flag = true;
					valid_counter++;	
				} 
			else 
				{
					var error_msg = document.createTextNode("	^ You did not enter a valid name!");
					valid_img.style.width = "25px";
					valid_img.setAttribute('src','img/notValidIMG.png');
					valid_img.setAttribute("alt","Invalid Image");
					createNew.appendChild(valid_img);
					createNew.appendChild(error_msg);
					piq1_flag = false;
					error_counter++;
				}
		}	
	if (textData=='last_name')
		{
		var createNew = document.getElementById('form_last_check_status');
		while (createNew.hasChildNodes())
			{
				createNew.removeChild(createNew.lastChild);
			}
			if(document.myform.form_last_name.value.length > 0 && document.myform.form_last_name.value !== " " && document.myform.form_last_name.value.match(myNameRE)) 
				{
					var valid_img = document.createElement('img');
					valid_img.style.width = "25px";
					valid_img.setAttribute('src','img/validIMG.png');
					valid_img.setAttribute("alt","Valid Image");
					createNew.appendChild(valid_img);
					piq2_flag = true;
					valid_counter++;
				} 
			else 
				{
					var error_msg = document.createTextNode("^ You did not enter a valid name!");
					var invalid_img = document.createElement('img');
					invalid_img.style.width = "25px";
					invalid_img.setAttribute('src','img/notValidIMG.png')
					invalid_img.setAttribute("alt","Invalid Image");
					createNew.appendChild(invalid_img);
					createNew.appendChild(error_msg);
					piq2_flag = false;
					error_counter++;
				}
		}
	if (textData=='email_address')
		{
		var createNew = document.getElementById('form_email_check_status');
		while (createNew.hasChildNodes())
			{
				createNew.removeChild(createNew.lastChild);
			}					
			if(document.myform.form_email_address.value.length > 0 && document.myform.form_email_address.value !== " " && document.myform.form_email_address.value.match(myEmailRE))
				{
					var valid_img = document.createElement('img');
					valid_img.style.width = "25px";
					valid_img.setAttribute('src','img/validIMG.png');
					valid_img.setAttribute("alt","Valid Image");
					createNew.appendChild(valid_img);
					piq3_flag = true;
					valid_counter++;
				} 
			else 
				{
					var error_msg = document.createTextNode("^ You did not enter a valid e-mail address!");
					var invalid_img = document.createElement('img');
					invalid_img.style.width = "25px";
					invalid_img.setAttribute('src','img/notValidIMG.png');
					invalid_img.setAttribute("alt","Invalid Image");
					createNew.appendChild(invalid_img);
					createNew.appendChild(error_msg);
					piq3_flag = false;
					error_counter++;
				}
		}
	if (textData=='phone_number')
		{
		var createNew = document.getElementById('form_phone_check_status');
		while (createNew.hasChildNodes())
			{
				createNew.removeChild(createNew.lastChild);
			}				
			if(document.myform.form_phone_number.value.length > 0 && document.myform.form_phone_number.value !== " " && document.myform.form_phone_number.value.match(myPhoneRE)) 
				{
					var valid_img = document.createElement('img');
					valid_img.style.width = "25px";
					valid_img.setAttribute('src','img/validIMG.png');
					valid_img.setAttribute("alt","Valid Image");
					createNew.appendChild(valid_img);
					piq4_flag = true;
					valid_counter++;
				} 
			else 
				{
					var error_msg = document.createTextNode("^ You did not enter a valid phone number!");
					var invalid_img = document.createElement('img');
					invalid_img.style.width = "25px";
					invalid_img.setAttribute('src','img/notValidIMG.png');
					invalid_img.setAttribute("alt","Invalid Image");
					createNew.appendChild(invalid_img);
					createNew.appendChild(error_msg);
					piq4_flag = false;
					error_counter++;
				}
		}
	if (textData=='sulley_address')
		{
		var createNew = document.getElementById('form_sulley_check_status');
		while (createNew.hasChildNodes())
			{
				createNew.removeChild(createNew.lastChild);
			}				
			if(document.myform.form_sulley_address.value.length > 0 && document.myform.form_sulley_address.value !== " " && document.myform.form_sulley_address.value.match(mySulleyRE)) 
				{
					var valid_img = document.createElement('img');
					valid_img.style.width = "25px";
					valid_img.setAttribute('src','img/validIMG.png');
					valid_img.setAttribute("alt","Valid Image");
					createNew.appendChild(valid_img);
					piq5_flag = true;
					valid_counter++;
				} 
			else 
				{
					var error_msg = document.createTextNode("^ You did not enter a valid sulley address!");
					var invalid_img = document.createElement('img');
					invalid_img.style.width = "25px";
					invalid_img.setAttribute('src','img/notValidIMG.png');
					invalid_img.setAttribute("alt","Invalid Image");
					createNew.appendChild(invalid_img);
					createNew.appendChild(error_msg);
					piq5_flag = false;
					error_counter++;
				}
		}
}

	function prepareForm(piq1_flag, piq2_flag, piq3_flag, piq4_flag, piq5_flag, survey_Q1_flag, survey_Q2_flag, survey_Q3_flag, survey_Q4_flag, survey_Q5_flag) 
{
	var attach_answers = document.getElementById('attach_answers');
	if(piq1_flag && piq2_flag && piq3_flag && piq4_flag && piq5_flag && survey_Q1_flag && survey_Q2_flag && survey_Q3_flag && survey_Q4_flag && survey_Q5_flag) 
		{
			var choice='';
			var option_number_one=0;
			var option_number_two=0;
			var option_number_three=0;

	while (attach_answers.hasChildNodes())
		{
			attach_answers.removeChild(attach_answers.lastChild);
		}

		//radio button example
		/*var radio_buttons = document.form_name.elements[‘radio_button_field_name’]; 
		for(var x=0; x<radio_buttons.length; x++){
		if(radio_buttons[x].checked){
			alert("This button is checked and the value is " + radio_buttons[x].value);
		} else {
			alert("This button is not checked, but the value would have been" + 
				radio_buttons[x].value);
			}
		}*/


	var survey_Q1_radio = document.myform.elements['info1'];
		for (var x=0; x<survey_Q1_radio.length; x++)
		{
			if (survey_Q1_radio[x].checked)
				{
					//alert("This button is checked and the value is " + survey_Q1_radio[x].value);
					var survey_questions1 = survey_Q1_radio[x].value;
					if (survey_Q1_radio[x].value=='Yea, Duh!')
						{
							option_number_one++;
						}
					else if (survey_Q1_radio[x].value=='It is ok.')
						{
							option_number_two++;
						}
					else 
						{
							option_number_three++;
						}
				}
		}
		
		var survey_Q2_radio = document.myform.elements['driver'];
		for (var x=0; x<survey_Q2_radio.length; x++)
		{
			if (survey_Q2_radio[x].checked)
				{
					//alert("This button is checked and the value is " + survey_Q2_radio[x].value);
					var survey_questions2 = survey_Q2_radio[x].value;
					if (survey_Q2_radio[x].value=='Chris Forsberg.')
						{
							option_number_one++;
						}
					else if (survey_Q2_radio[x].value=='Vaughn Gitten Jr.')
						{
							option_number_two++;
						}
					else 
						{
							option_number_three++;
						}
				}
		}
		
		var survey_Q3_radio = document.myform.elements['tire'];
		for (var x=0; x<survey_Q3_radio.length; x++)
		{
			if (survey_Q3_radio[x].checked)
				{
					//alert("This button is checked and the value is " + survey_Q3_radio[x].value);
					var survey_questions3 = survey_Q3_radio[x].value;
					if (survey_Q3_radio[x].value=='Nitto')
						{
							option_number_one++;
						}
					else if (survey_Q3_radio[x].value=='Falken')
						{
							option_number_two++;
						}
					else 
						{
							option_number_three++;
						}
				}
		}

		var survey_Q4_radio = document.myform.elements['car'];
		for (var x=0; x<survey_Q4_radio.length; x++)
		{
			//alert("This button is checked and the value is " + survey_Q4_radio[x].value);
			if (survey_Q4_radio[x].checked)
				{
					var survey_questions4 = survey_Q4_radio[x].value;
					if (survey_Q4_radio[x].value=='Ford Mustang.')
						{
							option_number_one++;
						}
					else if (survey_Q4_radio[x].value=='Nissan 370z.')
						{
							option_number_two++;
						}
					else 
						{
							option_number_three++;
						}
				}
		}

		var survey_Q5_radio = document.myform.elements['race'];
		for (var x=0; x<survey_Q5_radio.length; x++)
		{
			//alert("This button is checked and the value is " + survey_Q5_radio[x].value);
			if (survey_Q5_radio[x].checked)
				{
					var survey_questions5 = survey_Q5_radio[x].value;
					if (survey_Q5_radio[x].value=='Yes')
						{
							option_number_one++;
						}
					else 
						{
							option_number_two++;
						}
				}
		}

		var header = document.createElement("h1");
		var header_text = document.createTextNode("Personal Information Answers")

		var first_name = document.myform.form_first_name.value;
		var first_name_p = document.createElement('p');
		var first_name_text = document.createTextNode('Your First Name: ' +first_name);
		
		var last_name = document.myform.form_last_name.value;
		var last_name_p = document.createElement('p');
		var last_name_text = document.createTextNode('Your Last Name: ' +last_name);
		
		var email_address = document.myform.form_email_address.value;
		var email_address_p = document.createElement('p');
		var email_address_text = document.createTextNode('Your E-Mail: ' +email_address);
		
		var phone_number = document.myform.form_phone_number.value;
		var phone_number_p = document.createElement('p');
		var phone_number_text = document.createTextNode('Your Phone Number: ' +phone_number);
		
		var sulley_address = document.myform.form_sulley_address.value;
		var sulley_address_p = document.createElement('p');
		var sulley_address_text = document.createTextNode('Your Sulley Address: ' +sulley_address);

		var header2 = document.createElement("h1");
		var header2_node = document.createTextNode("Survey Question Answers")

		var survey_questions1_p = document.createElement('p');
		var survey_questions1_text = document.createTextNode('Do you like Formula Drift: ' +survey_questions1);
		
		var survey_Q2_radio = document.myform.elements['driver'];
		for (var x=0; x<survey_Q2_radio.length; x++)
		{
			if (survey_Q2_radio[x].checked)
			{
				var survey_questions2 = survey_Q2_radio[x].value;
			}
		}

		var survey_questions2_p = document.createElement('p');
		var survey_questions2_text = document.createTextNode('Who is the best driver: ' +survey_questions2);

		var survey_Q3_radio = document.myform.elements['tire'];
		for (var x=0; x<survey_Q3_radio.length; x++)
		{
			if (survey_Q3_radio[x].checked)
			{
				var survey_questions3 = survey_Q3_radio[x].value;
			}
		}
		var survey_questions3_p = document.createElement('p');
		var survey_questions3_text = document.createTextNode('Pick a tire brand: ' +survey_questions3);

		var survey_Q4_radio = document.myform.elements['car'];
		for (var x=0; x<survey_Q4_radio.length; x++)
		{
			if (survey_Q4_radio[x].checked)
			{
				var survey_questions4 = survey_Q4_radio[x].value;
			}
		}
		var survey_questions4_p = document.createElement('p');
		var survey_questions4_text = document.createTextNode('Best car in the FD competition: ' +survey_questions4);

		var survey_Q5_radio = document.myform.elements['race'];
		for (var x=0; x<survey_Q5_radio.length; x++)
		{
			if (survey_Q5_radio[x].checked)
			{
				var survey_questions5 = survey_Q5_radio[x].value;
			}
		}
		var survey_questions5_p = document.createElement('p');
		var survey_questions5_text = document.createTextNode('Do you race on the track: ' +survey_questions5);

		attach_answers.appendChild(header);
		header.appendChild(header_text);

			attach_answers.appendChild(first_name_p);
			first_name_p.appendChild(first_name_text);
			
			attach_answers.appendChild(last_name_p);
			last_name_p.appendChild(last_name_text);
			
			attach_answers.appendChild(email_address_p);
			email_address_p.appendChild(email_address_text);
			
			attach_answers.appendChild(phone_number_p);
			phone_number_p.appendChild(phone_number_text);
			
			attach_answers.appendChild(sulley_address_p);
			sulley_address_p.appendChild(sulley_address_text);

		attach_answers.appendChild(header2);
		header2.appendChild(header2_node);
		
			attach_answers.appendChild(survey_questions1_p);
			survey_questions1_p.appendChild(survey_questions1_text);
			
			attach_answers.appendChild(survey_questions2_p);
			survey_questions2_p.appendChild(survey_questions2_text);
			
			attach_answers.appendChild(survey_questions3_p);
			survey_questions3_p.appendChild(survey_questions3_text);

			attach_answers.appendChild(survey_questions4_p);
			survey_questions4_p.appendChild(survey_questions4_text);

			attach_answers.appendChild(survey_questions5_p);
			survey_questions5_p.appendChild(survey_questions5_text);

		var badge = document.createElement('img');

		if (option_number_one > option_number_two && option_number_one > option_number_three)
			{	
				top_option = option_number_one;
				choice = 'option_number_one';
			}
		else if (option_number_two > option_number_one && option_number_two > option_number_three)
			{
				top_option = option_number_two;
				choice = 'option_number_two';
			}
		else if (option_number_three > option_number_one && option_number_three > option_number_one)
			{
				top_option = option_number_three;
				choice = 'option_number_three';
			}
		else
			{
				top_option = option_number_three;
				choice = 'option_number_three';
			}
		
		if (choice=='option_number_one')
			{
				badge.setAttribute('src','img/option_number_one.jpg');
				var badge_header2 = document.createElement('h3');
				var bHeader2 = document.createTextNode("Your car match:");
				var badge_header = document.createElement('h3');
				var badge_p2 = document.createElement('p');
				var badge_text2 = document.createTextNode("A Mazda Miata.");
				var bHeader = document.createTextNode("Badge Location:");
				var badge_p = document.createElement('p');
				var badge_text = document.createTextNode('http://sulley.cah.ucf.edu/~ty431324/dig3716c/assignment03/img/option_number_one.jpg');
			}
		else if (choice=='option_number_two')
			{
				badge.setAttribute('src','img/option_number_two.jpg');
				var badge_header2 = document.createElement('h3');
				var bHeader2 = document.createTextNode("Your car match:");
				var badge_header = document.createElement('h3');
				var badge_p2 = document.createElement('p');
				var badge_text2 = document.createTextNode("A Nissan 350z.");
				var bHeader = document.createTextNode('Badge Location:');
				var badge_p = document.createElement("p");
				var badge_text = document.createTextNode('http://sulley.cah.ucf.edu/~ty431324/dig3716c/assignment03/img/option_number_two.jpg');
			}
		else 
			{
				badge.setAttribute('src','img/option_number_three.jpg');
				var badge_header2 = document.createElement('h3');
				var bHeader2 = document.createTextNode("Your car match:");
				var badge_header = document.createElement('h3');
				var badge_p2 = document.createElement('p');
				var badge_text2 = document.createTextNode("Nothing, your answers suggest you should not drive!");
				var bHeader = document.createTextNode("Badge Location:");
				var badge_p = document.createElement('p');
				var badge_text = document.createTextNode('http://sulley.cah.ucf.edu/~ty431324/dig3716c/assignment03/img/option_number_three.jpg');
			}

				attach_answers.appendChild(badge);
				attach_answers.appendChild(badge_header2);
				badge_header2.appendChild(bHeader2);
				attach_answers.appendChild(badge_p2);
				badge_p2.appendChild(badge_text2);
				attach_answers.appendChild(badge_header);
				badge_header.appendChild(bHeader);
				attach_answers.appendChild(badge_p);
				badge_p.appendChild(badge_text);
				return false;

	} 
		else 
			{	 
			var error_count = 0;
			if(!piq1_flag)
				{
					error_count++;
				}
			if(!piq2_flag)
				{
					error_count++;
				}
			if(!piq3_flag)
				{
					error_count++;
				}
			if(!piq4_flag)
				{
					error_count++;
				}
			if(!piq5_flag)
				{
					error_count++;
				}
			if(!survey_Q1_flag)
				{
					error_count++;
				}
			if(!survey_Q2_flag)
				{
					error_count++;
				}
			if(!survey_Q3_flag)
				{
					error_count++;
				}
			if(!survey_Q4_flag)
				{
					error_count++;
				}
			if(!survey_Q5_flag)
				{
					error_count++;
				}
			alert('Survey has not been filled out correctly. There are ' + error_count + ' errors.' );
			return false;
		}
}
window.onload = loadData;