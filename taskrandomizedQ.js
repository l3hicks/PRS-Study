//*****************************************
//----------variable declaration-----------
//*****************************************

//get references to btns
const yes_consent_btn = document.getElementById('yes-consent-btn');
const no_consent_btn = document.getElementById('no-consent-btn');
const inst_next_btn = document.getElementById('inst-next-btn');
const inst_back_btn = document.getElementById('inst-back-btn');
const save_resp_btn = document.getElementById('save-resp-btn');
const finish_btn = document.getElementById('finish-btn');

//get references to sliders
const prs_slider_1 = document.getElementById('prs-slider-1');
const prs_slider_2 = document.getElementById('prs-slider-2');
const prs_slider_3 = document.getElementById('prs-slider-3');
const prs_slider_4 = document.getElementById('prs-slider-4');
const prs_slider_5 = document.getElementById('prs-slider-5');
const prs_slider_6 = document.getElementById('prs-slider-6');
const prs_slider_7 = document.getElementById('prs-slider-7');
const prs_slider_8 = document.getElementById('prs-slider-8');
const prs_slider_9 = document.getElementById('prs-slider-9');
const prs_slider_10 = document.getElementById('prs-slider-10');


//const probe_slider_1 = document.getElementById('probe-slider-1');
//const probe_slider_2 = document.getElementById('probe-slider-2');


const age_slider = document.getElementById('age-slider');

//get reference to radio buttons -- currently unused
const gender_radios = document.getElementsByName('rad-gender-answer');
const seen_video_radios = document.getElementsByName('rad-video-answer');
const probe_3_radios = document.getElementsByName('rad-probe-3-answer');

//get references to slider output span elements
const prs_1_output = document.getElementById('prs-slider-1-output');
const prs_2_output = document.getElementById('prs-slider-2-output');
const prs_3_output = document.getElementById('prs-slider-3-output');
const prs_4_output = document.getElementById('prs-slider-4-output');
const prs_5_output = document.getElementById('prs-slider-5-output');
const prs_6_output = document.getElementById('prs-slider-6-output');
const prs_7_output = document.getElementById('prs-slider-7-output');
const prs_8_output = document.getElementById('prs-slider-8-output');
const prs_9_output = document.getElementById('prs-slider-9-output');
const prs_10_output = document.getElementById('prs-slider-10-output');

// LYDIA ADDED HERE: 

//referencing slider output elements as variables so that they can be randomized later on
var PRScontents=new Array()
PRScontents[0]=prs_1_output
PRScontents[1]=prs_2_output
PRScontents[2]=prs_3_output
PRScontents[3]=prs_4_output
PRScontents[4]=prs_5_output
PRScontents[5]=prs_6_output
PRScontents[6]=prs_7_output
PRScontents[7]=prs_8_output
PRScontents[8]=prs_9_output
PRScontents[9]=prs_10_output

