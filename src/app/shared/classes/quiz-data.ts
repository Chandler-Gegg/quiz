class QuizData {
    details;
    questions;
    constructor() {
        this.details = {
            "id":5011,
            "type":"QUIZ",
            "title":"Comic Books: Fact or Fiction?",
            "description":"Take this Pop Culture True or False quiz at Encyclopedia Britannica to test your knowledge of Superman, Spider-Man, and other comic book heroes.",
            "url":"/quiz/comic-books-fact-or-fiction",
            "thumbnail":{
                "id":178408,
                "width":225,
                "height":120,
                "type":"RECTANGLE_THUMBNAIL",
                "credit":"© Malchev/Fotolia",
                "filePath":"https://media1.britannica.com/eb-media/08/178408-118-A0ACA0C5.jpg",
                "duration":0,
                "license":null,
                "description":"Photograph",
                "mediaType":"IMAGE",
                "altText":"Illustration of muscular man on purple building wearing cape. cartoon superhero comic book costume similar to superman action hero silhouette",
                "mediaId":0
            },
            "image":{
                "id":178408,
                "width":900,
                "height":675,
                "type":"FEATURE",
                "credit":"© Malchev/Fotolia",
                "filePath":"https://media1.britannica.com/eb-media/08/178408-131-68C3BF1E.jpg",
                "duration":0,
                "license":null,
                "description":"Photograph",
                "mediaType":"IMAGE",
                "altText":"Illustration of muscular man on purple building wearing cape. cartoon superhero comic book costume similar to superman action hero silhouette",
                "mediaId":0
            },
            "browserTitle":"Comic Books: Fact or Fiction Quiz",
            "introduction":"In <em>X-Men</em>, is Wolverine able to turn into a ball of fire? Is kryptonite a real element? Sort through the facts in this study of comic book superheroes.",
            "level":1,
            "keywords":[
                "britannica",
                " encyclopedia britannica",
                " quiz",
                " quizzes",
                " comic",
                " Superman",
                " Spider-Man",
                " Batman",
                " X-Men",
                " Clark Kent",
                " hero",
                " comic book",
                " superhero",
                " superhuman",
                " pop culture"
            ],
            "editorIds":null,
            "newQuiz":false,
            "numOfQuestions":6,
            "timer":true,
            "seconds":10,
            "sortTitle":"Comic Books: Fact or Fiction?",
            "quizType":"TRUE_FALSE",
            "date":20140812,
            "questions":null,
            "identifier":"5011"
        };
    
        this.questions = [
            {
                "type":"TRUE_FALSE",
                "level":1,
                "question":"In <em>X-Men</em>, Wolverine is able to turn into a ball of fire.",
                "answers":[
                    "Fact",
                    "Fiction"
                ],
                "correct":2,
                "explanation":"Wolverine has sharp claws and is very resilient."
            },
            {
                "type":"TRUE_FALSE",
                "level":3,
                "question":"Supermans high-school girlfriend was named Lana Lang.",
                "answers":[
                    "Fact",
                    "Fiction"
                ],
                "correct":1,
                "explanation":"Clark Kent was in love with Lana Lang. Then he went to Metropolis and fell in love with Lois Lane, the ace newspaper reporter."},
            {
                "type":"TRUE_FALSE",
                "level":1,
                "question":"Venom was an enemy of Spider-Mans.",
                "answers":[
                    "Fact",
                    "Fiction"
                ],
                "correct":1,
                "explanation":"Venom was one of many enemies Spider-Man faced."
            },
            {
                "type":"TRUE_FALSE",
                "level":3,
                "question":"In the comics, Superman can be killed only by a silver bullet.",
                "answers":[
                    "Fact",
                    "Fiction"
                ],
                "correct":2,
                "explanation":"Superman cannot be harmed by anything dangerous to ordinary humans. He can be weakened, however, by exposure to green kryptonite."
            },
            {
                "type":"TRUE_FALSE",
                "level":3,
                "question":"Kryptonite is a real element.",
                "answers":[
                    "Fact",
                    "Fiction"
                ],
                "correct":2,
                "explanation":"Kryptonite is an invention of the creators of the <em>Superman</em> cartoon strip. It first appeared in the 1940s."
            },
            {
                "type":"TRUE_FALSE",
                "level":1,
                "question":"Batman is a superhero but has no superpowers.",
                "answers":[
                    "Fact",
                    "Fiction"
                ],
                "correct":1,
                "explanation":"Although called a superhero, the American comic book character Batman has no superhuman powers. Under his cowl, he is merely a rich man who has devoted his life to fighting crime."
            }
         ]
        }
}