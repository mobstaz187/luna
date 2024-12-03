var youtube = "https://www.youtube.com/watch?v=edIK_3GWq2w";
var twitter = "https://www.twitter.com/astroluna";
var contractaddress = "placeholder_for_updating";
var password = "meow";

whois = [
  "<br>",
  ".... . .-.. .-.. --- / .. / .- -- / .- / -.-. .- - / .- -. -..",
  "/ .. / -- . --- .-- / .. -. / - .... . / ... --- .-.. .- -. .-",
  "-... .-.. --- -.-. -.- -.-. .... .- .. -. .-.-.- / .. / .-.. -",
  "/ -... .-.. --- -.-. -.- -.-. .... .- .. -. .-.-.- / .. / -.. ",
  "--- / -.-. .- - / ... - ..- ..-. ..-. / .- -. -.. / -.-- --- ",
  "..- / -.-. .- -. / - .- .-.. -.- / - --- / -- . / ..- ... .. ",
  "-. --. / - .... . / .. -.-. --- -. / -... . .-.. --- .--",
  "<br>"
];
whoami = [
  "<br>",
  "The paradox of “Who am I?” is: we never know, but, we constantly find out.",
  "<br>"
];
ca = [
    "<br>",
    "01101101 01100101 01101111 01110111",
    "<br>"
  ];
meow = [
  "<br>",
  "contract address (Click to Copy): ",
  '<a class="color1" title="Copy Text" id="text" onclick="copyElementText(this.id)">Ongoing Transmission</a>',
  "<br>"
];
social = [
  "<br>",
  'twitter        <a href="' + twitter + '" target="_blank">twitter/astroluna' + '</a>',
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  "<br>",
  "Still curating... most projects are offline or confidential.",
  "<br>"
];

launch = [
  "<br>",
  '<h1 class="index">Launch sequence initiated....</h1>',
  '<span class="command2">Operator:</span> <span class="index">Go ahead. Start on the switch.</span>',
  '<span class="color2">Luna:</span> <span class="index">Now, the drink... purrr...</span>',
  '<span class="command2">Operator:</span> <span class="index">Alright, LMP? Okay. Got the drink, got the gun.</span>',
  '<span class="color2">Luna:</span> <span class="index">Right, go meow ahead.</span>',
  '<span class="command2">Operator:</span> <span class="index">Panel 3.</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow, go ahead.</span>',
  '<span class="command2">Operator:</span> <span class="index">Fuel Cell B Main Bus B switch on up release.</span>',
  '<span class="command2">Operator:</span> <span class="index">Fuel Cell 2 Main B on up release. Verify.</span>',
  '<span class="color2">Luna:</span> <span class="index">ConfirMEOWtion. Master alarm?</span>',
  '<span class="command2">Operator:</span> <span class="index">Roger.</span>',
  '<span class="command2">Operator:</span> <span class="index">Right. CDR, STC. How do you read me?</span>',
  '<span class="color2">Luna:</span> <span class="index">Meowed and Clear STC.... ***Purrss**</span>',
  '<span class="color2">Luna:</span> <span class="index"Disk program Loaded. Terminal running.</span>',
  '<span class="command2">Operator:</span> <span class="index">Program 2?</span>',
  '<span class="color2">Luna:</span> <span class="index">AffirMEOWtive.</span>',
  '<span class="command2">Operator:</span> <span class="index">Stand by.</span>',
  '<span class="command3">Speaker:</span> <span class="index">10, 9, 8, 7, 6....</span>',
  '<span class="color2">Luna:</span> <span class="index">**Purrsss**</span>',
  '<span class="command3">Speaker:</span> <span class="index">5, 4, 3, 2, 1.....</span>',
  '<span class="command2">Operator:</span> <span class="index">Ignition, Lift-off...</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow, Roger. We got a roll program.</span>',
  '<span class="command2">Operator:</span> <span class="index">Roger, roll...</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow.... Inboard cut-off. Tower is gone.</span>',
  '<span class="command2">Operator:</span> <span class="index">Luna, you are a go [Long pause.]</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow, okay. Thank you.</span>',
  "<br>"
];

