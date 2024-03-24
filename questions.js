const questions = [
    {
        "id": 1,
        "type": "checkbox",
        "answers": [
            {
                "answer": "A destruktor lehet statikus",
                "is_correct": false
            },
            {
                "answer": "A destruktor lehet void típusú",
                "is_correct": false
            },
            {
                "answer": "A destruktor lehet konstans",
                "is_correct": false
            },
            {
                "answer": "A destruktor lehet virtuális",
                "is_correct": true
            },
            {
                "answer": "A destruktornak nincs paramétere",
                "is_correct": true
            },
            {
                "answer": "A destruktor lehet implicit vagy explicit",
                "is_correct": true
            }
        ]
    },
    {
        "id": 2,
        "type": "radio",
        "answers": [
            {
                "answer": "Igaz",
                "is_correct": true
            },
            {
                "answer": "Hamis",
                "is_correct": false
            }
        ]
    },
    {
        "id": 3,
        "type": "radio",
        "answers": [
            {
                "answer": "Igaz",
                "is_correct": false
            },
            {
                "answer": "Hamis",
                "is_correct": true
            }
        ]
    },
    {
        "id": 4,
        "type": "radio",
        "answers": [
            {
                "answer": "Igaz",
                "is_correct": true
            },
            {
                "answer": "Hamis",
                "is_correct": false
            }
        ]
    },
    {
        "id": 5,
        "type": "radio",
        "answers": [
            {
                "answer": "Igaz",
                "is_correct": false
            },
            {
                "answer": "Hamis",
                "is_correct": true
            }
        ]
    },
    {
        "id": 6,
        "type": "checkbox",
        "answers": [
            {
                "answer": "konstans konstruktor",
                "is_correct": false
            },
            {
                "answer": "egy vagy több paraméterrel hívható konstruktor",
                "is_correct": true
            },
            {
                "answer": "statikus konstruktor",
                "is_correct": false
            },
            {
                "answer": "értékadó konsruktor",
                "is_correct": false
            },
            {
                "answer": "paraméter nélkül hívható, vagy default konstruktor",
                "is_correct": true
            },
            {
                "answer": "virtuális konstruktor",
                "is_correct": false
            },
            {
                "answer": "funkcionális konstruktor",
                "is_correct": false
            },
            {
                "answer": "másoló konstruktor",
                "is_correct": true
            }
        ]
    },
    {
        "id": 7,
        "type": "radio",
        "answers": [
            {
                "answer": "B",
                "is_correct": true
            },
            {
                "answer": "A kódrészlet hibás pa változó nem kaphat értékül B objektumra mutató pointert",
                "is_correct": false
            },
            {
                "answer": "A",
                "is_correct": false
            }
        ]
    },
    {
        "id": 8,
        "type": "radio",
        "answers": [
            {
                "answer": "B osztály tartalmazza A-t",
                "is_correct": false
            },
            {
                "answer": "C osztály alaposztálya A-nak",
                "is_correct": false
            },
            {
                "answer": "A osztály tartalmazza D-t",
                "is_correct": false
            },
            {
                "answer": "A absztrakt osztály",
                "is_correct": true
            }
        ]
    },
    {
        id: 9,
        type: "radio",
        "answers": [
            {
                answer: "Egy osztály privát adatát közvetlenül csak a tagfüggvények és a barát függvények érhetik el.",
                is_correct: false //true
            },
            {
                answer: "Egy osztály privát adatát közvetlenül csak a tagfüggvények érhetik el.",
                is_correct: false
            },
            {
                answer: "Egy osztály privát adatát csak a leszármazott osztályok tagfüggvényei érhetik el.",
                is_correct: false
            },
            {
                answer: "Egy osztály privát adatát közvetlenül csak a tagfüggvény és a leszármazott osztályok tagfüggvényei érhetik el.",
                is_correct: false
            }
        ]
    },
    {
        "id": 10,
        "type": "radio",
        "answers": [
            {
                "answer": "Háromszor",
                "is_correct": false
            },
            {
                "answer": "A foo függvény szintaxisa hibás",
                "is_correct": false
            },
            {
                "answer": "A kód hibás, Hiányzik az #include <iostream> sor",
                "is_correct": false
            },
            {
                "answer": "Nem hívódik meg",
                "is_correct": true
            },
            {
                "answer": "Egyszer",
                "is_correct": false
            },
            {
                "answer": "Kétszer",
                "is_correct": false
            }
        ]
    },
    {
        "id": 11,
        "type": "radio",
        "answers": [
            {
                "answer": "Igaz",
                "is_correct": false
            },
            {
                "answer": "Hamis",
                "is_correct": true
            },
        ]
    },
    {
        "id": 12,
        "type": "radio",
        "answers": [
            {
                "answer": "Igaz",
                "is_correct": true
            },
            {
                "answer": "Hamis",
                "is_correct": false
            },
        ]
    },
    {
        id: 16,
        type: "radio",
        answers: [
            {
                answer: "Igaz",
                is_correct: true
            },
            {
                answer: "Hamis",
                is_correct: false
            }
        ]
    },
    {
        "id": 13,
        "type": "radio",
        "answers": [
            {
                "answer": "1",
                "is_correct": false
            },
            {
                "answer": "6740",
                "is_correct": true
            },
            {
                "answer": "Nem lehet eldönteni, fordítótól függ",
                "is_correct": false
            },
            {
                "answer": "Nem hívódik meg",
                "is_correct": false
            },
            {
                "answer": "6741",
                "is_correct": false
            },
            {
                "answer": "6739",
                "is_correct": false
            }
        ]
    },
    {
        "id": 14,
        "type": "radio",
        "answers": [
            {
                "answer": "A 4. sor hibás, mert inicializáló listán csak objektum szerepelhet. Az a adattag pedig nem objektum",
                "is_correct": false
            },
            {
                "answer": "Az 5. sor hibás, mert nem lehet referencia típusú konstans függvény.",
                "is_correct": false
            },
            {
                "answer": "A 5. sor hibás, konstans függvény nem módosíthatja az objektum állapotát",
                "is_correct": true
            },
            {
                "answer": "A 5. sor hibás, mert privát adat referenciáját nem lehet képezni",
                "is_correct": false
            }
        ]
    },
    {
        "id": 15,
        "type": "radio",
        "answers": [
            {
                "answer": "A osztály példányosítható.",
                "is_correct": false
            },
            {
                "answer": "B osztály tartalmazza A-t.",
                "is_correct": false
            },
            {
                "answer": "A osztály tartalmazza B-t.",
                "is_correct": false
            },
            {
                "answer": "C osztály alaposztálya A-nak.",
                "is_correct": false
            }
        ]
    }
]