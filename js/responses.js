/*
 * Ask Dad — the joke database.
 *
 * Dad is an old-school traditionalist: pays cash, distrusts subscriptions,
 * believes in hard work, early mornings, firm handshakes and fixing things
 * himself. He is lovingly, confidently wrong about almost everything, and he
 * is sarcastic about it. The voice is deadpan satire news: "Local Dad...",
 * "Report:", "sources say", and every answer eventually reaches gas prices.
 *
 * This is the easiest file to contribute to! Add your own lines to any list.
 * Placeholders that get filled in automatically:
 *   {topic}    the subject of the question ("the sky blue")
 *   {Topic}    same, capitalised
 *   {number}   a suspiciously specific number
 *   {small}    a small number (3–9)         {big}   a big number (40–4000)
 *   {year}     a year from Dad's glory days
 *   {price}    what things cost "back in my day"
 *   {place}    somewhere Dad has definitely been
 *   {relative} a relative who is always involved somehow ({Relative} capitalised)
 *   {item}     something from the junk drawer ({Item} capitalised)
 *   {tool}     something from the garage
 *   {chore}    a chore you should be doing instead ({Chore} capitalised)
 *
 * Satire lists: keep it family-friendly, poke fun at Dad, never at real
 * people, and no partisan politics. The joke is always on Dad.
 *
 * realTips lists: these are shown as REAL advice under Dad's answer, so they
 * must be accurate, general and non-controversial. No jokes in realTips.
 */
window.AskDad = window.AskDad || {};