var i=0
//variable used to contain controlled random number 
var random
var spacing="<br>"
//while all of array elements haven't been cycled thru
while (i<contents.length){
    //generate random num between 0 and arraylength-1
    random=Math.floor(Math.random()*PRScontents.length)
    //if element hasn't been marked as "selected"
    if (contents[random]!="selected"){
        document.write(PRScontents[random]+spacing)
        //mark element as selected
        contents[random]="selected"
        i++
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// WHAT LYDIA ADDED ENDS HERE! 

// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);

//const probe_1_output = document.getElementById('probe-slider-1-output');
//const probe_2_output = document.getElementById('probe-slider-2-output');
const age_output = document.getElementById('age-output');

//get references to pages
const uw_header = document.getElementById('uw-header');
const uw_logo = document.getElementById('uw-logo');
const info_consent_letter = document.getElementById('info-consent-letter');
const demographic_questionnaire = document.getElementById('demographic-questionnaire');
const task_inst = document.getElementById('task-inst');
const prs_nupq = document.getElementById('prs-nupq');
const diligence_probe = document.getElementById('diligence-probe');
//const diligence_probe_1 = document.getElementById('diligence-probe-1');
//const diligence_probe_2 = document.getElementById('diligence-probe-2');
//const diligence_probe_3 = document.getElementById('diligence-probe-3');
const decline_to_participate = document.getElementById('decline-to-participate');
const practice_over = document.getElementById('practice-over');
const intermission = document.getElementById('intermission');
//const feedback_letter = document.getElementById('feedback-letter');
const do_not_refresh = document.getElementById('do-not-refresh');
const browser_not_supported = document.getElementById('browser-not-supported');
const end_questionnaire = document.getElementById('end-questionnaire');

//get references to stim
const stim = document.getElementById('stim-container');

//set participant values
const studyid = 'Berto1B';
const ss_code = getRandomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
const condition = 1;
var gender = 'NA';
var age = 'NA';
var seen_video = 'NA';

// stimulus information
// stim_list.forEach(function(entry){
//   console.log(entry);
// });

// console.log("length of stimlist = " + stim_list.length);
// console.log('stim list pos 1 = ' + stim_list[0]);
// console.log('stim list pos 2 = ' + stim_list[1]);


// experimental constants
const trials_per_block = 20;
const num_practice = practice_list.length;
const num_trials = stim_list.length;

//var random_picker = Array.apply(null, {length: num_trials}).map(Function.call, Number);

var random_picker = [];
var practice_picker = [];

for (var i = 0; i < num_trials; i++){
  random_picker.push(i);
}
for (var i = 0; i < num_practice; i++){
  practice_picker.push(i)
}

random_picker = shuffle(random_picker);
practice_picker = shuffle(practice_picker);

// console.log('randomized practice = ');
// console.log(practice_picker);
// console.log("randomized experimental = ");
// console.log(random_picker);

const prestim_duration = 200;
const stim_duration = 5000;
const poststim_duration = 200;
const trial_duration = prestim_duration + stim_duration + poststim_duration;
//a trial will be defined as  stimulus -> fixation'

//experimental counters
var trial_counter = 0; // global trial
var this_probe = 0;

//experimental toggles
var this_block = 'practice';
var prs_avail = true;
var prs_queued = false;
var probe_avail = true; // diligence probe
var probe_queued = false; // diligence probe
var is_practice = true;
var getting_ready = true;
var stim_on = false;
var prestim_on = false;
var poststim_on = false;
var is_probe = false;

//default data values
var key_pressed = false;
var resp_at = 'NA';
var rt = 'None';
var omission = 1;
var is_target = 'NA';
var hit = 'NA';
var fa = 'NA';
var is_focus = false;

// default other values
var stim_time = 'NA';
var stim_gen_time = 'NA';
var prestim_time = 'NA';
var poststim_time = 'NA';
var the_stimulus = 'NA';

// default probe responses
var prs_1_resp = 'NA';
var prs_2_resp = 'NA';
var prs_3_resp = 'NA';
var prs_4_resp = 'NA';
var prs_5_resp = 'NA';
var prs_6_resp = 'NA';
var prs_7_resp = 'NA';
var prs_8_resp = 'NA';
var prs_9_resp = 'NA';
var prs_10_resp = 'NA';
//var probe_1_resp = 'NA';
//var probe_2_resp = 'NA';
//var probe_3_resp = 'NA';

//containers
var timeout_list = [];
// var dir = './../Berto Replication Experiment Stimuli/';
// var fileextension = ".jpg";
// $.ajax({
//   url:dir,
//   success:function(data){
//     $(data).find("a:contains("+fileextension+")").each(function(){
//       var filename = this.href.replace(window.location.host,"").replace("http://","");
//       $("body").append("<img src ='" + dir + filename + "'>");
//     });
//   }
// })

var trial_headers = [
  'ss_code',
  'gender',
  'age',
  'condition',
  'phase',
  'trial_counter',
  'the_stimulus',
  'is_probe',
  'prestim_at',
  'stim_gen_time',
  'stim_at',
  'poststim_at',
  'this_probe',
  'prs_1_resp',
  'prs_2_resp',
  'prs_3_resp',
  'prs_4_resp',
  'prs_5_resp',
  'prs_6_resp',
  'prs_7_resp',
  'prs_8_resp',
  'prs_9_resp',
  'prs_10_resp',
  //'probe_1_resp',
  //'probe_2_resp',
  //'probe_3_resp',
  'is_focus'
];

//data holders
var trial_data = '';

//write headers first
for (var i in trial_headers){
  trial_data+=trial_headers[i];
  if (i < trial_headers.length-1){trial_data+=',';}
  else{trial_data+='\n';}
}

//setup modular task instructions
var inst_p1 =
  "<h2>Task Instructions</h2>"
  +"<p>In this study, you will be asked to rate several images of various environments.</p>"
  +"<p>Please click 'Next' to view these scales.</p>";

var inst_p2 =
  "<h2>Task Instructions</h2>"
  +"<p>After viewing each image, you will be asked to respond to 10 questions. All of these questions will ask you to indicate your response on a scale from 1 to 100.</p>"
  +"<p>Some will ask how typical the scene is to your idea of a 'natural' environment and your idea of an 'urban' environment. These ratings will be based on your own idea of what a 'natural' environment is and what an 'urban' environment is. It is possible that some environments may seem to you to fit as both a natural and an urban environment, rather than falling into one category. If this is your experience, please rate it as such on the scales; do not feel as if you must categorize each image into one environment or the other. However, if some scenes seem to represent only 'natural' environments, or only 'urban' environments, please rate them as such.</p>"
  +"<p>Other questions will ask you about how the various environments might impact your levels of stress and abilities to pay attention on a later task.</p> "
  +"<p>Finally, other questions will ask you about how much each environment makes you feel a certain way (e.g., comfortable and at ease).</p>"
  +"You will now have the opportunity to familiarize yourself with the image sliders. Once you've tested them, please click 'Next' to move on to the next page of instructions.</p>";

var inst_p3 = 
  "<h2>Task Instructions</h2>"
  +"<p>While providing your ratings for each image, you should also take into consideration the following scenario and provide your responses according to how the scenario would make you feel.</p>"
  +"<p>Recall one of those times when you worked hard on a project that required intense and prolonged effort. Remember how it felt. You probably reached a point where you could tell that your ability to work effectively had started to decline and that you needed a break. You needed to do something during the break that would restore your ability to work effectively on the project. Put yourself in that mind set now and then please rate each of the settings you will be shown on how good a place you think it would be to take a break and restore your ability to work effectively on the project.</p>";
  +"<p>You now have the opportunity to familiarize yourself with these probes. Once you've tested them, please click 'Next' to move on to the next page of instructions.</p>";

var inst_p4 =
  "<h2>Task Instructions</h2>"
  +"<p>You are now going to complete a brief practice session to help you to become familiar with the task.</p>"
  +"<p>When you are ready to proceed, please press the 'Begin Practice' button below.</p>";

var inst_pg_list = new Array(inst_p1,inst_p2,inst_p3,inst_p4)
var this_inst_pg = 0; //default start demo
var max_inst_pg = inst_pg_list.length;

practice_over.innerHTML =
  "<p>The practice trials are now over.</p>"
  +"<p>When you are ready to begin the experiment, please click the 'Begin Task' button below</p>";

var probe_1_before_text = '<b>1)	How much thought did you put into your answers to the questions about the images presented before this probe?</b>';
var probe_1_after_text = '<b>1)	How much thought did you put into your answers to the questions about the images presented after the last probe and before this probe?</b>';
var probe_2_before_text = '<b>2)	How carefully were you examining the images presented before this probe?</b>';
var probe_2_after_text = '<b>2)	How carefully were you examining the images presented after the last probe and before this probe?</b>';
var probe_3_before_text = '<b>3)	Did you answer any of the questions without looking at the corresponding image for any of the images presented before this probe?</b>';
var probe_3_after_text = '<b>3)	Did you answer any of the questions without looking at the corresponding image for any of the images presented after the last probe and before this probe?</b>';

//diligence_probe_1.innerHTML = probe_1_before_text;
//diligence_probe_2.innerHTML = probe_2_before_text;
//diligence_probe_3.innerHTML = probe_3_before_text;

//*****************************************
//-------------define functions------------
//*****************************************

function showPage(doc_ele){
	doc_ele.style.visibility ='visible';
	doc_ele.style.display='inline';
}

function hidePage(doc_ele){
	doc_ele.style.visibility ='hidden';
	doc_ele.style.display='none';
}

function getRandomString(length, chars){
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
	return result;
}

function getRandomInt(min, max){
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function isInArray(value, array){return array.indexOf(value) > -1;}

function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex){

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }
  return array;
}

//a function to stop all tracked timeouts
function stopTrackedTimeouts(){
  for (var i = 0; i < timeout_list.length; i++){
    clearTimeout(timeout_list[i]);
  }
  timeout_list = [];
}

//a function to stop all timeouts
function stopAllTimeouts(){
  var id = window.setTimeout(null,0);
  while (id--){
    window.clearTimeout(id)
  }
}

//a function to hide all display elements (here, divs and btns)
function hideAllDivs(){
  var divs = document.getElementsByTagName('div');
  var btns = document.getElementsByTagName('button');
  for (var i = 0; i < divs.length; i++){
    hidePage(divs[i]);
  }

  for (var i = 0; i < btns.length;i++){
    hidePage(btns[i]);
  }
  hidePage(uw_header);
}

//set default slider output values
function setSliderValues(){
  prs_1_output.innerHTML = 'Not Selected';
  prs_2_output.innerHTML = 'Not Selected';
  prs_3_output.innerHTML = 'Not Selected';
  prs_4_output.innerHTML = 'Not Selected';
  prs_5_output.innerHTML = 'Not Selected';
  prs_6_output.innerHTML = 'Not Selected';
  prs_7_output.innerHTML = 'Not Selected';
  prs_8_output.innerHTML = 'Not Selected';
  prs_9_output.innerHTML = 'Not Selected';
  prs_10_output.innerHTML = 'Not Selected';

  //probe_1_output.innerHTML = 'Not Selected';
  //probe_2_output.innerHTML = 'Not Selected';

  age_output.innerHTML = 'Not Selected';
}

function removeAllImages(){
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++){
    imgs[0].parentNode.removeChild(imgs[0]);
  }
}

