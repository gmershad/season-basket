const getProductDetail = (productId, imageUrl) => {
    const data = [
        {
            "ProductId": "P001",
            "CountryId": "C01",
            "Name": "Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apple.jpg`,
            "Description": "Apples are crisp and refreshing fruits known for their natural sweetness and health benefits. They are rich in dietary fiber, vitamin C, and antioxidants, making them great for digestive health, immune support, and heart health. With low calories and a satisfying crunch, apples are a nutritious and convenient snack choice enjoyed worldwide.",
            "Nutrients": "Calories: 52, Carbs: 14g, Fat: 0.2g, Protein: 0.3g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Heart Health", "Digestive Health", "Weight Management", "Blood Sugar Control", "Antioxidant Protection"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Apple allergies are rare, Oral Allergy Syndrome (OAS) may cause mouth and throat itching"
        },
        {
            "ProductId": "P002",
            "CountryId": "C01",
            "Name": "Apricot",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apricot.jpg`,
            "Description": "Apricots are sweet and nutritious fruits known for their vibrant orange color and delightful flavor. They are rich in vitamins, particularly vitamin A and vitamin C, along with dietary fiber and antioxidants. Apricots support healthy skin, eye health, and overall well-being.",
            "Nutrients": "Calories: 48, Carbs: 11g, Fat: 0.4g, Protein: 1.4g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Skin Health", "Eye Health", "Rich in Vitamin A", "Antioxidant-Rich", "Immune Support"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Apricot allergies are rare but possible. Consult a healthcare professional if you experience adverse reactions."
        },
        {
            "ProductId": "P003",
            "CountryId": "C01",
            "Name": "Avocado",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}avacado.jpg`,
            "Description": "Avocados are creamy and nutritious fruits known for their unique texture and health benefits. They are rich in healthy monounsaturated fats, fiber, and various vitamins and minerals. Avocados promote heart health, support skin and eye health, and are a versatile ingredient for a wide range of dishes.",
            "Nutrients": "Calories: 160, Carbs: 9g, Fat: 14g, Protein: 2g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Heart Health", "Skin Health", "Eye Health", "High in Healthy Fats", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Avocado allergies are rare but can cause oral itching or swelling in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P004",
            "CountryId": "C01",
            "Name": "Barberry",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}barberry.jpg`,
            "Description": "Barberries are small, tart, and vibrant red berries known for their unique flavor and potential health benefits. They are a good source of vitamin C, antioxidants, and dietary fiber. Barberries support immune health, offer antioxidant protection, and can be used in various culinary dishes.",
            "Nutrients": "Calories: 43, Carbs: 10g, Fat: 0g, Protein: 1g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Antioxidant-Rich", "Dietary Fiber Source", "Potential for Heart Health"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Barberry allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P005",
            "CountryId": "C01",
            "Name": "Black Currant",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}black_currant.jpg`,
            "Description": "Black currants are small, dark purple to black berries known for their intense flavor and impressive nutritional profile. They are rich in vitamin C, antioxidants, and dietary fiber. Black currants support immune health, offer antioxidant protection, and can be used in various culinary creations.",
            "Nutrients": "Calories: 63, Carbs: 15g, Fat: 0.4g, Protein: 1.6g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Antioxidant-Rich", "Dietary Fiber Source", "Rich in Vitamin C", "Potential for Heart Health"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Black currant allergies are rare but possible. Consult a healthcare professional if you experience adverse reactions."
        },
        {
            "ProductId": "P006",
            "CountryId": "C01",
            "Name": "Blackberries",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}blackberries.jpg`,
            "Description": "Blackberries are dark, juicy berries known for their sweet-tart flavor and numerous health benefits. They are rich in dietary fiber, vitamin C, and antioxidants. Blackberries promote digestive health, boost the immune system, and support heart health.",
            "Nutrients": "Calories: 43, Carbs: 9g, Fat: 0.5g, Protein: 2g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Immune Support", "Heart-Healthy", "Antioxidant-Rich", "High in Dietary Fiber"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Blackberry allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P007",
            "CountryId": "C01",
            "Name": "Blueberries",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}blueberry.jpg`,
            "Description": "Blueberries are small, sweet, and nutrition-packed berries known for their delightful taste and numerous health benefits. They are rich in dietary fiber, vitamin C, and antioxidants. Blueberries support digestive health, boost the immune system, and provide antioxidant protection.",
            "Nutrients": "Calories: 43, Carbs: 9.7g, Fat: 0.4g, Protein: 0.7g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Immune Support", "Antioxidant-Rich", "Heart-Healthy", "High in Dietary Fiber"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Blueberry allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P008",
            "CountryId": "C01",
            "Name": "Cucumber",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cucumber.jpg`,
            "Description": "Cucumbers are crisp and hydrating vegetables known for their refreshing taste and potential health benefits. They are low in calories, high in water content, and provide vitamins and minerals. Cucumbers support hydration, aid in digestion, and can be a healthy addition to salads and snacks.",
            "Nutrients": "Calories: 16, Carbs: 3.6g, Fat: 0.2g, Protein: 0.7g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Hydration", "Low in Calories", "Digestive Health", "Vitamin K Source", "Antioxidants"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Cucumber allergies are rare but possible. Consult a healthcare professional if you experience adverse reactions."
        },
        {
            "ProductId": "P009",
            "CountryId": "C01",
            "Name": "Custard Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}custard_apple.jpg`,
            "Description": "Custard apples, also known as sugar apples or sweetsops, are sweet and creamy fruits with a unique taste. They are a good source of dietary fiber, vitamin C, and various minerals. Custard apples support digestive health, provide immune support, and offer a delightful, naturally sweet flavor.",
            "Nutrients": "Calories: 101, Carbs: 25g, Fat: 0.6g, Protein: 1.6g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Immune Support", "Rich in Dietary Fiber", "Antioxidants", "Natural Sweetness"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Custard apple allergies are rare but possible. Consult a healthcare professional if you experience adverse reactions."
        },
        {
            "ProductId": "P010",
            "CountryId": "C01",
            "Name": "Grapes",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}grapes.jpg`,
            "Description": "Grapes are juicy and flavorful fruits known for their versatility and potential health benefits. They come in various colors, including red, green, and black, and are rich in antioxidants, vitamins, and minerals. Grapes support heart health, provide antioxidant protection, and make for a convenient and tasty snack.",
            "Nutrients": "Calories: 69, Carbs: 18g, Fat: 0.2g, Protein: 0.7g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Heart Health", "Antioxidant-Rich", "Vitamin C Source", "High in Dietary Fiber", "Natural Sweetness"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Grape allergies are rare but possible. Consult a healthcare professional if you experience adverse reactions."
        },
        {
            "ProductId": "P011",
            "CountryId": "C01",
            "Name": "Guava",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}guava.jpg`,
            "Description": "Guavas are tropical fruits celebrated for their unique flavor, vibrant color, and exceptional nutritional value. They are rich in vitamin C, dietary fiber, and antioxidants. Guavas support immune health, aid in digestion, and provide a delicious, naturally sweet taste.",
            "Nutrients": "Calories: 68, Carbs: 14g, Fat: 1g, Protein: 2.6g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Antioxidant-Rich", "Fiber-Rich", "Vitamin C Source", "Natural Sweetness"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Guava allergies are rare but possible. Consult a healthcare professional if you experience adverse reactions."
        },
        {
            "ProductId": "P012",
            "CountryId": "C01",
            "Name": "Jackfruit",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}jackfruit.jpg`,
            "Description": "Jackfruit is a tropical fruit known for its large size and unique, sweet flavor. It is a rich source of dietary fiber, vitamins, and minerals. Jackfruit supports digestive health, provides immune support, and offers a versatile ingredient for both savory and sweet dishes.",
            "Nutrients": "Calories: 95, Carbs: 24g, Fat: 0.5g, Protein: 1.5g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Immune Support", "Rich in Dietary Fiber", "Antioxidants", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Jackfruit allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P013",
            "CountryId": "C01",
            "Name": "Kiwi",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}kiwi.jpg`,
            "Description": "Kiwis are small, green fruits with a tangy-sweet flavor and a wealth of nutrients. They are packed with vitamin C, vitamin K, dietary fiber, and antioxidants. Kiwis support immune health, aid in digestion, and contribute to overall well-being.",
            "Nutrients": "Calories: 61, Carbs: 15g, Fat: 0.5g, Protein: 1.1g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Antioxidant-Rich", "High in Vitamin C", "Rich in Vitamin K", "Digestive Health"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Kiwifruit allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P014",
            "CountryId": "C01",
            "Name": "Lychee",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}lychee.jpg`,
            "Description": "Lychees are small, sweet, and tropical fruits known for their fragrant aroma and juicy flesh. They are a good source of vitamin C, dietary fiber, and antioxidants. Lychees support immune health, offer antioxidant protection, and provide a delightful, naturally sweet taste.",
            "Nutrients": "Calories: 66, Carbs: 16.5g, Fat: 0.4g, Protein: 0.8g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Antioxidant-Rich", "Fiber Content", "Low in Calories", "Natural Sweetness"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Lychee allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P015",
            "CountryId": "C01",
            "Name": "Mango",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}mango.jpg`,
            "Description": "Mangoes are tropical fruits renowned for their sweet and juicy flesh. They are high in vitamin C, vitamin A (beta-carotene), dietary fiber, and antioxidants. Mangoes support immune health, promote skin and eye health, and offer a naturally delicious flavor.",
            "Nutrients": "Calories: 60, Carbs: 15g, Fat: 0.4g, Protein: 0.8g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Antioxidant-Rich", "High in Vitamin C", "Rich in Vitamin A (Beta-Carotene)", "Digestive Health"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Mango allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P016",
            "CountryId": "C01",
            "Name": "Orange",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}oranges.jpg`,
            "Description": "Oranges are vibrant and juicy citrus fruits known for their sweet and tangy flavor. They are rich in vitamin C, dietary fiber, and antioxidants. Oranges support immune health, promote skin health, and provide a burst of refreshing citrus taste.",
            "Nutrients": "Calories: 43, Carbs: 8.2g, Fat: 0.2g, Protein: 1g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Skin Health", "High in Vitamin C", "Dietary Fiber Source", "Refreshing Flavor"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Orange allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P017",
            "CountryId": "C01",
            "Name": "Papaya",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}papaya.jpg`,
            "Description": "Papayas are tropical fruits known for their vibrant orange color, sweet flavor, and numerous health benefits. They are rich in vitamin C, vitamin A (beta-carotene), dietary fiber, and enzymes like papain. Papayas support digestive health, promote skin health, and provide a refreshing tropical taste.",
            "Nutrients": "Calories: 43, Carbs: 11g, Fat: 0.4g, Protein: 0.5g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Skin Health", "High in Vitamin C", "Rich in Vitamin A (Beta-Carotene)", "Enzyme Papain"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Papaya allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P018",
            "CountryId": "C01",
            "Name": "Peach",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}peach.jpg`,
            "Description": "Peaches are juicy and fragrant fruits known for their sweet and refreshing taste. They are rich in vitamins like vitamin C and vitamin A, dietary fiber, and antioxidants. Peaches support immune health, promote skin health, and provide a delightful summer flavor.",
            "Nutrients": "Calories: 39, Carbs: 9.5g, Fat: 0.3g, Protein: 0.9g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Immune Support", "Skin Health", "High in Vitamin C", "Rich in Vitamin A", "Refreshing Flavor"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Peach allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P019",
            "CountryId": "C01",
            "Name": "Pear",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pear.jpg`,
            "Description": "Pears are sweet and juicy fruits known for their smooth texture and versatile taste. They are rich in dietary fiber, vitamins like vitamin C and vitamin K, and antioxidants. Pears support digestive health, promote bone health, and offer a delicious and nutritious snacking option.",
            "Nutrients": "Calories: 57, Carbs: 15g, Fat: 0.1g, Protein: 0.4g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Bone Health (Vitamin K)", "High in Dietary Fiber", "Vitamin C Source", "Versatile Taste"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Pear allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P020",
            "CountryId": "C01",
            "Name": "Pineapple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pineapple.jpg`,
            "Description": "Pineapples are tropical fruits known for their sweet and tangy flavor, as well as their vibrant yellow flesh. They are rich in vitamin C, dietary fiber, and the enzyme bromelain. Pineapples support digestion, promote immune health, and offer a delightful tropical taste.",
            "Nutrients": "Calories: 50, Carbs: 13g, Fat: 0.1g, Protein: 0.5g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Immune Support", "Rich in Vitamin C", "Dietary Fiber Source", "Enzyme Bromelain"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Pineapple allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P021",
            "CountryId": "C01",
            "Name": "Pomegranate",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}pomegranate.jpg`,
            "Description": "Pomegranates are vibrant and nutrient-packed fruits known for their sweet-tart taste and countless health benefits. They are rich in antioxidants, vitamin C, and dietary fiber. Pomegranates support heart health, promote antioxidant protection, and provide a burst of juicy flavor.",
            "Nutrients": "Calories: 83, Carbs: 18.7g, Fat: 1.2g, Protein: 1.7g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Heart Health", "Antioxidant-Rich", "High in Vitamin C", "Dietary Fiber Source", "Delightful Flavor"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Pomegranate allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P022",
            "CountryId": "C01",
            "Name": "Watermelon",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}watermelon.jpg`,
            "Description": "Watermelons are hydrating and refreshing fruits known for their juicy, sweet flesh and vibrant red or pink color. They are rich in water content, vitamins like vitamin C and vitamin A, and antioxidants. Watermelons support hydration, promote skin health, and offer a cooling, summery taste.",
            "Nutrients": "Calories: 30, Carbs: 7.6g, Fat: 0.2g, Protein: 0.6g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Hydration", "Skin Health", "High in Vitamin C", "Rich in Vitamin A", "Refreshing Flavor"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Watermelon allergies are extremely rare. If you experience adverse reactions, consult a healthcare professional."
        },
        {
            "ProductId": "P023",
            "CountryId": "C01",
            "Name": "Spinach",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}spinach.jpg`,
            "Description": "Spinach is a leafy green vegetable known for its rich nutritional profile and versatility in cooking. It is packed with vitamins like vitamin K, vitamin A, and folate, as well as minerals and antioxidants. Spinach supports bone health, promotes vision, and is an excellent addition to salads, soups, and various dishes.",
            "Nutrients": "Calories: 23, Carbs: 3.6g, Fat: 0.4g, Protein: 2.9g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Bone Health", "Vision Support", "High in Vitamin K", "Rich in Vitamin A", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Spinach allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P024",
            "CountryId": "C01",
            "Name": "Cauliflower",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cauliflower.jpg`,
            "Description": "Cauliflower is a versatile and nutritious vegetable known for its mild flavor and versatility in various culinary dishes. It is rich in vitamins like vitamin C and vitamin K, dietary fiber, and antioxidants. Cauliflower supports bone health, promotes immune function, and can be used in diverse cooking styles.",
            "Nutrients": "Calories: 25, Carbs: 5g, Fat: 0.3g, Protein: 2g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Bone Health", "Immune Support", "High in Vitamin C", "Rich in Vitamin K", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Cauliflower allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P025",
            "CountryId": "C01",
            "Name": "Bitter Gourd",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}bittergaurd.jpg`,
            "Description": "Bitter gourd, also known as bitter melon, is a unique and nutritious vegetable known for its distinct bitter taste and potential health benefits. It is a good source of vitamins like vitamin C and vitamin A, dietary fiber, and antioxidants. Bitter gourd supports blood sugar management, aids digestion, and can be used in various culinary dishes.",
            "Nutrients": "Calories: 17, Carbs: 3.7g, Fat: 0.2g, Protein: 1g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Blood Sugar Management", "Digestive Health", "High in Vitamin C", "Rich in Vitamin A", "Unique Flavor"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Bitter gourd allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P026",
            "CountryId": "C01",
            "Name": "Snake Gourd",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}snakegourd.jpg`,
            "Description": "Snake gourd is a long, slender vegetable known for its mild flavor and numerous potential health benefits. It is a good source of vitamins like vitamin C and vitamin A, dietary fiber, and minerals. Snake gourd supports digestion, aids in weight management, and is a versatile ingredient in various culinary preparations.",
            "Nutrients": "Calories: 20, Carbs: 4.6g, Fat: 0.2g, Protein: 0.6g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Weight Management", "High in Vitamin C", "Rich in Vitamin A", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Snake gourd allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P027",
            "CountryId": "C01",
            "Name": "Pumpkin",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}pumpkin.jpg`,
            "Description": "Pumpkin is a versatile and nutritious vegetable known for its sweet and earthy flavor. It is rich in vitamins like vitamin A and vitamin C, dietary fiber, and antioxidants. Pumpkin supports eye health, boosts immune function, and is a key ingredient in various culinary dishes, including soups and pies.",
            "Nutrients": "Calories: 26, Carbs: 6.5g, Fat: 0.1g, Protein: 1g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Eye Health", "Immune Support", "High in Vitamin A", "Rich in Vitamin C", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Pumpkin allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P028",
            "CountryId": "C01",
            "Name": "Brinjal (Eggplant)",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}brinjal.jpg`,
            "Description": "Brinjal, also known as eggplant or aubergine, is a versatile and nutrient-rich vegetable known for its deep purple color and mild, earthy flavor. It is a good source of vitamins like vitamin C and vitamin K, dietary fiber, and antioxidants. Brinjal supports heart health, aids digestion, and can be used in various culinary preparations.",
            "Nutrients": "Calories: 25, Carbs: 6g, Fat: 0.2g, Protein: 1g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Heart Health", "Digestive Health", "High in Vitamin C", "Rich in Vitamin K", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Brinjal allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        },
        {
            "ProductId": "P029",
            "CountryId": "C01",
            "Name": "Cabbage",
            "Type": "Vegetable",
            "ImgUrl": `${imageUrl}cabbage.jpg`,
            "Description": "Cabbage is a versatile and nutritious vegetable known for its crisp texture and mild, slightly sweet flavor. It is a good source of vitamins like vitamin C and vitamin K, dietary fiber, and antioxidants. Cabbage supports digestive health, aids in weight management, and can be used in various culinary dishes.",
            "Nutrients": "Calories: 25, Carbs: 5.8g, Fat: 0.1g, Protein: 1.3g.",
            "Serving": "100g",
            "Health": {
                "Benefits": ["Digestive Health", "Weight Management", "High in Vitamin C", "Rich in Vitamin K", "Versatile Cooking"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "Cabbage allergies are rare but can cause adverse reactions in some individuals. Be cautious if you suspect an allergy."
        }

    ];

    const product = data.find((item) => item.ProductId === productId);
    return product || null;
};



module.exports = {
    getProductDetail,
};
