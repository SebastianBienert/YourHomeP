GET /_cat/indices?v

GET /offers/_search

GET /offers/_mapping

PUT /offers/_doc/1
{
    "id": "1",
    "title": "Grove street",
    "description": "Grove Street... home. At least it was before I fucked everything up.",
    "price": 10000,
    "email": "cj@gmail.com",
    "location": {
        "city": "Los Santos",
        "district": "GS",
        "voivodeship": "San Andreas",
        "houseNumber": "10",
        "apartmentNumber": "2"
    },
    "area": 50,
    "images": ["https://images.adsttc.com/media/images/58bc/4293/e58e/cecd/d000/016d/newsletter/FEATURED_IMAGE.jpg?1488732815",
    "https://cs2.gamemodding.com/images/6505f2f6339ba167540962d1d1c4c1ce9623e877dd94b4dcec46136c3beaf510.jpg"],
	"state": "Confirmed"
}

PUT /offers/_doc/2
{
    "id": "2",
    "title": "PWR C-16",
    "description": "Technopolis",
    "price": 14590000,
    "email": "sebastian.bienert96@gmail.com",
    "location": {
        "city": "Wroclaw",
        "district": "",
        "voivodeship": "dolnoslaskie",
        "houseNumber": "7",
        "apartmentNumber": ""
    },
    "area": 1510,
    "images": ["https://gfx.dlastudenta.pl/photos/uczelnie/technopolis_pwr.jpg",
    "https://www.wroclaw.pl/files/cmsdocuments/7613936/komora_3.jpg"],
	"state": "Confirmed"
}

DELETE /offers
PUT /offers
{
    "mappings": {
        "properties": {
            "id": {
                "type": "text"
            },
            "title": {
                "type": "text"
            },
            "description": {
                "type": "text"
            },
            "price": {
                "type": "scaled_float",
                "scaling_factor": 100
            },
            "creationDate": {
                "type": "text"
            },
            "email": {
                "type": "text"
            },
            "location": {
                "type": "nested",
                "properties": {
                    "city": {
                        "type": "text"
                    },
                    "district": {
                        "type": "text"
                    },
                    "voivodeship": {
                        "type": "text"
                    },
                    "houseNumber": {
                        "type": "text"
                    },
                    "apartmentNumber": {
                        "type": "text"
                    }
                }
            },
			"state": {
                "type": "text"
            }
        }
    }
}