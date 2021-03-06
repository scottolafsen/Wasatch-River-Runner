const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wasatchriver"
);

const eventSeed = [
  {
    title: "Green River Daily - Campsite Swasey's" ,
    description: "This is the NOOBIE trip, or dusting off the cob-webs from the winter. A great way to start off the season, and getting people used to big water. Camping will be at Swasey's campsite from Friday night 4-26 to Sunday 4-28. Cost is $5 per-person per night for camping and Non-members an additional $10 which will include an ACA wavier. Coordinator: Dustin Judd ",
    date: "2019-04-27T00:00:00.000Z",
    link: "https://www.facebook.com/events/340182873286118/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53604798_2149668768451134_8604950111199428608_n.jpg?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=bb427f4c98b3a5ddcf0f40b8279c39c5&oe=5D3E6D12",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Moab Daily - Camping at Lower Onion Creek Campgound " ,
    description: "The Moab Daily is a very scenic 13-mile stretch of the Colorado River that parallels Highway 28 from the put-in at Onion Creek to the take-out at Takeout Beach. The river is generally wide and mellow of Class 2-3 difficulty. The Club has reserved a group campsite at Lower Onion Creek put in. We will put in Saturday morning at 11 AM at the Onion Creek boat launch. If you are planning to arrive on Saturday, please let someone know, or email us at uwc-leadership@googlegroups.com, so we can keep an eye out for you. Cost is $5 per-person per night for camping and Non-members an additional $10 which will include an ACA wavier. Coordinator: Dustin Judd ",
    date: "2019-05-18T00:00:00.000Z",
    link: "https://www.facebook.com/events/312293262802582/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53514146_2150094451741899_8453268466353307648_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=e85f1374cff00f36ffee7fafecbdcabc&oe=5D3BB752",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Hoback, Greys, Granite Creek - Campsite Kozy Campground" ,
    description: "June 15 and 16. We will be boating the Hoback River (Class III) as well as a couple other runs. The possibilities for other runs include Granite Creek (Class III+), Upper Greys (Class III+), Headwaters of the Green (Class III), and the Gros Ventre River (Class IV). Which sections we run will depend on water levels and who shows up. We plan on camping at the Kozy Campground about 1 mi upstream along the Hoback River from the confluence with Granite Creek. E-mail the Event Coordinator, Cody if you have any questions or if you are planning to come so we know when you plan to arrive at, uwc-leadership@googlegroups.com. Cost is $5 per-person per night for camping and Non-members an additional $10 event fee that will include their ACA wavier. Coordinator:Cody Redmond",
    date: "2019-06-15T00:00:00.000Z",
    link: "https://www.facebook.com/events/326261104912595/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/54257214_2150132588404752_6426740271458811904_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=06bb9bb391195cddd366c99bf1811831&oe=5D42D299",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Sevier River - Castle Rock Campground" ,
    description: "June 29 and 30. This is a trip down to the Sevier, a fun little class III run (Marysvale Run) near Big Rock Candy Mountain and camping at Castlerock near Fremont Indian State Park. We have a couple of reservation depending on how many show up. This is a fun and fast little class III run on the Sevier River following US-89. The run is about 5.5 miles long, fast moving and relatively shallow with a couple of tricky drops and a tumultuous end right above the take out. The mountains and terrain are scenic. Water reading skills. For details, directions or additional info contact Lonny.Cost is $5 per-person per night for camping and Non-members an additional $10 event fee that will include their ACA wavier. Coordinator: Lonny Selin Notes: This has been an increasingly popular trip for good reason and the campground rather special. We do our best to reserve space so it would be nice to know your intentions and numbers. The number of trailers, campers and larger rigs has also been increasing each year so if RV camping is your style, let us know ASAP so we can work with you or make recommendations. Numbers of participants is not limited but some intermediate skills might be handy. Feel free to contact us prior. Coordinator Lonny Selin",
    date: "2019-06-29T00:00:00.000Z",
    link: "https://www.facebook.com/events/339049320059421/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/54257214_2150132588404752_6426740271458811904_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=06bb9bb391195cddd366c99bf1811831&oe=5D42D299",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Payette Rivers - Hot Springs Campground " ,
    description: "7-24to 7-28 The Payette River trip is one of our most popular do to the variety of runs available and the scenic beauty of the area. We will be at the Hot Springs Campground Group site located on Hwy #17 which is Banks Lowman Road just past Garden Valley. Camp site is reserved starting Thur. 7/24 thru 7/28. We will be asking for $5 per person / per night for camping. If you are not a member, you are welcome to join us but we do ask that you sign a ACA waiver and pay the $10 event fee. We will be paddling as a group Fri., Sat. and Sunday morning. We will be running the Main, Cabarton, and Swirly Canyons. Other options may include the Canyon, and the lower South Fork. This is a trip you don't want to miss out on. If you have any questions please contact us at uwc-leadership@googlegroups.com Event coordinator Cody Redmond. See you on the River!",
    date: "2019-07-24T00:00:00.000Z",
    link: "https://www.facebook.com/events/797163493993104/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53898189_2150161838401827_7685348470110027776_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=7c40e76ae345715595689cdec4590839&oe=5D4250E8",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Alpine Canyon, Snake River - Campground: Alpine North Loop" ,
    description: "We have Alpine North loop campsite reserved for Thursday 8/15 thru Saturday 8/18 departing Sunday. Paddling Friday, Saturday and Sunday morning. We will be at Alpine North Loop Campground, group site. When you leave Alpine and cross the bridge, instead of turning right and going up the canyon, go straight for about 1 mile. Alpine campground is on the left. Drive time from SLC is between 3 1/2 to 4 hours. We will have a quick meeting Friday and Saturday morning at 9:00 AM before we head up the river. Depending on the numbers, we will be splitting into groups with different launch times and locations. If you are arriving later than 9 AM please let us know so we can make arrangement for you. We do have phone reception at the campground. We plan to run the river on Friday, Saturday and Sunday, giving the time we may do several trips down on the same day. This is a Class II - III River. May not be the best for a new beginner. This has always been a fun weekend. If you have any questions contact us at uwc-leadership@googlegroups.com See You On The River! Cost is $5 per-person per night for camping and Non-members an additional $10 event fee that will include their ACA wavier. Event Coordinator: Soren Sorensen",
    date: "2019-08-15T00:00:00.000Z",
    link: "http://www.utahwhitewaterclub.org/upcoming-trips",
    src: "",
    tags: ["UWC", "Trips"]
  },
  {
    title: "American River, CA" ,
    description: "Last years trip to the American River was a smashing success. Hone your skills for this one early in the season so you'll be ready! Limited space is available. More details will be coming shortly. Coordinator: Lonny Selin",
    date: "2019-08-28T00:00:00.000Z",
    link: "https://www.facebook.com/events/345925226026845/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53873332_2150179485066729_6477971195416281088_n.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=ce3e3a01295645c94d69d85ee46d974f&oe=5D2AAD5A",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Snake River, Hagerman section" ,
    description: "As the latest and newest of our club trips, the Hagerman section of the Snake River is back on the schedule after a successful first trip with the club last year. This is just outside of Twin Falls and is a beautiful run. This section has several waterfalls in the surrounding areas. We have reserved Camping at the Banbury Hotsprings campground. This is located at 1128 Banbury Rd. Buhl, ID 83316. If you have a trailer or RV and are planning on joining us please reserve your own camping spot. We will be asking the standard $5.00 per night per person camping and for non members will need to fill out the ACA waiver and pay an additional $10 for the event. Coordinator: Cody Redmond",
    date: "2019-09-27T00:00:00.000Z",
    link: "https://www.facebook.com/events/345925226026845/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53873332_2150179485066729_6477971195416281088_n.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=ce3e3a01295645c94d69d85ee46d974f&oe=5D2AAD5A",
    tags: ["UWC", "Trips"]
  },
  {
    title: "Provo River Race" ,
    description: "Join us for the first annual Provo River Race! We will be holding a slalom race down the crux and a boater cross from the dam to the crux. This is going to be a great event so make sure to register today.",
    date: "2019-05-19T00:00:00.000Z",
    link: "https://www.facebook.com/events/bridal-veil-falls/provo-river-race/395609650910638/",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/31271213_1715335725226424_2991387278815072704_n.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=f4f4b246e636fa621e1a7041258bab3f&oe=5D442A97",
    tags: ["Race"]
  },
  {
    title: "Wyoming Whitewater CHampionships" ,
    description: "The Wydaho Whitewater Series is the west’s only whitewater series combining the Bear River Race and the Wyoming Whitewater Championship. To compete, you must compete in all three scoring events: the Bear Race on April 27 and the Grey’s River Timetrial and BoaterX on June 1st. Winners will be announced after the Grey’s Race.",
    date: "2019-06-01T00:00:00.000Z",
    link: "http://www.jhkayakclub.org/wwc",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/31271213_1715335725226424_2991387278815072704_n.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=f4f4b246e636fa621e1a7041258bab3f&oe=5D442A97",
    tags: ["Race"]
  },
  {
    title: "CKS Paddlefest" ,
    description: "Buena Vista, CO",
    date: "2019-05-23T00:00:00.000Z",
    link: "https://www.ckspaddlefest.com/",
    src: "https://static.wixstatic.com/media/60bf0f_42173841e5314b3e9845421055a35ddf~mv2_d_2800_1869_s_2.jpg/v1/crop/x_0,y_0,w_2800,h_1310/fill/w_1175,h_550,al_c,q_85,usm_0.66_1.00_0.01/Paddlefest%202017%20LR047.webp",
    tags: ["Race"]
  },
  {
    title: "Bear River Black Canyon Release" ,
    description: "On scheduled days, flows of 900 cfs or inflow, whichever is greater, will be provided on each day. Releases will begin at 10 a.m. and end at 4 p.m. Between adjoining release days, night-time flows of 200 cfs will be provided.",
    date: "2019-05-11T00:00:00.000Z",
    link: "http://www.pacificorp.com/content/dam/pacificorp/doc/Energy_Sources/Hydro/Hydro_Licensing/Bear_River/ECC/2019_BC_WW_Boater_Flow_Schedule.pdf",
    src: "",
    tags: ["Release"]
  },
  {
    title: "Bear River Black Canyon Release" ,
    description: "On scheduled days, flows of 900 cfs or inflow, whichever is greater, will be provided on each day. Releases will begin at 10 a.m. and end at 4 p.m. Between adjoining release days, night-time flows of 200 cfs will be provided.",
    date: "2019-04-26T00:00:00.000Z",
    link: "http://www.pacificorp.com/content/dam/pacificorp/doc/Energy_Sources/Hydro/Hydro_Licensing/Bear_River/ECC/2019_BC_WW_Boater_Flow_Schedule.pdf",
    src: "",
    tags: ["Release"]
  }
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
