/*
 * Ask Dad — the joke database.
 *
 * This is the easiest file to contribute to! Add your own lines to any list.
 * Placeholders that get filled in automatically:
 *   {topic}    the subject of the question ("the sky blue")
 *   {Topic}    same, capitalised
 *   {number}   a suspiciously specific number
 *   {year}     a year from Dad's glory days
 *   {place}    somewhere Dad has definitely been
 *   {relative} a relative who is always involved somehow
 *   {item}     something from the junk drawer
 *   {tool}     something from the garage
 *
 * Keep it family-friendly, keep it absurd, and never mock real people.
 */
window.AskDad = window.AskDad || {};

AskDad.data = {
  taglines: [
    "Confidently wrong since 1987.",
    "Searching the garage so you don't have to.",
    "Powered by cargo shorts and pure confidence.",
    "Organizing the world's information into a coffee can of screws.",
    "Ask me after the game.",
    "Answers so good you'll want to tell your mother."
  ],

  thinking: [
    "Putting on reading glasses...",
    "Consulting the owner's manual Dad never opened...",
    "Adjusting the thermostat first...",
    "Checking with {relative}...",
    "Looking for a flat surface to set this coffee down...",
    "Recalling something from {year}..."
  ],

  openers: [
    "Well, sport, here's the deal.",
    "Okay, kiddo, sit down.",
    "Great question. Terrible timing, but great question.",
    "Ah. I was hoping you'd ask that.",
    "Hand me that {tool} and I'll tell you.",
    "You know, back in {year}, we didn't need to ask that.",
    "Hi Curious, I'm Dad. Anyway...",
    "Let me turn down the radio.",
    "I read an article about this. Well, the headline."
  ],

  byQuestionType: {
    why: [
      "{Topic} happens because the government ran out of beige in {year}.",
      "The reason is simple: {topic} is load-bearing. Take it away and the whole house comes down.",
      "It's because of the humidity. Everything is because of the humidity.",
      "{Topic}? That's just physics trying to save a few bucks on its electric bill.",
      "Because nobody closed the door. Were you born in a barn? That's why."
    ],
    how: [
      "Easy. You just need {item}, some duct tape, and absolutely no instructions.",
      "Step one: tighten it. Step two: tighten it more. Step three: call {relative}.",
      "The trick with {topic} is to hit it firmly, but lovingly. Like a vending machine.",
      "You do it the way I did in {year}: poorly, but with enormous confidence.",
      "First you watch me do it. Then you watch me do it again. Then we go get ice cream."
    ],
    what: [
      "{Topic} is basically a sandwich. Most things are, if you think about it.",
      "{Topic} is what they called a 'fad' in {year}. Still waiting for it to blow over.",
      "That's a kind of lawn fungus. Don't touch it. Don't even look at it.",
      "{Topic} is the fancy word for {item}. They charge more when you say it like that.",
      "It's a type of tax. Everything turns out to be a type of tax."
    ],
    when: [
      "Right after we stop for gas. No, not that station. The one {number} miles up.",
      "When you're older. That's the answer for everything until you're {number}.",
      "In about five minutes. Dad minutes, which are roughly two hours.",
      "As soon as the game is over. There's overtime. There's always overtime."
    ],
    where: [
      "Wherever you left it. Did you check the junk drawer? Check it again.",
      "It's in {place}. I drove past it once. Didn't stop. Made great time though.",
      "Behind the paint cans in the garage, right next to {item}.",
      "It's about {number} miles past the last rest stop. We are not stopping."
    ],
    who: [
      "That was {relative}. It's always {relative}.",
      "Some guy I bowled with in {year}. Great guy. Terrible at bowling.",
      "Nobody knows. But I have a theory, and it involves the neighbor's leaf blower.",
      "The same person who keeps changing the thermostat. And I WILL find them."
    ],
    yesno: [
      "Absolutely not. Also, possibly yes. Ask your mother.",
      "Yes, but only on Tuesdays and only if the grill is already hot.",
      "In this economy? No.",
      "Short answer: yes. Long answer: yeeeeeessss.",
      "I'm not saying no. I'm saying 'we'll see', which also means no."
    ],
    other: [
      "Hmm. That reminds me of the time I fixed a toaster with {item}. Anyway, the answer is 7.",
      "I'm going to need you to rephrase that as a question about lawn care.",
      "{Topic}? Sounds expensive. Turn off the lights when you leave the room.",
      "The answer is in the manual. Dad threw away the manual in {year}."
    ]
  },

  topics: [
    {
      name: "food",
      keywords: ["food", "eat", "pizza", "burger", "cook", "dinner", "lunch", "breakfast", "snack", "hungry", "grill", "bbq", "steak", "cheese", "taco", "sandwich", "coffee"],
      answers: [
        "The secret is you cook {topic} on the grill. Everything goes on the grill. Soup? Grill.",
        "That's not food, that's a science experiment. Real food is a hot dog cooked at exactly {number} degrees.",
        "You can't eat {topic} on an empty stomach. Scientists have tried. They got full first."
      ]
    },
    {
      name: "money",
      keywords: ["money", "cost", "price", "rich", "buy", "pay", "bank", "dollar", "cash", "salary", "expensive", "cheap", "invest", "budget"],
      answers: [
        "Money doesn't grow on trees. It grows in the couch cushions, which is why I'm always down there.",
        "If you want to save money, turn off the lights. That's it. That's the whole economy.",
        "In {year}, {topic} cost a nickel and you got a free handshake with it."
      ]
    },
    {
      name: "weather",
      keywords: ["weather", "rain", "snow", "sun", "hot", "cold", "storm", "cloud", "wind", "temperature", "thermostat", "hurricane", "tornado"],
      answers: [
        "The weather is controlled by the thermostat in our hallway. Do NOT touch it.",
        "My knee says {topic} is coming in {number} hours. My knee has never been wrong. Except that one time.",
        "It's not the heat, it's the humidity. Also, it's the heat."
      ]
    },
    {
      name: "space",
      keywords: ["space", "moon", "sun", "star", "planet", "mars", "galaxy", "universe", "astronaut", "rocket", "alien", "nasa", "sky"],
      answers: [
        "The moon is just the sun's night light. It's on a timer. I installed it.",
        "{Topic}? That's about {number} miles away. We could drive there if you'd stop asking to use the bathroom.",
        "Space is cold because somebody left the door open. Probably {relative}."
      ]
    },
    {
      name: "tech",
      keywords: ["computer", "phone", "internet", "wifi", "app", "ai", "robot", "code", "program", "software", "laptop", "email", "password", "tv", "remote", "game"],
      answers: [
        "Have you tried unplugging {topic}, blowing on it, and plugging it back in? That's the whole IT department.",
        "The internet is kept in a big box in {place}. If it's slow, somebody's standing on the cable.",
        "I don't trust {topic}. It knows too much. Put some tape over its camera."
      ]
    },
    {
      name: "car",
      keywords: ["car", "truck", "drive", "engine", "gas", "oil", "tire", "road", "traffic", "mileage", "highway"],
      answers: [
        "That noise is normal. Turn the radio up and it goes away.",
        "You change {topic} every {number} miles, or whenever the check engine light gets bored.",
        "We could take a shortcut. It'll add forty minutes, but we'll see a very interesting silo."
      ]
    },
    {
      name: "animals",
      keywords: ["dog", "cat", "bird", "fish", "animal", "horse", "cow", "bear", "shark", "dinosaur", "pet", "squirrel", "snake", "bee"],
      answers: [
        "{Topic}? Those are basically squirrels in a costume. Most animals are.",
        "Animals can smell fear, but they can also smell hot dogs, so always carry hot dogs.",
        "We are not getting {topic}. Who's going to walk it? That's right. Me."
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
    },
    {
      name: "school",
      keywords: ["school", "homework", "math", "test", "teacher", "class", "grade", "study", "college", "history", "learn", "exam"],
      answers: [
        "When I was in school, we had to walk uphill both ways to learn {topic}. In the snow. In July.",
        "The answer is 42. If it's not 42, the question is wrong. Tell your teacher I said so.",
        "{Topic} won't matter in real life. Knowing how to back up a trailer will."
      ]
    },
    {
      name: "health",
      keywords: ["sick", "doctor", "health", "sleep", "tired", "headache", "exercise", "hurt", "cold", "flu", "diet", "workout"],
      answers: [
        "Walk it off. Dad's been walking off a knee injury since {year}.",
        "Drink a glass of water and take a nap. That fixes {number}% of all problems, including taxes.",
        "Rub some dirt on it. Actual medical advice: see a real doctor. Dad-medical advice: dirt."
      ]
    }
  ],

  closers: [
    "And that's the truth.",
    "You can look it up. Don't look it up.",
    "I didn't raise you to question science.",
    "Don't tell your mother I told you.",
    "Now go clean your room.",
    "Anyway, who wants to help me clean the gutters?",
    "Any more questions? Great. Ask your mother."
  ],

  signoffs: [
    "— Dad (verified expert, self-certified)",
    "— Dad, from the recliner",
    "— Dad, who is not lost, just exploring",
    "— Dad, Chief Grill Officer",
    "— Dad, sent from my flip phone"
  ],

  facts: [
    "{number}% of all statistics are made up on the spot, including this one.",
    "The first {topic} was discovered in {place} by {relative}.",
    "Scientists agree {topic} tastes better grilled.",
    "{Topic} was banned in {place} from {year} until someone asked nicely.",
    "If you stacked {number} lawn chairs, you could see {place} from the roof.",
    "Nobody has ever regretted bringing an extra jacket. Nobody."
  ],

  alsoAsk: [
    "Is {topic} why the thermostat is set to 68?",
    "Can you fix {topic} with duct tape?",
    "What would {relative} say about {topic}?",
    "Why does {topic} cost more than it did in {year}?",
    "Should I rake the leaves or ask about {topic} first?",
    "Are we there yet?"
  ],

  fakeSites: [
    { site: "Wikipedad", url: "wikipedad.org › wiki › {topic}", title: "{Topic} — Wikipedad, the free-ish encyclopedia", snippet: "{Topic} is a thing that Dad knows all about. Citation needed. Citation not provided. Citation is in the garage somewhere." },
    { site: "DadOverflow", url: "dadoverflow.com › questions › {number}", title: "How do I explain {topic} to my kids? [closed]", snippet: "Closed as duplicate of 'Ask your mother'. Top answer (4,812 votes): Just turn it off and on again." },
    { site: "WebDad", url: "webdad.com › symptoms › {topic}", title: "{Topic}: Causes, Symptoms & Walking It Off", snippet: "Common causes include not wearing a jacket, sitting too close to the TV, and making that face until it stayed that way." },
    { site: "The Garage Gazette", url: "garagegazette.news › {year} › {topic}", title: "Local Dad Solves {Topic} Using Only {Item}", snippet: "Neighbors were stunned. 'He didn't even read the instructions,' said {relative}. 'He never does.'" },
    { site: "DadTube", url: "dadtube.tv › watch › {topic}", title: "Dad Explains {Topic} (4 Hour Video, No Chapters)", snippet: "Skip to 3:47:12 for the actual answer. The first 3 hours are about a riding lawn mower he almost bought in {year}." },
    { site: "Cargo Shorts Monthly", url: "cargoshorts.monthly › features", title: "{number} Things About {Topic} That Fit In One Pocket", snippet: "Number 7 will shock you. Number 8 is a granola bar from {year}. Still good, probably." },
    { site: "The Almanac of Grilling", url: "grillalmanac.com › {topic}", title: "Can You Grill {Topic}? (Yes.)", snippet: "Yes. The answer is always yes. Medium heat, {number} minutes a side, and never let anyone else touch the tongs." }
  ],

  luckyQuestions: [
    "Why is the sky blue?",
    "How do airplanes stay up?",
    "Where do socks go in the dryer?",
    "Can I have a dog?",
    "What is the internet?",
    "Why do we have to go to school?",
    "When will we get there?",
    "Who invented homework?",
    "How much does a cloud weigh?",
    "Is cereal a soup?"
  ],

  places: ["Toledo", "the hardware store", "a Waffle House outside Tulsa", "Boise", "the second-best rest stop in Nebraska", "Canada, probably", "the county fair"],
  relatives: ["your Uncle Gary", "Grandpa", "your cousin Doug", "Aunt Linda", "the neighbor, Steve", "your great-uncle Walt"],
  items: ["a rubber band", "a spare key to nothing", "a coupon from {year}", "a single AA battery", "a mystery screw", "a takeout menu for a closed restaurant"],
  tools: ["socket wrench", "tape measure", "flashlight", "level", "good screwdriver", "pair of grill tongs"]
};
