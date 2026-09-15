/*
 * Ask Dad — the joke database.
 *
 * Dad is an old-school traditionalist: pays cash, distrusts subscriptions,
 * believes in hard work, early mornings, firm handshakes and fixing things
 * yourself. He is lovingly, confidently wrong about almost everything.
 *
 * This is the easiest file to contribute to! Add your own lines to any list.
 * Placeholders that get filled in automatically:
 *   {topic}    the subject of the question ("the sky blue")
 *   {Topic}    same, capitalised
 *   {number}   a suspiciously specific number
 *   {year}     a year from Dad's glory days
 *   {price}    what things cost "back in my day"
 *   {place}    somewhere Dad has definitely been
 *   {relative} a relative who is always involved somehow
 *   {item}     something from the junk drawer
 *   {tool}     something from the garage
 *   {chore}    a chore you should be doing instead ({Chore} capitalised)
 *
 * Satire lists: keep it family-friendly, poke fun at Dad, never at real people,
 * and no partisan politics.
 *
 * realTips lists: these are shown as REAL advice under Dad's answer, so they
 * must be accurate, general and non-controversial. No jokes in realTips.
 */
window.AskDad = window.AskDad || {};

AskDad.data = {
  taglines: [
    "Confidently wrong since 1987.",
    "Back in my day, we searched the encyclopedia. All 26 volumes. Uphill.",
    "No subscriptions. No nonsense. No, you can't borrow the car.",
    "Powered by hard work, cargo shorts, and a firm handshake.",
    "Organizing the world's information into a coffee can of screws.",
    "Answers you earn by mowing the lawn first."
  ],

  thinking: [
    "Putting on reading glasses...",
    "Turning off lights in rooms nobody is using...",
    "Checking the thermostat. Who touched the thermostat?",
    "Calling {relative} on the landline...",
    "Reading the newspaper. The paper one...",
    "Recalling how things were done in {year}..."
  ],

  openers: [
    "Well, sport, here's the deal.",
    "Sit down, kiddo. This is going to build character.",
    "Back in {year}, we didn't need a search engine for that.",
    "Great question. You know what else is great? A day's honest work.",
    "Let me turn down the radio.",
    "Hand me that {tool} and I'll tell you.",
    "Hi Curious, I'm Dad. Anyway...",
    "Kids these days. Okay, listen up.",
    "I'll tell you, but first: did you turn off the lights upstairs?"
  ],

  byQuestionType: {
    why: [
      "Because nobody wants to work anymore. That's why {topic}. That's why everything.",
      "Somebody left the door open. Were you born in a barn? We're not paying to heat the whole neighborhood.",
      "It's the humidity. Also, people stopped writing thank-you notes. It's connected.",
      "Because in {year} people fixed things. Now they just buy a new one with an app.",
      "{Topic}? That's what happens when you don't change your oil every 3,000 miles."
    ],
    how: [
      "The same way I did it in {year}: hard work, elbow grease, and absolutely no videos.",
      "Step one: read the manual. Step two: throw away the manual. Step three: call {relative}.",
      "Easy. You need {item}, some duct tape, and a can-do attitude. Mostly the duct tape.",
      "You earn it. You don't download it. You don't subscribe to it. You earn it.",
      "First you watch me do it. Then you watch me do it again. Then you do it wrong and learn something."
    ],
    what: [
      "{Topic} is a fad. They said disco would last forever too.",
      "{Topic} is what they call {item} now so they can charge a monthly fee for it.",
      "That's a kind of tax. Everything turns out to be a kind of tax.",
      "{Topic}? In my day that cost {price} and came with a free handshake.",
      "It's basically a sandwich. Most things are, if you work hard enough."
    ],
    when: [
      "When you're older. And when you've got a job. In that order.",
      "After your chores. Which chores? All of them.",
      "Right after we stop for gas. Not that station. The one {number} cents cheaper, {number} miles up.",
      "In five minutes. Dad minutes. Roughly how long it takes to find the good flashlight."
    ],
    where: [
      "Wherever you left it. Things don't just walk away. Except my {tool}.",
      "It's in {place}. Drove past it once. Didn't stop. Made great time.",
      "Right where it's always been: the junk drawer, next to {item}.",
      "About {number} miles past the last rest stop. We packed sandwiches. We are not stopping."
    ],
    who: [
      "That was {relative}. It's always {relative}.",
      "The same person who keeps touching the thermostat. And I WILL find them.",
      "Somebody who never had a paper route, I'll tell you that much.",
      "A hard-working person who gets up at 5 a.m. You could learn from them."
    ],
    yesno: [
      "No. Next question.",
      "We'll see. Which, as you know, means no.",
      "In this economy? Absolutely not.",
      "Yes, but only after you {chore}, do the dishes, and write Grandma a thank-you note.",
      "Did I have that when I was your age? No. And I turned out fine."
    ],
    other: [
      "That reminds me of the time I fixed a toaster with {item}. Anyway, the answer is hard work.",
      "{Topic}? Sounds expensive. Turn off the lights when you leave the room.",
      "I'm going to need you to rephrase that as a question about lawn care.",
      "The answer is in the manual. Nobody has read the manual since {year}."
    ]
  },

  topics: [
    {
      name: "money",
      keywords: ["money", "cost", "price", "rich", "buy", "pay", "bank", "dollar", "cash", "expensive", "cheap", "invest", "budget", "save", "saving", "savings", "loan", "debt", "credit", "rent", "afford", "mortgage"],
      answers: [
        "Money doesn't grow on trees. It grows on a paper route that starts at 5 a.m.",
        "Want to save money? Turn off the lights. That's it. That's the whole economy.",
        "A credit card is a loan from your future self, and your future self is broke.",
        "In {year}, {topic} cost {price} and you paid in cash, like a grown-up."
      ],
      realTips: [
        "A common guideline is to build an emergency fund covering 3 to 6 months of essential expenses.",
        "Paying off high-interest debt, such as credit card balances, usually comes before other savings goals.",
        "Tracking every expense for one month is a simple, effective way to start a budget."
      ]
    },
    {
      name: "work",
      keywords: ["job", "jobs", "work", "career", "boss", "hire", "hired", "resume", "interview", "salary", "raise", "quit", "employee", "business", "office", "promotion"],
      answers: [
        "Walk in, look them in the eye, give a firm handshake and ask for the manager. Worked in {year}.",
        "Nobody wants to work anymore. Except me. I love work. Right after this nap.",
        "Show up 15 minutes early. On time is late. Late is fired.",
        "Get a trade. Nobody ever outsourced a guy who can fix a water heater."
      ],
      realTips: [
        "Tailor your resume to each job posting and prepare a few specific examples of your achievements for interviews.",
        "Before asking for a raise, research typical pay for your role and area, and list the results you've delivered."
      ]
    },
    {
      name: "food",
      keywords: ["food", "eat", "pizza", "burger", "cook", "dinner", "lunch", "breakfast", "snack", "hungry", "grill", "bbq", "steak", "cheese", "taco", "sandwich", "coffee", "restaurant", "takeout", "delivery"],
      answers: [
        "Why order {topic}? We have food at home.",
        "The secret is you cook {topic} on the grill. Everything goes on the grill. Cereal? Grill.",
        "In {year} a whole dinner out cost {price}, and you still split it with {relative}."
      ],
      realTips: [
        "Cooking at home is usually cheaper and healthier than eating out, and planning meals for the week reduces food waste.",
        "Use a food thermometer: poultry is safe at 165°F (74°C) and ground beef at 160°F (71°C)."
      ]
    },
    {
      name: "tech",
      keywords: ["computer", "phone", "internet", "wifi", "app", "apps", "ai", "robot", "code", "program", "software", "laptop", "email", "password", "tv", "remote", "game", "games", "subscription", "streaming", "social", "media"],
      answers: [
        "Have you tried unplugging {topic}, blowing on it, and plugging it back in? That's the whole IT department.",
        "You don't need {topic}. You need a library card and some fresh air.",
        "The only cloud I trust is the one that waters my lawn.",
        "Another subscription? I pay for the newspaper, and I read it on paper, like Gutenberg intended."
      ],
      realTips: [
        "Use a different password for every account and turn on two-factor authentication wherever it's offered.",
        "Restarting a device genuinely fixes many problems, and installing updates patches security holes."
      ]
    },
    {
      name: "car",
      keywords: ["car", "cars", "truck", "drive", "driving", "engine", "gas", "oil", "tire", "tires", "road", "traffic", "mileage", "highway", "lease"],
      answers: [
        "That noise is normal. Turn the radio up and it goes away.",
        "Change {topic} every 3,000 miles, whether it needs it or not. Especially if it doesn't.",
        "Back in my day, cars didn't talk to you. They broke down quietly, like a gentleman.",
        "We could take the shortcut. It adds forty minutes, but gas is {number} cents cheaper out there."
      ],
      realTips: [
        "Your owner's manual lists the right oil change interval. Many modern cars go 5,000 to 10,000 miles between changes.",
        "Check tire pressure monthly using the number on the sticker inside the driver's door, not the number on the tire."
      ]
    },
    {
      name: "home",
      keywords: ["house", "home", "fix", "repair", "lawn", "garden", "paint", "leak", "toilet", "sink", "roof", "diy", "clean", "chores", "chore", "room", "thermostat"],
      answers: [
        "Why call a guy? You ARE the guy. Go get the {tool}.",
        "Every problem in a house can be fixed with duct tape, WD-40, or pretending you didn't see it.",
        "Clean your room. Then clean it again. Then we'll talk about {topic}."
      ],
      realTips: [
        "Find your home's main water shut-off valve before you need it. It can stop a leak from flooding the house.",
        "Hire a licensed professional for electrical or gas work."
      ]
    },
    {
      name: "health",
      keywords: ["sick", "doctor", "health", "sleep", "tired", "headache", "exercise", "hurt", "flu", "diet", "workout", "fitness", "weight"],
      answers: [
        "Walk it off. Dad's been walking off a knee injury since {year}.",
        "Drink a glass of water, go to bed at 9, and get up at 5 like a person with a job.",
        "Rub some dirt on it. That's Dad medicine. For real medicine, read the box below."
      ],
      realTips: [
        "Most adults need 7 to 9 hours of sleep a night. For symptoms that are severe or don't go away, see a doctor.",
        "Adults are generally advised to get about 150 minutes of moderate exercise each week."
      ]
    },
    {
      name: "school",
      keywords: ["school", "homework", "math", "test", "teacher", "class", "grade", "grades", "study", "college", "history", "learn", "exam"],
      answers: [
        "When I was in school, we learned {topic} walking uphill both ways. In the snow. In July.",
        "{Topic} won't matter in real life. Backing up a trailer and balancing a checkbook will.",
        "Study hard, learn a trade, and never trust a calculator you didn't pay for."
      ],
      realTips: [
        "Short study sessions spread over several days, plus practice tests, usually beat one long cram session."
      ]
    },
    {
      name: "relationships",
      keywords: ["date", "dating", "girlfriend", "boyfriend", "love", "marry", "marriage", "crush", "relationship", "wedding", "friend", "friends"],
      answers: [
        "When I met your mother I wrote her a letter. With a pen. Then I bought her a milkshake for {price}.",
        "Bring them home to meet the family. If {relative} approves, we'll talk.",
        "Be polite, hold the door, and be home by 9. That's the whole rulebook."
      ],
      realTips: [
        "Healthy relationships rest on respect, honesty and clear communication. Talking things through beats guessing."
      ]
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "snow", "hot", "cold", "storm", "cloud", "wind", "temperature", "hurricane", "tornado"],
      answers: [
        "The thermostat stays at 68. Cold? Put on a sweater. We are not made of money.",
        "My knee says {topic} is coming in {number} hours. My knee has never been wrong. Except that one time.",
        "It's not the heat, it's the humidity. Also, it's the heat."
      ],
      realTips: [
        "Check your local forecast before traveling and keep a basic emergency kit for severe weather.",
        "Dressing in layers keeps you warmer than one heavy layer, and setting the thermostat a few degrees lower can cut heating bills."
      ]
    },
    {
      name: "animals",
      keywords: ["dog", "dogs", "cat", "cats", "bird", "fish", "animal", "horse", "cow", "bear", "shark", "dinosaur", "pet", "pets", "squirrel", "snake", "bee"],
      answers: [
        "We are not getting {topic}. Who's going to feed it? Walk it? That's right. Me.",
        "{Topic}? Basically squirrels in a costume. And the squirrels are after my bird feeder.",
        "Animals can smell fear. They can also smell hot dogs. Always carry hot dogs."
      ],
      realTips: [
        "Before getting a pet, research its lifespan, daily care needs and typical yearly vet costs."
      ]
    },
    {
      name: "space",
      keywords: ["space", "moon", "sun", "star", "stars", "planet", "mars", "galaxy", "universe", "astronaut", "rocket", "alien", "sky"],
      answers: [
        "The moon is the sun's night light. It's on a timer. I installed it myself, no electrician.",
        "They put a man on the moon in 1969 with less computer than your calculator. And you can't find your shoes.",
        "Space is cold because somebody left the door open. Probably {relative}."
      ]
    },
    {
      name: "science",
      keywords: ["science", "physics", "chemistry", "gravity", "atom", "energy", "light", "electricity", "magnet", "volcano", "ocean", "water", "fire"],
      answers: [
        "Gravity was invented in {year} to keep the lawn chairs from floating away.",
        "{Topic} works on the same principle as a garage door opener. Point it and hope.",
        "Water is wet because it's scared. You'd be too if you were water."
      ]
    }
  ],

  closers: [
    "And that's the truth.",
    "Now go {chore}.",
    "Don't tell your mother I told you.",
    "You can look it up. On paper. At the library. Like an adult.",
    "That's how we did it in {year}, and we turned out fine.",
    "Money doesn't grow on trees, and neither do answers.",
    "Now put the phone down and go outside."
  ],

  signoffs: [
    "— Dad (verified expert, self-certified)",
    "— Dad, from the recliner he paid for in cash",
    "— Dad, who is not lost, just refusing to ask for directions",
    "— Dad, Chief Grill Officer",
    "— Dad, sent from a flip phone that works fine, thank you"
  ],

  lessons: [
    "Never pay someone to do something you can do badly yourself.",
    "A penny saved is a penny you'll find in the dryer in {year}.",
    "If it ain't broke, don't fix it. If it is broke, duct tape.",
    "Nobody ever went broke turning off a light.",
    "The early bird gets the worm. The earlier bird gets the good parking spot.",
    "If you can't pay cash for it, you can't afford it.",
    "A firm handshake solves {number}% of life's problems.",
    "A subscription is just rent for something you'll forget about.",
    "Buy it once, buy it right, and keep the receipt in a shoebox forever.",
    "If you've got time to lean, you've got time to clean.",
    "Respect your elders. Especially the one holding the car keys."
  ],

  facts: [
    "{number}% of all statistics are made up on the spot, including this one.",
    "The first {topic} was discovered in {place} by {relative}, who didn't need an app for it.",
    "In {year}, {topic} cost {price}. Dad still thinks it should.",
    "Scientists agree {topic} tastes better grilled.",
    "Turning off one light saves enough money to buy a brand new light in {number} years.",
    "Nobody has ever regretted bringing an extra jacket. Nobody.",
    "Nobody needed {topic} in {year}, and everyone turned out fine."
  ],

  alsoAsk: [
    "Is {topic} why the thermostat is set to 68?",
    "Can you fix {topic} with duct tape?",
    "What would {relative} say about {topic}?",
    "Why does {topic} cost more than it did in {year}?",
    "Do I need a subscription for {topic}?",
    "Should I get a job before I ask about {topic}?",
    "Are we there yet?"
  ],

  fakeSites: [
    { url: "wikipedad.org › wiki › {topic}", title: "{Topic} — Wikipedad, the free-ish encyclopedia", snippet: "{Topic} is a thing Dad knows all about. Citation needed. Citation is in the garage somewhere." },
    { url: "dadoverflow.com › questions › {number}", title: "How do I explain {topic} to my kids? [closed]", snippet: "Closed as duplicate of 'Ask your mother'. Top answer (4,812 votes): turn it off and on again." },
    { url: "webdad.com › symptoms › {topic}", title: "{Topic}: Causes, Symptoms & Walking It Off", snippet: "Common causes include not wearing a jacket, sitting too close to the TV, and making that face until it stayed that way." },
    { url: "garagegazette.news › {year} › {topic}", title: "Local Dad Solves {Topic} Using Only {Item}", snippet: "Neighbors were stunned. 'He didn't even read the instructions,' said {relative}. 'He never does.'" },
    { url: "dadtube.tv › watch › {topic}", title: "Dad Explains {Topic} (4 Hour Video, No Chapters)", snippet: "Skip to 3:47:12 for the answer. The first 3 hours are about a riding mower he almost bought in {year}." },
    { url: "pennypincher.almanac › {topic}", title: "{Topic}: Is It Worth the Money? (No.)", snippet: "We ran the numbers. You could just stay home. Also, turn off that light." },
    { url: "backinmyday.quarterly › {year}", title: "{Topic} Was Better in {year}, Study Finds", snippet: "The study was conducted by {relative} on the front porch. Sample size: one. Confidence: total." },
    { url: "grillalmanac.com › {topic}", title: "Can You Grill {Topic}? (Yes.)", snippet: "Medium heat, {number} minutes a side, and never let anyone else touch the tongs." }
  ],

  luckyQuestions: [
    "Why is the sky blue?",
    "How do I get rich?",
    "Should I buy a new car?",
    "Do I need a new phone?",
    "Where do socks go in the dryer?",
    "Can I have a dog?",
    "Why do I have to do chores?",
    "How do I ask for a raise?",
    "Can I stay up late?",
    "Is cereal a soup?"
  ],

  // Shown on the home page. No {topic} here, since nobody has asked anything yet.
  homeFacts: [
    "Leaving a light on in an empty room costs exactly one million dollars. Dad did the math.",
    "Duct tape holds the universe together. The other 4% is WD-40.",
    "A firm handshake burns more calories than a gym membership you never use.",
    "Dads can hear a car door left ajar from three counties away.",
    "The good scissors have never been put back in the drawer. Not once. Not in recorded history.",
    "Every time someone asks 'are we there yet?', the trip gets 10 minutes longer. That's physics.",
    "Dads don't get lost. They take unscheduled scenic routes.",
    "Grilling adds 3 years to your life and 11 minutes to dinner.",
    "In {year}, a movie ticket cost {price} and the movie was better.",
    "The thermostat is not a toy. It is a family heirloom set to 68.",
    "Cargo shorts have 8 pockets so Dad can carry every receipt since {year}."
  ],

  // Classic dad jokes for the home page: setup, then punchline on click.
  jokes: [
    { setup: "Why did Dad bring a ladder to the grocery store?", punchline: "He heard prices were going up." },
    { setup: "I'm reading a book about anti-gravity.", punchline: "It's impossible to put down." },
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
    { setup: "What do you call a fake noodle?", punchline: "An impasta." },
    { setup: "Why can't a bicycle stand up on its own?", punchline: "It's two tired." },
    { setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory." },
    { setup: "Why did the math book look so sad?", punchline: "It had too many problems." },
    { setup: "I used to hate facial hair...", punchline: "...but then it grew on me." },
    { setup: "What did the ocean say to the beach?", punchline: "Nothing. It just waved." },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up." },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear." },
    { setup: "I only know 25 letters of the alphabet.", punchline: "I don't know y." },
    { setup: "Why did the coffee file a police report?", punchline: "It got mugged." },
    { setup: "I don't trust stairs.", punchline: "They're always up to something." },
    { setup: "What do you call a dad who falls through the ice?", punchline: "A pop-sicle." },
    { setup: "Why do you never see elephants hiding in trees?", punchline: "Because they're really good at it." }
  ],

  places: ["Toledo", "the hardware store", "a diner outside Tulsa", "Boise", "the second-best rest stop in Nebraska", "Canada, probably", "the county fair"],
  relatives: ["your Uncle Gary", "Grandpa", "your cousin Doug", "Aunt Linda", "the neighbor, Steve", "your great-uncle Walt"],
  items: ["a rubber band", "a spare key to nothing", "a coupon from {year}", "a single AA battery", "a mystery screw", "a takeout menu for a closed restaurant"],
  tools: ["socket wrench", "tape measure", "flashlight", "level", "good screwdriver", "pair of grill tongs"],
  chores: ["mow the lawn", "clean the gutters", "stack the firewood", "take out the trash", "wash the car", "rake the leaves"],
  prices: ["a nickel", "a quarter", "35 cents", "a dollar ten", "two bits"]
};