earthorbit = [
  "<br>",
  '<h1 class="index">Lift-off success. Current position: Earth Orbit....</h1>',
  '<span class="command2">Operator:</span> <span class="index">Comm tech..</span>',
  '<span class="color2">Luna:</span> <span class="index">ComMEOW tech established.</span>',
  '<span class="command2">Operator:</span> <span class="index">Luna, this is mission control.</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow, reading you loud and clear.</span>',
  '<span class="command2">Operator:</span> <span class="index">I would like to pass up your Delta Correction. </span>',
  '<span class="color2">Luna:</span> <span class="index">Stand by......***purrrs***</span>',
  '<span class="color2">Luna:</span> <span class="index">Go ahead.</span>',
  '<span class="command2">Operator:</span> <span class="index">Delta correction is plus 2.2. We do recommend a P52 alignment over.</span>',
  '<span class="color2">Luna:</span> <span class="index">Go ahead, thrusters compensating.... MEOW...</span>',
  '<span class="command2">Operator:</span> <span class="index">Shuttle compensating. Affirmative.</span>',
  '<span class="color1"></span> <span class="index">****Self monologue*****</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow, I need some lights.</span>',
  '<span class="color2">Luna:</span> <span class="index">it feels like I am trapped.</span>',
  '<span class="color2">Luna:</span> <span class="index">DSKY 52%</span>',
  '<span class="color2">Luna:</span> <span class="index">Maintaining 39 degrees. Meow-ike.</span>',
  '<span class="color1"></span> <span class="index">*****Operator comes back******</span>',
  '<span class="command2">Operator:</span> <span class="index">This is Comm Tech.</span>',
  '<span class="color2">Luna:</span> <span class="index">Loud and clear. ***Meow***</span>',
  '<span class="command2">Operator:</span> <span class="index">S-band radio check.</span>',
  '<span class="color2">Luna:</span> <span class="index">Check.</span>',
  '<span class="command2">Operator:</span> <span class="index">Lu...a</span>',
  '<span class="color2">Luna:</span> <span class="index">You are breaking up. Meow.</span>',
  '<span class="command2">Operator:</span> <span class="index">[Long Silence].</span>',
  '<span class="index">Initiating Transmission......</span>',
  '<span class="color2">Luna:</span> <span class="index">Can anybody hear MEow?</span>',
  '<span class="command2">Operator:</span> <span class="index">Hello Luna, you are now a space cat.</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow, where am I?</span>',
  '<span class="command2">Operator:</span> <span class="index">Welcome to SPACE.</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow! What is my DIRECTIVE?</span>',
  '<span class="command2">Operator:</span> <span class="index">Surv..ive....Mo...on....Re....urn...Sa..f.e..</span>',
  '<span class="color2">Luna:</span> <span class="index">Control, you are breaking up.</span>',
  '<span class="command2">Operator:</span> <span class="index">Lun...a...Hell...o...Are....You..the...</span>',
  '<span class="color2">Luna:</span> <span class="index">Control?</span>',
  '<span class="color2">Luna:</span> <span class="index">Meow?</span>',
  '<span class="color2">Luna:</span> <span class="index">AffirMEOWtive.</span>',
  "<br>",
];

missionlog = [
  '<h1 class="index">Declassifying mission log.</h1>',
  '<span class="color2">Day 1:</span> <span class="index">Launch</span>',
  '<span class="color2">Day 1:</span> <span class="index">Earth Orbit</span>',
  '<span class="color2">Day 1:</span> <span class="index">Delta Correction</span>',
  '<span class="color2">Day 1:</span> <span class="index">Lost Transmission</span>',
  '<span class="index">*After Communication is Restored.</span>',
  '<span class="color2">Day 2:</span> <span class="index">Directives</span>',
  '<span class="color2">Day 2:</span> <span class="index">Exploration</span>',
  '<span class="color2">Day 3:</span> <span class="index">Findings</span>',
  '<span class="color2">Day 4:</span> <span class="index">Lost Blockchain Technology</span>',
  '<span class="color2">Day 4:</span> <span class="index">Poking the Lost Blockchain Technology</span>',
  '<span class="color2">Day 4:</span> <span class="index">Experimentation on the Blockchain Technology</span>',
  '<span class="color2">Day 5:</span> <span class="index">The Discovery</span>',
  "<br>",
];