// reset default slider values
function resetAllSliders(){
  var inputs = document.getElementsByTagName('input');
  //console.log(sldrs);
  // reset actual value
  for (var i = 0; i < inputs.length; i++){
    if(inputs.type=="range"){inputs[i].value = '';}

    if(inputs[i].classList.contains('clicked')){
      inputs[i].classList.remove('clicked');
      inputs[i].classList.add('not-clicked');
    }
  }

  var radios = document.getElementsByName('rad-probe-3-answer');
  for (var i = 0; i < radios.length; i++){
    if(radios[i].checked){
      radios[i].checked = false;
    }
  }

  //reset associated text value
  setSliderValues();
}

//initial get ready message
function getReady(){
  hideAllDivs();
  stim.innerHTML = "<p style='font-size:14pt;'>Loading images...</p>";
  showPage(stim);
  //stim_time = new Date().getTime();
  getting_ready = true;
  timeout_list.push(setTimeout(drawPostStim,poststim_duration));
}

// window.onkeydown = function(e){
//   var key = e.keyCode ? e.keyCode: e.which;
//   if(!key_pressed && key == 32 && (probe_avail)){
//     resp_at = new Date().getTime();
//     //rt = new Date().getTime() - prestim_time;
//     omission = 0;
//     key_pressed = true;
//     //console.log('key pressed');
//     if(is_target==1){
//       hit = 1;
//       //console.log('hit');
//     }
//     else{
//       fa = 1;
//       //console.log('fa');
//     }
//   }
// }

