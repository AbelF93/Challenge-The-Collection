/*The Collection Array: contain all cards data*/
const HorrorGameCollection = [
	{
		name: "Alien Isolation",
		developers: ["Creative Assembly", " Feral Interactive"],
		releaseYear: 2014,
		plateforms: [
			"Nintendo Switch",
			" Playstation 3/4",
			" Xbox 360/One",
			" Windows",
			" iOS/Android",],
		picture: "https://cdn-uploads.gameblog.fr/img/news/410524_637cf46970fb5.jpg",
		synopsys: "In 2137, fifteen years after the events of the movie Alien (1979). Amanda Ripley have the opportunity to get access to the black box of the Nostromo, now kept on the orbital station Sebastopol. When she arrives, the station is devasted, and survivors fight against a mysterious killer.",
		mechanics: [
			"Breathing Gestion",
			"Sound Gestion",
			"Realistic Ennemi AI",
			"Hiding",
		],
	},
	{
		name: "Amnesia: The Dark Descent",
		developers: ["Frictional Games",],
		releaseYear: 2010,
		plateforms: [
			"Nintendo Switch",
			" Playstation 4",
			" Xbox One",
			" Windows",
			" Linux",
			" Mac OS",
			" Android",],
		picture: "https://www.godisageek.com/wp-content/uploads/Amnesia-Collection-review.jpg",
		synopsys: "Daniel, a man who almost has no memory about himself or his past, as he explores around the darker areas of Brennenburg Castle while trying to maintain his sanity by surviving from monsters and avoid from witnessing unsettling events.",
		mechanics: [
			"Sanity Gestion",
			"Physics",
			"Puzzles",
			"Hiding",
		],
	},
	{
		name: "Bioshock",
		developers: ["2K Games",
		" Irrational Games",
		" Feral Interactive",
		" Digital Extremes",
		" Blind Squirrel Entertainment",
		" Virtos",],
		releaseYear: 2007,
		plateforms: [
			"Nintendo Switch",
			" Playstation 3/4",
			" Xbox 360/One",
			" Windows",
			" Linux",
			" Mac OS",
			" iOS",],
		picture: "https://static.kino.de/37/6e/63/a7630a4d471e1d3f925e0ae6a0_AzNlYTM0NzFmNWFh_bioshock-rcm1920x1080u.jpg",
		synopsys: "The year is 1960, a plane crashes over the Atlantic Ocean, you  manage to survive and head in a mysterious light-house. This leads you to the bottom of the ocean's floor to depraved city: Rapture. This was supposed to be the paradise for peoples that reject the system. Now it's citizen have run amok, and kill each others for a special drug called 'Adam'.",
		mechanics: [
			"Plasmic Powers",
			"Photographic Bonuses",
			"Hacking",
			"Exploration",
			"Environmental Storytelling",
			"Vita-Chamber",
		],
	},	
	{
		name: "Bloodborne",
		developers: ["From Software",],
		releaseYear: 2015,
		plateforms: ["Playstation 4",],
		picture: "https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_2560%2Cc_limit/bloodborne_the_old_hunters_V2.jpg",
		synopsys: "Face your fears as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like wildfire. Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.",
		mechanics: [
			"Blood Sample Healing",
			"Fireweapon Parry",
			"Madness Gestion",
			"Knowledge Gestion",
			"Damage Health Recovery",
			"Rune gameplay modifyer",
			"Cryptic storytelling",
			"Multiplayer",
			"Randomly Generated Chalice Dungeons"
		],
	},
	{
		name: "Dead Space",
		developers: ["Visceral Games","Motive Interactive",],
		releaseYear: 2008,
		plateforms: [
			"Playstation 3",
			" Xbox 360",
			" Windows",
			" Ios/Android",
		],
		picture: "https://img.succesone.fr/2022/10/Dead-Space-Remake-4-1024x576.jpg",
		synopsys: "Isaac Clarke, unlucky engineer, character hidden behind his dark armor will be deployed on the USG Ishimura to restore communications. Only the simple routine mission will turn into a nightmare when Isaac will realize that his colleagues have been cut and shredded, leaving only a bloody trace on a wall or a mysterious notepad, and when the hero will meet these horrible deformed creatures that haunt the ship...",
		mechanics: [
			"Dismemberment System",
			"Double Function Weapons",
			"Horrific Sound Design Randomisation",
			"Zero Gravity Mechanic",
			"Air Gestion",
			"Vent Ennemi Spawn"
		],
	},
	{
		name: "Inside",
		developers: ["Playdead",],
		releaseYear: 2016,
		plateforms: [
			"Nintendo Switch",
			" Playstation 4",
			" Xbox One",
			" Windows",
			" Mac OS",
			" iOS",],
		picture: "https://images4.alphacoders.com/731/thumb-1920-731913.jpg",
		synopsys: "In Inside, the player takes on the role of a faceless boy fleeing an authoritarian dystopian society that performs questionable experiments on human bodies. The game evokes the scenario thanks to its staging, it does not have an explicit direct narration.",
		mechanics: [
			"2D plateformer", 
			"Situational Storytalling",
			"Physics",
			"Puzzles",
		],
	},
	{
		name: "The Path",
		developers: ["Tale of Tales",],
		releaseYear: 2009,
		plateforms: [
			"Windows",
			" Mac OS",
			],
		picture: "https://farm4.static.flickr.com/3349/3407404735_3f3f9d60a5.jpg",
		synopsys: "The game begins in an apartment room, where the player must choose from among six sisters of whom no information is given except their name. After selection, the player is transported on a dirt road, in the middle of a forest.",
		mechanics: [
			"Never End if you stay on the path", 
			"Six Playable Charaters",
			"Exploring Leads to Death",
			"Curiosity will betray you",
		],
	},
	{
		name: "Little Nightmares",
		developers: ["Tarsier Studios",],
		releaseYear: 2017,
		plateforms: [
			"Nintendo Switch",
			" Playstation 4",
			" Xbox One",
			" Windows",
			" Google Stadia",
			" Mac OS",
			" iOS/Android",],
		picture: "https://images8.alphacoders.com/741/thumb-1920-741959.jpg",
		synopsys: "Immerse yourself in Little Nightmares, a dark and whimsical tale that will confront you with your childhood fears. You will have to help Six escape from the Maw, a vast and mysterious ship inhabited by strange characters in search of their next meal!",
		mechanics: [
			"2D plateformer",
			"Boss Escape",
			"Situational Storytalling",
			"Physics",
			"Puzzles",
		],
	},
	{
		name: "Outlast",
		developers: ["Red Barrels",],
		releaseYear: 2013,
		plateforms: [
			"Nintendo Switch",
			" Playstation 4",
			" Xbox One",
			" Windows",
			" Linux",
			" Mac OS",
			" iOS",],
		picture: "https://c4.wallpaperflare.com/wallpaper/935/726/411/red-barrels-outlast-chris-walker-video-games-wallpaper-preview.jpg",
		synopsys: " As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare.",
		mechanics: [
			"Camera Light Mode", 
			"Looking Behind you while Running",
			"Running to survive",
			"Hiding",
		],
	},
	{
		name: "Demo P.T",
		developers: ["Kojima Productions",],
		releaseYear: 2016,
		plateforms: ["Playstation 4",],
		picture: "https://images8.alphacoders.com/533/533921.jpg",
		synopsys: "P.T. served as an interactive teaser for the game Silent Hills, an installment in the Silent Hill series. Explore the infinite corridor without getting catch by the spirit who haunt this house.",
		mechanics: [
			"Playable Trailer", 
			"Puzzles",
			"Spirit Audio Warning",
			"Ultra Immersive Audio",
		],
	},
	{
		name: "Resident Evil",
		developers: ["Capcom",],
		releaseYear: 2002,
		plateforms: [
			"Nintendo Gamecube/Wii/Switch",
			" Playstation 3/4",
			" Xbox 360/One",
			" Windows",
		],
		picture: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ResidentEvil.jpg",
		synopsys: "After multiple gruesome murders that occured near Racoon City, the Police send the S.T.A.R.S's Bravo team to investigate the Harkley Mountains. They end up attacked by dogs and take refuge in an old and dangerous manor.",
		mechanics: [
			"3D Rendered Environment", 
			"Limited Inventory Gestion",
			"Burning Corpses",
			"Knife Ennemi Escape",
			"Limited Savestations",
			"Sound design",
			"Puzzles",
			"Timer",
		],
	},
	{
		name: "Silent Hill 2",
		developers: [
			"Konami",
			" Team Silent",
			" Konami Computer",
			" Entertainment Japan",
			" Creature Labs",
		],
		releaseYear: 2001,
		plateforms: [
			"Playstation 2/3",
			" Xbox/Xbox 360",
			" Windows",
		],
		picture: "https://whatifgaming.com/wp-content/uploads/2022/10/Silent-Hill-2.jpg",
		synopsys: "James Sunderland returns to Silent Hill after receiving a letter from his wife, who died three years earlier. He nevertheless tries to find her and follows the directions in the letter to progress through the foggy city.",
		mechanics: [
			"Radio Monster Detection", 
			"Flashlight Gestion",
			"Playable Character look at resources",
			"Blocking Attacks",
		],
	},
	{
		name: "The Evil Within",
		developers: ["Tango Gameworks",],
		releaseYear: 2014,
		plateforms: [
			"Playstation 3/4",
			" Xbox/Xbox 360/One",
			" Windows",
		],
		picture: "https://image.api.playstation.com/vulcan/img/rnd/202010/1520/rLDLcpTxqcW4gi5XJ2iXoa47.png",
		synopsys: "Lors de leur enquête sur la scène d'un horrible carnage, le détective Sebastian Castellanos et ses partenaires sont confrontés à une mystérieuse et puissante force. Après avoir été témoin du massacre des autres officiers, Sebastian est pris en embuscade et assommé. À son réveil, il se retrouve pendu par les pieds et dégoulinant de sang dans un monde malsain dans lequel d'hideuses créatures rôdent entre les cadavres.	En proie à une terreur inimaginable, Sebastian doit lutter pour sa survie et se lancer dans un terrifiant voyage afin de percer, à jour, l'origine du mal.",
		mechanics: [
			"Burning Ennemies", 
			"Bolts effects",
			"Hiding",
			"Furtive Elimination",
		],
	},
];