AskDad.data = {
  taglines: [
    "All the answers. None of the accuracy.",
    "Fair, balanced, and fully reclined.",
    "The world's most trusted source of information, according to Dad.",
    "Now with 40% more sighing.",
    "Results guaranteed correct or your money back. (It was free. So.)",
    "Asking the tough questions, then answering different ones.",
    "Confidently wrong since 1987."
  ],

  thinking: [
    "Sighing heavily...",
    "Pretending to read the manual...",
    "Consulting a guy at the hardware store who knows a guy...",
    "Blaming the humidity...",
    "Adjusting recliner to optimal wisdom angle...",
    "Checking gas prices for no reason...",
    "Turning off lights in rooms nobody is using..."
  ],

  openers: [
    "Oh, great question. Truly. Someone write this down.",
    "Sure, I'll answer that. It's not like I was watching the game.",
    "Let me stop everything I'm doing, which was nothing, and think about this.",
    "You know, back in {year} we had a word for people who asked that: 'inside.'",
    "I read half a headline about this once, so I'm basically an expert.",
    "Sit down. This is going to take a while, because I'm going to make it about gas prices.",
    "Hi Curious, I'm Dad. Anyway...",
    "Ah, {topic}. The number one threat to this household, after the thermostat.",
    "Finally, a question I can answer without any of the facts.",
    "Hold on, let me put down this coffee I've been reheating since {year}."
  ],

  byQuestionType: {
    why: [
      "Because somewhere, someone stopped writing thank-you notes, and civilization has been sliding downhill ever since. {Topic} is just the latest casualty.",
      "It's the humidity. Everything is the humidity. Scientists won't tell you that, because scientists don't have my knee.",
      "Because the people who make {topic} figured out you'd pay monthly for it. In {year} you bought it once and complained about it forever, like an adult.",
      "{Topic}? That's what happens when nobody closes the door. We're heating the whole neighborhood, and the neighborhood hasn't even said thank you.",
      "Honestly, it's the same reason everything happens: I wasn't consulted."
    ],
    how: [
      "Step one: tighten it. Step two: tighten it more. Step three: tell everyone it was already broken when you got there.",
      "You could watch a 40-minute tutorial, or you could do it the way I did in {year}: wrong, quickly, and with total confidence.",
      "Same way you do anything: duct tape, a {tool}, and someone in the doorway saying 'maybe we should call somebody.' We are not calling somebody.",
      "I'll show you once. I'll show you twice. The third time it's your problem and my story at Thanksgiving.",
      "Simple. You earn it. I'd explain what that means, but you'd have to get off the couch to hear me."
    ],
    what: [
      "{Topic} is a fad. So was the internet, and look how that turned out. Everyone's on it. Disgraceful.",
      "{Topic} is what they call {item} once a marketing department gets hold of it. Same thing, plus a monthly fee.",
      "It's a tax. Not officially. But if you think about it, so is everything, including this conversation.",
      "In {year}, {topic} cost {price} and came with a firm handshake and a guy named Earl who'd fix it for free. Now it comes with an app, and the app is also named Earl.",
      "Nobody knows what {topic} is. That's how they get you. Ask for the manager."
    ],
    when: [
      "When you're older. And when you've got a job. And when gas is back under two dollars. So, never, but in a hopeful way.",
      "After your chores. Which chores? Look around. Pick one. Pick all of them.",
      "Right after we stop for gas at the station that's {small} cents cheaper and {number} miles out of the way. We're saving money, see.",
      "In five minutes. Dad minutes. They convert to regular minutes at a rate nobody has ever successfully calculated.",
      "Once the game's over. It's going to overtime. It's always going to overtime."
    ],
    where: [
      "Wherever you left it. Which is a bold thing to ask me, considering I've been asked to find things since {year} and found all of them.",
      "It's in {place}. I drove past it once. Didn't stop, didn't need to. Made incredible time.",
      "Junk drawer, behind {item}. If it's not there, it's in the garage. If it's not there, it never existed and you dreamed it.",
      "About {number} miles past the last rest stop. You should've gone when we stopped. I said that. I said it out loud."
    ],
    who: [
      "{Relative}. It's always {relative}. Ask {relative} and watch them deny it, which is how you know.",
      "Same person who keeps touching the thermostat. I have a list. The list has one name on it, and I'm not saying whose.",
      "Somebody who never had a paper route. You can just tell. It's in the handshake.",
      "Some guy I bowled with in {year}. Terrible bowler, fantastic at {topic}. Nobody knows what happened to him, and I choose to believe he's fine."
    ],
    yesno: [
      "No. Also, absolutely not. Also, ask your mother, so she can say no and we're all on the same page.",
      "We'll see. You know what 'we'll see' means. It means I've already seen, and the answer is no.",
      "In this economy? Buddy, in this economy I'm rationing ketchup.",
      "Yes, right after you {chore}, wash the car, and write a heartfelt apology to the lawn.",
      "Did I have that when I was your age? No. Did I turn out fine? Don't answer that."
    ],
    other: [
      "That reminds me of the time I fixed a toaster with {item}. Nobody asked me to. Nobody's used the toaster since. Anyway, the answer is hard work.",
      "I'm going to need you to rephrase that as a question about lawn care, because that's the section of my brain that's currently open.",
      "{Topic}? Sounds like something that costs money. Turn off the lights on your way out of this conversation.",
      "The answer's in the manual. The manual's in the garage. The garage is full. So the answer is 'no,' probably."
    ]
  },

  // Canned answers for the classics. Each regex is tested against the
  // lowercase question and the first match wins, before any topic matching.
  specials: [
    { match: /are we there yet/, answers: [
      "No. And every time you ask, it's ten more minutes. That's not a rule, that's physics, and I don't make the physics.",
      "We'll get there when we get there. I've said this since {year}, and I've never been wrong, because it's unfalsifiable, which is my favorite kind of right."
    ] },
    { match: /\bhungry\b|what'?s for dinner|whats for dinner|can we (get|order) (pizza|takeout|food)/, answers: [
      "Hi Hungry, I'm Dad. Dinner is whatever's on the grill, the grill is whatever I found in the freezer, and the freezer is a mystery even to me.",
      "We have food at home. It's an entire drawer of condiments and a ham from {year}. That's a meal, if you have a vision."
    ] },
    { match: /(can|could) i (have|get|borrow) (some |any )?(money|cash|\$)|lend me|give me (some )?money|allowance/, answers: [
      "Money? Sure. It's in the backyard, under the leaves. Rake them up and you'll find it. It's called a job. I've been hiding it there since {year}.",
      "You get an allowance: you're allowed to live here, eat here, and use my Wi-Fi. Frankly, you're over budget."
    ] },
    { match: /(can|could) i (borrow|take|use|have) the (car|truck|keys)/, answers: [
      "The car? Have you seen the price of gas? You can borrow the lawn mower. It needs to go around the yard a few times anyway, and it doesn't have speakers to blow out."
    ] },
    { match: /where('?s| is| are) (the|my) (remote|keys|phone|charger)/, answers: [
      "Wherever you left it. Things don't just walk away. Except my {tool}, which you also had last, and which I'm also still waiting on."
    ] },
    { match: /(can|could) i (stay up|go out|go to|sleep over|have a sleepover)/, answers: [
      "We'll see. Which, as you know, means no. Ask your mother, which also means no, but with a longer story attached."
    ] },
    { match: /i'?m bored|im bored|nothing to do|what (should|can) i do/, answers: [
      "Bored? I've got {small} things you can do: the gutters, the garage, the lawn, and that's just what I can see from this chair.",
      "Only boring people get bored. Interesting people {chore}. I read that on a mug and I've built a personality around it."
    ] },
    { match: /thermostat|turn (up|on|down) the (heat|ac|air|heater)|it'?s (too )?(cold|hot) in here/, answers: [
      "The thermostat stays at 68. Cold? Sweater. Hot? Less sweater. That's the system. The system works, and the system does not take questions.",
      "Nobody touches the thermostat. Not you, not your mother, not {relative}, not the fire department. I have it memorized to the degree, and I check it like a pulse."
    ] },
    { match: /wi-?fi password|wifi/, answers: [
      "The Wi-Fi password is on a Post-it under the router, where it's been since {year}. Also, go outside. The outside doesn't need a password. Yet."
    ] },
    { match: /(are you|is this) (a |an )?(robot|ai|computer|real|human|bot)|who are you|what are you/, answers: [
      "I'm Dad. I'm a real person who is definitely not a computer program, and if I were, I'd be one that runs on cash. Now hand me the {tool}."
    ] },
    { match: /favorite (kid|child|son|daughter)/, answers: [
      "I don't have a favorite. The dog, maybe. The dog never asks for money, and when the dog stares at me, it's out of respect."
    ] },
    { match: /meaning of life|why are we here|purpose of life/, answers: [
      "The meaning of life is a paid-off house, a full tank of gas, and a lawn the neighbors resent. That's it. That's the whole thing. Philosophers just don't own lawns."
    ] },
    { match: /(can|could) (i|we) (have|get|adopt) a (dog|cat|puppy|kitten|pet|hamster|bunny|rabbit|snake)/, answers: [
      "A pet? Who's going to feed it? Walk it? Pay for it? That's right: me. So the answer is 'we'll see,' which means no, which means yes in six months, and I'll name it, and it'll love me most."
    ] },
    { match: /(help|do) (me with )?my homework|do my homework/, answers: [
      "I'll help with your homework the same way my dad helped me: by asking why it isn't done yet, from another room, over the sound of a game."
    ] },
    { match: /tell me a joke|know any jokes|say something funny/, answers: [
      "I don't tell jokes. I tell facts that happen to be hilarious. Why did the scarecrow win an award? He was outstanding in his field. That's not a joke, that's agriculture."
    ] },
    { match: /love you|thank(s| you),? dad/, answers: [
      "Love you too, kiddo. Now go {chore}. Love is a verb, and the verb is 'rake.'"
    ] },
    { match: /^(hi|hello|hey|yo|sup)( dad)?[!.?]*$/, answers: [
      "Hey. Did you turn off the lights upstairs? No? Then we're not saying hello yet. Hello is earned."
    ] }
  ],

  topics: [
    {
      name: "money",
      keywords: ["money", "cost", "price", "rich", "buy", "pay", "bank", "dollar", "cash", "expensive", "cheap", "invest", "budget", "save", "saving", "savings", "loan", "debt", "credit", "rent", "afford", "mortgage"],
      answers: [
        "Money doesn't grow on trees. It grows on a paper route at 5 a.m., and mysteriously, nobody in this house has ever found one.",
        "You want to save money? Turn off the lights. That's it. That's the whole strategy. I've run it since {year} and we still have a house, so.",
        "A credit card is a loan from your future self, and your future self is a guy eating cereal for dinner in a dark apartment. Dark because the lights are off. To save money.",
        "In {year}, {topic} cost {price}. Now it costs {price} a month, forever, and they email you about it."
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
        "Walk in, look them in the eye, give a firm handshake, and ask for the manager. This worked in {year}, and I refuse to hear that it doesn't anymore.",
        "Nobody wants to work anymore. I said that from the recliner. I heard it. I'm keeping it.",
        "Show up 15 minutes early. On time is late. Late is fired. Early is, apparently, 'weird,' according to your generation.",
        "Learn a trade. Nobody has ever outsourced the guy who can fix a water heater at 11 p.m. on a Sunday. That guy owns a boat."
      ],
      realTips: [
        "Tailor your resume to each job posting and prepare a few specific examples of your achievements for interviews.",
        "Before asking for a raise, research typical pay for your role and area, and list the results you've delivered."
      ]
    },
    {
      name: "food",
      keywords: ["food", "eat", "pizza", "burger", "cook", "dinner", "lunch", "breakfast", "snack", "grill", "bbq", "steak", "cheese", "taco", "sandwich", "coffee", "restaurant", "takeout", "delivery"],
      answers: [
        "We have food at home. It's an entire drawer of condiments and a ham from {year}. That's a meal, if you have a vision.",
        "Everything goes on the grill. Soup? Grill. Cereal? Grill. Your attitude? Grill.",
        "In {year}, dinner out cost {price} and came with a handshake from the owner. Now it's {big} dollars and a tablet that asks how much I'd like to tip myself for ordering."
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
        "Have you tried turning it off and on again? No, the whole house. At the breaker. That's how I fixed the toaster, the microwave, and, briefly, the neighbor's.",
        "You don't need {topic}. You need a library card, fresh air, and to stop looking at me like I'm a router.",
        "The only cloud I trust is the one that waters my lawn, and even that one's been unreliable since {year}.",
        "Another subscription. Wonderful. Soon they'll charge monthly for the sun, and I'll pay it, because your mother likes the sun."
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
        "That noise is normal. All noises are normal until the car stops, and then the noise was a 'warning sign' and somehow that's my fault.",
        "Change the oil every 3,000 miles, whether it needs it or not. The car doesn't know what it needs. I know what it needs. It needs oil, and to be quiet.",
        "Back in my day, cars didn't talk to you. They broke down with dignity, on the shoulder, in silence, like men.",
        "We'll take the shortcut. It adds forty minutes, but gas is {small} cents cheaper out there, and I'll be honest, I want to see the silo."
      ],
      realTips: [
        "Your owner's manual lists the right oil change interval. Many modern cars go 5,000 to 10,000 miles between changes.",
        "Check tire pressure monthly using the number on the sticker inside the driver's door, not the number on the tire."
      ]
    },
    {
      name: "home",
      keywords: ["house", "home", "fix", "repair", "lawn", "garden", "paint", "leak", "toilet", "sink", "roof", "diy", "clean", "chores", "chore", "room"],
      answers: [
        "Why call a guy? You ARE the guy. Go get the {tool}. Yes, the good one. No, I don't know where it is. That's part of the process.",
        "Every problem in a house is fixable with duct tape, WD-40, or turning off the lights so you can't see it.",
        "Clean your room. Then clean it again. Then we'll talk about {topic}, and by 'talk' I mean I'll say no in a new and interesting way."
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
        "Walk it off. I've been walking off a knee injury since {year}, and I'll have you know the knee is now more of a suggestion.",
        "Drink a glass of water, go to bed at 9, and get up at 5, like a person with a job and no dreams.",
        "Rub some dirt on it. That's Dad medicine. Real medicine is below, because your mother made me put it there."
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
        "In my day we walked to school uphill both ways, in the snow, in July, and we liked it, because the alternative was talking to our fathers.",
        "{Topic} won't matter in real life. Backing up a trailer will. Balancing a checkbook will. Knowing which neighbor to trust with your ladder will.",
        "Study hard, learn a trade, and never trust a calculator you didn't pay cash for."
      ],
      realTips: [
        "Short study sessions spread over several days, plus practice tests, usually beat one long cram session."
      ]
    },
    {
      name: "relationships",
      keywords: ["date", "dating", "girlfriend", "boyfriend", "love", "marry", "marriage", "crush", "relationship", "wedding", "friend", "friends"],
      answers: [
        "When I met your mother, I wrote her a letter. With a pen. On paper. Then I bought her a milkshake for {price}, and she said yes, probably because of the milkshake.",
        "Bring them home. If {relative} approves, fine. If the dog approves, we'll talk. If I approve, check my pulse.",
        "Be polite, hold the door, be home by 9. That's the whole rulebook. It hasn't changed since {year}, and neither has my curfew. Ask your mother."
      ],
      realTips: [
        "Healthy relationships rest on respect, honesty and clear communication. Talking things through beats guessing."
      ]
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "snow", "hot", "cold", "storm", "cloud", "wind", "temperature", "hurricane", "tornado"],
      answers: [
        "The thermostat stays at 68. Cold? Sweater. Hot? Less sweater. That's the system. The system has never failed, only the people in it.",
        "My knee says {topic} is coming in {small} hours. My knee has a better record than the weather channel, and it doesn't ask me to subscribe.",
        "It's not the heat, it's the humidity. It's also the heat. It's mostly that someone left the door open."
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
        "We are not getting {topic}. Who's going to feed it? Walk it? Pay for it? That's right: me. Which means we're getting it, and I'm going to love it, and I resent that.",
        "Squirrels in a costume. That's all any animal is. And the squirrels are winning. They've had my bird feeder since {year}.",
        "Animals can smell fear. They can also smell hot dogs, so I carry hot dogs, and now the animals think I'm a god."
      ],
      realTips: [
        "Before getting a pet, research its lifespan, daily care needs and typical yearly vet costs."
      ]
    },
    {
      name: "sports",
      keywords: ["sports", "football", "baseball", "basketball", "soccer", "hockey", "golf", "team", "score", "coach", "playoffs", "nfl", "nba", "mlb", "olympics", "fishing", "bowling", "gym"],
      answers: [
        "The ref is blind. This is the answer to every sports question, and if you ask a follow-up, the ref is also on the take.",
        "In {year} we played {topic} in the dirt with a ball we found. We were grateful. We had tetanus. We were grateful for that too.",
        "I could've gone pro in {topic}. Bad knee. Also never tried out. Also it was mostly the knee."
      ],
      realTips: [
        "Warm up before playing and stay hydrated. Most sports injuries come from cold muscles and overuse."
      ]
    },
    {
      name: "music",
      keywords: ["music", "song", "songs", "band", "concert", "guitar", "piano", "drums", "album", "radio", "singer", "rap", "playlist", "spotify", "headphones"],
      answers: [
        "Real music ended in {year}. Everything since is noise with a subscription and a guy whispering about his feelings.",
        "Turn that down. Now turn it off. Now listen: that's the sound of a lawn being mowed. Number one hit, every summer, since {year}.",
        "I saw {relative}'s band at the county fair once. Tickets were {price}. They were terrible. Greatest night of my life. I don't see the connection either."
      ],
      realTips: [
        "Keep headphone volume under about 60% and take breaks. Hearing damage from loud music adds up over time."
      ]
    },
    {
      name: "movies",
      keywords: ["movie", "movies", "film", "show", "shows", "netflix", "series", "episode", "watch", "theater", "cinema", "actor", "actress", "cartoon", "anime", "youtube"],
      answers: [
        "We're not paying {price} for a movie ticket. We have a VCR at home, and a tape labeled DO NOT RECORD OVER that nobody has dared to check.",
        "The best movie ever made came out in {year}. I fell asleep halfway through. That's how you know it was relaxing, which is what art is for.",
        "Pause it. PAUSE IT. Who's that guy? Is he the one from the other thing? No, don't tell me. Okay, tell me. Okay, unpause it. Wait, who's that?"
      ],
      realTips: [
        "Before adding another streaming service, check whether the show is on one you already pay for, and cancel any you haven't opened in a month."
      ]
    },
    {
      name: "travel",
      keywords: ["travel", "trip", "vacation", "flight", "flights", "fly", "airport", "hotel", "beach", "camping", "cruise", "passport", "roadtrip", "disney"],
      answers: [
        "We're leaving at 4 a.m. to beat the traffic. There's no traffic at 4 a.m. That's the whole point. Get in the car.",
        "Vacation? We have a backyard. It has a hose. That's a water park with no lines, and I'm the lifeguard, and I'm on break.",
        "The best hotel is a tent, and the best restaurant is a cooler in the trunk. Sandwiches are {price} each, payable to me, and I don't take cards."
      ],
      realTips: [
        "Book flights a few weeks to a couple of months ahead, check your passport's expiry date, and keep photos of your documents on your phone."
      ]
    },
    {
      name: "holidays",
      keywords: ["christmas", "thanksgiving", "birthday", "halloween", "holiday", "holidays", "gift", "gifts", "present", "presents", "easter", "party", "fireworks", "santa"],
      answers: [
        "The best gift is a savings bond. The second best is socks. The third best is the memory of a father who gave you a savings bond and socks.",
        "The lights go up after Thanksgiving and come down when I feel like it. This year I'm feeling like April, and the HOA can write me another letter.",
        "A birthday party costs {price} if you do it right: cake, backyard, and {relative} running the grill and telling the story about {year} again."
      ],
      realTips: [
        "Set a gift budget before the season starts and stick to it. Homemade gifts and shared experiences are often appreciated more than expensive items."
      ]
    },
    {
      name: "shopping",
      keywords: ["shoes", "clothes", "clothing", "shirt", "jeans", "fashion", "brand", "shopping", "mall", "amazon", "order", "sneakers", "outfit", "haircut", "makeup"],
      answers: [
        "New {topic}? What's wrong with the ones from {year}? They've still got some life in them, and by 'life' I mean I've decided they do.",
        "Brand names are a tax on people who can't sew a patch. I can sew a patch. Badly. But it's free, and it's a conversation starter.",
        "The mall is where money goes to die. We're going to the hardware store instead. You can look at the nails. Some of them are galvanized. Get excited."
      ],
      realTips: [
        "Wait 24 hours before buying anything you didn't plan to buy. Most impulse purchases stop looking necessary by the next day."
      ]
    },
    {
      name: "kids",
      keywords: ["baby", "kid", "kids", "child", "children", "teenager", "teen", "toddler", "parent", "parenting", "curfew", "bedtime", "grounded"],
      answers: [
        "Bedtime is 8:30. Was 8:30 in {year}, is 8:30 now. The clock doesn't care what your friends do, and frankly, neither do I.",
        "When I was a kid we didn't have {topic}. We had a stick. We were grateful. We named the stick. I still think about that stick.",
        "Grounded means grounded. No phone, no friends, no {topic}. You may have the encyclopedia. Volume G. Read about gratitude."
      ],
      realTips: [
        "Consistent routines, clear expectations and enough sleep help kids of every age. For concerns about development or behavior, a pediatrician is a good first call."
      ]
    },
    {
      name: "space",
      keywords: ["space", "moon", "sun", "star", "stars", "planet", "mars", "galaxy", "universe", "astronaut", "rocket", "alien", "sky"],
      answers: [
        "The moon is the sun's night light. It's on a timer. I installed it in {year}. No permit.",
        "They put a man on the moon in 1969 with less computer than your calculator, and you can't find your other shoe. It's by the door. It's always by the door.",
        "Space is cold because somebody left the door open. I've said this about the kitchen, and I'll say it about the universe."
      ]
    },
    {
      name: "science",
      keywords: ["science", "physics", "chemistry", "gravity", "atom", "energy", "light", "electricity", "magnet", "volcano", "ocean", "water", "fire"],
      answers: [
        "Gravity was invented in {year} to keep the lawn chairs from floating away. Before that, we tied them down. Different times.",
        "{Topic} works on the same principle as a garage door opener: point it, press it, and if nothing happens, blame the batteries.",
        "Water is wet because it's scared. You would be too, if everyone kept boiling you."
      ]
    }
  ],

  closers: [
    "And that's the truth, and the truth doesn't need a source.",
    "Now go {chore}. I'll know if you didn't, because I'll be at the window, arms crossed.",
    "Don't tell your mother I told you. Actually, tell her. Tell her I was right.",
    "You could look it up. On paper. At the library. But you won't, and that's on you.",
    "That's how we did it in {year}, and everyone turned out fine, except {relative}, and that's a different story.",
    "Any more questions? Great. Ask your mother. She loves that.",
    "Now put the phone down and go outside. The outside is free. It's the only thing left that is."
  ],

  signoffs: [
    "— Dad (unverified, unbothered)",
    "— Dad, from the recliner he paid cash for",
    "— Dad, who is not lost, just exploring, aggressively",
    "— Dad, Chief Grill Officer, self-appointed",
    "— Dad, sent from a flip phone, which is fine, thank you",
    "— Dad, who has read the headline and formed a complete opinion"
  ],

  lessons: [
    "Never pay someone to do something you can do badly yourself.",
    "A penny saved is a penny you'll find in the dryer in {year}.",
    "If it ain't broke, don't fix it. If it is broke, duct tape. If duct tape didn't work, it was never broke. It was a feature.",
    "Nobody ever went broke turning off a light. Nobody got rich either, but that's not the point. The point is the light.",
    "The early bird gets the worm. The earlier bird gets the good parking spot, which is better than a worm.",
    "If you can't pay cash for it, you can't afford it. If you can pay cash for it, you still shouldn't. That's how you end up with a boat.",
    "A firm handshake solves {number}% of life's problems. The rest is WD-40.",
    "A subscription is rent on something you'll forget you're paying for until your mother reads the statement out loud.",
    "Buy it once, buy it right, and keep the receipt in a shoebox until the sun burns out.",
    "If you've got time to lean, you've got time to clean. If you've got time to argue, you've got time to clean twice.",
    "Respect your elders. Especially the one holding the car keys and the Wi-Fi password."
  ],

  facts: [
    "{number}% of statistics are made up on the spot. This one was made up in advance, so it's more reliable.",
    "The first {topic} was discovered in {place} by {relative}, who did not need an app for it and won't stop saying so.",
    "In {year}, {topic} cost {price}. Dad has not emotionally accepted any price since.",
    "Scientists agree {topic} tastes better grilled. 'Scientists' here means Dad, and 'agree' means he said it twice.",
    "Turning off one light saves enough money to buy a new light in {number} years. This is the closest Dad has come to investing.",
    "Nobody has ever regretted bringing an extra jacket. Many have regretted not bringing one. Dad has a list.",
    "Nobody needed {topic} in {year}, and everyone turned out fine, except the ones who didn't, and they're not here to argue."
  ],

  // Satire headlines shown under every answer. Bee-style: deadpan, local, absurd.
  newsHeadlines: [
    { kicker: "Local", text: "Local Dad Weighs In On {TopicTitle}; Family Regrets Asking" },
    { kicker: "Report", text: "Report: {TopicTitle} 'Not Like It Used To Be,' Says Man Who Hasn't Checked Since {year}" },
    { kicker: "Breaking", text: "Area Father Solves {TopicTitle} With Duct Tape, Declines To Elaborate" },
    { kicker: "Nation", text: "Nation's Dads Announce They Are Not Made Of Money, Cite {TopicTitle}" },
    { kicker: "Local", text: "Dad Explains {TopicTitle} For 45 Minutes, Answer Turns Out To Be 'Gas Prices'" },
    { kicker: "Study", text: "Study: {number}% Of Conversations About {TopicTitle} End With 'Ask Your Mother'" },
    { kicker: "Report", text: "Man Who Has Never Read Instructions Extremely Confident About {TopicTitle}" },
    { kicker: "Breaking", text: "Thermostat Unmoved By {TopicTitle}, Remains At 68" },
    { kicker: "Breaking", text: "Dad Has 'A Guy' For {TopicTitle}; Guy Cannot Be Reached" },
    { kicker: "Opinion", text: "{TopicTitle} Was Free In {year} And I'm Not Going To Stop Bringing It Up" },
    { kicker: "Local", text: "Dad Fixes {TopicTitle} By Unplugging It, Blowing On It, And Threatening It" },
    { kicker: "Report", text: "'We'll See' Deployed On {TopicTitle}; Sources Confirm Nobody Will See" }
  ],

  alsoAsk: [
    "Is {topic} why the thermostat is set to 68?",
    "Can {topic} be fixed with duct tape?",
    "What would {relative} say about {topic}?",
    "Why does {topic} cost more than it did in {year}?",
    "Is {topic} a subscription now?",
    "Do I need a job before I'm allowed to ask about {topic}?",
    "Are we there yet?"
  ],

  fakeSites: [
    { url: "wikipedad.org › wiki › {topic}", title: "{TopicTitle} — Wikipedad, the free-ish encyclopedia", snippet: "{Topic} is a thing Dad knows all about. Citation needed. Citation is in the garage, behind the paint cans, under the thing." },
    { url: "dadoverflow.com › questions › {number}", title: "How do I explain {TopicTitle} to my kids? [closed as duplicate of 'Ask your mother']", snippet: "Top answer (4,812 votes): turn it off and on again. Second answer: turn the whole house off and on again." },
    { url: "webdad.com › symptoms › {topic}", title: "{TopicTitle}: Causes, Symptoms & Walking It Off", snippet: "Common causes include not wearing a jacket, sitting too close to the TV, and making that face until it stayed that way." },
    { url: "garagegazette.news › {year} › {topic}", title: "Local Dad Solves {TopicTitle} Using Only {Item}, Refuses To Explain How", snippet: "Neighbors were stunned. 'He didn't even read the instructions,' said {relative}. 'He never does. That's his whole thing.'" },
    { url: "dadtube.tv › watch › {topic}", title: "Dad Explains {TopicTitle} (4 Hour Video, No Chapters, Camera Pointed At Ceiling)", snippet: "Skip to 3:47:12 for the answer. The first 3 hours are about a riding mower he almost bought in {year}." },
    { url: "pennypincher.almanac › {topic}", title: "{TopicTitle}: Is It Worth The Money? A 40-Page Investigation That Concludes 'No'", snippet: "We ran the numbers. You could just stay home. Also, turn off that light. We can see it from here." },
    { url: "backinmyday.quarterly › {year}", title: "{TopicTitle} Was Better In {year}, Study Of One Man On A Porch Finds", snippet: "Sample size: one. Confidence: total. Peer review: the neighbor, who nodded." },
    { url: "grillalmanac.com › {topic}", title: "Can You Grill {TopicTitle}? (Yes. Stop Asking. Hand Me The Tongs.)", snippet: "Medium heat, {number} minutes a side, and never let anyone else touch the tongs." },
    { url: "thereclinerreport.com › {topic}", title: "Area Dad Weighs In On {TopicTitle}, Cites 'Common Sense' As Source", snippet: "Asked for a second source, he cited 'also common sense' and turned the game back up." }
  ],

  // The Daily Dad: satire news articles for the home page. Every one is fiction.
  // Datelines are real places, the people are not. Keep the joke on Dad.
  news: [
    {
      id: "light-off",
      kicker: "Local",
      headline: "Local Dad Achieves Enlightenment After Turning Off Light In Empty Room",
      dateline: "TOLEDO, OH",
      body: [
        "An area father reportedly reached a state of total inner peace Tuesday after discovering a light on in a room nobody was using, and turning it off. 'I felt the electric bill go down. Physically. In my chest,' he told reporters from the doorway of the room, which he has since declared 'closed for the season.'",
        "Witnesses say he stood in the dark for several minutes, nodding. Family members confirm he has since checked the room {small} times to make sure the light 'stayed off,' each time announcing the result to nobody."
      ],
      quote: "'We're not made of money,' he added, unprompted, to a passing dog."
    },
    {
      id: "not-made-of-money",
      kicker: "Nation",
      headline: "Nation's Dads Confirm They Are Not Made Of Money, Would Like That On The Record",
      dateline: "NATIONWIDE",
      body: [
        "In a joint statement released from {big} million recliners, the nation's fathers confirmed Monday that they are not, in fact, made of money, and would like this entered into the permanent record. The statement, delivered mostly through sighs, follows a survey in which {number}% of children said money 'just comes out of the wall.'",
        "'It does come out of the wall,' one father admitted. 'But I put it in there. With a job. That I go to. Every day. While you sleep until noon.'"
      ],
      quote: "The statement concludes with a request that everyone close the door, because 'we're not heating the whole neighborhood, either.'"
    },
    {
      id: "thermostat-30",
      kicker: "Milestone",
      headline: "Thermostat Set To 68 Marks 30th Consecutive Year, Family Holds Ceremony Nobody Attends",
      dateline: "BOISE, ID",
      body: [
        "A residential thermostat set to exactly 68 degrees in {year} marked its 30th consecutive year at that temperature this week, surviving four children, two heat waves, and one attempt by {relative} to 'just bump it a little.' The attempt was detected within four seconds.",
        "'People ask how I knew,' said the homeowner, who was in another state at the time. 'I felt it. Like a disturbance. Like a tax.' The thermostat now wears a small laminated sign reading DO NOT, which the family says is 'the whole sentence.'"
      ],
      quote: "Asked about the future, he said the number would stay at 68 'until the sun goes out, at which point we'll discuss 69.'"
    },
    {
      id: "new-state",
      kicker: "Breaking",
      headline: "Man Who Refused To Ask For Directions Discovers New State",
      dateline: "SOMEWHERE NEAR NEBRASKA",
      body: [
        "A father of three who declined to ask for directions during a routine trip to {place} has discovered a previously unknown state, officials confirmed Thursday. The state, which he has named Almost There, is described as 'mostly cornfields and a rest stop we're not stopping at.'",
        "'I knew where I was the whole time,' he told his family, who had been in the car for {number} hours and had begun drafting a constitution. 'This is a shortcut. It's just a long one.'"
      ],
      quote: "The family made 'great time,' according to the only person who was measuring."
    },
    {
      id: "wifi-threat",
      kicker: "Technology",
      headline: "Local Dad Fixes Wi-Fi By Unplugging It, Blowing On It, And Threatening It",
      dateline: "CHATTANOOGA, TN",
      body: [
        "A neighborhood father restored his family's internet connection Sunday using a three-step process he describes as 'the only IT that works': unplugging the router, blowing on it, and telling it, in a low voice, that he's paying for this.",
        "'The blowing does nothing,' admitted a technician who asked not to be named. 'But the threat? We've seen results. We can't explain it.' The router has since been placed on thin ice, a location the family says is 'next to the toaster.'"
      ],
      quote: "'Now go outside,' he added, to a room that had already emptied."
    },
    {
      id: "the-tongs",
      kicker: "Report",
      headline: "Grill Has Never Been Touched By Anyone Else; Sources Say Nobody Has Tried",
      dateline: "{place}",
      body: [
        "A backyard grill has never been operated by anyone other than the man who owns it, according to a report released by his family, who add that 'nobody has ever tried, or wanted to, or been allowed within four feet of the tongs.'",
        "The owner, who refers to the tongs as 'the tongs' and to himself as 'grill-side,' insists his technique cannot be taught, only 'witnessed.' Guests describe the technique as 'standing there' and 'pressing the meat for some reason.'"
      ],
      quote: "'Medium heat, {small} minutes a side, and never let anyone else touch the tongs,' he said, to the meat."
    },
    {
      id: "well-see",
      kicker: "Study",
      headline: "Study Finds 'We'll See' Has Meant 'No' Continuously Since {year}",
      dateline: "ANN ARBOR, MI",
      body: [
        "A landmark study published this week confirms what children have long suspected: the phrase 'we'll see' has meant 'no' continuously since {year}, with one brief exception researchers describe as 'a fluke involving a puppy.'",
        "'The data's clear,' said the lead researcher, a father of four. 'Nobody has ever seen. Nobody was ever going to see. The seeing is not the point.' The study also found that 'ask your mother' means 'no, but slower,' and that 'maybe' is 'no, in a hat.'"
      ],
      quote: "Asked whether the study would change anything, the researcher said, 'We'll see.'"
    },
    {
      id: "aged-coffee",
      kicker: "Local",
      headline: "Area Dad Reheats Same Cup Of Coffee For Ninth Time, Calls It 'Aged'",
      dateline: "DULUTH, MN",
      body: [
        "A father who poured a cup of coffee at 6 a.m. reheated it for the ninth time at 4 p.m. Wednesday, describing the beverage as 'aged,' 'complex,' and 'fine, it's fine, leave it.' He has still not taken a sip.",
        "Family members report the coffee has traveled between the microwave and every flat surface in the house and is now considered 'part of the counter.' Attempts to pour it out have been met with 'I was drinking that,' delivered from another room."
      ],
      quote: "'Coffee doesn't go bad,' he said. 'It goes cold. Cold is a choice.'"
    },
    {
      id: "a-guy",
      kicker: "Investigation",
      headline: "Local Man Has 'A Guy' For Everything, Has Never Once Reached Him",
      dateline: "TULSA, OK",
      body: [
        "A suburban father who claims to have 'a guy' for plumbing, roofing, tires, taxes, and 'that thing with the fence' has never successfully reached the guy, according to a family investigation spanning {number} years.",
        "'He's a great guy,' the father said, scrolling past a contact saved only as GUY (FENCE?). 'Doesn't answer. Doesn't need to. He's that good.' The family has quietly hired a licensed professional, whom the father describes as 'basically my guy's guy.'"
      ],
      quote: "'I'll call him tomorrow,' he said, for the {big}th consecutive day."
    },
    {
      id: "beat-traffic",
      kicker: "Travel",
      headline: "Dad Announces Family Will Leave At 4 A.M. To Beat Traffic That Does Not Exist",
      dateline: "SPOKANE, WA",
      body: [
        "A father of three announced Friday that the family will depart for {place} at 4 a.m. Saturday to 'beat the traffic,' despite {small} independent reports that there is no traffic, has never been traffic, and that the destination is 40 minutes away.",
        "'You don't beat traffic by being in it,' he explained, laying out cargo shorts for the morning. 'You beat it by being asleep in a parking lot before it wakes up.' The family will arrive {small} hours before anything opens and 'walk around.'"
      ],
      quote: "'We made great time,' he is expected to say, to no one, at 4:41 a.m."
    },
    {
      id: "basically-done",
      kicker: "Home",
      headline: "Man Who Has Never Read Instructions Declares Shelf 'Basically Done'",
      dateline: "ALBANY, NY",
      body: [
        "A father assembling a bookshelf Sunday declared the project 'basically done' at the 90-minute mark, despite {small} leftover screws, one leftover shelf, and a diagram he describes as 'more of a suggestion.'",
        "'Instructions are for people who don't know what they're doing,' he said, beside a bookshelf leaning at an angle experts call 'expressive.' 'I've built things. I built you a treehouse.' The treehouse, sources confirm, was a plank."
      ],
      quote: "The leftover parts were placed in the junk drawer 'in case,' joining {big} other parts, also in case."
    },
    {
      id: "lawn-committee",
      kicker: "Community",
      headline: "Neighborhood Dads Form Committee On Neighbor's Lawn, Disband After Agreeing It's 'A Disgrace'",
      dateline: "MAPLE COURT",
      body: [
        "Six fathers convened Saturday morning at the end of a driveway to discuss the state of a neighbor's lawn, reaching unanimous agreement within 90 seconds that it is 'a disgrace' and 'not how we did it in {year}.'",
        "The meeting, conducted entirely with arms crossed, also covered gas prices, the humidity, and a truck one of them 'almost bought.' No action was taken, as none was ever the point."
      ],
      quote: "'Beautiful morning,' one said, staring at the lawn with open contempt. 'Just beautiful.'"
    },
    {
      id: "junk-drawer",
      kicker: "Discovery",
      headline: "Family Finds Battery From {year} In Junk Drawer, Dad Insists It's 'Probably Good'",
      dateline: "SCRANTON, PA",
      body: [
        "A routine search for tape uncovered a AA battery dating to {year} in a family junk drawer this week, along with a coupon for a restaurant that closed in {year}, three keys to nothing, and a screw everyone agrees 'goes to something.'",
        "'Don't throw that out,' the father said of every item, individually. The battery, he insists, is 'probably good,' a status it has held for {number} years without ever entering a device."
      ],
      quote: "The drawer was closed with a firm push and a hip, as tradition requires."
    },
    {
      id: "gas-prices",
      kicker: "Science",
      headline: "Dad Explains Why The Sky Is Blue In 45 Minutes; Answer Turns Out To Be Gas Prices",
      dateline: "FRESNO, CA",
      body: [
        "A father asked to explain why the sky is blue delivered a 45-minute response Tuesday that began with light scattering, moved through a story about a truck he almost bought in {year}, and concluded with gas prices, which he called 'the real reason for most things.'",
        "'He wasn't wrong,' said the child who asked, now {number} years old. 'He just wasn't answering.' Family members say every question posed to the father reaches gas prices within {small} minutes, a phenomenon they call 'the merge.'"
      ],
      quote: "'Anyway,' he concluded, 'that's why the sky is blue. Also, close the door.'"
    },
    {
      id: "waves-at-trucks",
      kicker: "Local",
      headline: "Local Father Waves At Every Truck, Insists He Knows Them",
      dateline: "{place}",
      body: [
        "A father has waved at every pickup truck that passed his house for {number} consecutive years, insisting each time that he 'knows that guy.' Family members estimate he knows fewer than 3% of the guys.",
        "'That's Earl,' he said Sunday, waving at a truck that was not Earl's, was not the color of Earl's, and was, by all accounts, a delivery van. 'Earl's got a new truck.'"
      ],
      quote: "Earl could not be reached for comment. Earl may not exist."
    },
    {
      id: "movie-curb",
      kicker: "Economy",
      headline: "Dad Sees Price Of Movie Tickets, Sits Down On Curb",
      dateline: "OMAHA, NE",
      body: [
        "A father was found sitting on a curb outside a movie theater Saturday after seeing the price of admission, which he described as 'more than my first car' and 'a crime, technically.'",
        "'In {year} it was {price},' he told a concerned employee, 'and they gave you a handshake.' The family saw the movie without him. He waited in the car, where he said it was 'the same thing, but free, with better seats.'"
      ],
      quote: "He later rated the parking lot 'four stars.'"
    }
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

  // Offered in the search box dropdown as you type.
  suggestedQuestions: [
    "Are we there yet?",
    "What's for dinner?",
    "Can I have some money?",
    "Can I borrow the car?",
    "Where's the remote?",
    "What's the wifi password?",
    "I'm bored",
    "Why is the thermostat set to 68?",
    "What's the meaning of life?",
    "Is a hot dog a sandwich?",
    "How do I change a tire?",
    "How do I fix a leaky faucet?",
    "How do I get a job?",
    "How much should I save each month?",
    "Should I buy a house?",
    "Should I go to college?",
    "Why is gas so expensive?",
    "How do I grill a steak?",
    "How do airplanes fly?",
    "Who invented the internet?",
    "Why do we have to go to bed?",
    "Can we get a dog?",
    "How do I ask a girl out?",
    "What should I get Mom for her birthday?",
    "Do I need a new phone?"
  ],

  // Shown on the home page. No {topic} here, since nobody has asked anything yet.
  homeFacts: [
    "Leaving a light on in an empty room costs exactly one million dollars. Dad did the math. Dad will not show the math.",
    "Duct tape holds the universe together. The other 4% is WD-40, and the rest is Dad saying 'it's fine.'",
    "A firm handshake burns more calories than the gym membership you've paid for since {year} and visited once.",
    "Dads can hear a car door left ajar from three counties away, but not a question asked from four feet.",
    "The good scissors have never once been put back. Dad has checked the records. Dad is the records.",
    "Every 'are we there yet?' adds ten minutes to the trip. That's not a rule, that's physics, and Dad doesn't make the physics.",
    "Dads don't get lost. They take unscheduled scenic routes and arrive furious at the scenery.",
    "Grilling adds three years to your life and eleven minutes to dinner. The tongs are not up for discussion.",
    "In {year}, a movie ticket cost {price} and the movie was better, according to a man who slept through it.",
    "The thermostat is not a toy. It's a family heirloom set to 68, and it will be passed down at 68.",
    "Cargo shorts have 8 pockets so Dad can carry every receipt since {year}, in case the store 'tries something.'",
    "Nobody has ever regretted bringing an extra jacket. Dad keeps a list of people who regretted not bringing one. It's laminated."
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