// main trial loop
function runTrial(){

  // if practice over
  if (is_practice && trial_counter == num_practice){endPractice();}

  // end of block (present probe) or end of task
  else if (!is_practice && trial_counter == num_trials){

    // hide stimulus
    hidePage(stim);

    // end-of-experiment questions
    //showPage(finish_btn);
    //showPage(end_questionnaire);
    //endLog();
    submitData();

  }
  // otherwise do trial
  else{doTrial();}
}

// actual trial component
function doTrial(){
  // reset relevant values
  //prs_1_resp, prs_2_resp, prs_3_resp, prs_4_resp, prs_5_resp, prs_6_resp, prs_7_resp = 'NA';
  prs_1_resp, prs_2_resp, prs_3_resp, prs_4_resp, prs_5_resp, prs_6_resp, prs_7_resp, prs_8_resp, prs_9_resp, prs_10_resp = 'NA';

  //probe_1_resp, probe_2_resp, probe_3_resp = 'NA';

  // clear tracked timeouts, and check for/clear rogue timeouts
  stopTrackedTimeouts();
  stopTrackedTimeouts();

  // assign stimulus and target identity
  if (is_practice){
    var position = practice_picker[trial_counter];
    //console.log("position = " + position);
    the_stimulus = practice_list[position];
  }
  else{
    var position = random_picker[trial_counter]
    //console.log("position = " + position);
    the_stimulus = stim_list[position];
  }

  //console.log("doing trial = " + trial_counter);
  //console.log("stimulus = " + the_stimulus);

  // set probe available every 20 trials
  if ( (trial_counter+1) % trials_per_block == 0){is_probe = true;}
  else{is_probe = false;}

  drawPrestim();
  //drawStim();
}

function drawPrestim(){
  //draw first fixation
  showPage(stim);
  stim.innerHTML = "+";

  //declare on and time
  prestim_on = true;
  prestim_time = new Date().getTime();
  //console.log("trial "+trial_counter+" prestim on at "+prestim_time);

  //call draw stim function
  timeout_list.push(setTimeout(drawStim,prestim_duration))
}