document.body.style.backgroundColor = "rgb(15,15,15)";


//constant to lock the card section



let bdHorrorGameCollection = document.querySelector('body');

let sectCard = document.createElement('section');

// I created a constant array called "copy", using  
const copy = [];

HorrorGameCollection.forEach(function(HorrorGame){
	copy.push(HorrorGame); 
	//Create a div containing the picture/name/year production of the game

let artCard = document.createElement('article');	
	let divCard1 = document.createElement('div')
		divCard1.setAttribute('class','movInfos');
		let imgCard = document.createElement('img');
			imgCard.setAttribute('src',HorrorGame.picture);
			imgCard.setAttribute('class','gamePic');
		let infoDiv = document.createElement('div');
			infoDiv.setAttribute('class','data');
				let pNameCard = document.createElement('p');
					pNameCard.setAttribute('class','info');
					pNameCard.setAttribute('class','pCard');
					let nameCard = document.createTextNode(HorrorGame.name);
				let pYearCard = document.createElement('p');
					pYearCard.setAttribute('class','pCard');
					let yearCard = document.createTextNode(HorrorGame.releaseYear);
				let pDevCard = document.createElement ('p');
					pDevCard.setAttribute('class','pCard');
					let devCard = document.createTextNode(HorrorGame.developers);
				let pPlateCard = document.createElement('p');	
					pPlateCard.setAttribute('class','pCard');
					let plateCard = document.createTextNode(HorrorGame.plateforms);
	
	//Create a second div containing the Developers/ 
	let divCard2 = document.createElement('div');
		divCard2.setAttribute('class','info');
			let pSynoTitle = document.createElement('p');
				pSynoTitle.setAttribute('class','pCard');
			let synoTitle = document.createTextNode('SYNOPSIS:');
			let pSynoCard = document.createElement('p');
				pSynoCard.setAttribute('class','pCard');
			let synoCard = document.createTextNode(HorrorGame.synopsys);
	

	
		
		pNameCard.style.fontSize = "2em";
		pNameCard.style.textAlign = "center";
		pNameCard.style.textDecoration = "underline";
		pNameCard.style.color = "rgb(200,200,200)";
		pNameCard.style.textShadow ="5px 5px 4px black";

		artCard.style.fontFamily = "Courier New";
		artCard.style.fontSize = "0.7em";
		artCard.style.fontWeight = "100";
		artCard.style.color = "rgb(250,250,250)";

		pSynoTitle.style.textDecoration = "underline";
		

		//parenting
bdHorrorGameCollection.appendChild(sectCard);	
	sectCard.appendChild(artCard);
		artCard.appendChild(divCard1);
			divCard1.appendChild(imgCard);
			divCard1.appendChild(infoDiv);
			infoDiv.appendChild(pNameCard);
				pNameCard.appendChild(nameCard);
			infoDiv.appendChild(pYearCard);
				pYearCard.appendChild(yearCard);
			infoDiv.appendChild(pDevCard);
				pDevCard.appendChild(devCard);
			infoDiv.appendChild(pPlateCard);
				pPlateCard.appendChild(plateCard);
		
		artCard.appendChild(divCard2);		
			divCard2.appendChild(pSynoTitle);
				pSynoTitle.appendChild(synoTitle);
			divCard2.appendChild(pSynoCard);
				pSynoCard.appendChild(synoCard);

	});