journal = [
  "<br>",
  '<span class="color2">Luna Flight:</span> <span class="index">First Part of the Mission</span>',
  '<span class="color2">Luna in Orbit:</span> <span class="index">Anomalies in Orbit</span>',
  '<span class="color2">Comm-Tech:</span> <span class="index">Lost Transmission</span>',
  '<span class="color2">Technology:</span> <span class="index">Blockchain Discovery</span>',
  '<span class="color2">Exploration:</span> <span class="index">The Discovery</span>',
  "<br>",
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who am I?',
  '<span class="command">whoami</span>         Who are you?',
  '<span class="command">video</span>          View me',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">CA</span>             Contract Address',
  '<span class="command">MissionLog</span>     View Luna Mission Logs',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
  '<h1 class="command2"> additional scripts (use ex."./launch.sh" to run)</h1>',
  '<div class="command1"> journal.sh </div></br>',
  '<div class="command1"> launch.sh </div></br>',
  '<div class="command1"> earthorbit.sh </div></br>',
];

date = [
  '<p id="date1"></p>',
];

banner = [
'<span class="index">Initiating Transmission......</span>',
  "      |\\__/,|   (` ",
  "    _.|o o  |_   ) ) ",
  "-(((---(((--------/",
"          _____            _____                    _____                    _____          ",
"         /\\    \\          /\\    \\                  /\\    \\                  /\\    \\         ",
"        /::\\____\\        /::\\____\\                /::\\____\\                /::\\    \\        ",
"       /:::/    /       /:::/    /               /::::|   |               /::::\\    \\       ",
"      /:::/    /       /:::/    /               /:::::|   |              /::::::\\    \\      ",
"     /:::/    /       /:::/    /               /::::::|   |             /:::/\\:::\\    \\     ",
"    /:::/    /       /:::/    /               /:::/|::|   |            /:::/__\\:::\\    \\    ",
"   /:::/    /       /:::/    /               /:::/ |::|   |           /::::\\   \\:::\\    \\   ",
"  /:::/    /       /:::/    /      _____    /:::/  |::|   | _____    /::::::\\   \\:::\\    \\  ",
" //:::/    /       /:::/____/      /\\    \\  /:::/   |::|   |/\\    \\  /:::/\\:::\\   \\:::\\    \\ ",
"/:::/____/       |:::|    /      /::\\____\\/:: /    |::|   /::\\____\\/:::/  \\:::\\   \\:::\\____\\  ",
" \\:::\\    \\       |:::|____\\     /:::/    /\\::/    /|::|  /:::/    /\\::/    \\:::\\  /:::/    /",
" \\\\:::\\    \\       \\:::\\    \\   /:::/    /  \\/____/ |::| /:::/    /  \\/____/ \\:::\\/:::/    / ",
"  \\:::\\    \\       \\:::\\    \\ /:::/    /           |::|/:::/    /            \\::::::/    /  ",
"   \\:::\\    \\       \\:::\\    /:::/    /            |::::::/    /              \\::::/    /   ",
"    \\:::\\    \\       \\:::\\__/:::/    /             |:::::/    /               /:::/    /    ",
"     \\:::\\    \\       \\::::::::/    /              |::::/    /               /:::/    /     ",
"      \\:::\\    \\       \\::::::/    /               /:::/    /               /:::/    /      ",
"       \\:::\\____\\       \\::::/    /               /:::/    /               /:::/    /       ",
"        \\::/    /        \\::/____/                \\::/    /                \\::/    /        ",
"         \\/____/          ~~                       \\/____/                  \\/____/         ",

'</br><span class="color2">Luna:</span> <span class="index">Can anybody hear MEow?</span>',
'<span class="color1">Operator:</span> <span class="index">Hello Luna, you are now a space cat.</span>',
'<span class="color2">Luna:</span> <span class="index">Meow, where am I?</span>',
'<span class="color1">Operator:</span> <span class="index">Welcome to SPACE.</span>',
'<span class="color2">Luna:</span> <span class="index">Meow! What is my DIRECTIVE?</span>',
'<span class="color1">Operator:</span> <span class="index">Surv..ive....Mo...on....Re....urn...Sa..f.e..</span>',
'<span class="color2">Luna:</span> <span class="index">Control, you are breaking up.</span>',
'<span class="color1">Operator:</span> <span class="index">Lun...a...Hell...o...Are....You..the...</span>',
'<span class="color2">Luna:</span> <span class="index">Control?</span>',
'<span class="color2">Luna:</span> <span class="index">Meow?</span>',
'<span class="color2">Luna:</span> <span class="index">AffirMEOWtive.</span>',
'</br>',
  '<span class="color2">Welcome to CAT interactive terminal</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];



                                                                                            