function drawStim(){
  //minimum time of previous event met
  //prestim_on = checkMinTime(prestim_on,prestim_time,prestim_duration)

  //set stimulus
  //stim.innerHTML = "<img src ='"+the_stimulus+"' width = 500 height = 500>";
  var window_w = window.innerWidth/0.75;
  var window_h = window.innerHeight/0.75;
  if(window_w > window_h){var use_this = window_h;}
  else{var use_this = window_w}
  var myImage = new Image(use_this, use_this);
  myImage.src = the_stimulus;
  myImage.style.display = "block";
  myImage.style.position = "fixed";
  myImage.style.top = "50%";
  myImage.style.left = "50%";
  myImage.style.margin = "auto";
  myImage.style.transform = "translate(-50%,-50%)";
  //myImage.classList.add('stim-image');
  //hidePage(img);
  stim_gen_time = new Date().getTime();
  //console.log("new image generated at " +new Date().getTime());

  myImage.onload = function(){
    // declare on and time
    //showPage(img);
    hidePage(stim);
    document.body.append(myImage);
    stim_time = new Date().getTime();
    stim_on = true;
    //console.log('img loaded');
    //console.log("stim_time at "+stim_time);

    // call post-stim function
    timeout_list.push(setTimeout(drawPostStim,stim_duration));
  }




}

// draw fixation for duration
function drawPostStim(){
  // minimum time of previous event met
  stim_on = checkMinTime(stim_on,stim_time,stim_duration);

  // clear stimulus
  showPage(stim);
  stim.innerHTML = "+";
  removeAllImages();


  // declare on and time
  poststim_time = true;
  poststim_time = new Date().getTime();

  // check if following getReady or normal trial
  if(getting_ready){
    // runTrial (first run)
    getting_ready = false;
    timeout_list.push(setTimeout(runTrial,poststim_duration));
  }
  else{
    // do PRS NUPQ
    //timeout_list.push(setTimeout(nextTrial,poststim_duration));
    timeout_list.push(setTimeout(doPRSNUPQ,poststim_duration));
  }
}

function doPRSNUPQ(){
  // hide everything
  hideAllDivs();

  //clear tracked timeouts, and check for/clear rogue timeouts
  stopTrackedTimeouts();
  stopTrackedTimeouts();

  //show sliders
  showPage(prs_nupq);
  showPage(save_resp_btn);
}

function endPRSNUPQ(){
  hideAllDivs();
  prs_1_resp = prs_slider_1.value;
  prs_2_resp = prs_slider_2.value;
  prs_3_resp = prs_slider_3.value;
  prs_4_resp = prs_slider_4.value;
  prs_5_resp = prs_slider_5.value;
  prs_6_resp = prs_slider_6.value;
  prs_7_resp = prs_slider_7.value;
  prs_8_resp = prs_slider_5.value;
  prs_9_resp = prs_slider_6.value;
  prs_10_resp = prs_slider_7.value;

  resetAllSliders();
  nextTrial();
}


function nextTrial(){
  //control for variations in trial time on the short-end
  poststim_on = checkMinTime(poststim_on,poststim_time,poststim_duration);

  logData();

  trial_counter++;

  runTrial();

  //should we draw a diligence probe?
  //if (probe_avail && is_probe){doProbe();}

  //otherwise, run the next trial
  //else{
    //logData();
    //trial_counter++;

    // only false if probe just presented
    // -->getReady --> fixation --> runTrial
    //if(!probe_avail){
      //probe_avail = true;
      //this_probe++;
      //if (this_probe == 1){
        //diligence_probe_1.innerHTML = probe_1_after_text;
        //diligence_probe_2.innerHTML = probe_2_after_text;
        //diligence_probe_3.innerHTML = probe_3_after_text;
      //};
      // prs_1_resp = 'NA';
      // prs_2_resp = 'NA';
      // prs_3_resp = 'NA';
      // prs_4_resp = 'NA';
      // prs_5_resp = 'NA';
      // prs_6_resp = 'NA';
      // prs_7_resp = 'NA';
      // probe_1_resp = 'NA';
      // probe_2_resp = 'NA';
      // probe_3_resp = 'NA';
      //getReady();
    //}
    //else{runTrial();}
  //}
}

// draw diligence probe
function doProbe(){
  // hide everything
  hideAllDivs();

  // need to turn probe availability off until next trial is updated
  probe_avail = false;

  //clear tracked timeouts, and check for/clear rogue timeouts
  stopTrackedTimeouts();
  stopTrackedTimeouts();

  //show sliders
  /* showPage(diligence_probe);
  showPage(save_resp_btn); */
}

