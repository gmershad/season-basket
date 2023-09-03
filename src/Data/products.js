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
                "Good": ["Fiber-Rich", "Vitamin C Source", "Low in Calories", "Antioxidants", "Heart-Healthy", "Digestive Health", "Weight Management", "Bone Health (Boron)", "Natural Sweetness", "Hydration", "Skin Health"],
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
                "Good": ["Rich in Vitamin A", "High in Vitamin C", "Fiber-Rich", "Antioxidants", "Heart-Healthy", "Digestive Health", "Bone Health (Vitamin K)", "Low in Calories", "Natural Sweetness", "Skin Health", "Eye Health"],
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
                "Good": ["Healthy Fats (Monounsaturated)", "Rich in Fiber", "Vitamin K Source", "Potassium-Rich", "Antioxidants (Vitamin E, Lutein)", "Heart-Healthy", "Skin Health", "Eye Health", "Anti-Inflammatory", "Digestive Health", "Weight Management"],
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
                "Good": ["Rich in Vitamin C", "Antioxidant-Rich", "Dietary Fiber Source", "Immune Support", "Anti-Inflammatory", "Heart-Healthy", "Digestive Health", "Mineral Content (Iron, Potassium)", "Low in Calories", "Eye Health", "Natural Tartness"],
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
                "Good": ["Rich in Vitamin C", "High in Dietary Fiber", "Antioxidant-Rich (Anthocyanins)", "Immune Support", "Heart-Healthy", "Anti-Inflammatory", "Digestive Health", "Low in Calories", "Eye Health", "Brain Health", "Natural Sweetness"],
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
                "Good": ["Antioxidant-Rich", "High in Dietary Fiber", "Vitamin C Source", "Heart-Healthy", "Brain Health", "Anti-Inflammatory", "Digestive Health", "Low in Calories", "Skin Health", "Eye Health", "Natural Sweetness"],
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
                "Good": ["Antioxidant Powerhouse", "Rich in Vitamin C", "High in Dietary Fiber", "Heart-Healthy", "Brain Health", "Anti-Inflammatory", "Digestive Health", "Low in Calories", "Skin Health", "Eye Health", "Natural Sweetness"],
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
                "Good": ["Hydration", "Low in Calories", "Fiber-Rich", "Vitamin K Source", "Antioxidants", "Digestive Health", "Skin Health", "Blood Sugar Control", "Weight Management", "Natural Refreshment"],
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
                "Good": ["Vitamin C Source", "Rich in Dietary Fiber", "Antioxidants", "Digestive Health", "Immune Support", "Heart-Healthy", "Bone Health (Calcium)", "Low in Calories", "Natural Sweetness", "Healthy Fats (Oleic Acid)"],
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
                "Good": ["Antioxidant-Rich", "Resveratrol Content", "Vitamin C Source", "Fiber-Rich", "Heart-Healthy", "Immune Support", "Digestive Health", "Skin Health", "Eye Health", "Low in Calories", "Natural Sweetness"],
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
                "Good": ["Rich in Vitamin C", "Fiber-Rich", "Antioxidants (Vitamin A, Flavonoids)", "Digestive Health", "Immune Support", "Heart-Healthy", "Skin Health", "Eye Health", "Low in Calories", "Natural Sweetness", "Mineral Content (Potassium)"],
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
                "Good": ["Rich in Dietary Fiber", "Vitamin-Rich (C, B6)", "Mineral Content (Potassium)", "Low in Calories", "Antioxidants", "Digestive Health", "Immune Support", "Heart-Healthy", "Energy Boost", "Low in Fat", "Natural Sweetness"],
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
                "Good": ["High in Vitamin C", "Rich in Vitamin K", "Fiber-Rich", "Antioxidants (Vitamin E, Flavonoids)", "Heart-Healthy", "Digestive Health", "Immune Support", "Skin Health", "Eye Health", "Low in Calories", "Natural Sweetness"],
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
                "Good": ["Vitamin C Source", "Antioxidants (Flavonoids)", "Fiber Content", "Low in Calories", "Heart-Healthy", "Digestive Health", "Immune Support", "Skin Health", "Eye Health", "Hydration", "Natural Sweetness"],
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
                "Good": ["Rich in Vitamin C", "High in Vitamin A (Beta-Carotene)", "Antioxidants", "Fiber-Rich", "Digestive Health", "Immune Support", "Skin Health", "Eye Health", "Low in Calories", "Natural Sweetness", "Bone Health (Vitamin K)"],
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
                "Good": ["High in Vitamin C", "Rich in Fiber", "Antioxidants", "Heart-Healthy", "Immune Support", "Digestive Health", "Skin Health", "Hydration", "Low in Calories", "Natural Sweetness", "Bone Health (Calcium)"],
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
                "Good": ["Rich in Vitamin C", "High in Vitamin A (Beta-Carotene)", "Digestive Enzymes (Papain)", "Fiber-Rich", "Antioxidants", "Heart-Healthy", "Immune Support", "Skin Health", "Eye Health", "Anti-Inflammatory", "Low in Calories"],
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
                "Good": ["Vitamin C Source", "Vitamin A Content", "Fiber-Rich", "Low-Calorie", "Antioxidants", "Heart-Healthy", "Digestive Health", "Skin Health", "Hydration", "Natural Sweetness", "Bone Health (Vitamin K)"],
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
                "Good": ["Fiber-Rich", "Vitamin C Source", "Mineral Content (Potassium)", "Low-Calorie", "Digestive Health", "Heart-Healthy", "Antioxidants", "Immune Support", "Hydration", "Natural Sweetness", "Bone Health (Vitamin K)"],
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
                "Good": ["Vitamin C Boost", "Digestive Enzymes (Bromelain)", "Antioxidants", "Anti-Inflammatory", "Immune Support", "Bone Health (Manganese)", "Eye Health (Vitamin A)", "Hydration", "Low in Calories", "Fiber-Rich", "Delicious Natural Sweetness"],
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
                "Good": ["Rich in Antioxidants", "High in Vitamin C", "Heart-Healthy", "Anti-Inflammatory", "Digestive Health", "Cancer Prevention", "Blood Pressure Regulation", "Skin Health", "Joint Health", "Immune Support", "Natural Sweetness"],
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
                "Good": ["Hydration", "Low-Calorie", "High Water Content", "Vitamin-Rich (A, C)", "Antioxidants", "Heart-Healthy", "Digestive Aid", "Skin Health", "Eye Health", "Anti-Inflammatory", "Natural Electrolytes"],
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
                "Good": ["Nutrient-Dense", "Rich in Iron", "High in Vitamin K", "Antioxidant-Rich", "Folate Source", "Heart-Healthy", "Bone Health", "Digestive Health", "Anti-Inflammatory", "Eye Health", "Weight Management", "Versatile Cooking"],
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
                "Good": ["Low-Calorie", "Fiber-Rich", "Vitamin-Packed (C, K, B6)", "Mineral-Rich (Potassium, Magnesium)", "Antioxidants", "Digestive Health", "Immune Support", "Bone Health", "Anti-Inflammatory", "Cancer Prevention", "Heart-Healthy", "Versatile Cooking"],
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
                "Good": ["Low-Calorie", "Rich in Dietary Fiber", "Vitamin-Rich (C, A)", "Mineral-Packed (Iron, Potassium)", "Antioxidants", "Blood Sugar Control", "Digestive Health", "Heart-Healthy", "Immune Support", "Skin Health", "Weight Management", "Detoxification"],
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
                "Good": ["Low-Calorie", "Fiber-Rich", "Vitamin-Rich (A, C)", "Mineral-Packed (Iron, Calcium)", "Antioxidants", "Digestive Health", "Weight Management", "Blood Sugar Control", "Immune Support", "Hydration", "Detoxification"],
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
                "Good": ["Fiber-Rich", "Vitamin-Packed (A, C, E)", "Mineral-Rich (Potassium, Magnesium)", "Low-Calorie", "Antioxidants", "Heart-Healthy", "Digestive Health", "Immune Support", "Eye Health", "Skin Health", "Weight Management", "Versatile Cooking"],
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
                "Good": ["Fiber-Rich", "Antioxidants", "Heart-Healthy", "Weight-Friendly", "Blood Sugar Control", "Digestive Health", "Cancer Prevention", "Eye Health", "Versatile Ingredient"],
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
                "Good": ["Heart Health", "Digestive Health", "Rich in Vitamins (C, K, B6)",
                    "Antioxidants", "Low in Calories", "Cancer Risk Reduction"
                ],
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

    if (startIndex < 0) {
        const result = {
            data: data,
            totalPages: -1,
            total: -1
        };
        return result;
    }

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

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function getProductsBySearch(value, imageUrl) {

    const data = [
        {
            "ProductId": "P001",
            "Name": "Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apple.jpg`,
        },
        {
            "ProductId": "P002",
            "Name": "Apricot",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apricot.jpg`,
        },
        {
            "ProductId": "P003",
            "Name": "Avacado",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}avacado.jpg`,
        },
        {
            "ProductId": "P004",
            "Name": "Barberry",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}barberry.jpg`
        },
        {
            "ProductId": "P005",
            "Name": "Black Currant",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}black_currant.jpg`,
        },
        {
            "ProductId": "P006",
            "Name": "Black Berries",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}blackberries.jpg`,
        },
        {
            "ProductId": "P007",
            "Name": "Blue Berry",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}blueberry.jpg`,
        },
        {
            "ProductId": "P008",
            "Name": "Cucumber",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cucumber.jpg`,
        },
        {
            "ProductId": "P009",
            "Name": "Custard Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}custard_apple.jpg`,
        },
        {
            "ProductId": "P010",
            "Name": "Grapes",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}grapes.jpg`
        },
        {
            "ProductId": "P011",
            "Name": "Guava",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}guava.jpg`,
        },
        {
            "ProductId": "P012",
            "CountryId": "C01",
            "Name": "Jackfruit",
            "ImgUrl": `${imageUrl}jackfruit.jpg`
        },
        {
            "ProductId": "P013",
            "Name": "Kiwi",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}kiwi.jpg`,
        },
        {
            "ProductId": "P014",
            "Name": "Lychee",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}lychee.jpg`,
        },
        {
            "ProductId": "P015",
            "Name": "Mango",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}mango.jpg`,
        },
        {
            "ProductId": "P016",
            "Name": "Orange",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}oranges.jpg`,
        },
        {
            "ProductId": "P017",
            "Name": "Papaya",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}papaya.jpg`,
        },
        {
            "ProductId": "P018",
            "Name": "Peach",
            "Type": "Fruit",
        },
        {
            "ProductId": "P019",
            "Name": "Pear",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pear.jpg`
        },
        {
            "ProductId": "P020",
            "Name": "Pineapple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pineapple.jpg`
        },
        {
            "ProductId": "P022",
            "Name": "Watermelon",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}watermelon.jpg`,
        },
        {
            "ProductId": "P023",
            "Name": "Spinach",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}spinach.jpg`,
        },
        {
            "ProductId": "P024",
            "Name": "Cauliflower",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cauliflower.jpg`
        },
        {
            "ProductId": "P025",
            "Name": "Bitter Gourd",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}bittergaurd.jpg`,
        },
        {
            "ProductId": "P026",
            "Name": "Snake Gourd",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}snakegourd.jpg`
        },
        {
            "ProductId": "P028",
            "Name": "Pumpkin",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}pumpkin.jpg`,
        },
        {
            "ProductId": "P029",
            "Name": "Brinjal",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}brinjal.jpg`,
        },
        {
            "ProductId": "P030",
            "Name": "Cabbage",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cabbage.jpg`,
        }
    ];

    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    return data.filter(language => regex.test(language.Name));
}

async function getProductById(productId, imageUrl) {
    const data = getProductData(imageUrl, -1, -1, -1, -1);
    const product = data.data.find((item) => item.ProductId === productId);
    const result = {
        data: product,
        totalPages: 1,
        total: 1
    };
    return result;
}


module.exports = {
    getProductData,
    getProductsBySearch,
    getProductById
};
