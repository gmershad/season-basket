const getProductData = (imageUrl, startIndex, endIndex, pageSize, seasonId) => {
    const data = [
        {
            "ProductId": "P001",
            "CountryId": "C01",
            "Name": "Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apple.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Fibre", "Vitamin C", "Antioxidants", "Potassium"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 0,
                "LateApril": 8,
                "EarlyMay": 0,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P002",
            "CountryId": "C01",
            "Name": "Apricot",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apricot.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Fibre", "Vitamin C", "Iron", "Relieves Ashthma", "Relieves Constipation"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P003",
            "CountryId": "C01",
            "Name": "Avacado",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}avacado.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Vitamin K", "Gut Health", "Folate", "Healthy Pregnancy "],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P004",
            "CountryId": "C01",
            "Name": "Barberry",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}barberry.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Vitamin C", "Dental Health", "Antioxidants", "Acne", "Treats Diarrhea"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 6,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P005",
            "CountryId": "C01",
            "Name": "Black Currant",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}black_currant.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Treats Glaucoma", "Vitamin C", "Antioxidants"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 6,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 13,
                "LateJuly": 14,
                "EarlyAugust": 15,
                "LateAugust": 16,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P006",
            "CountryId": "C01",
            "Name": "Black Berries",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}blackberries.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Vitamin C", "Vitamin K", "Manganese", "Oral Health"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P007",
            "CountryId": "C01",
            "Name": "Blue Berry",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}blueberry.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Vitamin C", "Vitamin K", "Antioxidants"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 16,
                "EarlySeptember": 17,
                "LateSeptember": 18,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P008",
            "CountryId": "C01",
            "Name": "Cucumber",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cucumber.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Fibre", "Rich in Minerals", "Joint Pain", "Vitamin K"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P009",
            "CountryId": "C01",
            "Name": "Custard Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}custard_apple.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Fibre", "Anti-Oxidant", "Prevents Stomach Ulcer", "Facilitates Hormonal Balance", "Anemia",
                    "Promotes Collgen Development"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 15,
                "EarlySeptember": 16,
                "LateSeptember": 17,
                "EarlyOctober": 18,
                "LateOctober": 19,
                "EarlyNovember": 20,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P010",
            "CountryId": "C01",
            "Name": "Grapes",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}grapes.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Vitamin E", "Vitamin C", "Lung Support", "Migrane Relief", "Cures Asthama",
                    "Prevents Blood Clot", "Prevents Cavities", "Anti-Aging"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 15,
                "EarlySeptember": 16,
                "LateSeptember": 17,
                "EarlyOctober": 27,
                "LateOctober": 26,
                "EarlyNovember": 25,
                "LateNovember": 24,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P011",
            "CountryId": "C01",
            "Name": "Guava",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}guava.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Vitamin C", "Digdiabetes Managementestion", "Fights Flu", "Relieves Menstrual Cramps"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 13,
                "EarlyAugust": 14,
                "LateAugust": 15,
                "EarlySeptember": 16,
                "LateSeptember": 17,
                "EarlyOctober": 27,
                "LateOctober": 26,
                "EarlyNovember": 25,
                "LateNovember": 24,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P012",
            "CountryId": "C01",
            "Name": "Jackfruit",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}jackfruit.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Relieves Constipation", "Helps in Ulcers", "Strengthens Bones"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 6,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P013",
            "CountryId": "C01",
            "Name": "Kiwi",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}kiwi.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P014",
            "CountryId": "C01",
            "Name": "Lychee",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}lychee.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 8,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 13,
                "LateJuly": 14,
                "EarlyAugust": 15,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P015",
            "CountryId": "C01",
            "Name": "Mango",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}mango.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 8,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 13,
                "LateJuly": 14,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P016",
            "CountryId": "C01",
            "Name": "Orange",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}oranges.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 23,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P017",
            "CountryId": "C01",
            "Name": "Papaya",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}papaya.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 15,
                "LateAugust": 16,
                "EarlySeptember": 17,
                "LateSeptember": 18,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 22,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P018",
            "CountryId": "C01",
            "Name": "Peach",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}peach.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P019",
            "CountryId": "C01",
            "Name": "Pear",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pear.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 13,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P020",
            "CountryId": "C01",
            "Name": "Pineapple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pineapple.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 13,
                "LateJuly": 14,
                "EarlyAugust": 15,
                "LateAugust": 16,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P021",
            "CountryId": "C01",
            "Name": "Pomegranate",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pomegranate.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 7,
                "LateApril": 8,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P022",
            "CountryId": "C01",
            "Name": "Watermelon",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}watermelon.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 8,
                "EarlyMay": 9,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P023",
            "CountryId": "C01",
            "Name": "Spinach",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}spinach.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 19,
                "LateSeptember": 20,
                "EarlyOctober": 21,
                "LateOctober": 20,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P024",
            "CountryId": "C01",
            "Name": "Cauliflower",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cauliflower.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 0,
                "LateJanuary": 0,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 17,
                "LateAugust": 18,
                "EarlySeptember": 19,
                "LateSeptember": 20,
                "EarlyOctober": 21,
                "LateOctober": 20,
                "EarlyNovember": 21,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P025",
            "CountryId": "C01",
            "Name": "Bitter Gourd",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}bittergaurd.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P026",
            "CountryId": "C01",
            "Name": "Snake Gourd",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}snakegourd.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 5,
                "LateMarch": 6,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 0
            }
        },
        {
            "ProductId": "P028",
            "CountryId": "C01",
            "Name": "Pumpkin",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}pumpkin.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 13,
                "LateJuly": 14,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P029",
            "CountryId": "C01",
            "Name": "Brinjal",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}brinjal.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 0,
                "LateFebruary": 0,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 9,
                "LateMay": 10,
                "EarlyJune": 11,
                "LateJune": 12,
                "EarlyJuly": 0,
                "LateJuly": 0,
                "EarlyAugust": 0,
                "LateAugust": 0,
                "EarlySeptember": 0,
                "LateSeptember": 0,
                "EarlyOctober": 0,
                "LateOctober": 0,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 24
            }
        },
        {
            "ProductId": "P030",
            "CountryId": "C01",
            "Name": "Cabbage",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cabbage.jpg`,
            "Nutrients": [10],
            "Health": {
                "Good": ["Heart", "Digestion"],
                "Bad": {
                    "diseaseId": ["D001"]
                }
            },
            "Seasons": {
                "EarlyJanuary": 1,
                "LateJanuary": 2,
                "EarlyFebruary": 3,
                "LateFebruary": 4,
                "EarlyMarch": 0,
                "LateMarch": 0,
                "EarlyApril": 0,
                "LateApril": 0,
                "EarlyMay": 0,
                "LateMay": 0,
                "EarlyJune": 0,
                "LateJune": 0,
                "EarlyJuly": 13,
                "LateJuly": 14,
                "EarlyAugust": 15,
                "LateAugust": 16,
                "EarlySeptember": 17,
                "LateSeptember": 18,
                "EarlyOctober": 19,
                "LateOctober": 20,
                "EarlyNovember": 0,
                "LateNovember": 0,
                "EarlyDecember": 0,
                "LateDecember": 24
            }
        }
    ];

    let productData = data;
    if (seasonId > 0) {
        productData = filterObjectsBySeasonValue(seasonId, productData);
    }
    const objectsForPage = productData.slice(startIndex, endIndex);

    const result = {
        data: objectsForPage,
        totalPages: Math.ceil(data.length / pageSize),
        total: productData ? productData.length : 0
    };

    return result;
};

function filterObjectsBySeasonValue(seasonId, data) {
    return data.filter(obj => {
        for (const season in obj.Seasons) {
            if (obj.Seasons[season] === seasonId) {
                return obj;
            }
        }
    });
}


module.exports = {
    getProductData,
};