function endProbe(){
  hideAllDivs();

  prs_1_resp = prs_slider_1.value;
  prs_2_resp = prs_slider_2.value;
  prs_3_resp = prs_slider_3.value;
  prs_4_resp = prs_slider_4.value;
  prs_5_resp = prs_slider_5.value;
  prs_6_resp = prs_slider_6.value;
  prs_7_resp = prs_slider_7.value;
  prs_8_resp = prs_slider_5.value;
  prs_9_resp = prs_slider_6.value;
  prs_10_resp = prs_slider_7.value;

  //if (is_probe){
    //probe_1_resp = probe_slider_1.value;
    //probe_2_resp = probe_slider_2.value;
    //probe_3_resp = $("input:radio[name=rad-probe-3-answer]:checked").val();
  //}
  //else{
    //probe_1_resp = 'NA';
    //probe_2_resp = 'NA';
    //probe_3_resp = 'NA';
  //}

  // reset values of probe
  resetAllSliders();
  nextTrial();
}

function checkMinTime(event_running, event_start_time, min_duration){
  while (event_running){
		if (new Date().getTime() - event_start_time >= min_duration){
      event_running = false;
      //console.log(new Date().getTime() - event_start_time);
    }
	}
  return event_running;
}

//display practice over and update values
function endPractice(){
  is_practice = false;
  this_block = 'experimental';
  trial_counter = 0;
  this_probe = 0;

  hidePage(stim);
  inst_next_btn.innerHTML = 'Begin Task';

  showPage(practice_over);
  showPage(inst_next_btn);

}

function logData(){
  //if a response was made
  if(omission==0){
    //resp at should occur after stim_time, otherwise early/negative response
    rt = resp_at-stim_time;
  }
  var output = [
    ss_code,
    gender,
    age,
    condition,
    this_block,
    trial_counter,
    the_stimulus,
    is_probe,
    prestim_time,
    stim_gen_time,
    stim_time,
    poststim_time,
    this_probe,
    prs_1_resp,
    prs_2_resp,
    prs_3_resp,
    prs_4_resp,
    prs_5_resp,
    prs_6_resp,
    prs_7_resp,
    prs_8_resp,
    prs_9_resp,
    prs_10_resp,
    //probe_1_resp,
    //probe_2_resp,
    //probe_3_resp,
    document.hasFocus()
  ];

  for (var i in output){
    trial_data+=output[i];
    if(i<output.length-1){trial_data+=',';}
    else{trial_data+='\n';}
  }
  // console.log(trial_headers);
  // console.log(output);
  /*
  console.log(trial_data);
  console.log('HAS FOCUS: ', document.hasFocus());
  console.log('rt was '+rt);
  */
}

function submitData(){
  document.getElementById('put-studyid-here').value = studyid;
  document.getElementById('put-sscode-here').value = ss_code;
  document.getElementById('put-data-here').value = trial_data;
  document.getElementById('sendtoPHP').submit();
}

//consent to participate
yes_consent_btn.addEventListener('click',function(event){
  hidePage(info_consent_letter);
  hidePage(yes_consent_btn);
  hidePage(no_consent_btn);

  showPage(demographic_questionnaire);
  showPage(inst_next_btn);
  showPage(inst_back_btn);
  window.scrollTo(0,0);
});

//decline to participate
no_consent_btn.addEventListener('click',function(event){
  hidePage(info_consent_letter);
  hidePage(yes_consent_btn);
  hidePage(no_consent_btn);
  showPage(decline_to_participate);
});

// move forward through instructions
inst_next_btn.addEventListener('click',function(event){
  // if demographic page, save demographic data
  if(this_inst_pg==0){
    // save gender
    gender = $("input:radio[name=rad-gender-answer]:checked").val();

    // save age if slider clicked
    if (age_slider.classList.contains('clicked')){age = age_slider.value;}

    // hide and show next page
    hidePage(demographic_questionnaire);
    showPage(task_inst);
    task_inst.innerHTML = inst_p1;
  }

  // increment counter
  if(this_inst_pg<5){this_inst_pg+=1;}

  // show probe example
  if(this_inst_pg==2){
    showPage(prs_nupq);
    resetAllSliders();
  }

  if(this_inst_pg==3){
    hidePage(prs_nupq);
    /*showPage(diligence_probe); */
    resetAllSliders();
  }

  // about to start practice
  if(this_inst_pg==4){
    /* hidePage(diligence_probe); */
    inst_next_btn.innerHTML = 'Begin Practice Trials';
  }

  // load instructions or start task
  if(this_inst_pg<=4){
    task_inst.innerHTML = inst_pg_list[this_inst_pg-1];
    window.scrollTo(0,0);
  }
  else{
    getReady();
    resetAllSliders();
  }
});

// move back through instructions
inst_back_btn.addEventListener('click',function(event){
  if(this_inst_pg==4){inst_next_btn.innerHTML = 'Next';}
  if(this_inst_pg>-1){this_inst_pg-=1;}
  if(this_inst_pg==0){
    hidePage(task_inst);
    showPage(demographic_questionnaire);
  }
  if(this_inst_pg==-1){
    hidePage(demographic_questionnaire);
    hidePage(inst_next_btn);
    hidePage(inst_back_btn);

    showPage(info_consent_letter);
    showPage(yes_consent_btn);
    showPage(no_consent_btn);
  }
  else{
    task_inst.innerHTML = inst_pg_list[this_inst_pg-1];
    window.scrollTo(0,0);
  }
  if(this_inst_pg==2){
    /* hidePage(diligence_probe); // move back from this page, hide it */
    showPage(prs_nupq);
    resetAllSliders();
  }
  else if(this_inst_pg==3){
    /* showPage(diligence_probe); */
  }
  else{
    hidePage(prs_nupq);
    /* hidePage(diligence_probe); */
    resetAllSliders();
  }
});

save_resp_btn.addEventListener('click',function(){
  //add requirement of slider clicks
  if(prs_slider_1.classList.contains('clicked')
  && prs_slider_2.classList.contains('clicked')
  && prs_slider_3.classList.contains('clicked')
  && prs_slider_4.classList.contains('clicked')
  && prs_slider_5.classList.contains('clicked')
  && prs_slider_6.classList.contains('clicked')
  && prs_slider_7.classList.contains('clicked')
  && prs_slider_8.classList.contains('clicked')
  && prs_slider_9.classList.contains('clicked')
  && prs_slider_10.classList.contains('clicked')){
    endProbe();
  }
  //else if (probe_slider_1.classList.contains('clicked')
  //&& probe_slider_2.classList.contains('clicked')
  //&& $('input[name=rad-probe-3-answer]:checked').length>0){
  //  endProbe();
  //}
});

function endLog(){
  // easy to find
  trial_counter = 999;

  // make all below NA
  the_stimulus=
  is_probe=
  prestim_time=
  stim_time=
  poststim_time=

  this_probe=
  prs_1_resp=
  prs_2_resp=
  prs_3_resp=
  prs_4_resp=
  prs_5_resp=
  prs_6_resp=
  prs_7_resp=
  prs_8_resp=
  prs_9_resp=
  prs_10_resp=;
  //probe_1_resp=
  //probe_2_resp=
  //probe_3_resp='NA';

  // log one last line
  logData();
}

finish_btn.addEventListener('click',function(){
  seen_video = $("input:radio[name=rad-video-answer]:checked").val();
  endLog();
  submitData();
});

prs_slider_1.addEventListener('click',function(){
  if (prs_slider_1.classList.contains('not-clicked')){
    prs_slider_1.classList.remove('not-clicked');
    prs_slider_1.classList.add('clicked');
  }
});

prs_slider_2.addEventListener('click',function(){
  if (prs_slider_2.classList.contains('not-clicked')){
    prs_slider_2.classList.remove('not-clicked');
    prs_slider_2.classList.add('clicked');
  }
});

prs_slider_3.addEventListener('click',function(){
  if (prs_slider_3.classList.contains('not-clicked')){
    prs_slider_3.classList.remove('not-clicked');
    prs_slider_3.classList.add('clicked');
  }
});

prs_slider_4.addEventListener('click',function(){
  if (prs_slider_4.classList.contains('not-clicked')){
    prs_slider_4.classList.remove('not-clicked');
    prs_slider_4.classList.add('clicked');
  }
});

prs_slider_5.addEventListener('click',function(){
  if (prs_slider_5.classList.contains('not-clicked')){
    prs_slider_5.classList.remove('not-clicked');
    prs_slider_5.classList.add('clicked');
  }
});

prs_slider_6.addEventListener('click',function(){
  if (prs_slider_6.classList.contains('not-clicked')){
    prs_slider_6.classList.remove('not-clicked');
    prs_slider_6.classList.add('clicked');
  }
});

prs_slider_7.addEventListener('click',function(){
  if (prs_slider_7.classList.contains('not-clicked')){
    prs_slider_7.classList.remove('not-clicked');
    prs_slider_7.classList.add('clicked');
  }
});

prs_slider_8.addEventListener('click',function(){
  if (prs_slider_8.classList.contains('not-clicked')){
    prs_slider_8.classList.remove('not-clicked');
    prs_slider_8.classList.add('clicked');
  }
});

prs_slider_9.addEventListener('click',function(){
  if (prs_slider_9.classList.contains('not-clicked')){
    prs_slider_9.classList.remove('not-clicked');
    prs_slider_9.classList.add('clicked');
  }
});

prs_slider_10.addEventListener('click',function(){
  if (prs_slider_10.classList.contains('not-clicked')){
    prs_slider_10.classList.remove('not-clicked');
    prs_slider_10.classList.add('clicked');
  }
});

//probe_slider_1.addEventListener('click',function(){
  //if (probe_slider_1.classList.contains('not-clicked')){
    //probe_slider_1.classList.remove('not-clicked');
    //probe_slider_1.classList.add('clicked');
  //}
//});

//probe_slider_2.addEventListener('click',function(){
  //if (probe_slider_2.classList.contains('not-clicked')){
    //probe_slider_2.classList.remove('not-clicked');
    //probe_slider_2.classList.add('clicked');
  //}
//});

age_slider.addEventListener('click',function(){
  if (age_slider.classList.contains('not-clicked')){
    age_slider.classList.remove('not-clicked');
    age_slider.classList.add('clicked');
  }
});

// prevent mousewheel scrolling
$(document).on("wheel", "input[type=range]", function (e) {
    $(this).blur();
});

//update slider output values oninput
//--need to update to include onchange for IE
prs_slider_1.oninput = function(){prs_1_output.innerHTML = this.value;}
prs_slider_2.oninput = function(){prs_2_output.innerHTML = this.value;}
prs_slider_3.oninput = function(){prs_3_output.innerHTML = this.value;}
prs_slider_4.oninput = function(){prs_4_output.innerHTML = this.value;}
prs_slider_5.oninput = function(){prs_5_output.innerHTML = this.value;}
prs_slider_6.oninput = function(){prs_6_output.innerHTML = this.value;}
prs_slider_7.oninput = function(){prs_7_output.innerHTML = this.value;}
prs_slider_8.oninput = function(){prs_8_output.innerHTML = this.value;}
prs_slider_9.oninput = function(){prs_9_output.innerHTML = this.value;}
prs_slider_10.oninput = function(){prs_10_output.innerHTML = this.value;}

//probe_slider_1.oninput = function(){probe_1_output.innerHTML = this.value;}
//probe_slider_2.oninput = function(){probe_2_output.innerHTML = this.value;}

age_slider.oninput = function(){age_output.innerHTML = this.value;}

//*****************************************
//-----------starting experiment-----------
//*****************************************


//DETECT Browsers
function getBrowser(){
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 71
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  var output = 'Detecting browsers by ducktyping:<hr>';
  output += 'isFirefox: ' + isFirefox + '<br>';
  output += 'isChrome: ' + isChrome + '<br>';
  output += 'isSafari: ' + isSafari + '<br>';
  output += 'isOpera: ' + isOpera + '<br>';
  output += 'isIE: ' + isIE + '<br>';
  output += 'isEdge: ' + isEdge + '<br>';
  output += 'isBlink: ' + isBlink + '<br>';
  //document.body.innerHTML = output;

  if(isFirefox || isChrome || isOpera){
    showPage(info_consent_letter);
    showPage(yes_consent_btn);
    showPage(no_consent_btn);
    showPage(do_not_refresh);

    //set initial default slider values
    setSliderValues();
  }
  else{
    browser_not_supported.innerHTML =
      "<p>Unfortunately the browser you are using is not supported for this experiment.</p>"
      +"<p>Please copy the address and reload the webpage using one of the following browsers:</p>"
      +"<p><b><a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank'>Firefox</a>"
      +"| <a href='https://www.google.com/chrome/' target='_blank'>Google Chrome</a>"
      +"| <a href='https://www.opera.com/' target='_blank'>Opera</a></b></p>";
    showPage(browser_not_supported);
  }
}

getBrowser();

// showPage(info_consent_letter);
// showPage(yes_consent_btn);
// showPage(no_consent_btn);
// showPage(do_not_refresh);
//
// //set initial default slider values
// setSliderValues();
